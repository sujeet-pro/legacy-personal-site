import { getCollection, type CollectionEntry } from "astro:content"

async function getBlogEntries(): Promise<CollectionEntry<"blog">[]> {
  const entries = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? !data.isDraft : true
  })
  entries.sort((a, b) => (a.data.publishedOn >= b.data.publishedOn ? -1 : 1))
  return entries
}

function getSeriesInfo(
  blog: CollectionEntry<"blog">,
  entries: CollectionEntry<"blog">[],
): {
  parent: CollectionEntry<"blog">
  children: CollectionEntry<"blog">[]
} | null {
  const [parentSlug, childSlug] = blog.slug.split("/")
  const parent = !childSlug ? blog : entries.find((entry) => entry.slug === parentSlug)
  if (!parent) return null
  const children = entries.filter((entry) => entry.slug.startsWith(`${parent.slug}/`))
  if (!children.length) return null
  return {
    parent,
    children,
  }
}

export type BlogSeriesItem = {
  title: string
  path: string
  isCurrent: boolean
}
export type BlogContent = {
  entry: CollectionEntry<"blog">
  path: string
  parent: BlogSeriesItem | null
  children: BlogSeriesItem[]
}
export async function getBlogs(): Promise<BlogContent[]> {
  const blogEntries = await getBlogEntries()
  return blogEntries.map((entry, _idx, entries): BlogContent => {
    const seriesInfo = getSeriesInfo(entry, entries)
    const seriesParent = seriesInfo?.parent
    return {
      entry: entry,
      path: `/blog/${entry.slug}`,
      parent: seriesParent
        ? {
            title: seriesParent.data.title,
            path: `/blog/${seriesParent.slug}`,
            isCurrent: seriesParent.slug === entry.slug,
          }
        : null,
      children: (seriesInfo?.children ?? []).map((childBlog) => ({
        title: childBlog.data.title,
        path: `/blog/${childBlog.slug}`,
        isCurrent: childBlog.slug === entry.slug,
      })),
    }
  })
}

export async function getFeaturedBlogs(): Promise<BlogContent[]> {
  const blogs = await getBlogs()
  return blogs.slice(0, 3)
}

export async function getBlogsForTopic(topicSlug: string): Promise<BlogContent[]> {
  const blogs = await getBlogs()
  return blogs.filter(
    ({
      entry: {
        data: { topics },
      },
    }) => topics.some((topic) => topic.slug === topicSlug),
  )
}
