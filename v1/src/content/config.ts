import { z, image, defineCollection } from "astro:content";
const seoConfig = {
  title: z.string(),
  description: z.string(),
  isDraft: z.boolean().optional(),
  thumbnail: image().optional(),
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
    tags: z.string().array().optional(),
    cover: image()
      .refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      })
      .optional(),
    coverAlt: z.string().optional(),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
    company: z.enum([
      "Vistaprint",
      "Cure.fit",
      "Media.net",
      "Infosys",
      "Personal",
    ]), //string().optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    topics: z.string().array().optional(),
    tags: z.string().array().optional(),
  }),
});

const pageCollection = defineCollection({
  schema: z.object({
    ...seoConfig,
  }),
});
export const collections = {
  blog: blogCollection,
  project: projectCollection,
  topic: topicCollection,
  page: pageCollection,
};
