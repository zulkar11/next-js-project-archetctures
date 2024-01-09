import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import './index.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  // Add any additional props you need
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
