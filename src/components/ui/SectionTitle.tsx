"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary text-lg">{subtitle}</p>
      )}
      <div className="mt-4 w-16 h-0.5 bg-accent rounded-full" />
    </motion.div>
  );
}
