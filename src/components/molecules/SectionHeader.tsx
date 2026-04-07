"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";

interface SectionHeaderProps {
  caption: string;
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({ caption, title, description, alignment = "center", className = "" }: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center mx-auto",
    right: "items-end text-right",
  }[alignment];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${alignClass} max-w-3xl mb-12 lg:mb-20 ${className}`}
    >
      {/* Caption inherits accent color or uses current color if not forced */}
      <Typography variant="caption" className="mb-3 text-coffee-accent opacity-90">{caption}</Typography>
      <Typography variant="h2" className="mb-4">{title}</Typography>
      {description && (
        <Typography variant="body" className="max-w-2xl text-current opacity-80">{description}</Typography>
      )}
    </motion.div>
  );
}
