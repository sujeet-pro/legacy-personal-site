import getReadingTime from "reading-time"
import { toString } from "mdast-util-to-string"
import type { Root } from "mdast"

type FrontmatterData = {
  astro: {
    frontmatter: {
      minutesRead?: string // Will be auto-populated
    }
  }
}

export function remarkReadingTime() {
  return function (tree: Root, file: { data: FrontmatterData }) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    file.data.astro.frontmatter.minutesRead = readingTime.text
  }
}
