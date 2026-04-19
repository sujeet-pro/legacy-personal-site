import { getCollection, getEntries, getEntry, type CollectionEntry, type ReferenceDataEntry } from 'astro:content'

type GetPostOptions = {
  onlyFeatured?: boolean
  allowUnpublished?: boolean
}

export type PostContent = {
  post: CollectionEntry<'post'>
  category: CollectionEntry<'category'>
  tags: CollectionEntry<'tag'>[]
}

export async function getPostContentsByPostRefs(postRefs: ReferenceDataEntry<'post'>[]): Promise<PostContent[]> {
  const posts = await getEntries(postRefs)
  const postContents = await Promise.all(posts.map((post) => resolvePostContent(post)))
  return postContents
}

export async function getPostContents(options: GetPostOptions = {}): Promise<PostContent[]> {
  const posts = await getCollection('post', (post) => {
    // Only return published posts, unless in dev mode
    const isPublished = import.meta.env.DEV || !!post.data.publishedOn || options.allowUnpublished
    if (!isPublished) return false
    if (options.onlyFeatured && post.data.featuredRank <= 0) return false
    return true
  })

  sortPosts(posts, !!options.onlyFeatured)

  const postContents = await Promise.all(posts.map((post) => resolvePostContent(post)))
  return postContents
}

async function resolvePostContent(post: CollectionEntry<'post'>): Promise<PostContent> {
  const tagsPromise = getEntries(post.data.tags)
  const category = await getEntry(post.data.category)
  return {
    post,
    category,
    tags: await tagsPromise,
  }
}

function sortPosts(posts: CollectionEntry<'post'>[], sortByFeatured: boolean) {
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
  if (sortByFeatured) {
    posts.sort((a, b) => a.data.featuredRank - b.data.featuredRank)
  }
  return posts
}
