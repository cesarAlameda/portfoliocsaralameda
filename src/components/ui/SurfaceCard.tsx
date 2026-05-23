"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SurfaceCardProps = {
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

export default function SurfaceCard({
  children,
  className = "",
  hover = true,
  padding = "md",
}: SurfaceCardProps) {
  const baseClasses = `surface-card ${paddingMap[padding]} ${className}`;
  const hoverClasses = hover ? "surface-card-hover cursor-pointer" : "";

  return <div className={`${baseClasses} ${hoverClasses}`}>{children}</div>;
}

