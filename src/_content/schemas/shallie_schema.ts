import { z } from 'astro/zod';
import { languageSchema, nameLinkSchema } from './common_schema';

const categoryItemSchema = nameLinkSchema.extend({
  level: z.number().optional(),
  evalue: z.number().optional(),
  fire: z.boolean().optional(),
  water: z.boolean().optional(),
  wind: z.boolean().optional(),
  earth: z.boolean().optional(),
  slots: z.number().optional(),
});

export const categorySchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  icon: z.string().optional(),
  in_cat: z.array(categoryItemSchema).optional(),
  used: z.array(categoryItemSchema).optional(),
});

const regionNameSchema = nameLinkSchema.extend({
  parent: z.string().optional(),
});

const equipmentSchema = z.object({
  hp: z.number().optional(),
  mp: z.number().optional(),
  atk: z.number().optional(),
  defen: z.number().optional(),
  spd: z.number().optional(),
});

const ingredientSchema = z.object({
  item: nameLinkSchema.optional(),
  category: nameLinkSchema.optional(),
  num: z.number().optional(),
});

const effectLineDataSchema = z.object({
  effect: nameLinkSchema.optional(),
  number: z.number().optional(),
  min_elem: z.number().optional(),
  max_elem: z.number().optional(),
});

const effectLineSchema = z.object({
  effects: z.array(effectLineDataSchema).optional(),
  elem: z.string().optional(),
  hidden: z.boolean().optional(),
  order: z.number().optional(),
});

const advancedEffectSchema = z.object({
  actTag: z.string().optional(),
  actTag2: z.string().optional(),
  min: z.string().optional(),
  max: z.string().optional(),
  min_1: z.string().optional(),
  max_1: z.string().optional(),
  min_2: z.string().optional(),
  max_2: z.string().optional(),
  min_3: z.string().optional(),
  max_3: z.string().optional(),
  min_4: z.string().optional(),
  max_4: z.string().optional(),
});

const advancedDataSchema = z.object({
  PotBase: z.string().optional(),
  PotBase2: z.string().optional(),
  min: z.string().optional(),
  max: z.string().optional(),
  min2: z.string().optional(),
  max2: z.string().optional(),
  effects: z.array(z.object({
    advanced: advancedEffectSchema,
  })).optional(),
});

export const effectSchema = z.object({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  items: z.array(nameLinkSchema).optional(),
  enum: z.string().optional(),
  advanced: advancedEffectSchema.optional(),
});

export const propertySchema = z.object({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  grade: z.number().optional(),
  points: z.number().optional(),
  bomb: z.boolean().optional(),
  heal: z.boolean().optional(),
  weapon: z.boolean().optional(),
  armor: z.boolean().optional(),
  accessory: z.boolean().optional(),
  combo1: nameLinkSchema.optional(),
  combo2: nameLinkSchema.optional(),
  combo3: nameLinkSchema.optional(),
  items: z.array(nameLinkSchema).optional(),
  enum: z.string().optional(),
  advanced: advancedDataSchema.optional(),
});

export const monsterSchema = z.object({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  race: languageSchema.optional(),
  kind: z.string().optional(),
  note: z.string().optional(),
  hp: z.number().optional(),
  atk: z.number().optional(),
  defen: z.number().optional(),
  spd: z.number().optional(),
  level: z.number().optional(),
  exp: z.number().optional(),
  cole: z.number().optional(),
  locations: z.array(regionNameSchema).optional(),
  drops: z.array(nameLinkSchema).optional(),
});

export const itemSchema = z.object({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  kind: z.string().optional(),
  categories: z.array(categorySchema).optional(),
  ingredients: z.array(ingredientSchema).optional(),
  level: z.number().optional(),
  evalue: z.number().optional(),
  effect: z.number().optional(),
  slots: z.number().optional(),
  fire: z.boolean().optional(),
  water: z.boolean().optional(),
  wind: z.boolean().optional(),
  earth: z.boolean().optional(),
  properties: z.array(nameLinkSchema).optional(),
  enum: z.string().optional(),
  chars: z.array(z.string()).optional(),
  stats: z.array(equipmentSchema).optional(),
  effectlines: z.array(effectLineSchema).optional(),
  size: z.number().optional(),
  locations: z.array(regionNameSchema).optional(),
  book: z.array(nameLinkSchema).optional(),
  monsters: z.array(nameLinkSchema).optional(),
  disassembled_by: z.array(nameLinkSchema).optional(),
  disassembles_to: z.array(nameLinkSchema).optional(),
});

export const bookSchema = z.object({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  items: z.array(nameLinkSchema).optional(),
  note: z.string().optional(),
});

const fieldDataSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  ingredients: z.array(nameLinkSchema).optional(),
  rare: z.array(nameLinkSchema).optional(),
  relics: z.array(nameLinkSchema).optional(),
  monsters: z.array(nameLinkSchema).optional(),
  note: z.string().optional(),
});

export const regionDataSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  fields: z.array(fieldDataSchema).optional(),
});

export const shallieData = [
  { game: 'shallie', type: 'categories', schema: categorySchema },
  { game: 'shallie', type: 'effects', schema: effectSchema },
  { game: 'shallie', type: 'items', schema: itemSchema },
  { game: 'shallie', type: 'locations', schema: regionDataSchema },
  { game: 'shallie', type: 'monsters', schema: monsterSchema },
  { game: 'shallie', type: 'properties', schema: propertySchema },
  { game: 'shallie', type: 'recipe-books', schema: bookSchema },
];