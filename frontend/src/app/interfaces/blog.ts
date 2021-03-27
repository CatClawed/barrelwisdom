import { Section } from "./section";
import { Tag } from "./tag";
import { SimpleUser } from "./user";

export interface EditBlog {
    id: number
    created: Date;
    modified: Date;
    title: string;
    slugtitle: string
    body: string;
    image: string;
    description: string;
    authorlock: boolean;
    author: number[];
    section: number;
    tags: number[];
}

export interface Blog {
    id: number
    created: Date;
    modified: Date;
    title: string;
    slugtitle: string
    body: string;
    image: string;
    description: string;
    authorlock: boolean;
    author: SimpleUser[];
    section: Section;
    tags: Tag[];
}

export interface BlogPaginator {
    count: number;
    next: string;
    previous: string;
    results: Blog[];
}