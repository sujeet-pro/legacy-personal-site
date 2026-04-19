import type { MarkdownHeading } from "astro"

type NestedHeading = MarkdownHeading & {
  children: MarkdownHeading[]
}

export function convertToNestedList(headingList: MarkdownHeading[]): NestedHeading[] {
  const headings: NestedHeading[] = []
  for (const item of headingList) {
    if (item.depth === 2) {
      headings.push({
        ...item,
        children: [],
      })
    } else if (item.depth === 3) {
      const lastH2 = headings.pop()
      if (lastH2) {
        lastH2.children.push(item)
        headings.push(lastH2)
      }
    }
  }

  return headings
}
