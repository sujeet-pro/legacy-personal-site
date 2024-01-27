import { getCollection, type CollectionEntry } from "astro:content"

export async function getSeriesEntries(): Promise<CollectionEntry<"series">[]> {
  const entries = getCollection("series", ({ data }) => {
    return import.meta.env.PROD ? !data.isDraft : true
  })
  return entries
}

export async function getSeriesForBlog(blogSlug: string): Promise<CollectionEntry<"series">[]> {
  const entries = getCollection("series", ({ data }) => {
    const seriesWithBlog = data.blogs.some((blog) => blog.slug === blogSlug)
    if (!seriesWithBlog) return false
    return import.meta.env.PROD ? !data.isDraft : true
  })
  return entries
}
