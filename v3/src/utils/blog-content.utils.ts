import { getCollection } from 'astro:content'

type GetBlogOptions = {
  onlyTag?: string
  onlyFeatured?: boolean
}

export async function getBlogs({ onlyTag, onlyFeatured }: GetBlogOptions = {}) {
  const blogs = await getCollection('blog', (post) => {
    // Only return published posts, unless in dev mode
    const isPublished = import.meta.env.DEV || !post.data.publishedOn
    if (!isPublished) return false
    // Only return posts with a specific tag
    if (onlyTag && !post.data.tags.some((tag) => tag.id === onlyTag)) return false
    if (onlyFeatured && post.data.featuredRank <= 0) return false
    return true
  })

  blogs.sort((a, b) => {
    // Sort it on published data
    if (a.data.publishedOn && b.data.publishedOn) {
      const diff = b.data.publishedOn.valueOf() - a.data.publishedOn.valueOf()
      if (diff !== 0) return diff
    }
    // for same published date, sort on last updated date
    if (a.data.lastUpdatedOn && b.data.lastUpdatedOn) {
      const diff = b.data.lastUpdatedOn.valueOf() - a.data.lastUpdatedOn.valueOf()
      if (diff !== 0) return diff
    }
    // for same last updated date, sort on title
    return b.data.title.localeCompare(a.data.title)
  })

  if (onlyFeatured) {
    blogs.sort((a, b) => a.data.featuredRank - b.data.featuredRank)
  }

  return blogs
}
