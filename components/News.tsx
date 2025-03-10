"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ThemeCard from "./ui/ThemeCard";
import MagicButton from "./ui/MagicButton";
import { newsNetworks, newsArticles } from "@/data/index.tsx";
import Image from 'next/image';

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Fixed card width and gap
  const mobileCardWidth = 260;
  const desktopCardWidth = 300;
  const cardGap = 16;
  
  // Get current card width based on screen size
  const getCardWidth = () => {
    return typeof window !== 'undefined' && window.innerWidth < 640 ? mobileCardWidth : desktopCardWidth;
  };
  
  useEffect(() => {
    const updateContainerWidth = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
      }
    };
    
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);
  
  const duplicatedLogos = [...newsNetworks, ...newsNetworks, ...newsNetworks];

  const handleNext = () => {
    const cardWidth = getCardWidth();
    if (currentIndex < newsArticles.length - 1) {
      setCurrentIndex(currentIndex + 1);
      controls.start({ x: -currentIndex * (cardWidth + cardGap) - (cardWidth + cardGap) });
    }
  };

  const handlePrev = () => {
    const cardWidth = getCardWidth();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      controls.start({ x: -currentIndex * (cardWidth + cardGap) + (cardWidth + cardGap) });
    }
  };
  
  // Calculate how many cards are visible
  const getVisibleCards = () => {
    const cardWidth = getCardWidth();
    if (containerWidth === 0) return 1;
    return Math.max(1, Math.floor(containerWidth / (cardWidth + cardGap)));
  };
  
  // Handle drag end to determine next/previous slide
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const cardWidth = getCardWidth();
    const threshold = cardWidth / 4;
    
    if (info.offset.x > threshold && currentIndex > 0) {
      handlePrev();
    } else if (info.offset.x < -threshold && currentIndex < newsArticles.length - getVisibleCards()) {
      handleNext();
    } else {
      // Snap back if drag wasn't enough
      controls.start({ x: -currentIndex * (cardWidth + cardGap) });
    }
  };

  return (
    <section id="news" className="flex flex-col py-12 px-0 sm:px-6">
      <h1 className="heading mb-16 px-4 sm:px-0">News</h1>

      <div className="w-full overflow-hidden relative h-8 md:h-10 mb-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_7%,_black_93%,transparent_100%)]">
        <div className="flex w-max animate-scroll h-full">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-2 md:mx-5 items-center h-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* News Articles Carousel */}
      <div className="relative flex justify-center items-center w-full">
        {/* Left Arrow - Hidden on mobile */}
        <button
          onClick={handlePrev}
          className={`hidden sm:block p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-color duration-200 mr-4 ${
            currentIndex === 0 ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <FaChevronLeft className="text-white" />
        </button>

        {/* Articles */}
        <div 
          ref={carouselRef}
          className="overflow-hidden w-full sm:[mask-image:_linear-gradient(to_right,black_0,_black_calc(100%-128px),transparent_100%)]"
        >
          <motion.div
            className="flex px-4 sm:px-0"
            style={{
              gap: `${cardGap}px`,
            }}
            animate={controls}
            initial={{ x: 0 }}
            transition={{ type: "spring", stiffness: 40 }}
            drag="x"
            dragConstraints={{ 
              left: -(newsArticles.length - getVisibleCards()) * (getCardWidth() + cardGap), 
              right: 0 
            }}
            onDragEnd={handleDragEnd}
          >
            {newsArticles.map(({ id, title, subheading, img, link }) => (
              <div 
                key={id} 
                style={{ 
                  width: `${getCardWidth()}px`, 
                  flexShrink: 0,
                }}
              >
                <ThemeCard otherClasses="flex flex-col p-3 sm:p-4 rounded-2xl sm:rounded-3xl h-full">
                  {/* Image Section */}
                  <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden mb-3 sm:mb-4">
                    <Image 
                      src={img} 
                      alt={title} 
                      width={300} 
                      height={160} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">{title}</h3>

                  {/* Subheading */}
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-neutral-500 line-clamp-2">{subheading}</p>

                  {/* Read More Button */}
                  <div className="flex justify-end mt-auto">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <MagicButton
                        title="Read More"
                        otherClasses="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                      />
                    </a>
                  </div>
                </ThemeCard>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow - Hidden on mobile */}
        <button
          onClick={handleNext}
          className={`hidden sm:block p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-color duration-200 ml-4 ${
            currentIndex >= newsArticles.length - getVisibleCards() ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>
      
      {/* Mobile Pagination Indicator */}
      <div className="flex justify-center mt-6 sm:hidden space-x-1.5">
        {Array.from({ length: newsArticles.length }).map((_, index) => (
          <div 
            key={index} 
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-4 bg-white" : "w-1.5 bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default News;