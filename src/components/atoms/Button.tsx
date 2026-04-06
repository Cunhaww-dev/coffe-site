import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-medium transition-colors duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-white text-foreground hover:bg-neutral-200",
    secondary: "bg-coffee-accent text-white hover:bg-foreground",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-white"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
}
