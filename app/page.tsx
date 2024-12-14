import { client } from '../lib/contentful';
import { Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 
import { BlogPostFields } from '@/lib/types';

export const revalidate = 3600; // ISR: Revalidate every hour

const { items: posts } = await client.getEntries<Entry<BlogPostFields>>({
  content_type: 'pageBlogPost', 
});

// export default async function Home() {
//   const { items: posts } = await client.getEntries({
//     content_type: 'pageBlogPost', 
//   });

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome!</h1>
      <ul className="space-y-6">
        {posts.map((post) => {
          // Access fields directly and assert their type safely
          const { title, content, shortDescription, publishedDate } = post.fields as {
            title: string;
            content: any;
            shortDescription?: string;
            publishedDate: string;
          };

          return (
            <li key={post.sys.id} className="border p-4 rounded shadow hover:shadow-lg">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-gray-600 text-sm">{shortDescription || 'No subtitle available.'}</p>
              <p className="text-gray-400 text-xs">
                Published on: {new Date(publishedDate).toLocaleDateString()}
              </p>
              <div className="prose">
                {post.fields.content
                  ? documentToReactComponents(post.fields.content) // Render rich text
                  : 'No content available.'} 
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
