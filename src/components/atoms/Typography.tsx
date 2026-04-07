import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  className?: string;
}

export function Typography({ children, variant = "body", className = "" }: TypographyProps) {
  const baseClasses = {
    h1: "text-5xl md:text-7xl font-bold tracking-tight",
    h2: "text-3xl md:text-5xl font-semibold tracking-tight",
    h3: "text-2xl md:text-4xl font-medium tracking-tight",
    body: "text-base md:text-lg opacity-80 leading-relaxed",
    caption: "text-sm opacity-70 tracking-wider uppercase font-bold",
  };

  const Tag = variant.startsWith("h") ? (variant as keyof React.JSX.IntrinsicElements) : "p";

  return <Tag className={`${baseClasses[variant]} ${className}`}>{children}</Tag>;
}
