export interface AddBlogPost {
  title: string;
  urlHandle: string;
  shortDescription: string;
  content: string;
  featuredImageUrl: string;
  publishedDate: Date;
  author: string;
  isVisible: boolean;
  categories: string[];
}
