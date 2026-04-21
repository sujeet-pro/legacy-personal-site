#!/usr/bin/env node
// Static server that mirrors the GitHub Pages deploy path:
//   docs/*  →  http://localhost:<PORT>/legacy-personal-site/*
// Use: `node server.mjs`  (or `npm start`).  PORT env var overrides the default.

import { createServer } from "node:http"
import { createReadStream } from "node:fs"
import { stat } from "node:fs/promises"
import { dirname, extname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, "..", "docs")
const base = "/legacy-personal-site"
const port = Number(process.env.PORT ?? 8787)

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".cjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".mp4": "video/mp4",
  ".wasm": "application/wasm",
  ".pdf": "application/pdf",
}

function mimeFor(path) {
  return MIME[extname(path).toLowerCase()] ?? "application/octet-stream"
}

function send(res, status, headers, body) {
  res.writeHead(status, headers)
  res.end(body)
}

async function resolveFile(urlPath) {
  // Strip the base prefix and any query/hash.
  let rel = urlPath.split("?")[0].split("#")[0]
  if (!rel.startsWith(base)) return null
  rel = rel.slice(base.length)
  if (rel.startsWith("/")) rel = rel.slice(1)

  try {
    rel = decodeURIComponent(rel)
  } catch {
    return null
  }

  let fsPath = resolve(root, rel)
  // Path-traversal guard: must stay within root.
  if (fsPath !== root && !fsPath.startsWith(root + "/")) return null

  async function tryStat(p) {
    try {
      return await stat(p)
    } catch {
      return null
    }
  }

  const s = await tryStat(fsPath)
  if (s?.isFile()) return fsPath
  if (s?.isDirectory()) {
    const indexPath = join(fsPath, "index.html")
    const is = await tryStat(indexPath)
    if (is?.isFile()) return indexPath
    // Directory exists but has no index.html — fall through to sibling `.html`.
  }

  // Fall back to `<path>.html` — matches Astro's `trailingSlash: "never"` output.
  const htmlPath = fsPath.replace(/\/$/, "") + ".html"
  const hs = await tryStat(htmlPath)
  if (hs?.isFile()) return htmlPath

  return null
}

const server = createServer(async (req, res) => {
  const url = req.url ?? "/"

  // Root → redirect to the base path so the URL matches the deployed layout.
  if (url === "/" || url === "") {
    return send(res, 302, { Location: base + "/" }, "")
  }

  // /legacy-personal-site  → add trailing slash so relative assets resolve.
  if (url === base) {
    return send(res, 302, { Location: base + "/" }, "")
  }

  if (!url.startsWith(base)) {
    return send(
      res,
      404,
      { "content-type": "text/plain; charset=utf-8" },
      `Not found: ${url}\nBase path is ${base}/ — try http://localhost:${port}${base}/`,
    )
  }

  const filePath = await resolveFile(url)
  if (!filePath) {
    return send(
      res,
      404,
      { "content-type": "text/plain; charset=utf-8" },
      `Not found: ${url}`,
    )
  }

  res.writeHead(200, {
    "content-type": mimeFor(filePath),
    "cache-control": "no-store",
  })
  createReadStream(filePath).pipe(res)
})

server.listen(port, () => {
  console.log(`preview → http://localhost:${port}${base}/`)
  console.log(`serving ${root}`)
})
