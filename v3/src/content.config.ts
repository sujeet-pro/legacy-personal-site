import { file, glob } from 'astro/loaders' // Not available with legacy API
import type { SchemaContext } from 'astro:content'
import { defineCollection, reference, z } from 'astro:content'
import json5 from 'json5'

const tag = defineCollection({
  loader: file('./data/tags.jsonc', {
    parser: (fileContent) => {
      return json5.parse(fileContent)
    }
  }),
  schema: z.object({
    name: z.string(),
    isFeatured: z.boolean()
  })
})

const category = defineCollection({
  loader: file('./data/category.jsonc', {
    parser: (fileContent) => {
      return json5.parse(fileContent)
    }
  }),
  schema: z.object({
    name: z.string(),
    isFeatured: z.boolean()
  })
})

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './data/blog' }),
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      lastUpdatedDate: z.coerce.date(),
      isDraft: z.boolean(),
      featuredRank: z.number(),
      tags: z.array(reference('tag')),
      category: reference('category'),
      image: image().nullable(), // z.string().optional(),
      imageCredit: z.string().nullable()
    })
})

export const collections = {
  tag,
  blog,
  category
}
