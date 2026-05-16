"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/schema";
import TechBadge from "./TechBadge";
import { Link } from "@/navigation";

type ProjectCardProps = {
  project: Project;
  locale: "es" | "en";
};

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  const title = project.title[locale];
  const description = project.description[locale];

  return (
    <motion.article
      className="glass-card overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      {project.images.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.images[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {project.featured && (
            <span className="absolute top-3 right-3 glass px-2 py-1 text-xs font-mono text-accent rounded-full">
              ★ Featured
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-text-secondary">
            {project.year}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-mono text-text-secondary self-center">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}` as "/"}
            className="text-sm text-accent hover:text-accent-hover transition-colors font-medium"
          >
            View Project →
          </Link>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
