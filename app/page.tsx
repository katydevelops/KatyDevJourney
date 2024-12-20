import { client } from '../lib/contentful';
import { Entry } from 'contentful';
import { BlogPostFields } from '@/lib/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Rich text renderer

export const revalidate = 3600; // ISR: Revalidate every hour
export const dynamic = 'force-dynamic';


export default async function Home({ searchParams = {} }: { searchParams?: { page?: string } }) {
  const resolvedSearchParams = await searchParams;
  const { items: posts } = await client.getEntries<Entry<BlogPostFields>>({
    content_type: 'pageBlogPost',
  });

  const postsPerPage = 3;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedPages = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl font-bold text-accent text-center mb-6">Welcome to My Blog</h1>
      <ul className="space-y-6">
        {paginatedPages.map((post) => {
          const { title, content, subtitle, publishedDate } = post.fields;

          return (
            <li key={post.sys.id} className="card">
              <h2 className="text-3xl font-semibold text-purpleAccent ">{title}</h2>
              <p className="text-muted text-subtitle text-sm">{subtitle || 'No subtitle available.'}</p>
              <p className="text-yellowAccent text-xs">
                Published on: {new Date(publishedDate).toLocaleDateString()}
              </p>
              <div className="prose">{documentToReactComponents(content)}</div>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between mt-8">
        {currentPage > 1 && (
          <a href={`?page=${currentPage - 1}`} className="text-subtitle hover:underline">
            ← Previous
          </a>
        )}
        {currentPage < totalPages && (
          <a href={`?page=${currentPage + 1}`} className="text-accent hover:underline">
            Next →
          </a>
        )}
      </div>

      <footer className="mt-12 border-t panel pt-4">
        <p>
          You're reading this in VS Blog. Made with ✨ and inspired by VS Code.
          <span className="blinking-cursor"></span>
        </p>
      </footer>
    </main>
  );
}
