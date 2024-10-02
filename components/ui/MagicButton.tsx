'use client';

import React from 'react'
import { motion } from 'framer-motion';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <motion.button
      className={`relative inline-flex overflow-hidden rounded-2xl cursor-pointer items-center justify-center
        bg-black-100 text-sm font-medium text-white backdrop-blur-3xl outline outline-1 outline-card_border_color ${otherClasses}`}
      whileHover={{ outlineWidth: '5px', transition: { type: 'easeInOut' } }}
      whileTap={{ outlineWidth: '5px' }}
      onClick={handleClick}
      style={{
        boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
      }}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </motion.button>
  );
};

export default MagicButton;