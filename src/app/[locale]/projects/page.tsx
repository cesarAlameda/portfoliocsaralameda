import type { Metadata } from "next";
import { loadAllProjects } from "@/lib/mdx-loader";
import { loadSocial } from "@/lib/content-loader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsGrid from "./ProjectsGrid";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ locale: string }>;
};

const pageTranslations = {
  es: {
    title: "Proyectos",
    subtitle: "Trabajos destacados y proyectos personales",
    metaTitle: "Proyectos | César Alameda",
    metaDesc:
      "Explora mis proyectos destacados: desarrollo backend, integraciones ERP, soluciones empresariales y apps móviles.",
  },
  en: {
    title: "Projects",
    subtitle: "Featured work and personal projects",
    metaTitle: "Projects | César Alameda",
    metaDesc:
      "Explore my featured projects: backend development, ERP integrations, enterprise solutions, and mobile apps.",
  },
} as const;

export async function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as "es" | "en";
  const t = pageTranslations[l];

  return {
    title: t.metaTitle,
    description: t.metaDesc,
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
    },
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const projects = loadAllProjects();
  const social = loadSocial();
  const l = locale as "es" | "en";
  const t = pageTranslations[l];

  return (
    <>
      <Navbar />
      <main className="pt-28 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden">
        {/* SVG decorative geometry */}
        <svg
          className="absolute -top-40 -right-20 w-[500px] h-[500px] opacity-[0.025] pointer-events-none select-none"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="40" y="40" width="420" height="420" rx="12" stroke="#d4a047" strokeWidth="0.5" />
          <rect x="70" y="70" width="360" height="360" rx="8" stroke="#d4a047" strokeWidth="0.4" />
          <circle cx="250" cy="250" r="160" stroke="#d4a047" strokeWidth="0.4" />
          <circle cx="250" cy="250" r="110" stroke="#d4a047" strokeWidth="0.3" />
          <circle cx="250" cy="250" r="60" stroke="#d4a047" strokeWidth="0.25" />
          <line x1="90" y1="250" x2="410" y2="250" stroke="#d4a047" strokeWidth="0.3" />
          <line x1="250" y1="90" x2="250" y2="410" stroke="#d4a047" strokeWidth="0.3" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h1 className="text-[clamp(2rem,4vw,4rem)] font-bold text-text-primary -tracking-0.02em leading-tight">
              {t.title}
            </h1>
            <p className="mt-2 text-text-secondary">{t.subtitle}</p>
          </div>
          <ProjectsGrid projects={projects} />
        </div>
      </main>
      <Footer social={social} />
    </>
  );
}
