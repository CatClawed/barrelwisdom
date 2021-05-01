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

/* Monsters */

/* Locations */