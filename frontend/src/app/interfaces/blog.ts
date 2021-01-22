export interface Blog {
    id: number
    title: string;
    body: string;
    created: Date;
    updated: Date;
    //author: string;
    //display-author: boolean;
    //seo: string;
    //thumb-url: string;
    //tags: string[];
}

export interface BlogPaginator {
    count: number;
    next: string;
    previous: string;
    results: Blog[];
}