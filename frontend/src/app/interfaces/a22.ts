/* Traits */

export interface ItemName {
    slugname: string;
    name: string;
}

export interface Trait {
    slugname: string;
    index: number;
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
    description: string;
    item_set: ItemName[];
}

/* Effects */

export interface ExtraEffs {
    slugname: string;
    name: string;
    efftype: string;
    desc: string;
}

export interface EffectLine {
    itemslug: string;
    itemname: string;
    effslug: string;
    effname: string;
    effdescription: string;
    line: number;
    number: number;
}

export interface Effect {
    slugname: string;
    index: number;
    note: string;
    name: string;
    description: string;
    efftype: string;
    effects: ExtraEffs[];
}

export interface EffectFull {
    slugname: string;
    index: number;
    note: string;
    name: string;
    description: string;
    efftype: string;
    effects: ExtraEffs[];
    parent: ExtraEffs[];
    effectline_set: EffectLine[];
}

/* Items */

// generically named in case I reuse...
export interface Name {
    slugname: string;
    name: string;
}

/* Monsters */

export interface Monster {
    slugname: string;
    name: string;
    index: number;
    isDLC: boolean;
    drops: Name[];
    size: string;
    montype: string;
}

export interface MonsterFull {
    slugname: string;
    name: string;
    index: number;
    isDLC: boolean;
    drops: Name[];
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
    description: string;
    //ailment1: number;
    //ailment2: number;
    //ailment3: number;
    //ailment4: number;
    //ailment5: number;
    //ailment6: number;
    //ailment7: number;
    //ailment8: number;
    //ailment9: number;
    //ailment10: number;
}

/* Locations */

export interface LocName {
    slugname: string;
    name: string;
    reg: string;
}

export interface ItemNode {
    rank1: Name;
    rank2: Name;
    rank3: Name;
    priority1: number;
    priority2: number;
    priority3: number;
    tool: string;
}

export interface ItemArea {
    slugname: string;
    name: string;
    gatherdata: ItemNode[];
    text: string;
}

export interface Region {
    name: string;
    slugname: string;
    areas: ItemArea[];
}