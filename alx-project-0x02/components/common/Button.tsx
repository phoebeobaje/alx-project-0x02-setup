import React from 'react';
import type { ButtonProps } from '@/interfaces';

const Button: React.FC <ButtonProps> = ({ size = 'medium', shape = 'rounded-md', children }) => {
  const sizeClass =
    size === 'small' ? 'px-3 py-1 text-sm' :
    size === 'large' ? 'px-5 py-3 text-lg' :
    'px-4 py-2 text-base'; // default medium

  return (
    <button className={`bg-blue-600 text-white ${sizeClass} ${shape}`}>
      {children}
    </button>
  );
};
export default Button;
