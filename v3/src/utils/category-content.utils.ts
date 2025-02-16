import { getCollection, type CollectionEntry } from 'astro:content'
import { getPosts } from './post-content.utils'

export type CategoryDetails = {
  category: CollectionEntry<'category'>
  count: number
  posts: CollectionEntry<'post'>[]
}

export async function getCategories() {
  const categories = await getCollection('category')
  const allResults: CategoryDetails[] = []
  for (const category of categories) {
    const result: CategoryDetails = {
      category,
      count: 0,
      posts: [],
    }
    const posts = await getPosts({ onlyCategory: category.id })
    result.posts = posts
    result.count += posts.length

    if (result.count > 0) {
      allResults.push(result)
    }
  }
  return allResults.sort((a, b) => {
    return a.category.data.name.localeCompare(b.category.data.name)
  })
}
