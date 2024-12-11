import { client } from '../lib/contentful';

export const revalidate = 3600;

export default async function Home() {
  const { items: posts } = await client.getEntries({ content_type: 'blogPost' });


  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome!</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.sys.id}>
            <h2>{post.fields.title}</h2>
            <p>{post.fields.except}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}