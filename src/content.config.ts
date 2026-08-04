import { reslerianaRWData } from '@app/_content/schemas/resleriana-red-white_schema';
import { yumiaData } from '@app/_content/schemas/yumia_schema';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import path from 'path';

const blog = defineCollection({
	loader: glob({ base: './src/_content/posts', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
  z.object({
  		title: z.string(),
      description: z.string(),
  		author: z.string().optional(),
  		pubDate: z.coerce.date(),
  		updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.string()).default([]),
      mainClass: z.string().optional(),
  }),
});

const collections: any = { blog };
const gameData = [
  ...yumiaData,
  ...reslerianaRWData,
]

for (const { game, type, schema } of gameData) {
  collections[`${game}_${type}`] = defineCollection({
    loader: glob({
      pattern: `${game}/${type}/**/*.json`,
      base: './src/_content/data',
      generateId: ({entry}) => path.parse(entry).name
    }),
    schema: schema
  })
}

export { collections };
