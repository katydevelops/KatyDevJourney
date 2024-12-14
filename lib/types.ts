import { Document } from '@contentful/rich-text-types';

export type BlogPostFIelds = {
    internalName: string;
    slug: string;
    author?: {sys: { id: string } };
    publishedDate: string;
    title: string; 
    subtitle?: string;
    featuredImage?: {
        sys: { id: string };
    }
    content: Document;
}