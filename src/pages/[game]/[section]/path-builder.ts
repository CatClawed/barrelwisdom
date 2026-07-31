import {
  effect_translation,
  item_translation,
  monster_translation,
  properties_translation,
  trait_translation,
} from '@app/localization/translations/common-strings';

export const pathData = [
  { game: 'yumia', section: 'items', fragment: true },
  { game: 'yumia', section: 'traits', fragment: true },
  //{ game: 'yumia', section: 'monsters', fragment: true },
  { game: 'yumia', section: 'effects', fragment: false },
]

export async function getComponentRegistry() {
  const registry: Record<string, Record<string, { list: any; detail: any }>> = {};

  for (const { game, section } of pathData) {
    if (!registry[game]) registry[game] = {};

    const list = (await import(`@components/Games/${game}/${section}/List.astro`)).default;
    const detail = (await import(`@components/Games/${game}/${section}/Detail.astro`)).default;

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
};
