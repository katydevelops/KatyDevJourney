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
    <main className="max-w-4xl mx-auto p-6 font-code">
      <h1 className="text-4xl font-bold mb-6 text-accent">Welcome to My Blog</h1>
      <ul className="space-y-6">
        {paginatedPages.map((post) => {
          const { title, content, subtitle, publishedDate } = post.fields;

          return (
            <li key={post.sys.id} className="border panel rounded shadow hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
              <p className="text-muted text-sm">{subtitle || 'No subtitle available.'}</p>
              <p className="text-muted text-xs">
                Published on: {new Date(publishedDate).toLocaleDateString()}
              </p>
              <div className="prose">{documentToReactComponents(content)}</div>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between mt-8">
        {currentPage > 1 && (
          <a href={`?page=${currentPage - 1}`} className="text-accent hover:underline">
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
