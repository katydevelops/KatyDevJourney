import { client } from '../lib/contentful';
import { ContentfulResponse, BlogPost } from '@/lib/types';

export const revalidate = 3600;

export default async function Home() {
  const { items: posts } = await client.getEntries({ content_type: 'blogPost' });


  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome!</h1>
      <ul className="space-y-4">
        {posts.map((post: BlogPost) => (
          <li key={post.fields.slug} className="border p-4 rounded shadow hover:shadow-lg">
            <h2 className="text-2xl font-semibold">{post.fields.title}</h2>
            <p className="text-gray-600">{post.fields.except}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}