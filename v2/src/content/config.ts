import { z, reference, defineCollection, type ImageFunction } from "astro:content"

const baseConfig = () => ({
  title: z.string(),
  description: z.string(),
  isDraft: z.boolean(),
  initialTocClose: z.boolean(),
})
const commonConfig = (image: ImageFunction) => ({
  ...baseConfig(),
  image: image().refine((img) => img.format === "svg" || img.width >= 1080, {
    message: "Cover image must be at least 1080 pixels wide!",
  }),
  imageCredit: z.string(),
})

const mdPages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      ...commonConfig(image),
    }),
})

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      ...commonConfig(image),
      publishedOn: z.date(),
      lastUpdatedOn: z.date(),
      // Referenced
      topics: z.array(reference("topic")),
      // Reference an array of related posts from the `blog` collection by `slug`
      // relatedBlogs: z.array(reference("blog")).optional(),
    }),
})

const topic = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      ...commonConfig(image),
    }),
})

const project = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      ...baseConfig(),
      startDate: z.date(),
      endDate: z.date().optional(),
      company: reference("company"),
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
    role: z.string(),
    // designation: z.string().optional(),
    // department: z.string().optional(),
  }),
})
// Export a single `collections` object to register your collection(s)
export const collections = {
  "md-pages": mdPages,
  blog,
  topic,
  project,
  company,
}
