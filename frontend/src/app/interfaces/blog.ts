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

export interface CommentBlog{
    slugtitle: string;
    sec: string;
}

export interface Comment {
    id: number;
    created: Date;
    body: String;
    author: SimpleUser;
    name: String;
    replies: Comment[];
    open: Boolean;
    success: boolean;
    form: any;
    approved: boolean;
    parent: number;
    blog: CommentBlog;
    parent_blog: CommentBlog;
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
    comments: Comment[]
    closed: boolean;
}

export interface BlogPaginator {
    count: number;
    next: string;
    previous: string;
    results: Blog[];
}