export interface Blog {
    id: number
    title: string;
    body: string;
    created: Date;
    updated: Date;
    //author: string;
}

export interface BlogPaginator {
    count: number;
    next: string;
    previous: string;
    results: Blog[];
}