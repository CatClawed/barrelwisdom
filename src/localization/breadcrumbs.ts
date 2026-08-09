import { effect_translation, item_translation, monster_translation, properties_translation, recipebook_translation, trait_translation } from "@app/localization/translations/common-strings.ts";
export const crumbDictionary: Record<string, Record<string, string>> = {
  items: item_translation,
  monsters: monster_translation,
  effects: effect_translation,
  traits: trait_translation,
  properties: properties_translation,
  "recipe-books": recipebook_translation,
};

// the boolean just asks whether to tack on the language code
export const defaultBreadcrumbs: Record<string, [string, boolean]> = {
  totori: ['items', true],
  escha: ['items', true],
  shallie: ['items', true],
  firis: ['items', true],
  sophie2: ['items', true],
  lulua: ['easy-final-boss-guide', false],
  resleri: ['items', true],
  'resleriana-red-white': ['items', true],
  ryza: ['faq', false],
  ryza2: ['items', true],
  ryza3: ['how-to-get-infinite-gems', false],
  yumia: ['items', true],
  bluereflection: ['items', true],
  'second-light': ['items', true],
  noa2: ['maps', false],
};
