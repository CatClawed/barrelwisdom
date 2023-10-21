export interface NameLink {
    slugname: string;
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
    slugname: string;
    icon_name: string;
}

export interface RegionName {
    name: string;
    slugname: string;
    parentslug: string;
}

export interface Region {
    region: NameLink;
}

export interface EffectDataSimple {
    effectlines_set: NameLink[]
}

export interface Effect {
    slugname: string;
    name: string;
    desc: string;
    effectdata_set: EffectDataSimple[];
}

export interface Property {
    slugname: string;
    name: string;
    desc: string;
    grade: number;
    points: number;
    bomb: boolean;
    heal: boolean;
    weapon: boolean;
    armor: boolean;
    accessory: boolean;
    combo1: NameLink;
    combo2: NameLink;
    combo3: NameLink;
    item_set: NameLink[];
}

export interface MonsterFull {
    slugname: string;
    name: string;
    desc: string;
    race: string;
    kind: string;
    note: string;
    hp: number;
    atk: number;
    defen: number;
    spd: number;
    level: number;
    exp: number;
    cole: number;
    locations: RegionName[];
    item_set: NameLink[];
}

export interface MonsterList {
    slugname: string;
    name: string;
    level: number;
    kind: string;
}

export interface Ingredient {
    ing: string;
}

export interface IngredientFull {
    item: NameLink;
    category: NameLink;
}

export interface Character {
    chars: NameOnly[];
}

export interface EffLineData {
    effect: NameLink;
    number: number;
    min_elem: number;
    max_elem: number;
}

export interface EffectLine {
    effects: EffLineData[];
    elem: string;
    hidden: boolean;
    order: number;
}

export interface Equipment {
    hp: number;
    mp: number;
    atk: number;
    defen: number;
    spd: number;
}

export interface ItemList {
    slugname: string;
    name: string;
    kind: string;
    categories: CategoryIcon[];
    ingredient_set: Ingredient[];
    level: number;
    evalue: number;
    effect: number;
    slots: number;
    fire: boolean;
    water: boolean;
    wind: boolean;
    earth: boolean;
}

export interface Disassembly {
    dis: NameLink[];
}

export interface Disassembled {
    parent: NameLink[];
}

export interface ItemFull {
    slugname: string;
    name: string;
    desc: string;
    kind: string;
    categories: NameLink[];
    level: number;
    evalue: number;
    effect: number;
    slots: number;
    fire: boolean;
    water: boolean;
    wind: boolean;
    earth: boolean;
    properties: NameLink[];
    ingredient_set: IngredientFull[];
    characterequip_set: Character[];
    equip_set: Equipment[];
    effectlines_set: EffectLine[];
    size: number;
    locations: RegionName[];
    book_set: NameLink[];
    monsters: NameLink[];
    disassembly_set: Disassembly[];
    disassembled_set: Disassembled[];
}

export interface Book {
    slugname: string;
    name: string;
    desc: string;
    items: NameLink[];
    note: string;
}

export interface CategoryItem {
    slugname: string;
    name: string;
    level: number;
    evalue: number;
    fire: boolean;
    water: boolean;
    wind: boolean;
    earth: boolean;
    slots: number;
}

export interface IngCat {
    synthitem: CategoryItem[];
}

export interface CategoryData {
    name: string;
    slugname: string;
    icon_name: string;
    item_set: CategoryItem[];
    ingredientcat: IngCat[];
}

export interface FieldData {
    slugname: string;
    name: string;
    ingredients: NameLink[];
    rare: NameLink[];
    relic: NameLink[];
    monsters: NameLink[];
    note: string;
}

export interface AreaData {
    name: string;
    slugname: string;
    fields: FieldData[];
}