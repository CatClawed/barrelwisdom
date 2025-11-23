export interface NameLink {
    id: string;
    name: string;
    visible: boolean;
}

export interface Gift {a
    rc: string;
    lc: string;
    character: string;
}

export interface Trait {
    id: string;
    name: string;
    desc: string;
    icon: string;
    grade: number;
    val1_1: number;
    val2_1: number;
    gift: Gift[];
    com: boolean;
    res: boolean;
    inh: boolean;
    boo: boolean;
    wep: boolean;
    arm: boolean;
    acc: boolean;
    exp: boolean;
    syn: boolean;
    sta: boolean;
    item: NameLink;
    combo1: NameLink;
    combo2: NameLink;
}

export interface Effect {
    id: string;
    name: string;
    desc: string;
    grade: number;
    val1_1: number;
    val1_2: number;
    val2_1: number;
    val2_2: number;
    val3_1: number;
    val3_2: number;
    val4_1: number;
    val4_2: number;
    val5_1: number;
    val5_2: number;
    items: NameLink[];
    dlc: boolean;
}

export type IndexedDescriptions = {
    [key: `desc${number}`]: string;
    [key: `char${number}`]: string;
}

export interface Area {
    floor_min: number;
    floor_max: number;
    area: string;
    tool: string;
    rank: number;
}

export interface Monster extends IndexedDescriptions {
    id: number;
    name: string;
    race: string;
    index: number;
    areas: Area[];
    hp: number;
    atk: number;
    dfn: number;
    spd: number;
    physical: number;
    magic: number;
    fire: number;
    ice: number;
    air: number;
    bolt: number;
    blind: number;
    paralysis: number;
    poison: number;
    burn: number;
    taunt: number;
    sleep: number;
    daze: number;
    frostbite: number;
    drops: NameLink[];
}

export interface Category {
    items: NameLink[];
    addcat: NameLink[];
    used: NameLink[];
}

export interface Book {
    name: string;
    areas: Area[];
    shop: NameLink[];
}

export interface Recipe {
    ing: NameLink;
    cat: NameLink;
}

export interface ItemMix {
    combo: NameLink[];
    name: string;
}

export interface QuestData {
    name: string;
    char: string;
}

export interface Tree {
    row: number;
    down: boolean;
    left: boolean;
    recipe: NameLink;
    ing: NameLink;
    ancient: boolean;
    char: string;
    hide: boolean;
}

export interface Trees {
    name: string;
    nodes: Tree[];
}

export interface Color {
    l: string;
    r: string;
}

export interface Item extends IndexedDescriptions {
    id: number;
    name: string;
    colors: Color[];
    icon: string;
    categories: NameLink[];
    add: NameLink[];
    dlc: boolean;
    effects: Effect[];
    quantity: number;
    uses: number;
    book: Book;
    recipe: Recipe[];
    trait: NameLink;
    shop: NameLink[];
    drop: NameLink[];
    mix: ItemMix[];
    quest: QuestData[];
    tree: Tree[];
}

export interface Slot {
    item: NameLink;
    price: number;
    level_min: number;
    level_max: number;
    grade: number;
}

export interface Shop {
    name: string;
    slots: Slot[];
}