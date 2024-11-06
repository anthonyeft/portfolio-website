'use client';

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { FaBrain, FaBolt, FaTrophy, FaImage } from "react-icons/fa";

import ThemeCard from "./ui/ThemeCard";

import { tools } from "@/data";
import { PiShareNetwork, PiStethoscope } from "react-icons/pi";


const About = () => {
  const [startTyping, setStartTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setStartTyping(true);
    }
  }, [isInView]);

  return (
    <section
      id="about"
      className="flex flex-col items-center py-12 min-h-screen"
    >
      {/* Heading */}
      <h1 className="heading">About Me</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-14" >
        {/* Biography Card */}
        <ThemeCard otherClasses="col-span-3 relative bg-black-200 p-10 rounded-[50px] overflow-hidden">
          <h2 className="text-2xl font-bold text-white mb-4">Biography</h2>
          <div className="text-lg text-white tracking-wide" ref={ref}>
            {startTyping && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi, I'm Anthony Efthimiadis.")
                    .callFunction(() => {
                      const cursorElement = document.querySelector('.Typewriter__cursor') as HTMLElement;
                      if (cursorElement) {
                        cursorElement.style.display = 'none';
                      }
                    })
                    .start();
                }}
                options={{
                  cursor: "|",
                }}
              />
            )}
            <p className="mt-4 leading-relaxed text-justify tracking-wide">
              I am a sophomore at Oakville Trafalgar H.S. with a passion for A.I. in biomedical research. I specialize in developing accurate and computationally efficient image processing and deep learning pipelines for rapid disease screening. Recently, my research has garnered awards, most notably the First Place Grand Award in Robotics and Intelligent Machines at the International Science & Engineering Fair. My project focuses on creating AI tools for accurate skin cancer diagnosis.
            </p>
          </div>
        </ThemeCard>

        {/* Interests Card */}
        <ThemeCard otherClasses="rounded-[50px]">
          <h2 className="text-2xl font-bold text-white mb-4">Interests</h2>

          <ul className="list-none space-y-4 text-white line-clamp-1">
            <li className="flex items-center">
              <FaImage className="w-5 h-7 mr-3" />
              Image Processing
            </li>
            <li className="flex items-center">
              <PiShareNetwork className="w-6 h-6 mr-3" />
              Deep Learning
            </li>
            <li className="flex items-center">
              <PiStethoscope className="w-6 h-6 mr-3" />
              Diagnostics
            </li>
          </ul>
        </ThemeCard>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">

        {/* Traits Card */}
        <ThemeCard otherClasses="rounded-[50px]">
          <h2 className="text-2xl font-bold text-white mb-4">Traits</h2>
          <ul className="list-none space-y-4 text-white line-clamp-1">
            <li className="flex items-center">
              <FaBrain className="w-5 h-5 mr-3" />
              Creative Problem Solving
            </li>
            <li className="flex items-center">
              <FaBolt className="w-5 h-5 mr-3" />
              Rapid Learning
            </li>
            <li className="flex items-center">
              <FaTrophy className="w-5 h-5 mr-3" />
              Strive for Perfection
            </li>
          </ul>
        </ThemeCard>

        {/* Toolkit Card */}
        <ThemeCard otherClasses="col-span-2 rounded-[50px]">
          <h2 className="text-2xl font-bold text-white mb-6">My Toolkit</h2>

          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className={`relative bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer`}
                whileHover={tool.inProgress ? {} : { scale: 1.1 }} // No scaling if in progress
                data-tooltip-id={`tooltip-${index}`}
                data-tooltip-content={tool.inProgress ? "Currently Learning" : ""}
              >
                {/* Tool Icon and Name */}
                {tool.icon}
                <span>{tool.name}</span>

                {/* Overlay for In-Progress Tools */}
                {tool.inProgress && (
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                    {/*<FaSpinner className="animate-spin w-4 h-4" />*/}
                  </div>
                )}

                {/* Tooltip */}
                <Tooltip
                  id={`tooltip-${index}`}
                  className="custom-tooltip"
                  opacity={1}
                />
              </motion.div>
            ))}
          </div>

          {/* Custom Tooltip Styles */}
          <style>{`
            .custom-tooltip {
              border-radius: 10px;
            }
          `}</style>
        </ThemeCard>
      </div>
    </section>
  );
};

export default About;
