import { defineCollection, z } from 'astro:content'
// import { glob, file } from 'astro/loaders' // Not available with legacy API

const blog = defineCollection({
  // loader: glob({ pattern: '**/[^_]*.md', base: './src/data/blog' }),
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lastUpdatedDate: z.coerce.date().optional(),
    isDraft: z.boolean().optional()
    // tags: z.array(reference('tag')).optional()
  })
})

// const tag = defineCollection({
//   // loader: file('../tags.json'),
//   type: 'data',
//   schema: z.array(
//     z.object({
//       name: z.string(),
//       slug: z.string().optional()
//     })
//   )
// })

export const collections = { blog }
