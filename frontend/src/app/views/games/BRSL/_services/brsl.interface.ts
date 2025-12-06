export interface NameOnly {
    name: string;
}

export interface NameLink {
    slug: string;
    name: string;
}

// Fragments + Dates

export interface Choice {
    choice: string;
}

export interface SchoolLocation {
    loc: string;
}

export interface Fragment {
    size: number;
    gear: number;
    name: string;
    eff: string;
    desc: string;
    actTag0: string;
    min1_0: string;
    max1_0: string;
    min2_0: string;
    max2_0: string;
    actTag1: string;
    min1_1: string;
    max1_1: string;
}

export interface Event {
    fragment: Fragment[];
    isDLC: boolean;
    location: SchoolLocation;
    character: NameLink;
    choices: Choice[];
    expand: boolean;
}

// Demons

export interface DemonList {
    slug: string;
    name: string;
    isDLC: boolean;
}

export interface DemonFull {
    slug: string;
    name: string;
    desc: string;
    char: string;
    region_set: NameLink[],
    isDLC: boolean;
    vit: number;
    atk: number;
    dfn: number;
    slash: string;
    pierce: string;
    shock: string;
    tremor: string;
    warp: string;
    drops: NameLink[];
}

// Items

export interface Effect {
    name: string;
    desc: string;
    attTag0: string;
    actTag0: string;
    min_1_0: string;
    max_1_0: string;
    min_2_0: string;
    max_2_0: string;
    actTag1: string;
    min_1_1: string;
    max_1_1: string;
}

export interface EffData {
    effect: Effect;
    number: number;
}

export interface EffectLine {
    effectdata: EffData;
    line: string;
    //number: number;
}

export interface SkillLine {
    effect1: Effect;
    effect2: Effect;
    effect3: Effect;
    line: string;
}

export interface Ingredient {
    num: number;
    item: NameLink;
    category: NameOnly;
}

export interface ItemList {
    slug: string;
    name: string;
    itemtype: string;
    isDLC: boolean;
    category: NameOnly[];
}

export interface ItemFull {
    slug: string;
    name: string;
    desc: string;
    char: string;
    note: string;
    itemtype: string;
    isDLC: boolean;
    category: NameOnly[];
    region_set: NameLink[];
    effline_set: EffectLine[];
    skillline_set: SkillLine[];
    ingredient_set: Ingredient[];
    demon_set: NameLink[];
}

// Units

export interface Unit {
    name: string;
    desc: string;
    char1: string;
    char2: string;
    char3: string;
    char4: string;
}

// Facilities

export interface FEffect {
    name: string;
    desc: string;
}

export interface FData {
    num: number;
    item: NameLink;
    category: NameOnly;
    effect: FEffect;
}

export interface FIngredient {
    level: number;
    data: FData;
}

export interface FEffData {
    effect: FEffect;
}

export interface FEffectLine {
    effectdata: FEffData;
    line: string;
}

export interface FacilityList {
    slug: string;
    name: string;
    size: number;
    isDLC: boolean;
}

export interface FacilityFull {
    slug: string;
    name: string;
    desc: string;
    char: string;
    size: number;
    isDLC: boolean;
    facilityeffline_set: FEffectLine[];
    facilitying_set: FIngredient[];
}

// Facility Sets

export interface FacilitySet {
    effect: FEffect;
    facilities: NameLink[];
}

// Skills

export interface SkillData {
    name: string;
    desc: string;
    level: string;
    ether: number;
    ether_rec: number;
    knockback: number;
    range: string;
    actTag0: string;
    attTag0: string;
    min_1_0: string;
    max_1_0: string;
    min_1_1: string;
    max_1_1: string;
    actTag1: string;
    attTag1: string;
    min_2_0: string;
    max_2_0: string;
}

export interface Skill {
    name: string;
    slug: string;
    skill_set: SkillData[];
}

// Regions

export interface DemonData {
    demon: NameLink;
    once: boolean;
}

export interface Area {
    slug: string;
    name: string;
    map: string;
    items: NameLink[];
    demons: DemonData[];
}

export interface Region {
    slug: string;
    name: string;
    areas: Area[];
}