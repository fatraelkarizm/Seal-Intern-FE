// hooks/useNews.ts
import { useQuery } from '@tanstack/react-query'; // Asumsi Anda menggunakan React Query
import { fetchLatestNews } from '@/api/fetchLatestNews'; // Import fungsi fetch API

export const useLatestNews = () => {
  return useQuery({
    queryKey: ['latestNews'], 
    queryFn: fetchLatestNews, 
  });
};