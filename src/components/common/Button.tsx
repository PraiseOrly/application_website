import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    label?: React.ReactNode; // Made optional since children can be used instead
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'circular';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset'; // Added for form compatibility
    children?: React.ReactNode; // For icons or additional content
    size?: 'sm' | 'md' | 'lg'; // Added size variants
    loading?: boolean; // Added loading state
}

const Button: React.FC<ButtonProps> = ({
    label,
    variant = 'primary',
    onClick,
    className = '',
    disabled = false,
    type = 'button',
    children,
    size = 'md',
    loading = false,
}) => {
    // Base styles with size variations
    const baseStyles = 'rounded-lg font-inter font-medium focus:outline-none transition-all duration-200 flex items-center justify-center gap-2';
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    // Variant-specific styles
    const variantStyles = {
        primary: 'bg-teal-700 text-white hover:bg-teal-800 disabled:bg-teal-400',
        secondary: 'bg-gray-200 text-teal-700 hover:bg-gray-300 disabled:bg-gray-100',
        outline: 'border border-teal-700 text-teal-700 hover:bg-teal-50 disabled:border-teal-300 disabled:text-teal-300',
        ghost: 'text-teal-700 hover:bg-teal-100 disabled:text-teal-300',
        circular: 'rounded-full aspect-square p-0 flex items-center justify-center',
    };

    // Animation variants
    const buttonVariants = {
        hover: { 
            scale: disabled || loading ? 1 : 1.05,
            boxShadow: disabled || loading ? 'none' : '0px 4px 15px rgba(0, 109, 119, 0.3)',
        },
        tap: { 
            scale: disabled || loading ? 1 : 0.95 
        },
    };

    // Combined className
    const combinedClassName = [
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabled || loading ? 'cursor-not-allowed opacity-60' : '',
        className,
    ].join(' ');

    return (
        <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={combinedClassName}
            onClick={!disabled && !loading ? onClick : undefined}
            disabled={disabled || loading}
            type={type}
        >
            {loading ? (
                <span className="flex items-center gap-2">
                    <svg
                        className="animate-spin h-5 w-5 text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Loading...
                </span>
            ) : (
                <>
                    {children}
                    {label && <span>{label}</span>}
                </>
            )}
        </motion.button>
    );
};

export default Button;

// Example usage:
/*
<Button 
    label="Click Me" 
    variant="primary" 
    size="lg" 
    onClick={() => console.log('Clicked!')}
    className="mt-4"
>
    <SendIcon className="h-5 w-5" />
</Button>

<Button 
    variant="circular" 
    size="sm" 
    onClick={() => console.log('Circular!')}
    loading={isLoading}
>
    <CopyIcon className="h-4 w-4" />
</Button>
*/