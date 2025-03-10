'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const MagicButton = ({
  title,
  icon,
  position,
  otherClasses,
  isLoading,
  isSubmitted,
  layoutId, // Added layoutId prop
}: {
  title: string;
  icon?: React.ReactNode; // Made icon optional if not always needed
  position?: 'left' | 'right';
  otherClasses?: string;
  isLoading?: boolean;
  isSubmitted?: boolean;
  layoutId?: string; // Added layoutId type
}) => {
  return (
    <motion.button
      className={`relative inline-flex overflow-hidden rounded-lg lg:rounded-2xl cursor-pointer items-center justify-center
        bg-black-100 text-xs md:text-sm font-medium text-white backdrop-blur-3xl outline outline-1 outline-card_border_color ${otherClasses} ${
        isLoading || isSubmitted ? 'cursor-not-allowed opacity-50' : ''
      }`}
      whileHover={{ outlineWidth: isLoading || isSubmitted ? '1px' : '5px', transition: { type: 'easeInOut' } }}
      style={{
        boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
      }}
      disabled={isLoading || isSubmitted}
      layoutId={layoutId}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <FaSpinner className="animate-spin text-white" size={20} />
          </motion.div>
        ) : isSubmitted ? (
          <motion.div
            key="submitted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            Submitted
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-2"
          >
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MagicButton;
