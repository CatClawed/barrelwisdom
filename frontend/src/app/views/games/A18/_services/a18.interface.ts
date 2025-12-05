export interface NameLink {
    slug: string;
    name: string;
}

export interface Race {
    icon: string;
    name: string;
}

export interface NameOnly2 {
    name: string;
}

export interface Catalyst {
    item: Item;
    size: number;
    color: string[];
    action: string[];
}

export interface Trait {
    slug: string;
    grade: number;
    trans_atk: boolean;
    trans_heal: boolean;
    trans_wpn: boolean;
    trans_arm: boolean;
    trans_acc: boolean;
    trans_syn: boolean;
    name: string;
    desc: string;
    item_set: NameLink[];
    combo1: NameLink;
    combo2: NameLink;
    advanced: AdvData[]
}

export interface AdvData {
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

export interface Monster {
    slug: string;
    kind: string;
    race: string;
    name: string;
    char: string[];
    slash:  number;
    impact: number;
    pierce: number;
    magic:  number;
    fire:   number;
    ice:    number;
    light:  number;
    ail:    number;
    desc: string[];
    hp:    number;
    atk:   number;
    defen: number;
    spd:   number;
    exp:   number;
    cole:  number;
    level: number;
    item_set:  NameLink[];
    locations: NameLink[];
    note: string;
    isDX: boolean;
}

export interface Category {
    slug: string;
    name: string;
    icon: string;
    items: NameLink[];
    used: Ingredient[];
    add: NameLink[];
}


export interface Equip {
    hp: number;
    mp: number;
    atk: number;
    dfn: number;
    spd: number;
}

export interface RecipeText {
    text: string;
}

export interface Ingredient {
    quantity: number;
    cat: Category;
    item: NameLink;
    synth: NameLink;
}

export interface Component {
    name: string;
    color: string;
    value: number;
}

export interface EffectData {
    num: number;
    effect: NameLink;
    component: Component;
}

export interface EffectLine {
    color: string;
    order: number;
    data: EffectData[];
}

export interface Item {
    slug: string;
    name: string;
    kind: string;
    level: number;
    price: number;
    wt: number;
    stun: number;
    range: string;
    quantity: number;
    uses: number;
    dmin: number;
    dmax: number;
    categories: Category[];
    add: Category[];
    locations: NameLink[];
    desc: string[];
    char: string[];
    equip: Equip;
    book: NameLink;
    chars: string[];
    monsters: NameLink[];
    ideas: RecipeText[];
    ingredients: Ingredient[];
    effectlines_set: EffectLine[];
    components: Component[];
    trait: Trait;
    ing: NameOnly2[];
    shopslot_set: NameLink[];
    isDLC: boolean;
    isDX: boolean;
    fixed_components: Component[];
    random_components: Component[];
    catalyst: Catalyst;
    catalysts: Category[];
    masteryline_set: MasteryLine[];
    recipes: NameLink[];
}

export interface MasteryLine {
    level: number;
    masteries: Mastery[];
}

export interface Mastery {
    desc: string;
}

export interface RecipeCondition {
    condition: string;
    number: number;
    item: NameLink;
    monster: NameLink;
    race: Race;
    category: NameLink
}

export interface RecipeUnlock {
    level: number;
    condition: RecipeCondition[];
}


export interface RecipeIdea {
    unlocks: RecipeUnlock[];
}

export interface RecipeIdeaList {
    slug: string;
    name: string;
    ideas: RecipeIdea[];
    book: NameLink;
    recipe_points: number;
}

export interface Shop {
    slug: string;
    name: string;
    shopslots: ShopSlot[];
}

export interface ShopSlot {
    item: NameLink;
}