"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
};

const paddingMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "md",
}: GlassCardProps) {
  const baseClasses = `glass-card ${paddingMap[padding]} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}
