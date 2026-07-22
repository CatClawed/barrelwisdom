import { effect_translation, item_translation, monster_translation, properties_translation, trait_translation } from "@app/localization/translations/common-strings.ts";
export const crumbDictionary: Record<string, Record<string, string>> = {
  items: item_translation,
  monsters: monster_translation,
  effects: effect_translation,
  trait: trait_translation,
  properties: properties_translation,
};
