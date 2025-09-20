import React from 'react';
import { motion } from 'framer-motion';
import {Share2, Github, Linkedin } from 'lucide-react';
const HomeButtons = () => {
  const buttons = [
    {
      icon: Share2,
      label: 'Share',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      action: () =>
        navigator.share
          ? navigator
              .share({
                url: window.location.href,
                title: 'Praise Orly Aku Atadja - Portfolio',
                text: 'Check out Praise Orly’s work in AI and healthcare innovation!',
              })
              .catch((err) => console.log('Share failed:', err))
          : (alert('Share feature not supported. URL copied to clipboard!'),
            navigator.clipboard.writeText(window.location.href)),
    },
    {
      icon: Github,
      label: 'GitHub',
      color: 'bg-gray-700',
      hoverColor: 'hover:bg-gray-800',
      action: () => window.open('https://github.com/Praise-Atadja', '_blank'),
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800',
      action: () => window.open('www.linkedin.com/in/praise-orly-atadja', '_blank'),
    },
  ];

  return (
    <div className="home-buttons fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      {buttons.map((button, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3, type: 'spring', stiffness: 120 }}
          className="relative group"
        >
          <motion.button
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`${button.color} ${button.hoverColor} p-3 rounded-full shadow-lg text-white flex items-center justify-center transition-all duration-300`}
            onClick={button.action}
            aria-label={button.label}
          >
            <button.icon className="w-6 h-6" />
          </motion.button>
          {/* Tooltip */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm font-medium px-3 py-1 rounded-lg shadow-md pointer-events-none"
          >
            {button.label}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default HomeButtons;