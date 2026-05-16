"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import type { Project } from "@/lib/schema";
import ProjectCard from "@/components/ui/ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  const locale = useLocale() as "es" | "en";

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <ProjectCard project={project} locale={locale} />
        </motion.div>
      ))}
    </div>
  );
}
