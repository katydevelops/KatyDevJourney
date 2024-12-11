import { client } from '../../../lib/contentful';

export async function generateStaticParams() {
    const { items: posts } = await client.getEntries({ content_type: 'blogPost'});

    return posts.map((post: any) => ({
        slug: post.fields.slug
    })
}