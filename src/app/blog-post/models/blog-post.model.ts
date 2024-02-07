export interface BlogPost {
  id: string;
  title: string;
  urlHandle: string;
  shortDescription: string;
  content: string;
  featuredImageUrl: string;
  publishedDate: Date;
  author: string;
  isVisible: boolean;
}
