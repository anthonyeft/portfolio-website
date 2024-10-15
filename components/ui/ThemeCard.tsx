"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface ThemeCardProps {
  children: React.ReactNode;
  className?: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ children, className }) => {
  const x = useMotionValue(50); // Start centered horizontally
  const y = useMotionValue(0);  // Start at the top

  // Create the dynamic maskImage using useMotionTemplate
  const maskImage = useMotionTemplate`
    radial-gradient(
      circle at ${x}% ${y}%,
      black 10%, 
      rgba(0, 0, 0, 0.2) 55%
    )
  `;

  const [hovered, setHovered] = useState(false); // Track hover state

  return (
    <motion.div
      className={cn(
        "relative bg-black-200 p-10 rounded-[50px] overflow-hidden",
        className
      )}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const newX = ((e.clientX - rect.left) / rect.width) * 100;
        const newY = ((e.clientY - rect.top) / rect.height) * 100;

        x.set(newX); // Update motion value x
        y.set(newY); // Update motion value y
      }}
      onMouseEnter={() => setHovered(true)} // Set hover state
      onMouseLeave={() => setHovered(false)} // Reset hover state
    >
      {/* Linear Gradient (Background) */}
      <motion.div
        className="absolute inset-0 border border-card_border_color rounded-[50px] pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 10%, rgba(0, 0, 0, 0.2) 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 10%, rgba(0, 0, 0, 0.2) 90%)',
        }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
      />

      {/* Radial Gradient (Overlay) */}
      <motion.div
        className="absolute inset-0 border border-card_border_color rounded-[50px] pointer-events-none"
        style={{
          maskImage: maskImage,
          WebkitMaskImage: maskImage,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
      />

      {/* Content */}
      {children}
    </motion.div>
  );
};

export default ThemeCard;
