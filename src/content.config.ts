import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/_content', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
  z.object({
  		title: z.string(),
      description: z.string(),
  		author: z.string().optional(),
  		pubDate: z.coerce.date(),
  		updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
  		tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
