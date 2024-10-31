"use client";

import React, { useState, forwardRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface ThemeCardProps {
  children: React.ReactNode;
  otherClasses?: string;
  layoutId?: string;
  onClick?: () => void;
}

// Helper function to extract rounding-related classes
const extractRoundingClasses = (classes: string) => {
  return classes.split(" ").filter((cls) => cls.startsWith("rounded"));
};

// Use React.forwardRef to allow ref to be optionally passed
const ThemeCard = forwardRef<HTMLDivElement, ThemeCardProps>(
  ({ children, otherClasses = "", layoutId, onClick }, ref) => {
    const x = useMotionValue(50); // Start centered horizontally
    const y = useMotionValue(0);  // Start at the top

    const maskImage = useMotionTemplate`
      radial-gradient(
        circle at ${x}% ${y}%,
        black 0%, 
        rgba(0, 0, 0, 0.2) 40%
      )
    `;

    const [hovered, setHovered] = useState(false); // Track hover state

    // Extract only rounding classes from otherClasses
    const roundingClasses = extractRoundingClasses(otherClasses).join(" ");

    return (
      <motion.div
        ref={ref} // Forward the ref if provided
        className={`relative bg-black-200 p-10 rounded-[50px] overflow-hidden ${otherClasses}`}
        layoutId={layoutId} // Use the layoutId for motion animations
        onClick={onClick} // Handle click events
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
          className={`absolute inset-0 border border-card_border_color pointer-events-none rounded-[50px] ${roundingClasses}`}
          style={{
            maskImage: 'linear-gradient(to bottom, black 10%, rgba(0, 0, 0, 0.2) 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 10%, rgba(0, 0, 0, 0.2) 90%)',
          }}
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
        />

        {/* Radial Gradient (Overlay) */}
        <motion.div
          className={`absolute inset-0 border border-[rgba(255,255,255,0.2)] pointer-events-none rounded-[50px] ${roundingClasses}`}
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
  }
);

ThemeCard.displayName = "ThemeCard"; // Required for forwardRef components

export default ThemeCard;
