"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { Link } from "@/navigation";
import type { Project } from "@/lib/schema";

type Props = {
  projects: Project[];
};

const AUTO_SCROLL_INTERVAL = 5000;
const DESKTOP_BREAKPOINT = 768;

export default function ProjectsSection({ projects }: Props) {
  const t = useTranslations("projects");
  const locale = useLocale() as "es" | "en";

  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isHovering, setIsHovering] = useState(false);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  // ── Resize listener for responsive visibleCount ──
  useEffect(() => {
    function handleResize() {
      setVisibleCount(window.innerWidth >= DESKTOP_BREAKPOINT ? 3 : 1);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Clamp index if visibleCount changes ──
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, projects.length - visibleCount)));
  }, [visibleCount, projects.length]);

  // ── Navigation ──
  const goNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const newMax = Math.max(0, projects.length - visibleCount);
      return prev >= newMax ? 0 : prev + 1;
    });
    resetAutoScroll();
  }, [projects.length, visibleCount]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const newMax = Math.max(0, projects.length - visibleCount);
      return prev === 0 ? newMax : prev - 1;
    });
    resetAutoScroll();
  }, [projects.length, visibleCount]);

  // ── Auto-scroll ──
  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const newMax = Math.max(0, projects.length - visibleCount);
        return prev >= newMax ? 0 : prev + 1;
      });
    }, AUTO_SCROLL_INTERVAL);
  }, [projects.length, visibleCount]);

  const resetAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!isHovering) {
      startAutoScroll();
    }
  }, [isHovering, startAutoScroll]);

  useEffect(() => {
    if (!isHovering) {
      startAutoScroll();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, startAutoScroll]);

  // ── Scroll-reveal observer ──
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

    // ── Track translateX in pixels ──
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
      function updateWidth() {
        if (viewportRef.current) {
          setViewportWidth(viewportRef.current.getBoundingClientRect().width);
        }
      }
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, [visibleCount]);

    const gapPx = 24; // gap-6 = 1.5rem = 24px
    const slideDistance = (viewportWidth + gapPx) / visibleCount;
    const translateXpx = -(currentIndex * slideDistance);

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

        {/* ─── Carousel ─── */}
        <div
          className="relative js-reveal"
          style={{ transitionDelay: "0s" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
                    {/* Carousel viewport */}
          <div ref={viewportRef} className="overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(${translateXpx}px)`,
                transition: "transform 0.4s ease-out",
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="flex-shrink-0 w-full min-w-0"
                  style={{ width: visibleCount === 1 ? '100%' : `calc((100% - ${(visibleCount - 1) * 1.5}rem) / ${visibleCount})` }}
                >
                  <ProjectCard project={project} locale={locale} />
                </div>
              ))}
            </div>
          </div>

          {/* ─── Left Arrow ─── */}
          {currentIndex > 0 && (
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20
                         w-10 h-10 flex items-center justify-center
                         bg-surface/80 backdrop-blur-sm border border-border
                         text-accent hover:text-accent-hover hover:bg-surface
                         transition-all duration-200 rounded-sm cursor-pointer"
              aria-label="Previous projects"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* ─── Right Arrow ─── */}
          {currentIndex < maxIndex && (
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20
                         w-10 h-10 flex items-center justify-center
                         bg-surface/80 backdrop-blur-sm border border-border
                         text-accent hover:text-accent-hover hover:bg-surface
                         transition-all duration-200 rounded-sm cursor-pointer"
              aria-label="Next projects"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* ─── Dots indicator ─── */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); resetAutoScroll(); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? "bg-accent w-4"
                    : "bg-border hover:bg-text-tertiary"
                }`}
                aria-label={`Go to project group ${i + 1}`}
              />
            ))}
          </div>
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
