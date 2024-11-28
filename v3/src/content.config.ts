import { defineCollection, reference, z } from 'astro:content'
import { glob, file } from 'astro/loaders' // Not available with legacy API

const tag = defineCollection({
  loader: file('./data/tags.json'),
  schema: z.object({
    name: z.string()
  })
})

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './data/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lastUpdatedDate: z.coerce.date(),
    isDraft: z.boolean(),
    tags: z.array(reference('tag'))
  })
})

export const collections = { tag, blog }
