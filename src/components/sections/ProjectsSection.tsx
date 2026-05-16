"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/schema";

type Props = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: Props) {
  const t = useTranslations("projects");
  const locale = useLocale() as "es" | "en";

  const featured = projects.filter((p) => p.featured).slice(0, 3);

  if (featured.length === 0) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
          <p className="text-text-secondary text-center font-mono">
            {t("no_projects")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} locale={locale} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
