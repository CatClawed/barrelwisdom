export interface ItemName {
    slugname: string;
    name: string;
}

export interface Trait {
    slugname: string;
    index: number;
    note: string;
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
