import React from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  icon?: React.ReactNode
  children: React.ReactNode
}
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors'
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
  }
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary:
      'bg-white text-gray-900 border border-gray-200 hover:border-blue-600',
  }
  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} rounded-lg gap-2`}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}

export default Button;