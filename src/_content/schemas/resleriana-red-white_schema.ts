import { z } from 'astro:content';
import { nameLinkSchema, indexedDescriptions, languageSchema } from './common_schema';

const giftSchema = z.object({
  rc: z.string().optional(),
  lc: z.string().optional(),
  character: languageSchema.optional(),
});

export const traitSchema = z.object({
  id: z.number(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  icon: z.string().optional(),
  grade: z.number().optional(),
  val1_1: z.number().optional(),
  val2_1: z.number().optional(),
  gift: z.array(giftSchema).optional(),
  com: z.boolean().optional(),
  res: z.boolean().optional(),
  inh: z.boolean().optional(),
  boo: z.boolean().optional(),
  wep: z.boolean().optional(),
  arm: z.boolean().optional(),
  acc: z.boolean().optional(),
  exp: z.boolean().optional(),
  syn: z.boolean().optional(),
  sta: z.boolean().optional(),
  item: nameLinkSchema.optional(),
  combo1: nameLinkSchema.optional(),
  combo2: nameLinkSchema.optional(),
  dlc: z.boolean().optional(),
});

export const effectSchema = z.object({
  id: z.number(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  grade: z.number().optional(),
  val1_1: z.number().optional(), val1_2: z.number().optional(),
  val2_1: z.number().optional(), val2_2: z.number().optional(),
  val3_1: z.number().optional(), val3_2: z.number().optional(),
  val4_1: z.number().optional(), val4_2: z.number().optional(),
  val5_1: z.number().optional(), val5_2: z.number().optional(),
  val6_1: z.number().optional(), val6_2: z.number().optional(),
  val7_1: z.number().optional(), val7_2: z.number().optional(),
  items: z.array(nameLinkSchema).optional(),
  dlc: z.boolean().optional(),
  flag: z.boolean().optional(),
});

const areaSchema = z.object({
  floor_min: z.number().optional(),
  floor_max: z.number().optional(),
  area: languageSchema.optional(),
  tool: z.string().optional(),
  rank: z.number().optional(),
});

export const monsterSchema = indexedDescriptions(4).extend({
  id: z.number(),
  name: languageSchema.optional(),
  race: languageSchema.optional(),
  index: z.number().optional(),
  areas: z.array(areaSchema).optional(),
  hp: z.number().optional(),
  atk: z.number().optional(),
  dfn: z.number().optional(),
  spd: z.number().optional(),
  physical: z.number().optional(),
  magic: z.number().optional(),
  fire: z.number().optional(),
  ice: z.number().optional(),
  air: z.number().optional(),
  bolt: z.number().optional(),
  blind: z.number().optional(),
  paralysis: z.number().optional(),
  poison: z.number().optional(),
  burn: z.number().optional(),
  taunt: z.number().optional(),
  sleep: z.number().optional(),
  daze: z.number().optional(),
  frostbite: z.number().optional(),
  drops: z.array(nameLinkSchema).optional(),
  dlc: z.boolean().optional(),
});

const catSchema = nameLinkSchema.extend({
  dlc: z.boolean().optional(),
  add: z.boolean().optional(),
})

const categorySchema = z.object({
  in_cat: z.array(catSchema).optional(),
  used: z.array(catSchema).optional(),
  name: languageSchema.optional(),
});

const bookSchema = z.object({
  name: languageSchema.optional(),
  areas: z.array(areaSchema).optional(),
  shop: z.array(nameLinkSchema).optional(),
});

const recipeSchema = z.object({
  ing: nameLinkSchema.optional(),
  cat: nameLinkSchema.optional(),
});

const itemMixSchema = z.object({
  combo: z.array(nameLinkSchema).optional(),
  name: languageSchema.optional(),
});

const questDataSchema = z.object({
  name: languageSchema.optional(),
  char: languageSchema.optional(),
});

const treeSchema = z.object({
  row: z.number().optional(),
  down: z.boolean().optional(),
  left: z.boolean().optional(),
  recipe: nameLinkSchema.optional(),
  ing: nameLinkSchema.optional(),
  ancient: z.boolean().optional(),
  char: z.string().optional(),
  hide: z.boolean().optional(),
});

const colorSchema = z.object({
  l: z.string().optional(),
  r: z.string().optional(),
});

export const itemSchema = indexedDescriptions(4).extend({
  id: z.number(),
  name: languageSchema.optional(),
  colors: z.array(colorSchema).optional(),
  icon: z.string().optional(),
  categories: z.array(nameLinkSchema).optional(),
  add: z.array(nameLinkSchema).optional(),
  dlc: z.boolean().optional(),
  effects: z.array(effectSchema).optional(),
  quantity: z.number().optional(),
  uses: z.number().optional(),
  book: bookSchema.optional(),
  recipe: z.array(recipeSchema).optional(),
  trait: nameLinkSchema.optional(),
  shop: z.array(nameLinkSchema).optional(),
  drop: z.array(nameLinkSchema).optional(),
  mix: z.array(itemMixSchema).optional(),
  quest: z.array(questDataSchema).optional(),
  tree: z.array(treeSchema).optional(),
  areas: z.array(areaSchema).optional(),
});

const slotSchema = z.object({
  item: nameLinkSchema.optional(),
  price: z.number().optional(),
  level_min: z.number().optional(),
  level_max: z.number().optional(),
  grade: z.number().optional(),
});

export const shopSchema = z.object({
  id: z.number(),
  name: languageSchema.optional(),
  slots: z.array(slotSchema).optional(),
});

export const treesSchema = z.object({
  id: z.number(),
  name: languageSchema.optional(),
  nodes: z.array(treeSchema).optional(),
});

export const reslerianaRWData = [
  { game: 'resleriana-red-white', type: 'effects',  schema: effectSchema },
  { game: 'resleriana-red-white', type: 'items', schema: itemSchema },
  { game: 'resleriana-red-white', type: 'categories', schema: categorySchema },
  { game: 'resleriana-red-white', type: 'monsters', schema: monsterSchema },
  { game: 'resleriana-red-white', type: 'traits', schema: traitSchema },
]
