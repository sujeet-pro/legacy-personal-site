import { getCollection, type CollectionEntry } from 'astro:content'
import { getPostContentsByPostRefs, type PostContent } from './post-content.utils'

export type SeriesContent = {
  series: CollectionEntry<'series'>
  postContents: PostContent[]
}

export type GetSeriesOptions = {
  postId?: string
}

export async function getSeriesContents(options: GetSeriesOptions = {}): Promise<SeriesContent[]> {
  const seriesList = await getCollection('series', (series) => {
    if (options.postId === undefined) return true
    return series.data.posts.some((post) => post.id === options.postId)
  })

  return Promise.all(
    seriesList.map(async (series) => ({
      series,
      postContents: await getPostContentsByPostRefs(series.data.posts),
    })),
  )
}
