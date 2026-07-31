import { z } from 'astro/zod';
import { nameLinkSchema, languageSchema } from '@app/_content/schemas/common_schema';

export const coordSchema = z.object({
  x: z.number(),
  z: z.number(),
  label: z.number().optional(),
});

export const coordSchema2 = z.array(
  coordSchema
);

export const effectSchema = z.object({
  id: z.number().optional(),
  name: languageSchema.optional(),
  desc1: languageSchema.optional(),
  desc2: languageSchema.optional(),
  max_level: z.number().optional(),
  att_tag: z.string().optional(),
  act_tag: z.string().optional(),
  effect_hash: z.string().optional(),
  prm1_lv_min_rand_range: z.string().optional(),
  prm1_lv_max_rand_range: z.string().optional(),
  prm2_lv_min_rand_range: z.string().optional(),
  prm2_lv_max_rand_range: z.string().optional(),
  items: z.array(nameLinkSchema).optional(),
});

export const effDataSchema = z.object({
  lv: z.number().optional(),
  eff: effectSchema.optional(),
});

export const rankSchema = z.object({
  rank: z.string().optional(),
  quality: z.number().optional(),
  eff: z.array(effDataSchema).optional(),
});

export const recipeDataSchema = z.object({
  item: nameLinkSchema.optional(),
  cat: nameLinkSchema.optional(),
  eff: effectSchema.optional(),
});

export const recipeLevelSchema = z.object({
  lv: z.number().optional(),
  fire: z.number().optional(),
  ice: z.number().optional(),
  bolt: z.number().optional(),
  air: z.number().optional(),
  reward: languageSchema.optional(),
});

export const recipeSchema = z.object({
  num: z.number().optional(),
  sp: z.number().optional(),
  kind: z.string().optional(),
  level: z.array(recipeLevelSchema).optional(),
  recipe: z.array(recipeDataSchema).optional(),
});

export const materialRecipeDataSchema = z.object({
  num: z.number().optional(),
  mat: nameLinkSchema.optional(),
});

export const materialRecipeSchema = z.object({
  core: z.number().optional(),
  recipe: z.array(materialRecipeDataSchema).optional(),
});

export const questDataSchema = z.object({
  name: languageSchema.optional(),
  extra: languageSchema.optional(),
});

export const itemSchema = z.object({
  id: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  isDLC: z.boolean().optional(),
  mats: z.array(nameLinkSchema).optional(),
  cats: z.array(nameLinkSchema).optional(),
  resonance: z.number().optional(),
  fire: z.boolean().optional(),
  ice: z.boolean().optional(),
  bolt: z.boolean().optional(),
  air: z.boolean().optional(),
  atk: z.number().optional(),
  dfn: z.number().optional(),
  spd: z.number().optional(),
  ct: z.number().optional(),
  aoe: z.boolean().optional(),
  comfort_goal: z.number().optional(),
  rank: z.array(rankSchema).optional(),
  mons: z.array(nameLinkSchema).optional(),
  rare: z.array(nameLinkSchema).optional(),
  location: z.array(coordSchema).optional(),
  recipe: recipeSchema.optional(),
  material: materialRecipeSchema.optional(),
  quest: questDataSchema.optional(),
  kind: z.string().optional(),
});

export const traitGroupSchema = z.object({
  trait: z.array(nameLinkSchema).optional(),
})

export const traitSchema = z.object({
  id: z.number().optional(),
  name: languageSchema.optional(),
  desc1: languageSchema.optional(),
  desc2: languageSchema.optional(),
  wep: z.boolean().optional(),
  arm: z.boolean().optional(),
  acc: z.boolean().optional(),
  atk: z.boolean().optional(),
  heal: z.boolean().optional(),
  buff: z.boolean().optional(),
  dbf: z.boolean().optional(),
  fire: z.boolean().optional(),
  ice: z.boolean().optional(),
  bolt: z.boolean().optional(),
  air: z.boolean().optional(),
  no_level: z.boolean().optional(),
  grade_min: z.number().optional(),
  grade_max: z.number().optional(),
  combo1: nameLinkSchema.optional(),
  combo2: nameLinkSchema.optional(),
  combo3: nameLinkSchema.optional(),
  combo4: nameLinkSchema.optional(),
  chests: z.array(coordSchema).optional(),
  group: traitGroupSchema.optional(),
  mon: nameLinkSchema.optional(),
  lv_min_rand_range: z.string().optional(),
  lv_max_rand_range: z.string().optional(),
  trait_base: z.string().optional(),
  trait_hash: z.string().optional(),
});

export const monsterSchema = z.object({
  id: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  race: nameLinkSchema.optional(),
  fire: z.string().optional(),
  ice: z.string().optional(),
  bolt: z.string().optional(),
  air: z.string().optional(),
  hp: z.number().optional(),
  atk: z.number().optional(),
  dfn: z.number().optional(),
  spd: z.number().optional(),
  break_hits: z.number().optional(),
  break_phys: z.boolean().optional(),
  location: z.array(coordSchema).optional(),
  trait: nameLinkSchema.optional(),
  drop: nameLinkSchema.optional(),
  rare: nameLinkSchema.optional(),
});


export const categorySchema = z.object({
  name: languageSchema,
  in_cat: z.array(itemSchema).optional(),
  used: z.array(itemSchema).optional(),
});


export const yumiaData = [
  { game: 'yumia', type: 'effects',  schema: effectSchema },
  { game: 'yumia', type: 'items', schema: itemSchema },
  { game: 'yumia', type: 'categories', schema: categorySchema },
  { game: 'yumia', type: 'materials',    schema: nameLinkSchema },
  { game: 'yumia', type: 'monsters', schema: monsterSchema },
  { game: 'yumia', type: 'races', schema: nameLinkSchema },
  { game: 'yumia', type: 'traits', schema: traitSchema },
  { game: 'yumia', type: 'maps',   schema: coordSchema2 },
]
