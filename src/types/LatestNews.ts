// types/LatestNews.ts
export interface NewsPost {
  category: string;
  title: string;
  description: string;
  pubDate: string;
  link: string;
  thumbnail: string;
}

export interface NewsData {
  posts: NewsPost[];
}

export interface ApiResponse {
  data: NewsData;
  message: string;
  status: number;
}