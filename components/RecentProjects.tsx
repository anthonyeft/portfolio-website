"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data/index.tsx";
import { motion } from "framer-motion";
import ThemeCard from "./ui/ThemeCard";
import MagicButton from "./ui/MagicButton";

const RecentProjects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col py-12 min-h-screen"
    >
      <h1 className="heading mb-14">
        My Recent Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <ThemeCard
            otherClasses="flex flex-col cursor-pointer rounded-[50px]"
            key={id}
          >
            {/* Image Section */}
            <div className="relative flex overflow-hidden mb-5">
              <div
                className="relative rounded-[25px] bg-slate-900"
              >
                <img src="/bg.png" alt="bgimg" />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-bold text-lg line-clamp-1">{title}</h1>

            {/* Description */}
            <p
              className="text-lg line-clamp-2"
              style={{ color: "#BEC1DD" }}
            >
              {des}
            </p>

            {/* Icons and Link Section */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                <motion.div
                  key={index}
                  className="border border-white/20 rounded-full bg-black-100 w-10 h-10 flex justify-center items-center"
                  style={{ transform: `translateX(-${5 * index + 2}px)` }}
                  whileHover={{ borderColor: "rgba(255, 255, 255, 0.6)" }}
                >
                  <img src={icon} alt={`icon-${index}`} className="p-2" />
                </motion.div>
                ))}
              </div>

              <MagicButton
                title="Visit live site"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="h-10 px-8 gap-2 rounded-lg"
              />
            </div>
          </ThemeCard>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
