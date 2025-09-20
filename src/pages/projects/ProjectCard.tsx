import React from 'react';

export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ className = '', children, onClick }) => (
  <div
    className={`p-6 rounded-lg ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);