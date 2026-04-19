import { file, glob } from 'astro/loaders' // Not available with legacy API
import type { SchemaContext } from 'astro:content'
import { defineCollection, reference, z } from 'astro:content'
import json5 from 'json5'

const tag = defineCollection({
  loader: file('./data/tags.jsonc', {
    parser: (fileContent) => {
      return json5.parse(fileContent)
    },
  }),
  schema: z.object({
    name: z.string(),
    isFeatured: z.boolean(),
  }),
})

const category = defineCollection({
  loader: file('./data/categories.jsonc', {
    parser: (fileContent) => {
      return json5.parse(fileContent)
    },
  }),
  schema: z.object({
    name: z.string(),
    isFeatured: z.boolean(),
  }),
})

const post = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './data/posts' }),
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedOn: z.coerce.date().nullable(),
      lastUpdatedOn: z.coerce.date().nullable(),
      featuredRank: z.number(),
      image: image().nullable(), // z.string().optional(),
      imageCredit: z.string().nullable(),
      articleLink: z.string().url().nullable(),
      category: reference('category'),
      tags: z.array(reference('tag')),
    }),
})

const series = defineCollection({
  loader: file('./data/series.jsonc', {
    parser: (fileContent) => {
      return json5.parse(fileContent)
    },
  }),
  schema: z.object({
    name: z.string(),
    posts: z.array(reference('post')),
    series: z.array(reference('series')).nullable(),
  }),
})

export const collections = {
  tag,
  post,
  category,
  series,
}
