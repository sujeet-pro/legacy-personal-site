import { type CollectionEntry } from 'astro:content'
import { type PostContent } from './post-content.utils'

export type PostContentByTag = {
  tag: CollectionEntry<'tag'>
  postContents: PostContent[]
  postCount: number
}

export function getGroupedPostContentsByTag(postContents: PostContent[]): PostContentByTag[] {
  const tagIdAndDetails = new Map<string, PostContentByTag>()
  for (const postContent of postContents) {
    for (const tag of postContent.tags) {
      let tagDetails = tagIdAndDetails.get(tag.id)
      if (!tagDetails) {
        tagDetails = {
          tag,
          postContents: [],
          postCount: 0,
        }
        tagIdAndDetails.set(tag.id, tagDetails)
      }
      tagDetails.postContents.push(postContent)
      tagDetails.postCount++
    }
  }
  const postContentsByTag = [...tagIdAndDetails.values()]
  postContentsByTag.sort((a, b) => {
    const diff = b.postContents.length - a.postContents.length
    if (diff !== 0) {
      return diff
    }
    return a.tag.data.name.localeCompare(b.tag.data.name)
  })
  return postContentsByTag
}
