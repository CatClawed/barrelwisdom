import { Section } from "./section";
import { SimpleUser } from "./user";

export interface CommentBlog{
    slug: string;
    sec: string;
}

export interface Comment {
    id: number;
    created: Date;
    body: string;
    author: SimpleUser;
    name: string;
    replies: Comment[];
    open: boolean;
    success: boolean;
    form: any;
    approved: boolean;
    parent: number;
    blog: CommentBlog;
    parent_blog: CommentBlog;
}

export interface BlogBase {
    title: string;
    body: string;
    image: string;
    desc: string;
    authorlock: boolean;
    author: string[];
    tags?: Tag[];
    closed: boolean;
}

export interface EditBlog extends BlogBase {
    slug?: string;
    section: string;
}

export interface Blog extends BlogBase {
    id?: number;
    created: Date;
    modified: Date;
    slug: string
    section: Section;
    comments: Comment[];
}

export interface BlogPaginator {
    count: number;
    next: string;
    previous: string;
    results: Blog[];
    tagname: string;
}

export interface Tag {
    id?: number;
    name: string;
    slug?: string;
}