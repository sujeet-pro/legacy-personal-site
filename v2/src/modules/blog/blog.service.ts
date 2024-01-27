import { getCollection, type CollectionEntry } from "astro:content"

export async function getBlogEntries(): Promise<CollectionEntry<"blog">[]> {
  const entries = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? !data.isDraft : true
  })
  entries.sort((a, b) => (a.data.publishedOn >= b.data.publishedOn ? -1 : 1))
  return entries
}

export async function getBlogEntriesForTopic(topicSlug: string): Promise<CollectionEntry<"blog">[]> {
  const entries = await getCollection("blog", ({ data }) => {
    if (topicSlug && !data.topics.some((topic) => topic.slug === topicSlug)) return false
    return import.meta.env.PROD ? !data.isDraft : true
  })
  entries.sort((a, b) => (a.data.publishedOn >= b.data.publishedOn ? -1 : 1))
  return entries
}

export async function getFeaturedBlogs(): Promise<CollectionEntry<"blog">[]> {
  const entries = await getBlogEntries()
  return entries.slice(0, 3)
}
