import { z } from 'astro:content';
import { languageSchema, nameLinkSchema, indexedDescriptions } from './common_schema';

const descSchema = indexedDescriptions(4, ["desc"]);
const indexedSchema = descSchema.extend({
  char1: z.string().optional(),
  char2: z.string().optional(),
  char3: z.string().optional(),
  char4: z.string().optional(),
})

const componentSchema = z.object({
  name: languageSchema.optional(),
  color: z.string().optional(),
  value: z.number().optional(),
});

const advDataSchema = z.object({
  attTag0: z.string().optional(),
  actTag0: z.string().optional(),
  min_1_0: z.string().optional(),
  max_1_0: z.string().optional(),
  min_2_0: z.string().optional(),
  max_2_0: z.string().optional(),
});

export const raceSchema = z.object({
  icon: z.string().optional(),
  name: languageSchema.optional(),
});

export const nameOnly2Schema = z.object({
  name: z.string().optional(),
});

export const equipSchema = z.object({
  hp: z.number().optional(),
  mp: z.number().optional(),
  atk: z.number().optional(),
  dfn: z.number().optional(),
  spd: z.number().optional(),
});

export const recipeTextSchema = z.object({
  text: z.string().optional(),
});

export const masterySchema = z.object({
  desc: languageSchema.optional(),
});

export const masteryLineSchema = z.object({
  level: z.number().optional(),
  masteries: z.array(masterySchema).optional(),
});

const effectRefSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
});

export const effectDataSchema = z.object({
  num: z.number().optional(),
  effect: effectRefSchema.optional(),
  component: componentSchema.optional(),
});

export const effectLineSchema = z.object({
  color: z.string().optional(),
  order: z.number().optional(),
  data: z.array(effectDataSchema).optional(),
});

export const shopSlotSchema = z.object({
  item: nameLinkSchema.optional(),
});

export const ingredientSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    quantity: z.number().optional(),
    cat: categorySchema.optional(),
    item: nameLinkSchema.optional(),
    synth: nameLinkSchema.optional(),
  })
);

const catItemSchema = nameLinkSchema.extend({
  add: z.boolean().optional(),
});

export const categorySchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  icon: z.string().optional(),
  in_cat: z.array(catItemSchema).optional(),
  used: z.array(catItemSchema).optional(),
  add: z.boolean().optional(), // yes I need both don't fuck with it
});


export const actionS = z.object({
  en: z.array(z.string()).optional(),
  ja: z.array(z.string()).optional(),
  sc: z.array(z.string()).optional(),
  tc: z.array(z.string()).optional(),
})

export const catalystSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    item: itemSchema.optional(),
    size: z.number().optional(),
    color: z.array(z.string()).optional(),
    action: actionS.optional(),
  })
);

export const traitSchema = indexedSchema.extend({
  id: z.string(),
  index: z.number().optional(),
  grade: z.number().optional(),
  trans_atk: z.boolean().optional(),
  trans_heal: z.boolean().optional(),
  trans_wpn: z.boolean().optional(),
  trans_arm: z.boolean().optional(),
  trans_acc: z.boolean().optional(),
  trans_syn: z.boolean().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  item_set: z.array(nameLinkSchema).optional(),
  combo1: nameLinkSchema.optional(),
  combo2: nameLinkSchema.optional(),
  advanced: z.array(advDataSchema).optional(),
});

export const effectSchema = indexedSchema.extend({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  desc: languageSchema.optional(),
  items: z.array(nameLinkSchema).optional(),
  advanced: z.array(advDataSchema).optional(),
});

export const monsterSchema = indexedSchema.extend({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  race: languageSchema.optional(),
  kind: z.string().optional(),
  slash: z.number().optional(),
  impact: z.number().optional(),
  pierce: z.number().optional(),
  magic: z.number().optional(),
  fire: z.number().optional(),
  ice: z.number().optional(),
  light: z.number().optional(),
  ail: z.number().optional(),
  hp: z.number().optional(),
  atk: z.number().optional(),
  defen: z.number().optional(),
  spd: z.number().optional(),
  exp: z.number().optional(),
  cole: z.number().optional(),
  level: z.number().optional(),
  item_set: z.array(nameLinkSchema).optional(),
  locations: z.array(nameLinkSchema).optional(),
  note: z.string().optional(),
  isDX: z.boolean().optional(),
});

export const recipeConditionSchema = z.object({
  index: z.number().optional(),
  condition: languageSchema.optional(),
  number: z.number().optional(),
  item: nameLinkSchema.optional(),
  monster: nameLinkSchema.optional(),
  race: raceSchema.optional(),
  category: nameLinkSchema.optional(),
});

export const recipeUnlockSchema = z.object({
  level: z.number().optional(),
  condition: z.array(recipeConditionSchema).optional(),
});

export const recipeIdeaSchema = z.object({
  unlocks: z.array(recipeUnlockSchema).optional(),
});

export const recipeIdeaListSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  ideas: z.array(recipeIdeaSchema).optional(),
  book: nameLinkSchema.optional(),
  recipe_points: z.number().optional(),
});

export const itemSchema = indexedSchema.extend({
  id: z.string(),
  index: z.number().optional(),
  name: languageSchema.optional(),
  kind: z.string().optional(),
  level: z.number().optional(),
  price: z.number().optional(),
  wt: z.number().optional(),
  stun: z.number().optional(),
  range: z.string().optional(),
  quantity: z.number().optional(),
  uses: z.number().optional(),
  dmin: z.number().optional(),
  dmax: z.number().optional(),
  chars: z.array(z.string()).optional(),
  categories: z.array(categorySchema).optional(),
  locations: z.array(nameLinkSchema).optional(),
  equip: equipSchema.optional(),
  book: nameLinkSchema.optional(),
  monsters: z.array(nameLinkSchema).optional(),
  ideas: z.array(recipeIdeaSchema).optional(),
  ingredients: z.array(ingredientSchema).optional(),
  effectlines_set: z.array(effectLineSchema).optional(),
  components: z.array(componentSchema).optional(),
  trait: traitSchema.optional(),
  ing: z.array(nameOnly2Schema).optional(),
  shopslot_set: z.array(nameLinkSchema).optional(),
  isDLC: z.boolean().optional(),
  isDX: z.boolean().optional(),
  fixed_components: z.array(componentSchema).optional(),
  random_components: z.array(componentSchema).optional(),
  catalyst: catalystSchema.optional(),
  catalysts: z.array(categorySchema).optional(),
  masteryline_set: z.array(masteryLineSchema).optional(),
  recipes: z.array(nameLinkSchema).optional(),
});

export const shopSchema = z.object({
  id: z.string(),
  name: languageSchema.optional(),
  shopslots: z.array(shopSlotSchema).optional(),
});

export const firisData = [
  { game: 'firis', type: 'monsters', schema: monsterSchema },
  { game: 'firis', type: 'effects', schema: effectSchema },
  { game: 'firis', type: 'traits', schema: traitSchema },
  { game: 'firis', type: 'shops', schema: shopSchema },
  { game: 'firis', type: 'races', schema: raceSchema },
  { game: 'firis', type: 'items', schema: itemSchema },
  { game: 'firis', type: 'categories', schema: categorySchema },
]
