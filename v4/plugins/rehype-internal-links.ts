import type { Root } from "hast"
import fs from "node:fs"
import path from "node:path"
import type { Plugin } from "unified"
import { getSlug } from "./utils/slug.utils"

// Base path prefix applied to generated URLs. Read once at module load so
// worker threads (which may not inherit env reliably on every Node version)
// still see the correct value as long as they re-evaluate the module.
// Falls back to an empty string when unset (root-deployed site).
const BASE_PATH = (process.env.ASTRO_BASE_PATH ?? "").replace(/\/$/, "")

/**
 * Rehype plugin that transforms markdown file path links to site URLs.
 *
 * Also normalises already-absolute links under /articles/ so they get the
 * deploy base path prefix. This handles content that hand-writes
 * `/articles/<slug>` as an absolute URL (bypassing the .md transform).
 */
const rehypeInternalLinks: Plugin<[], Root> = () => {
  return (tree, file) => {
    const sourceFilePath = file.path
    if (!sourceFilePath) return

    const visit = (node: any) => {
      if (node.type === "element" && node.tagName === "a") {
        const href = node.properties?.href as string | undefined
        if (href) {
          let next: string | null = null
          if (isMarkdownLink(href)) {
            next = transformMarkdownLink(href, sourceFilePath)
          } else if (isAbsoluteArticleLink(href)) {
            next = applyBase(href)
          }
          if (next !== null) node.properties.href = next
        }
      }
      if (node.children) {
        node.children.forEach(visit)
      }
    }

    visit(tree)
  }
}

function isMarkdownLink(href: string): boolean {
  if (href.startsWith("http") || href.startsWith("#") || href.includes("://")) {
    return false
  }
  return href.endsWith(".md") || href.includes(".md#")
}

// Already-absolute /articles/... links (no base prefix applied).
function isAbsoluteArticleLink(href: string): boolean {
  if (href.startsWith("http") || href.includes("://")) return false
  if (!href.startsWith("/articles/") && href !== "/articles") return false
  if (!BASE_PATH) return false
  if (href.startsWith(BASE_PATH + "/")) return false
  return true
}

function applyBase(href: string): string {
  return `${BASE_PATH}${href}`
}

function transformMarkdownLink(href: string, sourceFilePath: string): string | null {
  const [linkPath, anchor] = href.split("#")
  if (!linkPath) return null

  const sourceDir = path.dirname(sourceFilePath)
  const absolutePath = path.resolve(sourceDir, linkPath)

  if (!fs.existsSync(absolutePath)) {
    console.warn(`[rehype-internal-links] Target not found: ${absolutePath} (from ${sourceFilePath})`)
    return null
  }

  const articlesDir = path.resolve("./content/articles")
  if (absolutePath.startsWith(articlesDir + path.sep)) {
    const slug = getSlug(absolutePath)
    const url = `${BASE_PATH}/articles/${slug}`
    return anchor ? `${url}#${anchor}` : url
  }

  console.warn(`[rehype-internal-links] Link target not in content directories: ${absolutePath}`)
  return null
}

export default rehypeInternalLinks
