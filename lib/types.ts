type ContentfulResponse<T> = {
    items: T[];
    total: number;
    skip: number;
    limit: number;
};

type BlogPost = {
    fields: {
        slug: string;
        title: string;
        content: string;
    };
};

const { items: posts }: ContentfulResponse<BlogPost> = await client.getEntries({
    content_type: 'blogPost',
})