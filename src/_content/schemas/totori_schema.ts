import { z } from 'astro:content';
import { languageSchema, nameLinkSchema } from './common_schema';

export const traitSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  cost: z.number().optional(),
  synth: z.boolean().optional(),
  usable: z.boolean().optional(),
  ingot: z.boolean().optional(),
  cloth: z.boolean().optional(),
  accessory: z.boolean().optional(),
  item_set: z.array(nameLinkSchema).optional(),
  index: z.number().optional(),
});

export const effectSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  effectline_set: z.array(nameLinkSchema).optional(),
  index: z.number().optional(),
});

export const monsterSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  race: languageSchema.optional(),
  hp: z.number().optional(),
  atk: z.number().optional(),
  defen: z.number().optional(),
  spd: z.number().optional(),
  level: z.number().optional(),
  locations: z.array(z.object({
    name: languageSchema.optional(),
    id: z.string().optional(),
    parentid: z.string().optional(),
  })).optional(),
  item_set: z.array(nameLinkSchema).optional(),
  isDX: z.boolean().optional(),
  note: z.string().optional(),
  index: z.number().optional(),
});

export const itemSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  item_type: z.string().optional(),
  item_subtype: z.string().optional(),
  categories: z.array(nameLinkSchema).optional(),
  level: z.number().optional(),
  traits: nameLinkSchema.optional(),
  ingredient_set: z.array(z.object({
    item: nameLinkSchema.optional(),
    category: nameLinkSchema.optional(),
    num: z.number().optional(),
  })).optional(),
  equip_set: z.array(z.object({
    hp: z.number().optional(),
    mp: z.number().optional(),
    lp: z.number().optional(),
    atk: z.number().optional(),
    defen: z.number().optional(),
    spd: z.number().optional(),
    chars: z.array(z.object({ name: languageSchema.optional() })).optional(),
    material: z.array(nameLinkSchema).optional(),
  })).optional(),
  effectline_set: z.array(z.object({
    effects: nameLinkSchema.optional(),
    number: z.number().optional(),
    itemnum: z.number().optional(),
  })).optional(),
  locations: z.array(z.object({
    name: languageSchema.optional(),
    id: z.string().optional(),
    parentid: z.string().optional()
  })).optional(),
  book_set: z.array(nameLinkSchema).optional(),
  monsters: z.array(nameLinkSchema).optional(),
  isDX: z.boolean().optional(),
  isDLC: z.boolean().optional(),
  time: z.number().optional(),
  mp: z.number().optional(),
  price: z.number().optional(),
  uses: z.number().optional(),
  index: z.number().optional(),
});

export const bookSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  items: z.array(nameLinkSchema).optional(),
  note: z.string().optional(),
  isDX: z.boolean().optional(),
  isDLC: z.boolean().optional(),
  index: z.number().optional(),
});

export const fieldDataSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  unlock: languageSchema.optional(),
  ingredients: z.array(nameLinkSchema).optional(),
  monsters: z.array(nameLinkSchema).optional(),
  note: z.string().optional(),
});

export const areaDataSchema = z.object({
  name: languageSchema.optional(),
  id: z.string(),
  fields: z.array(fieldDataSchema).optional(),
});
const categorySchema = z.object({
  in_cat: z.array(itemSchema).optional(),
  used: z.array(itemSchema).optional(),
  name: languageSchema.optional(),
  icon: z.string().optional(),
  id: z.string().optional(),
});

export const totoriData = [
  //{ game: 'totori', type: 'area',  schema: areaDataSchema },
  { game: 'totori', type: 'recipe-books',  schema: bookSchema },
  { game: 'totori', type: 'effects',  schema: effectSchema },
  //{ game: 'totori', type: 'items', schema: itemSchema },
  { game: 'totori', type: 'categories', schema: categorySchema },
  //{ game: 'totori', type: 'monsters', schema: monsterSchema },
  { game: 'totori', type: 'traits', schema: traitSchema },
]
