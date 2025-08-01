// api/fetchLatestNews.ts
import { type ApiResponse } from '@/types/LatestNews';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchLatestNews = async (): Promise<ApiResponse> => {
  const response = await fetch(`${API_BASE_URL}/cnn/terbaru/`);
  if (!response.ok) {
    throw new Error('Failed to fetch latest news');
  }
  return response.json();
};
