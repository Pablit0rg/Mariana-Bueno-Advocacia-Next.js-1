import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 justify-center";
  const variants = {
    primary: "bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-xl",
    outline: "border-2 border-amber-600 text-amber-600 hover:bg-amber-50",
    white: "bg-white text-slate-900 hover:bg-gray-100 shadow-md"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
