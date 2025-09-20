import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, ArrowRight } from 'lucide-react';
import Button from './Projectbutton';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  message: string;
  variant?: 'info' | 'warning' | 'error' | 'success';
  children?: React.ReactNode;
  className?: string;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  message,
  variant = 'info',
  children,
  className = '',
}) => {
  if (!isOpen) return null;

  // Variant-specific styling
  const variantStyles = {
    info: 'bg-gradient-to-br from-teal-800/90 to-indigo-800/90 text-white border-teal-500/30',
    warning: 'bg-gradient-to-br from-orange-800/90 to-yellow-800/90 text-white border-orange-500/30',
    error: 'bg-gradient-to-br from-red-800/90 to-rose-800/90 text-white border-red-500/30',
    success: 'bg-gradient-to-br from-green-800/90 to-emerald-800/90 text-white border-green-500/30',
  };

  // Animation Variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15, duration: 0.7 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -100,
      rotateX: 15,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={popupVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`relative w-full max-w-2xl p-8 rounded-3xl shadow-2xl ${variantStyles[variant]} backdrop-blur-md overflow-y-auto max-h-[90vh] ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 text-white hover:text-teal-300"
        >
          <XCircle className="h-6 w-6" />
        </motion.button>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-serif font-bold text-center text-white mb-6"
        >
          {title}
        </motion.h3>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base md:text-lg font-sans text-gray-200 text-center mb-6 leading-relaxed"
        >
          {message}
        </motion.p>

        {/* Children (Detailed Content) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-6"
          >
            {children}
          </motion.div>
        )}

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center"
        >
          <Button
            label={<span className="flex items-center gap-2">Close <ArrowRight className="h-4 w-4" /></span>}
            onClick={onClose}
            className="px-6 py-2 bg-teal-500 text-white hover:bg-teal-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;