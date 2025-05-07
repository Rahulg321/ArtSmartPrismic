import clsx from "clsx";
import React from "react";

type ButtonProps = {
  classname?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({ 
  classname, 
  children, 
  onClick, 
  type = "button" 
}: ButtonProps) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={clsx(
        "px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors", 
        classname
      )}
    >
      {children}
    </button>
  );
};

export { Button };
export default Button;
