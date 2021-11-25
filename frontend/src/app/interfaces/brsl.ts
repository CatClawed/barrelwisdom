export interface Choice {
    choice: string;
}

export interface SchoolLocation {
    loc: string;
}

export interface NameLink {
    slug: string;
    name: string;
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