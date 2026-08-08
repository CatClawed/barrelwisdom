import {
  effect_translation,
  item_translation,
  monster_translation,
  properties_translation,
  shop_translation,
  trait_translation,
} from '@app/localization/translations/common-strings';
import { recipe_tree_translation } from '@app/localization/translations/rw';

export interface PathConfig {
  game: string;
  section: string;
  fragment: boolean;
  listOnly?: boolean;
  mainClass?: string;
}

export const pathData: PathConfig[] = [
  // { game: 'totori', section: 'items',    fragment: true },
  // { game: 'totori', section: 'traits',   fragment: false },
  // { game: 'totori', section: 'monsters', fragment: true },
  // { game: 'totori', section: 'effects',  fragment: false },
  //
  // { game: 'escha', section: 'items',      fragment: true },
  // { game: 'escha', section: 'properties', fragment: false },
  // { game: 'escha', section: 'monsters',   fragment: true },
  // { game: 'escha', section: 'effects',    fragment: false },
  //
  // { game: 'shallie', section: 'items',      fragment: true },
  // { game: 'shallie', section: 'properties', fragment: false },
  // { game: 'shallie', section: 'monsters',   fragment: true },
  // { game: 'shallie', section: 'effects',    fragment: false },
  //
  // { game: 'firis', section: 'items',    fragment: true },
  // { game: 'firis', section: 'traits',   fragment: false },
  // { game: 'firis', section: 'monsters', fragment: true },
  // { game: 'firis', section: 'effects',  fragment: false },
  //
  // { game: 'ryza2', section: 'items',    fragment: true },
  // { game: 'ryza2', section: 'traits',   fragment: false },
  // { game: 'ryza2', section: 'monsters', fragment: true },
  // { game: 'ryza2', section: 'effects',  fragment: false },
  //
  // { game: 'sophie2', section: 'items',    fragment: true },
  // { game: 'sophie2', section: 'traits',   fragment: false },
  // { game: 'sophie2', section: 'monsters', fragment: true },
  // { game: 'sophie2', section: 'effects',  fragment: false },
  //
  { game: 'resleriana-red-white', section: 'items',    fragment: true },
  { game: 'resleriana-red-white', section: 'traits',   fragment: false },
  { game: 'resleriana-red-white', section: 'monsters', fragment: true },
  { game: 'resleriana-red-white', section: 'effects', fragment: false },
  { game: 'resleriana-red-white', section: 'recipe-trees', fragment: false, listOnly: true, mainClass: "medium-page" },
  { game: 'resleriana-red-white', section: 'shops', fragment: false, listOnly: true, mainClass: "medium-page" },

  { game: 'yumia', section: 'items',    fragment: true },
  { game: 'yumia', section: 'traits',   fragment: true },
  { game: 'yumia', section: 'monsters', fragment: true },
  { game: 'yumia', section: 'effects',  fragment: false },
]

export async function getComponentRegistry() {
  const registry: Record<string, Record<string, { list: any; detail: any }>> = {};

  for (const { game, section, listOnly=false } of pathData) {
    if (!registry[game]) registry[game] = {};

    const list = (await import(`@components/Games/${game}/${section}/List.astro`)).default;
    const detail = listOnly ? undefined : (await import(`@components/Games/${game}/${section}/Detail.astro`)).default;
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
  "recipe-trees": recipe_tree_translation,
  shops: shop_translation,
};
