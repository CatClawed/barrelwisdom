import { z } from 'astro:content';

export const nameLinkSchema = z.object({
  id: z.coerce.string(),
  name: z.string(),
});

export const baseItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  desc: z.string(),
});
