import { z, defineCollection } from "astro:content";
const seoConfig = {
  title: z.string(),
  description: z.string(),
  tags: z.string().array().optional(),
  isDraft: z.boolean().optional(),
  coverImg: z.string().optional(),
};

const topicCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
    iconName: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
    publishedOn: z.date(),
    lastUpdatedOn: z.date().optional(),
    topics: z.string().array().optional(),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
    startDate: z.date(),
    endDate: z.date().optional(),
    topics: z.string().array().optional(),
  }),
});

const pageCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
    publishedOn: z.date(),
    lastUpdatedOn: z.date().optional(),
  }),
});
export const collections = {
  blog: blogCollection,
  project: projectCollection,
  topic: topicCollection,
  page: pageCollection,
};
