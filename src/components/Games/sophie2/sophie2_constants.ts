export const filterButtons = [
  { filterKey: 'attack', icon: 'type-attack' },
  { filterKey: 'heal', icon: 'type-heal' },
  { filterKey: 'debuffer', icon: 'type-debuff' },
  { filterKey: 'buffer', icon: 'type-buff' },
  { filterKey: 'weapon', icon: 'type-weapon' },
  { filterKey: 'armor', icon: 'type-armor' },
  { filterKey: 'accessory', icon: 'type-accessory' },
  { filterKey: 'amulet', icon: 'category-talismans' },
  { filterKey: 'field', icon: 'type-exploration' },
  { filterKey: 'mix', icon: 'type-synthesis' },
  { filterKey: 'material', icon: 'ryza2-material', diffsvg: 'main.svg?v=1' },
  { filterKey: 'important', icon: 'category-key-items' },
];

export const effectColors: Record<string, string> = {
  '1': '39b4f6',
  '2': '34d80d',
  '3': 'f7e331',
  '4': 'ff8242',
  '5': 'debee3',
};
export const effectIcons: Record<string, string> = {
  '1': 'ice',
  '2': 'wind',
  '3': 'lightning',
  '4': 'fire',
  '5': 'light',
};