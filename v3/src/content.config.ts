import { defineCollection, reference, z } from 'astro:content'
import { glob, file } from 'astro/loaders' // Not available with legacy API
import type { SchemaContext } from 'astro:content'

const tag = defineCollection({
  loader: file('./data/tags.json'),
  schema: z.object({
    name: z.string()
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
      image: image().optional(), // z.string().optional(),
      imageCredit: z.string().optional()
      // .refine(
      //   (val, ctx) => {
      //     if (ctx.parent.image && !val) {
      //       return false
      //     }
      //     return true
      //   },
      //   {
      //     message: 'Image credit is required when an image is provided'
      //   }
      // )
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
  page
}
