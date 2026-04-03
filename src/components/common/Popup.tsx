import { ArrowRight, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

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
  variants: customVariants,
}) => {
  if (!isOpen) return null;

  const popupVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring', stiffness: 220, damping: 22 },
    },
    exit: {
      opacity: 0, y: 16, scale: 0.97,
      transition: { duration: 0.25, ease: 'easeIn' },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-4"
      onClick={onClose}>
      <motion.div
        variants={customVariants || popupVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-sm bg-gray-950 border border-teal-500/20 rounded-2xl shadow-2xl overflow-hidden ${className}`}>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
        {/* Ambient glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl bg-teal-500/8 pointer-events-none" />

        <div className="relative z-10 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-600 hover:text-white hover:bg-white/5 transition-all duration-200">
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 mb-4">
            <Sparkles className="h-5 w-5 text-teal-400" />
          </div>

          <h3 className="text-white font-bold text-lg mb-2 leading-snug pr-6">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{message}</p>

          {children && <div className="mb-5">{children}</div>}

          <div className="flex gap-2.5">
            {actionLabel && onAction ? (
              <>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-full text-sm font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200">
                  Dismiss
                </button>
                <button
                  onClick={onAction}
                  className="flex-1 py-2.5 rounded-full text-sm font-semibold bg-teal-500/15 border border-teal-500/30 text-teal-300 hover:bg-teal-500/25 transition-all duration-200 flex items-center justify-center gap-1.5">
                  {actionLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full text-sm font-medium bg-teal-500/15 border border-teal-500/30 text-teal-300 hover:bg-teal-500/25 transition-all duration-200">
                Got it
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
