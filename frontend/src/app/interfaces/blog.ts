export interface Blog {
    id: number
    title: string;
    body: string;
    created: Date;
    updated: Date;
    //author: string;
    //display-author: boolean;
    //seo: string;
    //num-comments: number;
    //comments: Comment[];
    //comments-allowed: boolean;
    //comments-closed: boolean;
    //thumb-url: string;
    //tags: string[];
}

export interface BlogPaginator {
    count: number;
    next: string;
    previous: string;
    results: Blog[];
}