import { z } from 'astro/zod';
import { languageSchema, nameLinkSchema } from './common_schema';

const catItemSchema = nameLinkSchema.extend({
  level: z.number().optional(),
  evalue: z.number().optional(),
  fire: z.boolean().optional(),
  water: z.boolean().optional(),
  wind: z.boolean().optional(),
  earth: z.boolean().optional(),
});

export const categorySchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  icon: z.string().optional(),
  in_cat: z.array(catItemSchema).optional(),
  used: z.array(catItemSchema).optional(),
  add: z.boolean().optional(),
});

export const regionNameSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  parentslug: z.string().optional(),
});

export const regionSchema = z.object({
  region: nameLinkSchema.optional(),
});

export const equipmentSchema = z.object({
  hp: z.number().optional(),
  mp: z.number().optional(),
  atk: z.number().optional(),
  defen: z.number().optional(),
  spd: z.number().optional(),
  fire: z.number().optional(),
  water: z.number().optional(),
  wind: z.number().optional(),
  earth: z.number().optional(),
});

export const ingredientFullSchema = z.object({
  item: nameLinkSchema.optional(),
  category: nameLinkSchema.optional(),
  num: z.number().optional(),
});

export const effectLineSchema = z.object({
  effect: nameLinkSchema.optional(),
  elem: z.string().optional(),
  number: z.number().optional(),
  min_elem: z.number().optional(),
  max_elem: z.number().optional(),
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

// ---------- top-level content types ----------

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
  buff: z.boolean().optional(),
  weapon: z.boolean().optional(),
  armor: z.boolean().optional(),
  accessory: z.boolean().optional(),
  combo1: nameLinkSchema.optional(),
  combo2: nameLinkSchema.optional(),
  combo3: nameLinkSchema.optional(),
  items: z.array(nameLinkSchema).optional(),
  enum: z.string().optional(),
  advanced: advancedDataSchema.optional(),
  item_set: z.array(nameLinkSchema).optional(),
});

export const monsterSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  index: z.number().optional(),
  race: languageSchema.optional(),
  hp: z.number().optional(),
  atk: z.number().optional(),
  defen: z.number().optional(),
  spd: z.number().optional(),
  level: z.number().optional(),
  exp: z.number().optional(),
  cole: z.number().optional(),
  fire: z.number().optional(),
  water: z.number().optional(),
  wind: z.number().optional(),
  earth: z.number().optional(),
  locations: z.array(nameLinkSchema).optional(),
  drops: z.array(nameLinkSchema).optional(),
  isStrong: z.boolean().optional(),
  isDX: z.boolean().optional(),
  isDLC: z.boolean().optional(),
  item_set: z.array(nameLinkSchema).optional(),
});

export const itemSchema = z.object({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  itype: z.string().optional(),
  categories: z.array(categorySchema).optional(),
  ingredients: z.array(ingredientFullSchema).optional(),
  level: z.number().optional(),
  evalue: z.number().optional(),
  effect: z.number().optional(),
  fire: z.boolean().optional(),
  water: z.boolean().optional(),
  wind: z.boolean().optional(),
  earth: z.boolean().optional(),
  properties: z.array(nameLinkSchema).optional(),
  chars: z.array(z.string()).optional(),
  stats: z.array(equipmentSchema).optional(),
  effectlines: z.array(effectLineSchema).optional(),
  size: z.number().optional(),
  locations: z.array(regionNameSchema).optional(),
  book: z.array(nameLinkSchema).optional(),
  monsters: z.array(nameLinkSchema).optional(),
  disassembled_by: z.array(nameLinkSchema).optional(),
  disassembles_to: z.array(nameLinkSchema).optional(),
  relic_in: z.array(regionSchema).optional(),
  isDLC: z.boolean().optional(),
  isDX: z.boolean().optional(),
  traits: z.array(languageSchema).optional(),
  shop: languageSchema.optional(),
});

export const bookSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  items: z.array(nameLinkSchema).optional(),
  acquisition: z.string().optional(),
  shop: languageSchema.optional(),
  index: z.number().optional(),
});

const locationAreaLinkSchema = nameLinkSchema.extend({
  parent: z.string().optional(),
});

const relicItemSchema = nameLinkSchema.extend({
  disassembly_set: z.array(z.array(nameLinkSchema)).optional(),
});

export const relicSchema = z.object({
  region: nameLinkSchema.optional(),
  area: z.array(locationAreaLinkSchema).optional(),
  item: relicItemSchema.optional(),
});

export const areaDataSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  subarea: z.string().optional(),
  items: z.array(nameLinkSchema).optional(),
  rare: z.array(nameLinkSchema).optional(),
  maxitem: z.array(nameLinkSchema).optional(),
  monsters: z.array(nameLinkSchema).optional(),
  fieldevent: z.array(z.object({ name: z.string() })).optional(),
  note: z.string().optional(),
});

export const regionDataSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  areas: z.array(areaDataSchema).optional(),
  relic_set: z.array(relicSchema).optional(),
  strong: z.array(monsterSchema).optional(),
  note: z.string().optional(),
  grade: z.string().optional(),
});

export const eschaData = [
  { game: 'escha', type: 'categories', schema: categorySchema },
  { game: 'escha', type: 'items', schema: itemSchema },
  { game: 'escha', type: 'effects', schema: effectSchema },
  { game: 'escha', type: 'properties', schema: propertySchema },
  { game: 'escha', type: 'recipe-books', schema: bookSchema },
  { game: 'escha', type: 'monsters', schema: monsterSchema },
  { game: 'escha', type: 'locations', schema: regionDataSchema },
];