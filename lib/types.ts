import { EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';


export interface BlogPostFields extends EntrySkeletonType {
    contentTypeId: 'pageBlogPost';
    fields: {
      title: string;
      slug: string;
      publishedDate: string;
      content: Document;
      subtitle?: string;
      featuredImage?: {
        sys: { id: string };
      };
    };
  }