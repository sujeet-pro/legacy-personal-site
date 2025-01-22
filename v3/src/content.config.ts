import { file, glob } from 'astro/loaders' // Not available with legacy API
import type { SchemaContext } from 'astro:content'
import { defineCollection, reference, z } from 'astro:content'

const tag = defineCollection({
  loader: file('./data/tags.json'),
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
      image: image().nullable(), // z.string().optional(),
      imageCredit: z.string().nullable()
    })
})

const review = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './data/review' }),
  schema: z.object({
    title: z.string(),
    articleLink: z.string().url(),
    category: z.enum(['Research Paper', 'Book', 'Podcast', 'Article', 'Video', 'Course', 'Tool', 'Service', 'Product']),
    description: z.string().nullable(),
    readingDate: z.coerce.date().nullable(),
    lastUpdatedDate: z.coerce.date(),
    isDraft: z.boolean(),
    tags: z.array(reference('tag'))
  })
})

const page = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './data/page' }),
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    isDraft: z.boolean()
  })
})

export const collections = {
  tag,
  blog,
  page,
  review
}
