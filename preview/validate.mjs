#!/usr/bin/env node
// Validates every link in every HTML file under ../gh-pages.
//
// Rules:
//   • gh-pages/ is the deploy root and will be served at /legacy-personal-site/.
//   • An absolute link "/foo" on disk resolves to  gh-pages/foo  (the leading
//     "/legacy-personal-site/" prefix is stripped first; unprefixed absolute
//     links are flagged).
//   • A relative link resolves against the HTML file's directory.
//   • Existence is checked the same way our preview/server.mjs serves files:
//        fs path  → if file, ok
//                   else if dir, look for <dir>/index.html
//                   else try <path>.html   (Astro "trailingSlash: never" shape)
//
// Usage:  node validate.mjs                # exits non-zero on broken links
//         node validate.mjs --json         # machine-readable output
//
// Intentionally zero deps.

import { readFile, readdir, stat } from "node:fs/promises"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, "..", "gh-pages")
const basePrefix = "/legacy-personal-site"
const asJson = process.argv.includes("--json")

// ---------- file walk ----------

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) await walk(p, out)
    else out.push(p)
  }
  return out
}

// ---------- link extraction ----------

// Captures href/src/poster values from attributes (HTML-only).  Good enough
// for the archive: ignores comments is acceptable since the archive is static.
const ATTR_RE = /\b(href|src|poster|action)\s*=\s*("([^"]*)"|'([^']*)')/gi
// srcset is a comma-separated list of "URL [descriptor]".
const SRCSET_RE = /\bsrcset\s*=\s*("([^"]*)"|'([^']*)')/gi
// <meta http-equiv="refresh" content="0; url=/foo">
const META_REFRESH_RE =
  /<meta\s+[^>]*http-equiv\s*=\s*["']?refresh["']?[^>]*content\s*=\s*("([^"]*)"|'([^']*)')/gi

// Strip <pre>…</pre> and <code>…</code> regions so URL-looking strings inside
// code samples (e.g. `<script src="app.js">` rendered as documentation) don't
// register as links. Regex is coarse on purpose — archive HTML is static and
// well-formed.
function stripCodeBlocks(html) {
  return html
    .replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, "")
    .replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi, "")
}

function extractLinks(rawHtml) {
  const html = stripCodeBlocks(rawHtml)
  const out = []

  for (const m of html.matchAll(ATTR_RE)) {
    const url = m[3] ?? m[4] ?? ""
    if (url) out.push({ attr: m[1].toLowerCase(), url })
  }
  for (const m of html.matchAll(SRCSET_RE)) {
    const raw = m[2] ?? m[3] ?? ""
    for (const part of raw.split(",")) {
      const url = part.trim().split(/\s+/)[0]
      if (url) out.push({ attr: "srcset", url })
    }
  }
  for (const m of html.matchAll(META_REFRESH_RE)) {
    const content = m[2] ?? m[3] ?? ""
    const match = content.match(/url\s*=\s*(.+?)\s*$/i)
    if (match) out.push({ attr: "meta-refresh", url: match[1] })
  }

  return out
}

// ---------- link classification + resolution ----------

function isSkippable(url) {
  if (!url) return true
  const u = url.trim()
  if (u === "" || u === "#") return true
  if (u.startsWith("#")) return true
  if (u.startsWith("mailto:")) return true
  if (u.startsWith("tel:")) return true
  if (u.startsWith("javascript:")) return true
  if (u.startsWith("data:")) return true
  if (u.startsWith("blob:")) return true
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(u)) return true
  if (u.startsWith("//")) return true // protocol-relative
  return false
}

// Strip hash + query so we only resolve the path part.
function stripUrl(url) {
  let s = url
  const hash = s.indexOf("#")
  if (hash >= 0) s = s.slice(0, hash)
  const query = s.indexOf("?")
  if (query >= 0) s = s.slice(0, query)
  try {
    s = decodeURIComponent(s)
  } catch {}
  // Collapse any run of slashes → single slash (the source bug in v1/v3
  // produced `/v1//blog/...` that browsers tolerate).
  s = s.replace(/\/+/g, "/")
  return s
}

async function tryStat(p) {
  try {
    return await stat(p)
  } catch {
    return null
  }
}

// Serve-style path resolution: file | dir/index.html | <path>.html
async function resolveOnDisk(fsPath) {
  const s = await tryStat(fsPath)
  if (s?.isFile()) return fsPath
  if (s?.isDirectory()) {
    const ix = join(fsPath, "index.html")
    if ((await tryStat(ix))?.isFile()) return ix
  }
  const withHtml = fsPath.replace(/\/$/, "") + ".html"
  if ((await tryStat(withHtml))?.isFile()) return withHtml
  return null
}

// Return { ok, issue?, resolvedPath? } for a link.
async function checkLink({ htmlFile, url }) {
  if (isSkippable(url)) return { ok: true, skipped: true }

  const stripped = stripUrl(url)
  if (!stripped) return { ok: true, skipped: true }

  let fsPath
  if (stripped.startsWith("/")) {
    // Absolute path — must be under the deploy prefix.
    if (stripped === basePrefix || stripped.startsWith(basePrefix + "/")) {
      const relFromRoot = stripped.slice(basePrefix.length).replace(/^\/+/, "")
      fsPath = join(root, relFromRoot)
    } else {
      return {
        ok: false,
        issue: "unprefixed-absolute",
        detail: `absolute path does not start with ${basePrefix}/`,
      }
    }
  } else {
    // Relative — resolve against HTML file's directory.
    fsPath = resolve(dirname(htmlFile), stripped)
    // Must stay inside gh-pages.
    if (fsPath !== root && !fsPath.startsWith(root + "/")) {
      return {
        ok: false,
        issue: "escapes-root",
        detail: `resolves outside gh-pages: ${fsPath}`,
      }
    }
  }

  const found = await resolveOnDisk(fsPath)
  if (!found) {
    return { ok: false, issue: "missing-target", detail: fsPath }
  }
  return { ok: true, resolvedPath: found }
}

// ---------- main ----------

async function main() {
  const all = await walk(root)
  const htmls = all.filter((p) => p.endsWith(".html"))

  const issuesByFile = new Map()
  const counts = { files: htmls.length, links: 0, skipped: 0, ok: 0, broken: 0 }
  const issueCounts = new Map()

  for (const file of htmls) {
    const html = await readFile(file, "utf8")
    const links = extractLinks(html)
    for (const { attr, url } of links) {
      counts.links++
      const res = await checkLink({ htmlFile: file, url })
      if (res.skipped) {
        counts.skipped++
        continue
      }
      if (res.ok) {
        counts.ok++
        continue
      }
      counts.broken++
      issueCounts.set(res.issue, (issueCounts.get(res.issue) ?? 0) + 1)
      if (!issuesByFile.has(file)) issuesByFile.set(file, [])
      issuesByFile.get(file).push({ attr, url, issue: res.issue, detail: res.detail })
    }
  }

  const report = {
    root,
    counts: { ...counts, distinctBrokenFiles: issuesByFile.size },
    byIssue: Object.fromEntries(issueCounts),
    issues: Array.from(issuesByFile, ([file, list]) => ({
      file: relative(root, file),
      links: list,
    })),
  }

  if (asJson) {
    process.stdout.write(JSON.stringify(report, null, 2) + "\n")
  } else {
    print(report)
  }

  process.exit(counts.broken ? 1 : 0)
}

function print(r) {
  console.log(`root: ${r.root}`)
  console.log(
    `files: ${r.counts.files}  links: ${r.counts.links}  ok: ${r.counts.ok}  skipped: ${r.counts.skipped}  broken: ${r.counts.broken}`,
  )
  if (r.counts.broken === 0) {
    console.log("✓ all links resolve")
    return
  }
  console.log(`broken by issue:`, r.byIssue)
  console.log(`broken in ${r.counts.distinctBrokenFiles} file(s):`)
  const maxPerFile = 10
  for (const { file, links } of r.issues) {
    console.log(`\n  ${file}  (${links.length})`)
    for (const l of links.slice(0, maxPerFile)) {
      console.log(`    [${l.issue}] ${l.attr}=${JSON.stringify(l.url)}`)
    }
    if (links.length > maxPerFile) console.log(`    … ${links.length - maxPerFile} more`)
  }
}

main().catch((err) => {
  console.error("validate: failed:", err)
  process.exit(2)
})
