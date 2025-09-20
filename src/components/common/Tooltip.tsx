import React from 'react';
import { motion } from 'framer-motion';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right'; // Optional positioning
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  // Position-specific styles
  const positionStyles = {
    top: 'bottom-full mb-2 -translate-x-1/2 left-1/2',
    bottom: 'top-full mt-2 -translate-x-1/2 left-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  };

  return (
    <div className="relative group">
      {children}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`absolute bg-coral-600 text-yellow-300 text-sm font-inter p-2 rounded-md shadow-md w-40 z-10 ${positionStyles[position]}`}
      >
        {content}
      </motion.div>
    </div>
  );
};

export default Tooltip;