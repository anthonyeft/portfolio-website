"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";
import ThemeCard from "./ui/ThemeCard";
import MagicButton from "./ui/MagicButton";
import { newsArticles } from "@/data/index.tsx";
import Image from "next/image";

const News = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Setup the carousel API
  const onSelect = () => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  };

  useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="news" className="flex flex-col py-12 px-0 sm:px-6">
      <h1 className="heading mb-16 px-4 sm:px-0">News</h1>

      {/* News Articles Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {newsArticles.map(({ id, title, subheading, img, link }) => (
            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <ThemeCard otherClasses="flex flex-col p-3 sm:p-4 rounded-2xl sm:rounded-3xl h-full">
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-3 sm:mb-4">
                    <Image src={img} alt={title} width={300} height={160} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">{title}</h3>

                  <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-neutral-500 line-clamp-2">{subheading}</p>

                  <div className="flex justify-end mt-auto">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <MagicButton title="Read More" otherClasses="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2" />
                    </a>
                  </div>
                </ThemeCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls - Hidden on mobile */}
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      {/* Pagination Dots - Only visible on mobile */}
      <div className="flex justify-center mt-6 sm:hidden gap-1.5">
        {newsArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? "w-6 bg-white" 
                : "w-2 bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default News;