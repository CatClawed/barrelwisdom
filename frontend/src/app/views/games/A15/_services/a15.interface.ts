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

export interface Effect {
    slugname: string;
    name: string;
    desc: string;
    effectline_set: NameLink[];
}

export interface Property {
    slugname: string;
    name: string;
    desc: string;
    grade: number;
    points: number;
    bomb: boolean;
    heal: boolean;
    buff: boolean;
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
    hp: number;
    atk: number;
    defen: number;
    spd: number;
    level: number;
    exp: number;
    cole: number;
    fire: number;
    water: number;
    wind: number;
    earth: number;
    locations: NameLink[];
    drops: NameLink[];
    isStrong: boolean;
    isDX: boolean;
    isDLC: boolean;
    item_set: NameLink[];
}

export interface MonsterList {
    slugname: string;
    name: string;
    desc: string;
    race: string;
    isStrong: boolean;
    isDX: boolean;
    isDLC: boolean;
}

export interface MonsterLevel {
    slugname: string;
    name: string;
    level: number;
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

export interface EffectLine {
    effect: NameLink;
    elem: string;
    number: number;
    min_elem: number;
    max_elem: number;
}

export interface Equipment {
    hp: number;
    mp: number;
    atk: number;
    defen: number;
    spd: number;
    fire: number;
    water: number;
    wind: number;
    earth: number;
}

export interface ItemList {
    slugname: string;
    name: string;
    itype: string;
    categories: CategoryIcon[];
    ingredient_set: Ingredient[];
    level: number;
    evalue: number;
    effect: number;
    fire: boolean;
    water: boolean;
    wind: boolean;
    earth: boolean;
    isDLC: boolean;
    isDX: boolean;
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
    itype: string;
    categories: NameLink[];
    level: number;
    evalue: number;
    effect: number;
    fire: boolean;
    water: boolean;
    wind: boolean;
    earth: boolean;
    properties: NameLink[];
    ingredient_set: IngredientFull[];
    characterequip_set: Character[];
    equip_set: Equipment[];
    effectline_set: EffectLine[];
    size: number;
    locations: RegionName[];
    book_set: NameLink[];
    monsters: NameLink[];
    disassembly_set: Disassembly[];
    disassembled_set: Disassembled[];
    relic_set: Region[];
}

export interface Book {
    slugname: string;
    name: string;
    desc: string;
    items: NameLink[];
    acquisition: string;
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

export interface Relic {
    area: RegionName[];
    item: NameLink;
    disassembly_set: Disassembled[];
}

export interface AreaData {
    slugname: string;
    name: string;
    subarea: string;
    items: NameLink[];
    rare: NameLink[];
    maxitem: NameLink[];
    monsters: NameLink[];
    fieldevent: NameOnly[];
    note: string;
}

export interface RegionData {
    name: string;
    slugname: string;
    areas: AreaData[];
    relic_set: Relic[];
    strong: MonsterLevel[];
    note: string;
    grade: string;
}