import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

const blog = defineCollection({})

export const collections = {
  blog: blogCollection,
};