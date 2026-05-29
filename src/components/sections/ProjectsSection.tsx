"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>(".js-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={sectionRef}>
      {/* SVG decorative geometry */}
      <svg
        className="absolute top-0 right-0 w-[32rem] h-[32rem] opacity-[0.015] pointer-events-none select-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="40" y="40" width="320" height="320" rx="8" stroke="#d4a047" strokeWidth="0.5" />
        <rect x="60" y="60" width="280" height="280" rx="6" stroke="#d4a047" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="120" stroke="#d4a047" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="80" stroke="#d4a047" strokeWidth="0.3" />
        <line x1="80" y1="200" x2="320" y2="200" stroke="#d4a047" strokeWidth="0.3" />
        <line x1="200" y1="80" x2="200" y2="320" stroke="#d4a047" strokeWidth="0.3" />
      </svg>

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
            <div className="md:col-span-2 js-reveal" style={{ transitionDelay: "0s" }}>
              <ProjectCard
                project={featured[0]}
                locale={locale}
                featured={true}
              />
            </div>
          )}

          {/* Remaining projects in 2-column grid */}
          {projects.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.slug !== featured[0]?.slug)
                .map((project, index) => (
                <div
                  key={project.slug}
                  className="js-reveal"
                  style={{ transitionDelay: `${0.08 + index * 0.05}s` }}
                >
                  <ProjectCard
                    project={project}
                    locale={locale}
                    featured={
                      project.featured &&
                      project.slug !== featured[0]?.slug
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Link to all projects */}
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-tertiary hover:text-accent transition-colors duration-150 group"
          >
            <span className="w-8 h-px bg-accent/40 group-hover:w-12 transition-all duration-300" />
            {t("view_all")}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
