import { getCollection } from 'astro:content'

type BlogPostOptions = {
  onlyTag?: string
}

export async function getBlogPostContent({ onlyTag }: BlogPostOptions = {}) {
  const blogs = await getCollection('blog', (post) => {
    // Only return published posts, unless in dev mode
    const isPublished = import.meta.env.DEV || !post.data.isDraft
    if (!isPublished) return false
    // Only return posts with a specific tag
    if (onlyTag && !post.data.tags.some((tag) => tag.id === onlyTag)) return false
    return true
  })
  blogs.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  return blogs
}
