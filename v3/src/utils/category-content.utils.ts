import { getCollection, type CollectionEntry } from 'astro:content'
import { getBlogs } from './blog-content.utils'

export type CategoryDetails = {
  category: CollectionEntry<'category'>
  count: number
  blogs: CollectionEntry<'blog'>[]
}

export async function getCategories() {
  const categories = await getCollection('category')
  const allResults: CategoryDetails[] = []
  for (const category of categories) {
    const result: CategoryDetails = {
      category,
      count: 0,
      blogs: []
    }
    const blogs = await getBlogs({ onlyCategory: category.id })
    result.blogs = blogs
    result.count += blogs.length

    if (result.count > 0) {
      allResults.push(result)
    }
  }
  return allResults.sort((a, b) => {
    return a.category.data.name.localeCompare(b.category.data.name)
  })
}
