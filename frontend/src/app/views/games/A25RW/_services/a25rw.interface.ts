export interface NameLink {
    id: string;
    name: string;
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