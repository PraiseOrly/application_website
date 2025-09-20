import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  label: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'solid' | 'outline';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'solid',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'flex items-center justify-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300';
  const variantStyles = {
    solid: 'bg-teal-500 text-white hover:bg-teal-600',
    outline: 'bg-transparent border text-teal-300 hover:bg-teal-400/20',
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${variant === 'outline' ? 'border-teal-400' : ''} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </motion.button>
  );
};

export default Button;