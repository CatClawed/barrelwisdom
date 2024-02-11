export interface NameLink {
    slug: string;
    name: string;
    color: string;
}

export interface CharBasic {
    slug: string;
    name: string;
    title: string;
    color1: string;
    color2: string;
}

export interface NameOnly2 {
    name: string;
}

export interface Trait {
    slug: string;
    name: string;
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
    note: string;
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
    limit: string;
    quest: Quest[];
    note: string;
    gbl: boolean;
    colors: string[];
}

export interface NameTrans {
    name: string;
}

export interface Quest {
    dungeon: NameTrans[];
    scorebattle: SB[];
}

export interface SB {
    difficulty: number;
    scorebattle: SBB[]
}

export interface SBB {
    chapter: string;
    section: string;
}

export interface DungeonName {
    name: string;
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
    ing: NameLink[];
}

export interface RecipeList {
    name: string;
    slug: string;
    x: number;
    y: number;
    book: number;
    unlocks: string[];
    rarity: number;
}

export interface RecipePage {
    desc: string;
    min_x: number;
    max_x: number;
    recipes: RecipeList[];
    gbl: boolean;
}

export interface RecipeTab {
    name: string;
    pages: RecipePage[];
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
    limit: string;
    passives: Passive[];
    skills: Skill[];
    note: string;
    gbl: boolean;
}

export interface Skill {
    name: string;
    desc: string;
    elem: string;
    area: string;
    wt: number;
    val0: number;
    val1: number;
    val2: number;
    val3: number;
    val4: number;
    val5: number;
    val6: number;
    val0_2: number;
    val1_2: number;
    val2_2: number;
    val3_2: number;
    val4_2: number;
    val5_2: number;
    val6_2: number;
    pow1: number;
    pow2: number;
    pow3: number;
    pow4: number;
    pow5: number;
    break1: number;
    break2: number;
    break3: number;
    break4: number;
    break5: number;
}

export interface Passive {
    name: string;
    desc: string;
    val: number;
}

export interface Memoria {
    slug: string;
    name: string;
    rarity: number;
    skill_name: string;
    skill_desc: string;
    lv1: number;
    lv2: number;
    lv3: number;
    lv4: number;
    lv5: number;
    hp30: number;
    spd30: number;
    patk30: number;
    pdef30: number;
    matk30: number;
    mdef30: number;
    limit: string;
    note: string;
    gbl: boolean;
}

export interface Research {
    slug: string;
    name: string;
    desc: string;
    kind: string;
    val: number;
    cole: number;
    req: string;
}

export interface Update {
    time: Date;
    characters: Character[];
    items: Item[];
    memoria: Memoria[];
}

export interface Reward {
    item: Item[];
    num: number;
}

export interface DungeonFloor {
    order: number;
    combat_level: number;
    rewards: Reward[];
}

export interface Dungeon {
    name: string;
    floors: DungeonFloor[];
    effects: string[];
}

export interface ScoreDifficulties {
    difficulty: number;
    combat_level: number;
    rewards: Reward[];
    exp: number;
    cole: number;
}

export interface ScoreBattle {
    name: string;
    chapter: 1;
    section: 1;
    difficulties: ScoreDifficulties[];
}

export interface Tower {
    floor: number;
    combat_level: number;
    rewards: Reward[];
    effects: string[];
}