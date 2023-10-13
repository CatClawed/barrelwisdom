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

export interface RecipeList {
    name: string;
    slug: string;
    x: number;
    y: number;
    book: number;
    unlock1: string;
    unlock2: string;
    unlock3: string;
    rarity: number;
}

export interface Character {
    slug: string;
    name: string;
    title: string;
    role: string;
    elem: string;
    rarity: number;
    color1: string;
    color2: string;
    trait1: Trait;
    trait2: Trait;
    trait3: Trait;
    hp: number;
    spd: number;
    patk: number;
    pdfn: number;
    matk: number;
    mdfn: number;
    rate_hp: number;
    rate_patk: number;
    rate_pdfn: number;
    rate_matk: number;
    rate_mdfn: number;
    res_ice: number;
    res_fir: number;
    res_imp: number;
    res_ltn: number;
    res_pie: number;
    res_sla: number;
    res_wnd: number;
    passive: Passive[];
}

export interface Passive {
    name: string;
    desc: string;
    val: number;
}