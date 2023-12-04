import { z, reference, defineCollection } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      publishedOn: z.date(),
      lastUpdatedOn: z.date(),
      image: image()
        .refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        })
        .optional(),
      description: z.string(),
      // Auto Populated
      minutesRead: z.string().optional(),
      // Referenced
      topics: z.array(reference("topic")),
      // Reference an array of related posts from the `blog` collection by `slug`
      relatedBlogs: z.array(reference("blog")).optional(),
    }),
})

const topic = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image()
        .refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        })
        .optional(),
    }),
})

const project = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      isDraft: z.boolean().optional(),
      thumbnail: image().optional(),
      company: reference("company"),
      startDate: z.date(),
      endDate: z.date().optional(),
      topics: z.array(reference("topic")),
    }),
})

const company = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    startDate: z.string().transform((str) => new Date(str)),
    endDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
    icon: z.string(),
    linkedInUrl: z.string().url(),
    role: z.string().optional(),
    designation: z.string().optional(),
    department: z.string().optional(),
  }),
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
  topic,
  project,
  company,
}
