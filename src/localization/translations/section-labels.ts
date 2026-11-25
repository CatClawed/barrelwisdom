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
} from './common-strings';
import { recipe_tree_translation } from './rw';
import { monster_translation as yumia_monster_translation } from './yumia';

type Translation = Record<string, string>;

const commonSectionLabels: Record<string, Translation> = {
  items: item_translation,
  monsters: monster_translation,
  effects: effect_translation,
  traits: trait_translation,
  properties: properties_translation,
  shops: shop_translation,
  catalysts: catalyst_translation,
  'recipe-books': recipebook_translation,
  'recipe-ideas': recipe_ideas_translation,
  'recipe-trees': recipe_tree_translation,
};

const gameSectionLabelOverrides: Record<
  string,
  Record<string, Translation>
> = {
  yumia: {
    monsters: yumia_monster_translation,
  },
};

export function getSectionLabel(
  game: string,
  section: string,
  lang: string,
): string | undefined {
  const gameLabels = gameSectionLabelOverrides[game]?.[section];
  const commonLabels = commonSectionLabels[section];

  return (
    gameLabels?.[lang] ??
    commonLabels?.[lang] ??
    gameLabels?.en ??
    commonLabels?.en
  );
}
