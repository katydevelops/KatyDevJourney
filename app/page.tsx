import { client } from '../lib/contentful';
import { Entry } from 'contentful';
import { BlogPostFields } from '@/lib/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Rich text renderer

export const revalidate = 3600; // ISR: Revalidate every hour

export default async function Home({searchParams}: {searchParams: {page?: string}; }) {
  // Fetch blog posts
  const { items: posts } = await client.getEntries<Entry<BlogPostFields>>({
    content_type: 'pageBlogPost', // Content Type ID in Contentful
  });

// Return the 3 most recent blog posts and keep posts 3 to a page max
const postsPerPage = 3;
const currentPage = Number(searchParams.page) || 1;
const startIndex = (currentPage - 1) * postsPerPage;
const endIndex = startIndex + postsPerPage;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome!</h1>
      <ul className="space-y-6">
        {posts.map((post) => {
          const { title, content, subtitle, publishedDate } = post.fields;

          return (
            <li key={post.sys.id} className="border p-4 rounded shadow hover:shadow-lg">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-gray-600 text-sm">{subtitle || 'No subtitle available.'}</p>
              <p className="text-gray-400 text-xs">
                Published on: {new Date(publishedDate).toLocaleDateString()}
              </p>
              <div className="prose">
                {documentToReactComponents(content)}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}