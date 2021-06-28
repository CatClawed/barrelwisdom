export interface NameLink {
    slugname: string;
    name: string;
}

export interface NameOnly {
    name: string;
}

export interface DemonSimple {
    slugname: string;
    name: string;
    race: string;
}

export interface Demon {
    slugname: string;
    name: string;
    race: string;
    flavor: string;
    hp: number;
    atk: number;
    dfn: number;
    agi: number;
    luk: number;
    locations: NameOnly[];
    item_set: NameLink[];
    slash: boolean;
    impact: boolean;
    pierce: boolean;
    heart: boolean;
}

export interface IngredientSet {
    item: NameLink;
    num: number;
}

export interface Item {
    slugname: string;
    name: string;
    description: string;
    effect: string;
    acquisition: string;
    kind: string;
    ingredient_set: IngredientSet[];
    missions: NameLink[];
    locations: NameOnly[];
    demons: DemonSimple[];
}

export interface Mission {
    slugname: string;
    name: string;
    character: string;
    points: number;
    reward: string;
    kind: string;
    details: string;
    chapter: number;
    location: string;
}

export interface FragmentEffect {
    slugname: string;
    name: string;
    effect: string;
    upgrades: IngredientSet[];
}

export interface Skill {
    name: string;
    effect: string;
    character: string;
    rng: string;
    lvl: number;
    wt: number;
    slots: number;
    isRankUp: boolean;
    atk: number;
    dfn: number;
    sup: number;
    tec: number;
}