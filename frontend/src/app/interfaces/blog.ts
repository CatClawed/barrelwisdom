export interface Blog {
    id: number
    created: Date;
    updated: Date;
    title: string;
    slugtitle: string
    body: string;
    imgurl: string;
    description: string;
    author: number[];
    authorlock: boolean;
    tags: number[];
    section: number;
}

export interface BlogPaginator {
    count: number;
    next: string;
    previous: string;
    results: Blog[];
}