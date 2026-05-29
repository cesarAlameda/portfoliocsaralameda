"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  sectionNumber?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  sectionNumber,
}: SectionTitleProps) {
  return (
    <motion.div
      className="relative mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      {sectionNumber && (
        <span className="section-number -top-8 left-0">
          {sectionNumber}
        </span>
      )}
      <h2 className="relative z-10 text-[clamp(2rem,4vw,4rem)] font-bold text-text-primary -tracking-0.02em leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
