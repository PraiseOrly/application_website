import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, XCircle, ArrowRight } from 'lucide-react';
import Button from './Button';

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  message: string;
  variant?: 'info' | 'warning' | 'error' | 'success';
  actionLabel?: string;
  onAction?: () => void;
  children?: React.ReactNode;
  className?: string;
  variants?: any;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  message,
  variant = 'info',
  actionLabel,
  onAction,
  children,
  className = '',
  variants,
}) => {
  if (!isOpen) return null;

  const variantStyles = {
    info: 'bg-gradient-to-br from-teal-800/90 to-indigo-800/90 text-white border-teal-500/30',
    warning: 'bg-gradient-to-br from-orange-800/90 to-yellow-800/90 text-white border-orange-500/30',
    error: 'bg-gradient-to-br from-red-800/90 to-rose-800/90 text-white border-red-500/30',
    success: 'bg-gradient-to-br from-green-800/90 to-emerald-800/90 text-white border-green-500/30',
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const popupVariantsDefault = {
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

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
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
        variants={variants || popupVariantsDefault}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`relative w-full max-w-md p-8 rounded-3xl shadow-2xl ${variantStyles[variant]} backdrop-blur-md overflow-hidden ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-white hover:text-teal-300"
        >
          <XCircle className="h-6 w-6" />
        </motion.button>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-serif font-bold text-center text-white mb-4 flex items-center justify-center gap-2"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base md:text-lg font-sans text-gray-200 text-center mb-6 leading-relaxed"
        >
          {message}
        </motion.p>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          {actionLabel && onAction ? (
            <>
              <Button
                label="Dismiss"
                variant="outline"
                onClick={onClose}
                className="px-6 py-2 bg-transparent border-teal-400 text-teal-300 hover:bg-teal-400/20 rounded-full font-sans text-sm"
              />
              <Button
                label={
                  <span className="flex items-center gap-2">
                    {actionLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                }
                onClick={onAction}
                className="px-6 py-2 bg-teal-500 text-white hover:bg-teal-600 rounded-full font-sans text-sm shadow-md"
              />
            </>
          ) : (
            <Button
              label="OK"
              onClick={onClose}
              className="px-6 py-2 bg-teal-500 text-white hover:bg-teal-600 rounded-full font-sans text-sm shadow-md"
            />
          )}
        </motion.div>
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 left-4 text-teal-300"
        >
          <Heart className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;