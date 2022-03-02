export interface NameLink {
    slug: string;
    name: string;
}

export interface NameOnly {
    ing: string;
}

export interface Trait {
    slug: string;
    grade: number;
    trans_atk: boolean;
    trans_heal: boolean;
    trans_dbf: boolean;
    trans_buff: boolean;
    trans_wpn: boolean;
    trans_arm: boolean;
    trans_acc: boolean;
    trans_tal: boolean;
    trans_exp: boolean;
    trans_syn: boolean;
    name: string;
    desc: string;
    item_set: NameLink[];
    combo1: NameLink;
    combo2: NameLink;
}

export interface AdvData {
    baseAtt: string;
    attTag0: string;
    actTag0: string;
    min_1_0: string;
    max_1_0: string;
    min_2_0: string;
    max_2_0: string;
}

export interface EffectDataSimple {
    effectlines_set: NameLink[]
}

export interface Effect {
    slug: string;
    name: string;
    desc: string;
    advanced: AdvData[];
    effectdata_set:EffectDataSimple[];
}