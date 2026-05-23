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

  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-6">
      {/* First featured — spans full width */}
      {featured.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ProjectCard
            project={featured[0]}
            locale={locale}
            featured={true}
          />
        </motion.div>
      )}

      {/* All projects in 2-column grid (excluding first featured to avoid duplication) */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects
          .filter((p) => p.slug !== featured[0]?.slug)
          .map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <ProjectCard
              project={project}
              locale={locale}
              featured={
                project.featured && project.slug !== featured[0]?.slug
              }
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

