export interface NameLink {
    slug: string;
    name: string;
}

export interface NameOnly {
    ing: string;
}

export interface NameOnly2 {
    name: string;
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



export interface Effect {
    slug: string;
    name: string;
    desc: string;
    advanced: AdvData[];
    items: NameLink[];
}

export interface GatherItem {
    rank: number;
    priority: number;
    slug: string;
    name: string;
}

export interface GatherNode {
    kind: string;
    tool: string;
    items: GatherItem[];
    major: boolean;
}

export interface Climate {
    weather: string;
    mons: NameLink[];
    nodes: GatherNode[];
}

export interface Chest {
    item: NameLink;
    book: NameLink;
}

export interface Area {
    slug: string;
    name: string;
    climate: Climate[];
    chests: Chest[];
}

export interface Region {
    slug: string;
    name: string;
    areas: Area[];
}

export interface Monster {
    slug: string;
    kind: string;
    name: string;
    index: number;
    char1: string;
    char2: string;
    char3: string;
    char4: string;
    ailment0: number;
    ailment1: number;
    ailment2: number;
    ailment3: number;
    ailment4: number;
    ailment5: number;
    ailment6: number;
    ailment7: number;
    ailment8: number;
    ailment9: number;
    ailment10: number;
    resist_mag: string;
    resist_fire: string;
    resist_ice: string;
    resist_thun: string;
    resist_wind: string;
    resist_phys: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
    hp_rank: number;
    str_rank: number;
    def_rank: number;
    spd_rank: number;
    drops: NameLink[];
    locations: NameLink[];
}

export interface Category {
    slug: string;
    name: string;
    icon: string;
    items: NameLink[];
    used: Ingredient[];
    add: NameLink[];
}

export interface ChestData {
    region: string;
    subregion: string;
}

export interface Book {
    slug: string;
    name: string;
    shop: string;
    note: string;
    items: NameLink[];
    chest: ChestData[];
}

export interface Equip {
    hp: number;
    mp: number;
    atk: number;
    dfn: number;
    spd: number;
}

export interface CharSlug {
    slug: string;
}

export interface RecipeText {
    text: string;
}

export interface SynthItem {
    item: NameLink;
}

export interface Ingredient {
    quantity: number;
    cat: Category;
    item: NameLink;
    synth: SynthItem;
}

export interface Component {
    name: string;
    code: string;
}

export interface EffectData {
    num: number;
    effect: NameLink;
    component: Component;
}

export interface EffectLine {
    elem: string;
    order: number;
    maxlv: number;
    restrict: number;
    data: EffectData[];
}

export interface Item {
    slug: string;
    name: string;
    kind: string;
    level: number;
    price: number;
    wt: number;
    range: string;
    quantity: number;
    uses: number;
    categories: Category[];
    add: Category[];
    locations: NameLink[];
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
    char1: string;
    char2: string;
    char3: string;
    char4: string;
    char: string;
    equip: Equip;
    book: Book[];
    chars: CharSlug[];
    monsters: NameLink[];
    ideas: RecipeText[];
    ingredient: Ingredient[];
    effects: EffectLine[];
    components: Component[];
    traits: Trait[];
    ing: NameOnly2[];
    shop: string;
    chest: ChestData[];
    seed: NameLink;
}


export interface RecipeIdea {
    row: number;
    col: number;
    hor: boolean;
    ver: boolean;
    char: string;
    item: Item;
}

export interface MajorGather {
    fish: MajorNode[];
    net: MajorNode[];
    hammer: MajorNode[];
    sickle: MajorNode[];
    shot: MajorNode[];
    pickaxe: MajorNode[];
}

export interface MajorNode {
    region: string;
    area: string;
    items: NameLink[];
    weather: string;
}

export interface Seed {
    name: string;
    slug: string;
    items: NameLink[];
}