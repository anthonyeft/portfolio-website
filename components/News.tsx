"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ThemeCard from "./ui/ThemeCard";
import MagicButton from "./ui/MagicButton";
import { newsNetworks, newsArticles } from "@/data/index.tsx"; // Ensure these are in your data folder

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < newsArticles.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="news" className="flex flex-col py-12">
      <h1 className="heading mb-8">News</h1>

      {/* News Network Logos Carousel */}
      <div className="relative flex flex-col items-center py-6 mb-10">
        <h2 className="heading mb-4">Featured In</h2>
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black-100 to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-6"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {newsNetworks.map(({ id, src, alt }) => (
              <img key={id} src={src} alt={alt} className="h-12 w-auto opacity-75" />
            ))}
          </motion.div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black-100 to-transparent z-10 pointer-events-none" />
        </div>
      </div>


      {/* News Articles Carousel */}
      <h2 className="heading mb-6">Recent Articles</h2>
      <div className="relative flex items-center space-x-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700"
          disabled={currentIndex === 0}
        >
          <FaChevronLeft className="text-white" />
        </button>

        {/* Articles */}
        <div className="flex overflow-hidden w-full max-w-4xl space-x-4">
          {newsArticles.slice(currentIndex, currentIndex + 3).map(({ id, title, subheading, img, link }) => (
            <ThemeCard key={id} otherClasses="w-[300px] flex flex-col p-4">
              {/* Image Section */}
              <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                <img src={img} alt={title} className="w-full h-full object-cover" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 line-clamp-1">{title}</h3>

              {/* Subheading */}
              <p className="text-sm mb-4 text-neutral-500 line-clamp-2">{subheading}</p>

              {/* Read More Button */}
              <div className="flex justify-end">
                <MagicButton
                  title="Read More"
                  otherClasses="text-sm px-4 py-2"
                  onClick={() => window.open(link as string, "_blank")}
                />
              </div>
            </ThemeCard>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700"
          disabled={currentIndex >= newsArticles.length - 3}
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default News;
