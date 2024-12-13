export type ContentfulResponse<T> = {
    items: T[];
    total: number;
    skip: number;
    limit: number;
};

export type BlogPost = {
    fields: {
        slug: string;
        title: string;
        shortDescription?: string;
        pubishedDate: string;
        featuredImage?: {
            sys: { id: string };
        };
        author?: {
            sys: { id:string };
        };
    };
};
