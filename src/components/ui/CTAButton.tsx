"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

const variantClasses = {
  primary:
    "bg-accent text-bg-primary hover:bg-accent-hover font-semibold",
  secondary:
    "glass glass-hover text-text-primary",
  outline:
    "border border-border-glass text-text-secondary hover:text-accent hover:border-accent",
};

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  target,
  rel,
  ariaLabel,
}: CTAButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
