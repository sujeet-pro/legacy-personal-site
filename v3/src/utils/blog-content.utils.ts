import { getCollection } from 'astro:content'

type GetBlogOptions = {
  onlyTag?: string
  onlyFeatured?: boolean
}

export async function getBlogs({ onlyTag, onlyFeatured }: GetBlogOptions = {}) {
  const blogs = await getCollection('blog', (post) => {
    // Only return published posts, unless in dev mode
    const isPublished = import.meta.env.DEV || !post.data.isDraft
    if (!isPublished) return false
    // Only return posts with a specific tag
    if (onlyTag && !post.data.tags.some((tag) => tag.id === onlyTag)) return false
    if (onlyFeatured && post.data.featuredRank <= 0) return false
    return true
  })

  blogs.sort((a, b) => {
    // b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    if (a.data.pubDate && b.data.pubDate) {
      const diff = b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
      if (diff !== 0) return diff
    }
    return b.data.title.localeCompare(a.data.title)
  })

  if (onlyFeatured) {
    blogs.sort((a, b) => a.data.featuredRank - b.data.featuredRank)
  }

  return blogs
}
