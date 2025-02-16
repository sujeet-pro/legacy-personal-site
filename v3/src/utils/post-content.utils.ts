import { getCollection } from 'astro:content'

type GetPostOptions = {
  onlyTag?: string
  onlyFeatured?: boolean
  onlyCategory?: string
  allowUnpublished?: boolean
}

export async function getPosts({ onlyTag, onlyFeatured, onlyCategory, allowUnpublished }: GetPostOptions = {}) {
  const posts = await getCollection('post', (post) => {
    // Only return published posts, unless in dev mode
    const isPublished = import.meta.env.DEV || !!post.data.publishedOn || allowUnpublished
    if (!isPublished) return false
    // Only return posts with a specific tag
    if (onlyTag && !post.data.tags.some((tag) => tag.id === onlyTag)) return false
    if (onlyFeatured && post.data.featuredRank <= 0) return false
    if (onlyCategory && post.data.category.id !== onlyCategory) return false
    return true
  })
  posts.sort((a, b) => {
    // Bring items without publishedOn to the front
    if (!a.data.publishedOn && b.data.publishedOn) return -1
    if (a.data.publishedOn && !b.data.publishedOn) return 1
    if (!a.data.publishedOn && !b.data.publishedOn) return 0

    if (a.data.publishedOn && a.data.lastUpdatedOn && b.data.publishedOn && b.data.lastUpdatedOn) {
      // Sort it on published date
      const publishedDiff = b.data.publishedOn.valueOf() - a.data.publishedOn.valueOf()
      if (publishedDiff !== 0) return publishedDiff

      // For same published date, sort on last updated date
      const updatedDiff = b.data.lastUpdatedOn.valueOf() - a.data.lastUpdatedOn.valueOf()
      if (updatedDiff !== 0) return updatedDiff

      // For same last updated date, sort on title
      return a.data.title.localeCompare(b.data.title)
    }
    // for anything else
    return 0
  })

  if (onlyFeatured) {
    posts.sort((a, b) => a.data.featuredRank - b.data.featuredRank)
  }

  return posts
}
