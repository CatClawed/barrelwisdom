export interface NameLink {
    id: string;
    name: string;
}

export interface Coord {
    x: number;
    z: number;
    label: number;
}

export interface Trait {
    id: number;
    name: string;
    desc1: string;
    desc2: string;
    wep: boolean;
    arm: boolean;
    acc: boolean;
    atk: boolean;
    heal: boolean;
    buff: boolean;
    dbf: boolean;
    fire: boolean;
    ice: boolean;
    bolt: boolean;
    air: boolean;
    no_level: boolean;
    grade_min: number;
    grade_max: number;
    combo1: NameLink;
    combo2: NameLink;
    combo3: NameLink;
    combo4: NameLink;
    chests: Coord[]
    group: NameLink[];
    mon: NameLink;
    lv_min_rand_range: string;
    lv_max_rand_range: string;
    trait_base: string;
    trait_hash: string;
}

export interface Monster {
    id: number;
    name: string;
    race: NameLink;
    fire: string;
    ice: string;
    bolt: string;
    air: string;
    hp: number;
    atk: number;
    dfn: number;
    spd: number;
    break_hits: number;
    break_phys: boolean;
    location: Coord[];
    trait: NameLink;
    drop: NameLink;
    rare: NameLink;
}

export interface Effect {
    id: number;
    name: string;
    desc1: string;
    desc2: string;
    max_level: number;
    att_tag: string;
    act_tag: string;
    effect_hash: string;
    prm1_lv_min_rand_range: string;
    prm1_lv_max_rand_range: string;
    prm2_lv_min_rand_range: string;
    prm2_lv_max_rand_range: string;
}

export interface EffData {
    lv: number;
    eff: Effect;
}

export interface Rank {
    rank: string;
    quality: number;
    eff: EffData[];
}

export interface RecipeData {
    item: NameLink;
    cat: NameLink;
    eff: Effect;
}

export interface RecipeLevel {
    lv: number;
    fire: number;
    ice: number;
    bolt: number;
    air: number;
    reward: string;
}

export interface Recipe {
    num: number;
    sp: number;
    kind: string;
    level: RecipeLevel[];
    recipe: Recipe[];
}

export interface MaterialRecipeData {
    num: number;
    mat: NameLink;
}

export interface MaterialRecipe {
    core: number;
    recipe: MaterialRecipeData[];
}

export interface QuestData {
    name: string;
    extra: string;
}

export interface Item {
    id: number;
    name: string;
    desc: string;
    isDLC: boolean;
    mats: NameLink[];
    cats: NameLink[];
    resonance: number;
    fire: boolean;
    ice: boolean;
    bolt: boolean;
    air: boolean;
    atk: number;
    dfn: number;
    spd: number;
    ct: number;
    aoe: boolean;
    comfort_goal: number;
    rank: Rank[];
    mons: NameLink[];
    rare: NameLink[];
    location: Coord[];
    recipe: Recipe;
    material: MaterialRecipe;
    quest: QuestData;
}

export interface CategoryHelper {
    recipe: Item[]
}

export interface Category {
    in_cat: NameLink[];
    used: CategoryHelper[];
}