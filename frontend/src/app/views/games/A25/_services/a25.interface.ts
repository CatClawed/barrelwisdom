export interface NameLink {
    slug: string;
    name: string;
}

export interface CharBasic {
    slug: string;
    name: string;
    title: string;
}

export interface NameOnly2 {
    name: string;
}

export interface Trait {
    slug: string;
    name_en: string;
    name_ja: string;
    desc: string;
    kind: string;
    cat: string;
    val: number[];
    val1: number;
    val5: number;
    items: NameLink[];
    char1: CharBasic[];
    char2: CharBasic[];
    char3: CharBasic[];

    trans_atk: boolean;
    trans_heal: boolean;
    trans_buff: boolean;
    trans_dbf: boolean;
    trans_wep: boolean;
}

export interface Item {
    slug: string;
    name: string;
    desc: string;
    rarity: number;
    material: Material[];
    ing: string[];
    combat: Synth[];
    equip: Synth[];
    recipe: Recipe[];
}

export interface Recipe {
    book: number;
    unlocks: string[];
    colors: string[];
    chars: string[];
    ing: any[]; // array of arrays, technically
}

export interface Synth {
    kind: string;
    val_bad: number;
    val_good: number;
    uses: number;
    area: string;

    good_hp: boolean;
    good_spd: boolean;
    good_patk: boolean;
    good_matk: boolean;
    good_pdef: boolean;
    good_mdef: boolean;

    bad_hp: boolean;
    bad_spd: boolean;
    bad_patk: boolean;
    bad_matk: boolean;
    bad_pdef: boolean;
    bad_mdef: boolean;
}

export interface Material {
    color: string;
    kind: string;
    traits: Trait[];
}
