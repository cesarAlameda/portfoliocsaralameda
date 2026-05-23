"use client";

import type { Project } from "@/lib/schema";
import { Link } from "@/navigation";

type ProjectCardProps = {
  project: Project;
  locale: "es" | "en";
  featured?: boolean;
};

export default function ProjectCard({ project, locale, featured }: ProjectCardProps) {
  const title = project.title[locale];
  const description = project.description[locale];

  return (
    <article className="surface-card surface-card-hover overflow-hidden">
      {/* Image — bleeds to edges */}
      {project.images.length > 0 && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.images[0]}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-text-tertiary">
            {project.year}
          </span>
          {featured && (
            <span className="font-mono text-xs text-accent">◆ Featured</span>
          )}
        </div>
        <h3 className="text-2xl font-semibold text-text-primary -tracking-0.01em mb-2">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies as text */}
        <div className="flex flex-wrap gap-x-0 gap-y-1 mb-5">
          {project.technologies.map((tech, i) => (
            <span key={tech} className="tech-label">
              {i > 0 && <span className="text-text-tertiary mx-1">·</span>}
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <Link
            href={`/projects/${project.slug}` as "/"}
            className="text-sm font-mono uppercase tracking-widest text-accent hover:text-accent-hover transition-colors duration-150"
          >
            View Project →
          </Link>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono uppercase tracking-widest text-text-tertiary hover:text-accent transition-colors duration-150"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

