import { getCollection, getEntries } from 'astro:content'

export type SeriesEntry = {
  name: string
  posts: {
    id: string
    title: string
  }[]
}

export async function getAllSeriesByPostId(postId: string) {
  const seriesList = await getCollection('series', (series) => {
    return series.data.posts.some((post) => post.id === postId)
  })
  const seriesEntries: SeriesEntry[] = []
  for (const series of seriesList) {
    const posts = await getEntries(series.data.posts)
    seriesEntries.push({
      name: series.data.name,
      posts: posts
        .filter((post) => {
          const isPublished = import.meta.env.DEV || !!post.data.publishedOn
          return isPublished
        })
        .map((post) => ({
          id: post.id,
          title: post.data.title,
        })),
    })
  }
  return seriesEntries
}
