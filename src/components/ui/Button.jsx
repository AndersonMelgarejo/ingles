import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-greenpastel-500 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-greenpastel-300 to-greenpastel-500 text-white hover:from-greenpastel-400 hover:to-greenpastel-600 shadow-lg',
    secondary: 'border-2 border-greenpastel-400 text-greenpastel-600 hover:bg-greenpastel-50',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-600 hover:text-greenpastel-500 hover:bg-greenpastel-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;