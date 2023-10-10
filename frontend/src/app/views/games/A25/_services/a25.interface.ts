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
    kind: NameLink;
    cat: string;
    val: number[];
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


