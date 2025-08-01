import React from 'react';

interface UseSliderProps {
  totalSlides: number;
}

const useSlider = ({ totalSlides }: UseSliderProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Reset to first slide if totalSlides changes or becomes 0
  React.useEffect(() => {
    if (totalSlides > 0 && currentSlide >= totalSlides) {
      setCurrentSlide(0);
    } else if (totalSlides === 0) {
        setCurrentSlide(0);
    }
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    totalSlides, // Expose totalSlides if needed for display
  };
};

export default useSlider;