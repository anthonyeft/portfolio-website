"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ThemeCard from "./ui/ThemeCard";
import MagicButton from "./ui/MagicButton";
import { newsNetworks, newsArticles } from "@/data/index.tsx";

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
      <h1 className="heading mb-14">News</h1>

      {/* News Network Logos Carousel */}
      <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-14">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start">
          {newsNetworks.map((logo, index) => (
            <li key={index} className="mx-12">
              <img src={logo.src} alt={logo.alt} className="max-w-none" />
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll items-center justify-center md:justify-start"
          aria-hidden="true"
        >
          {newsNetworks.map((logo, index) => (
            <li key={index} className="mx-12">
              <img src={logo.src} alt={logo.alt} className="max-w-none" />
            </li>
          ))}
        </ul>
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
              width: `${newsArticles.length * 300}px`, // Ensure space for all items
            }}
            animate={{ x: -currentIndex * 300 }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            {newsArticles.map(({ id, title, subheading, img, link }) => (
              <ThemeCard key={id} otherClasses="w-[300px] flex flex-col p-4 rounded-[28px]">
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
