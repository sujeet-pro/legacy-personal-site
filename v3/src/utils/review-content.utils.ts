import { getCollection } from 'astro:content'

type GetReviewOptions = {
  onlyTag?: string
}

export async function getReviews({ onlyTag }: GetReviewOptions = {}) {
  const reviews = await getCollection('review', (review) => {
    // Only return published posts, unless in dev mode
    const isPublished = import.meta.env.DEV || !review.data.isDraft
    if (!isPublished) return false
    // Only return posts with a specific tag
    if (onlyTag && !review.data.tags.some((tag) => tag.id === onlyTag)) return false
    return true
  })

  reviews.sort((a, b) => {
    if (a.data.readingDate && b.data.readingDate) {
      const diff = b.data.readingDate.valueOf() - a.data.readingDate.valueOf()
      if (diff !== 0) return diff
    }
    return a.data.title.localeCompare(b.data.title)
  })

  return reviews
}
