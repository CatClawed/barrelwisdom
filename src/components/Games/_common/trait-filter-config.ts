interface TraitFilterEntry {
  field: string;
  icon: string;
  filterable?: boolean;
}

const traitFilters: Record<string, TraitFilterEntry[]> = {
  firis: [
    { field: 'trans_syn', icon: 'synthesis' },
    { field: 'trans_atk', icon: 'attack' },
    { field: 'trans_heal', icon: 'heal' },
    { field: 'trans_wpn', icon: 'weapon' },
    { field: 'trans_arm', icon: 'armor' },
    { field: 'trans_acc', icon: 'accessory' },
  ],
  sophie2: [
    { field: 'trans_syn', icon: 'type-synthesis', filterable: false },
    { field: 'trans_atk', icon: 'type-attack' },
    { field: 'trans_heal', icon: 'type-heal' },
    { field: 'trans_dbf', icon: 'type-debuff' },
    { field: 'trans_buff', icon: 'type-buff' },
    { field: 'trans_wpn', icon: 'type-weapon' },
    { field: 'trans_arm', icon: 'type-armor' },
    { field: 'trans_acc', icon: 'type-accessory' },
    { field: 'trans_tal', icon: 'category-talismans' },
    { field: 'trans_exp', icon: 'type-exploration' },
  ],
  totori: [
    { field: 'synth', icon: 'synthesis', filterable: false },
    { field: 'usable', icon: 'bomb' },
    { field: 'ingot', icon: 'weapon' },
    { field: 'cloth', icon: 'armor' },
    { field: 'accessory', icon: 'accessory' },
  ],
  yumia: [
    { field: 'atk', icon: 'category-bombs' },
    { field: 'heal', icon: 'trait-heal' },
    { field: 'buff', icon: 'trait-buff' },
    { field: 'dbf', icon: 'trait-debuff' },
    { field: 'wep', icon: 'category-weapons' },
    { field: 'arm', icon: 'category-armor' },
    { field: 'acc', icon: 'category-accessories' },
  ],
  escha: [
    { field: 'bomb', icon: 'bomb' },
    { field: 'heal', icon: 'heal' },
    { field: 'buff', icon: 'buff' },
    { field: 'weapon', icon: 'weapon' },
    { field: 'armor', icon: 'armor' },
    { field: 'accessory', icon: 'accessory' },
  ],
  shallie: [
    { field: 'bomb', icon: 'bomb' },
    { field: 'heal', icon: 'heal' },
    { field: 'weapon', icon: 'weapon' },
    { field: 'armor', icon: 'armor' },
    { field: 'accessory', icon: 'accessory' },
  ],
  'resleriana-red-white': [
    { field: 'com', icon: 'trait-combat-items' },
    { field: 'res', icon: 'trait-heal' },
    { field: 'inh', icon: 'trait-inhibitors' },
    { field: 'boo', icon: 'trait-boost-items' },
    { field: 'wep', icon: 'trait-weapons' },
    { field: 'arm', icon: 'category-38' },
    { field: 'acc', icon: 'category-39' },
    { field: 'exp', icon: 'gather' },
    { field: 'syn', icon: 'trait-synthesis' },
    { field: 'sta', icon: 'category-40' },
  ],
};

function getTraitFilters(game: string): TraitFilterEntry[] {
  const filters = traitFilters[game];
  if (!filters) throw new Error(`Unknown trait filter configuration for game "${game}"`);
  return filters;
}

export function traitIconsFor(game: string) {
  return getTraitFilters(game).map(({ field, icon }) => ({ key: field, icon }));
}

export function traitFilterButtonsFor(game: string) {
  return getTraitFilters(game)
    .filter((entry) => entry.filterable !== false)
    .map(({ field, icon }) => ({ filterKey: field, icon }));
}

export function traitFilterValues(item: object, game: string): string {
  return getTraitFilters(game)
    .filter((entry) => entry.filterable !== false && Reflect.get(item, entry.field))
    .map((entry) => entry.field)
    .join(',');
}
