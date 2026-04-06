"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";

interface SectionHeaderProps {
  caption: string;
  title: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({ caption, title, alignment = "center", className = "" }: SectionHeaderProps) {
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
      <Typography variant="caption" className="mb-3 text-coffee-accent">{caption}</Typography>
      <Typography variant="h2">{title}</Typography>
    </motion.div>
  );
}
