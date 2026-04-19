import { z, defineCollection, SchemaContext } from "astro:content";
const seoConfig = ({image}: SchemaContext) => ({
  title: z.string(),
  description: z.string(),
  isDraft: z.boolean().optional(),
  thumbnail: image().optional(),
});

const topicCollection = defineCollection({
  schema: (options) => z.object({
    ...seoConfig(options),
    iconName: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  schema: (options) => z.object({
    ...seoConfig(options),
    publishedOn: z.date(),
    lastUpdatedOn: z.date().optional(),
    topics: z.string().array().optional(),
    tags: z.string().array().optional(),
    cover: options.image()
      .refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      })
      .optional(),
    coverAlt: z.string().optional(),
  }),
});

const projectCollection = defineCollection({
  schema:(options) => z.object({
    ...seoConfig(options),
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
  schema: (options) =>z.object({
    ...seoConfig(options),
  }),
});
export const collections = {
  blog: blogCollection,
  project: projectCollection,
  topic: topicCollection,
  page: pageCollection,
};
