import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

// Import the HeroSlideProps type
import { type HeroSlideProps } from '@/types/Hero'; 

const HeroSlide: React.FC<HeroSlideProps> = ({ data }) => (
  <Card className="overflow-hidden border-0 shadow-lg">
    <CardContent className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="space-y-6">
            {/* Category Badge */}
            <Badge
              variant="secondary"
              className="bg-gray-100 text-gray-600 hover:bg-gray-200 w-fit text-sm font-medium"
            >
              {data.category}
            </Badge>

            {/* Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              {data.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {data.description}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{data.date}</span>
            </div>

            {/* Read More Button */}
            <Button
              asChild
              variant="link"
              className="text-blue-500 hover:text-blue-600 p-0 h-auto font-medium text-base"
            >
              <a href={data.readMore} target="_blank" rel="noopener noreferrer">
                Baca Selengkapnya →
              </a>
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative bg-gray-100 rounded-2xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-64 md:h-80 lg:h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </CardContent>
  </Card>
);

export default HeroSlide;