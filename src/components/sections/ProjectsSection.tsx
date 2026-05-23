"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { Link } from "@/navigation";
import type { Project } from "@/lib/schema";

type Props = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: Props) {
  const t = useTranslations("projects");
  const locale = useLocale() as "es" | "en";

  const featured = projects.filter((p) => p.featured);

  if (featured.length === 0) {
    return (
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title={t("title")}
            subtitle={t("subtitle")}
            sectionNumber="03"
          />
          <p className="text-text-secondary font-mono text-sm">
            {t("no_projects")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          sectionNumber="03"
        />

        {/* Asymmetric grid: first featured spans full width, rest in 2-col grid */}
        <div className="space-y-6">
          {/* First featured — wider */}
          {featured.length > 0 && (
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                project={featured[0]}
                locale={locale}
                featured={true}
              />
            </motion.div>
          )}

          {/* Remaining projects in 2-column grid (excluding first featured to avoid duplication) */}
          {projects.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.slug !== featured[0]?.slug)
                .map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProjectCard
                    project={project}
                    locale={locale}
                    featured={
                      project.featured &&
                      project.slug !== featured[0]?.slug
                    }
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Link to all projects */}
        <div className="mt-10">
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-widest text-accent hover:text-accent-hover transition-colors duration-150"
          >
            {t("view_all")} →
          </Link>
        </div>
      </div>
    </section>
  );
}

