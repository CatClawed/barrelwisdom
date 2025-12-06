export interface NameLink {
    slug: string;
    name: string;
}

export interface NameOnly {
    name: string;
}

export interface CategoryIcon {
    name: string;
    icon_name: string;
}

export interface Category {
    name: string;
    slug: string;
    icon_name: string;
}

export interface RegionName {
    name: string;
    slug: string;
    parentslug: string;
}

export interface Region {
    region: NameLink;
}

export interface Effect {
    slug: string;
    name: string;
    desc: string;
    effectline_set: NameLink[];
}

export interface Trait {
    slug: string;
    name: string;
    desc: string;
    cost: number;
    synth: boolean;
    usable: boolean;
    ingot: boolean;
    cloth: boolean;
    accessory: boolean;
    item_set: NameLink[];
}

export interface MonsterFull {
    slug: string;
    name: string;
    desc: string;
    race: string;
    hp: number;
    atk: number;
    defen: number;
    spd: number;
    level: number;
    locations: RegionName[];
    item_set: NameLink[];
    isDX: boolean;
    note: string;
}

export interface MonsterList {
    slug: string;
    name: string;
    level: number;
    race: string;
    isDX: boolean;
}

export interface Ingredient {
    ing: string;
}

export interface IngredientFull {
    item: NameLink;
    category: NameLink;
    num: number;
}

export interface Character {
    chars: NameOnly[];
}

export interface EffectLine {
    effects: NameLink;
    number: number;
    itemnum: number;
}

export interface Equipment {
    hp: number;
    mp: number;
    lp: number;
    atk: number;
    defen: number;
    spd: number;
    chars: Character[];
    material: NameLink[];
}

export interface ItemList {
    slug: string;
    name: string;
    categories: CategoryIcon[];
    ingredient_set: Ingredient[];
    level: number;
    item_type: string;
}

export interface ItemFull {
    slug: string;
    name: string;
    desc: string;
    item_type: string;
    item_subtype: string;
    categories: NameLink[];
    level: number;
    traits: NameLink;
    ingredient_set: IngredientFull[];
    equip_set: Equipment[];
    effectline_set: EffectLine[];
    locations: RegionName[];
    book_set: NameLink[];
    monsters: NameLink[];
    isDX: boolean;
    isDLC: boolean;
    time: number;
    mp: number;
    price: number;
    uses: number;
}

export interface Book {
    slug: string;
    name: string;
    desc: string;
    items: NameLink[];
    note: string;
    isDX: boolean;
    isDLC: boolean;
}

export interface CategoryItem {
    slug: string;
    name: string;
    level: number;
}

export interface IngCat {
    synthitem: CategoryItem[];
}

export interface CategoryData {
    name: string;
    slug: string;
    icon_name: string;
    item_set: CategoryItem[];
    ingredientcat: IngCat[];
}

export interface FieldData {
    slug: string;
    name: string;
    unlock: string;
    ingredients: NameLink[];
    monsters: NameLink[];
    note: string;
}

export interface AreaData {
    name: string;
    slug: string;
    fields: FieldData[];
}