"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ThemeCard from "./ui/ThemeCard";
import MagicButton from "./ui/MagicButton";
import { newsNetworks, newsArticles } from "@/data/index.tsx";
import Image from 'next/image';

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const duplicatedLogos = [...newsNetworks, ...newsNetworks];

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
      <h1 className="heading mb-16">News</h1>

      <div className="overflow-hidden h-10 mb-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_7%,_black_93%,transparent_100%)]">
        <div className="flex animate-scroll h-full">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center h-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-full w-auto mr-12"
              />
            </div>
          ))}
        </div>
      </div>

      {/* News Articles Carousel */}
      <div className="relative flex justify-center items-center space-x-4 w-full">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className={`p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-color duration-200 ${
            currentIndex === 0 ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <FaChevronLeft className="text-white" />
        </button>

        {/* Articles */}
        <div className="overflow-hidden w-full [mask-image:_linear-gradient(to_right,black_0,_black_calc(100%-128px),transparent_100%)]">
          <motion.div
            className="flex space-x-4"
            style={{
              width: `${newsArticles.length * 300}px`,
            }}
            animate={{ x: -currentIndex * 300 }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            {newsArticles.map(({ id, title, subheading, img, link }) => (
              <ThemeCard key={id} otherClasses="w-[300px] flex flex-col p-4 rounded-3xl">
                {/* Image Section */}
                <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                  <Image src={img} alt={title} width={300} height={160} className="w-full h-full object-cover" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm mb-2 line-clamp-2">{title}</h3>

                {/* Subheading */}
                <p className="text-sm mb-4 text-neutral-500 line-clamp-2">{subheading}</p>

                {/* Read More Button */}
                <div className="flex justify-end mt-auto">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <MagicButton
                      title="Read More"
                      otherClasses="text-sm px-4 py-2"
                    />
                  </a>
                </div>
              </ThemeCard>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className={`p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-color duration-200 ${
            currentIndex >= newsArticles.length - 3 ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
};


export default News;
