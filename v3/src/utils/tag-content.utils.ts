import { getCollection, type CollectionEntry } from 'astro:content'
import { getPosts } from './post-content.utils'

export type TagDetails = {
  tag: CollectionEntry<'tag'>
  count: number
  posts: CollectionEntry<'post'>[]
}

export async function getTags() {
  const tags = await getCollection('tag')
  const allResults: TagDetails[] = []
  for (const tag of tags) {
    const result: TagDetails = {
      tag,
      count: 0,
      posts: [],
    }
    const posts = await getPosts({ onlyTag: tag.id })
    result.posts = posts
    result.count += posts.length

    if (result.count > 0) {
      allResults.push(result)
    }
  }
  return allResults.sort((a, b) => {
    const diff = b.count - a.count
    if (diff !== 0) {
      return diff
    }
    return a.tag.data.name.localeCompare(b.tag.data.name)
  })
}
