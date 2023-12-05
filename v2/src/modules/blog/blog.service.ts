import { getCollection } from "astro:content"

export async function getBlogEntries(topicSlug?: string | null | undefined) {
  const entries = await getCollection("blog", ({ data }) => {
    if (topicSlug && !data.topics.some((topic) => topic.slug === topicSlug)) return false
    return import.meta.env.PROD ? !data.isDraft : true
  })
  entries.sort((a, b) => (a.data.publishedOn >= b.data.publishedOn ? -1 : 1))
  return entries
}
