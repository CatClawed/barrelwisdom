export interface NameLink {
    slug: string;
    name: string;
}

export interface NameOnly {
    ing: string;
}

/* Traits */

export interface TraitSimple {
    slug: string;
    name: string;
    desc: string;
}

export interface Trait {
    slug: string;
    note: string;
    grade: number;
    trans_atk: boolean;
    trans_heal: boolean;
    trans_dbf: boolean;
    trans_buff: boolean;
    trans_wpn: boolean;
    trans_arm: boolean;
    trans_acc: boolean;
    name: string;
    desc: string;
    item_set: NameLink[];
}

/* Effects */

export interface ExtraEffs {
    slug: string;
    name: string;
    efftype: string;
    effsub: string;
    desc: string;
}

export interface EffectLine {
    itemslug: string;
    itemname: string;
    effslug: string;
    effname: string;
    effdesc: string;
    line: number;
    number: number;
}

export interface Effect {
    slug: string;
    note: string;
    name: string;
    desc: string;
    efftype: string;
    effsub: string;
    effects: ExtraEffs[];
    effectline_set: NameLink[];
    attTag0: string;
    actTag0: string;
    min_1_0: string;
    max_1_0: string;
    min_2_0: string;
    max_2_0: string;
    attTag1: string;
    actTag1: string;
    min_1_1: string;
    max_1_1: string;
    min_2_1: string;
    max_2_1: string;
}

/* Items */

export interface Item {
    slug: string;
    name: string;
    itemtype: string;
    isDLC: boolean;
    fire: boolean;
    ice: boolean;
    lightning: boolean;
    wind: boolean;
    elementvalue: number;
    category: NameLink[];
    ingredient_set: NameOnly[];
}

export interface ItemC {
    slug: string;
    name: string;
    isDLC: boolean;
    fire: boolean;
    ice: boolean;
    lightning: boolean;
    wind: boolean;
    elementvalue: number;
}

export interface ItemWrapper {
    synthitem: ItemC;
}

export interface IngEff {
    number: number;
    value: number;
    noneffect: string;
    effect: string;
    essence: boolean;
}

export interface Ingredient {
    item: NameLink;
    required: boolean;
    fire: boolean;
    ice: boolean;
    lightning: boolean;
    wind: boolean;
    unlockelem: number;
    ingeffects_set: IngEff[];
}

export interface Usable {
    wt: number;
    stun: number;
    cc: number;
    cooltime: number;
    effrange: string;
}

export interface EffectLine {
    slug: string;
    name: string;
    desc: string;
    line: number;
    number: number;
}

export interface EVLink {
    result: NameLink;
    item1: NameLink;
    item2: NameLink;
}

export interface RecipeMorph {
    parent: NameLink;
    order: number;
}

export interface ItemFull {
    slug: string;
    name: string;
    desc: string;
    level: number;
    itemtype: string;
    isDLC: boolean;
    fire: boolean;
    ice: boolean;
    lightning: boolean;
    wind: boolean;
    elementvalue: number;
    category: NameLink[];
    shop: NameLink;
    trait: TraitSimple;
    skilltree: boolean;
    location: LocName[];
    ingredient_set: Ingredient[];
    usableitem_set: Usable[];
    effectline_set: EffectLine[];
    evlinkitems_set: EVLink[];
    recipemorphs_set: RecipeMorph[];
    monster_set: NameLink[];
    note: string;
}

export interface CategoryItem {
    slug: string;
    name: string;
    items: ItemC[];
    ingredients: ItemC[];
}

/* Shop Develop */

export interface ShopDevelop {
    item: NameLink;
    cat1: NameLink;
    cat2: NameLink;
    addProd: NameLink;
    addCat: NameLink;
}

/* Monsters */

export interface Monster {
    slug: string;
    name: string;
    isDLC: boolean;
    size: string;
    montype: string;
}

export interface MonsterFull {
    slug: string;
    name: string;
    isDLC: boolean;
    drops: NameLink[];
    size: string;
    montype: string;
    location: LocName[];
    resist_phys: string;
    resist_mag: string;
    resist_fire: string;
    resist_ice: string;
    resist_light: string;
    resist_wind: string;
    hp_rank: number;
    str_rank: number;
    def_rank: number;
    spd_rank: number;
    note: string;
    desc: string;
}

/* Locations */

export interface LocName {
    slug: string;
    name: string;
    reg: string;
}

export interface ItemNode {
    rank1: NameLink;
    rank2: NameLink;
    rank3: NameLink;
    priority1: number;
    priority2: number;
    priority3: number;
    tool: string;
}

export interface ItemArea {
    slug: string;
    name: string;
    gatherdata: ItemNode[];
    text: string;
}

export interface Region {
    name: string;
    slug: string;
    areas: ItemArea[];
}