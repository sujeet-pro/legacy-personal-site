import { type CollectionEntry } from 'astro:content'
import { type PostContent } from './post-content.utils'

export type PostContentsByCategory = {
  category: CollectionEntry<'category'>
  postContents: PostContent[]
  postCount: number
}

export function getGroupedPostContentsByCategory(postContents: PostContent[]) {
  const categoryIdAndDetails = new Map<string, PostContentsByCategory>()
  for (const postContent of postContents) {
    const categoryId = postContent.category.id
    let categoryDetails = categoryIdAndDetails.get(categoryId)
    if (!categoryDetails) {
      categoryDetails = {
        category: postContent.category,
        postCount: 0,
        postContents: [],
      }
      categoryIdAndDetails.set(categoryId, categoryDetails)
    }
    categoryDetails.postContents.push(postContent)
    categoryDetails.postCount++
  }
  const postContentsByCategory = [...categoryIdAndDetails.values()]

  postContentsByCategory.sort((a, b) => {
    return a.category.data.name.localeCompare(b.category.data.name)
  })

  return postContentsByCategory
}
