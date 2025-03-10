"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ProjectIcons({ iconLists }: { iconLists: ReactNode[] }) {
  return (
    <div className="flex items-center">
      {iconLists.map((icon, index) => (
        <motion.div
          key={index}
          className="border border-white/20 rounded-full bg-black-100 w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
          whileHover={{ borderColor: "rgba(255, 255, 255, 0.6)" }}
          style={{ transform: `translateX(-${4 * index + 2}px)` }}
        >
          <span className="text-sm lg:text-base">{icon}</span>
        </motion.div>
      ))}
    </div>
  );
}