import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'p-6',
  ...props 
}) => {
  const hoverClasses = hover ? 'hover:shadow-xl' : '';
  
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 ${hoverClasses} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;