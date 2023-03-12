import { z, defineCollection } from "astro:content";
const seoConfig = {
  title: z.string(),
  description: z.string(),
  isDraft: z.boolean().optional(),
  name: z.string().optional(),
  tags: z.string().array(),
  coverImg: z.string().optional()
}

const blogCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
    publishedOn: z.date(),
    lastUpdatedOn: z.date().optional(),
    topics: z.string().array()
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  }),
});

const topicCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
    iconName: z.string().optional()
  })
})

export const collections = {
  blog: blogCollection,
  project: projectCollection,
  topic: topicCollection
};
