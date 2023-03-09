import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    date: z.date(),
    heroImg: z.string().optional(),
  }),
});

const projectCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    date: z.date(),
    heroImg: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  project: projectCollection,
};
