import { z } from 'astro/zod';
import { languageSchema, nameLinkSchema } from './common_schema';

const categoryNameLinkSchema = nameLinkSchema.extend({
  isDLC: z.boolean().optional(),
});

export const nameOnlySchema = z.object({
  ing: z.string().optional(),
});

export const nameOnly2Schema = z.object({
  name: languageSchema.optional(),
});

export const advancedEffectSchema = z.object({
  baseAtt: z.string().optional(),
  attTag0: z.string().optional(),
  actTag0: z.string().optional(),
  min_1_0: z.string().optional(),
  max_1_0: z.string().optional(),
  min_2_0: z.string().optional(),
  max_2_0: z.string().optional(),
});

export const traitSchema = z.object({
  id: z.string(),
  grade: z.number().optional(),
  trans_atk: z.boolean().optional(),
  trans_heal: z.boolean().optional(),
  trans_dbf: z.boolean().optional(),
  trans_buff: z.boolean().optional(),
  trans_wpn: z.boolean().optional(),
  trans_arm: z.boolean().optional(),
  trans_acc: z.boolean().optional(),
  trans_tal: z.boolean().optional(),
  trans_exp: z.boolean().optional(),
  trans_syn: z.boolean().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  item_set: z.array(nameLinkSchema).optional(),
  combo1: nameLinkSchema.optional(),
  combo2: nameLinkSchema.optional(),
  index: z.number().optional(),
});

export const effectSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  advanced: z.array(advancedEffectSchema).optional(),
  items: z.array(nameLinkSchema).optional(),
  index: z.number().optional(),
});

export const gatherItemSchema = z.object({
  rank: z.number().optional(),
  priority: z.number().optional(),
  id: z.string().optional(),
  name: languageSchema.optional(),
});

export const gatherNodeSchema = z.object({
  kind: z.string().optional(),
  tool: z.string().optional(),
  items: z.array(gatherItemSchema).optional(),
  major: z.boolean().optional(),
});

export const climateSchema = z.object({
  weather: z.string().optional(),
  mons: z.array(nameLinkSchema).optional(),
  nodes: z.array(gatherNodeSchema).optional(),
});

export const chestSchema = z.object({
  item: nameLinkSchema.optional(),
  book: nameLinkSchema.optional(),
});

export const areaSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  climate: z.array(climateSchema).optional(),
  chests: z.array(chestSchema).optional(),
});

export const regionSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  areas: z.array(areaSchema).optional(),
});

export const monsterSchema = z.object({
  id: z.string(),
  kind: z.string().optional(),
  name: languageSchema.optional(),
  index: z.number().optional(),
  char1: nameLinkSchema.optional(),
  char2: nameLinkSchema.optional(),
  char3: nameLinkSchema.optional(),
  char4: nameLinkSchema.optional(),
  ailment0: z.number().optional(),
  ailment1: z.number().optional(),
  ailment2: z.number().optional(),
  ailment3: z.number().optional(),
  ailment4: z.number().optional(),
  ailment5: z.number().optional(),
  ailment6: z.number().optional(),
  ailment7: z.number().optional(),
  ailment8: z.number().optional(),
  ailment9: z.number().optional(),
  ailment10: z.number().optional(),
  resist_mag: z.string().optional(),
  resist_fire: z.string().optional(),
  resist_ice: z.string().optional(),
  resist_thun: z.string().optional(),
  resist_wind: z.string().optional(),
  resist_phys: z.string().optional(),
  desc1: languageSchema.optional(),
  desc2: languageSchema.optional(),
  desc3: languageSchema.optional(),
  desc4: languageSchema.optional(),
  hp_rank: z.number().optional(),
  str_rank: z.number().optional(),
  def_rank: z.number().optional(),
  spd_rank: z.number().optional(),
  drops: z.array(nameLinkSchema).optional(),
  locations: z.array(nameLinkSchema).optional(),
});

export const categorySchema: z.ZodType = z.lazy(() =>
  z.object({
    id: z.string(),
    name: languageSchema.optional(),
    icon: z.string().optional(),
    items: z.array(categoryNameLinkSchema).optional(),
    used: z.array(z.lazy(() => ingredientSchema)).optional(),
    add: z.array(categoryNameLinkSchema).optional(),
  }),
);

export const chestDataSchema = z.object({
  region: languageSchema.optional(),
  subregion: languageSchema.optional(),
});

export const bookSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  shop: languageSchema.optional(),
  note: z.string().optional(),
  items: z.array(nameLinkSchema).optional(),
  chest: z.array(chestDataSchema).optional(),
  isDLC: z.boolean().optional(),
});

export const equipmentSchema = z.object({
  hp: z.number().optional(),
  mp: z.number().optional(),
  atk: z.number().optional(),
  dfn: z.number().optional(),
  spd: z.number().optional(),
});

export const characterSchema = z.object({
  id: z.string(),
});

export const recipeTextSchema = z.object({
  text: z.string().optional(),
});

export const componentSchema = z.object({
  name: languageSchema.optional(),
  code: z.string().optional(),
});

export const effectDataSchema = z.object({
  num: z.number().optional(),
  effect: nameLinkSchema.optional(),
  component: componentSchema.optional(),
});

export const effectLineSchema = z.object({
  elem: z.string().optional(),
  order: z.number().optional(),
  maxlv: z.number().optional(),
  restrict: z.number().optional(),
  data: z.array(effectDataSchema).optional(),
});

export const synthItemSchema = z.object({
  item: nameLinkSchema.optional(),
});

export const ingredientSchema: z.ZodTypeAny = z.lazy(() =>
  z.object({
    quantity: z.number().optional(),
    cat: categorySchema.optional(),
    item: categoryNameLinkSchema.optional(),
    synth: synthItemSchema.optional(),
  }),
);

export const recipeIdeaSchema: z.ZodTypeAny = z.object({
  row: z.number().optional(),
  col: z.number().optional(),
  hor: z.boolean().optional(),
  ver: z.boolean().optional(),
  char: nameLinkSchema.optional(),
  item: z.lazy(() => itemSchema).optional(),
});

export const itemSchema: z.ZodType = z.lazy(() =>
  z.object({
    id: z.string(),
    name: languageSchema.optional(),
    kind: z.string().optional(),
    level: z.number().optional(),
    price: z.number().optional(),
    wt: z.number().optional(),
    range: z.string().optional(),
    quantity: z.number().optional(),
    uses: z.number().optional(),
    categories: z.array(categorySchema).optional(),
    add: z.array(categorySchema).optional(),
    locations: z.array(nameLinkSchema).optional(),
    desc1: languageSchema.optional(),
    desc2: languageSchema.optional(),
    desc3: languageSchema.optional(),
    desc4: languageSchema.optional(),
    char1: nameLinkSchema.optional(),
    char2: nameLinkSchema.optional(),
    char3: nameLinkSchema.optional(),
    char4: nameLinkSchema.optional(),
    char: nameLinkSchema.optional(),
    equip: equipmentSchema.optional(),
    book: z.array(bookSchema).optional(),
    chars: z.array(characterSchema).optional(),
    monsters: z.array(nameLinkSchema).optional(),
    ideas: z.array(recipeIdeaSchema).optional(),
    ingredient: z.array(ingredientSchema).optional(),
    effects: z.array(effectLineSchema).optional(),
    components: z.array(componentSchema).optional(),
    traits: z.array(traitSchema).optional(),
    ing: z.array(nameOnly2Schema).optional(),
    shop: languageSchema.optional(),
    chest: z.array(chestDataSchema).optional(),
    seed: nameLinkSchema.optional(),
    isDLC: z.boolean().optional(),
    index: z.number().optional(),
  }),
);

export const majorGatherNodeSchema = z.object({
  region: nameLinkSchema.optional(),
  area: nameLinkSchema.optional(),
  items: z.array(nameLinkSchema).optional(),
  weather: z.string().optional(),
});

export const majorGatherSchema = z.object({
  fish: z.array(majorGatherNodeSchema).optional(),
  net: z.array(majorGatherNodeSchema).optional(),
  hammer: z.array(majorGatherNodeSchema).optional(),
  sickle: z.array(majorGatherNodeSchema).optional(),
  shot: z.array(majorGatherNodeSchema).optional(),
  pickaxe: z.array(majorGatherNodeSchema).optional(),
});

export const seedSchema = z.object({
  name: languageSchema.optional(),
  id: z.string(),
  items: z.array(nameLinkSchema).optional(),
});

export const sophie2Data = [
  { game: 'sophie2', type: 'traits', schema: traitSchema },
  { game: 'sophie2', type: 'effects', schema: effectSchema },
  { game: 'sophie2', type: 'locations', schema: regionSchema },
  { game: 'sophie2', type: 'monsters', schema: monsterSchema },
  { game: 'sophie2', type: 'categories', schema: categorySchema },
  { game: 'sophie2', type: 'recipe-books', schema: bookSchema },
  { game: 'sophie2', type: 'items', schema: itemSchema },
  { game: 'sophie2', type: 'recipe-ideas', schema: recipeIdeaSchema },
  { game: 'sophie2', type: 'major-gathering', schema: majorGatherSchema },
  { game: 'sophie2', type: 'seeds', schema: seedSchema },
];