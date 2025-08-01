// types/Hero.ts
export interface HeroItem {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readMore: string;
  image: string;
}

export interface HeroSlideProps {
  data: HeroItem;
}
