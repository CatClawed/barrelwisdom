import {
  catalyst_translation,
  effect_translation,
  item_translation,
  monster_translation,
  properties_translation,
  recipe_ideas_translation,
  recipebook_translation,
  shop_translation,
  trait_translation,
} from '@app/localization/translations/common-strings';
import { recipe_tree_translation } from '@app/localization/translations/rw';
import { pathData } from '@app/consts';

export async function getComponentRegistry() {
  const registry: Record<string, Record<string, { list: any; detail: any }>> = {};

  for (const { game, section, listPath=true, detailPath=true } of pathData) {
    if (!registry[game]) registry[game] = {};

    const list = !listPath ? undefined : (await import(`@components/Games/${game}/${section}/List.astro`)).default;
    const detail = !detailPath ? undefined : (await import(`@components/Games/${game}/${section}/Detail.astro`)).default;
    registry[game][section] = { list, detail };
  }
  return registry;
}

export const pageTitles: Record<string, Record<string, string>> = {
  items: item_translation,
  effects: effect_translation,
  monsters: monster_translation,
  traits: trait_translation,
  properties: properties_translation,
  shops: shop_translation,
  catalysts: catalyst_translation,
  "recipe-books": recipebook_translation,
  "recipe-ideas": recipe_ideas_translation,
  "recipe-trees": recipe_tree_translation,
};
