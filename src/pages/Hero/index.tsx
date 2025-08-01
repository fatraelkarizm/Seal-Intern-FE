// pages/hero/index.tsx
import React from "react";

// Import UI
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import hooks and shared components
import { useLatestNews } from "@/hooks/useLatestNews";
import useSlider from "@/hooks/useSlider";

// Import Components
import LoadingState from "@/components/shared/LoadingState";
import ErrorState from "@/components/shared/ErrorState";
import EmptyState from "@/components/shared/EmptyState";
import HeroSlide from "@/components/HeroSlide";

// Import types
import { type HeroItem } from "@/types/Hero";

const Hero = () => {
  const { data, isLoading, isError, error } = useLatestNews();

  const heroData: HeroItem[] = React.useMemo(() => {
    if (!data || !data.data || !data.data.posts) return [];
    return data.data.posts.slice(0, 5).map((post) => ({
      id: post.link,
      category: post.category || "Berita",
      title: post.title,
      description: post.description,
      date: new Date(post.pubDate).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readMore: post.link,
      image: post.thumbnail,
    }));
  }, [data]);

  const { currentSlide, nextSlide, prevSlide, totalSlides } = useSlider({
    totalSlides: heroData.length,
  });

  const currentData = heroData[currentSlide];
  if (isLoading) {
    return <LoadingState message="Loading berita terbaru..." />;
  }

  if (isError) {
    return <ErrorState message={`Gagal memuat berita. ${error?.message}`} />;
  }

  if (heroData.length === 0) {
    return <EmptyState message="Tidak ada berita ditemukan." />;
  }

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
      <HeroSlide data={currentData} />

      {/* Navigation Controls */}
      {totalSlides > 0 && (
        <div className="flex items-center justify-center mt-6 gap-4">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full w-10 h-10 border-gray-300 cursor-pointer hover:bg-[#0090FF] hover:text-white"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Page Counter */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mx-4">
            <span className="font-medium">{currentSlide + 1}</span>
            <span>dari</span>
            <span>{totalSlides}</span>
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full w-10 h-10 border-gray-300 cursor-pointer hover:bg-[#0090FF] hover:text-white"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-4 h-4 " />
          </Button>
        </div>
      )}
    </section>
  );
};

export default Hero;
