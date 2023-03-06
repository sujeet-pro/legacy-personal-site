import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        isDraft: z.boolean().optional(),
        layout: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        heroImg: z.string(),
    }),
});

const projectCollection = defineCollection({
    schema: z.object({
        isDraft: z.boolean().optional(),
        layout: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        heroImg: z.string(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'project': projectCollection,
};