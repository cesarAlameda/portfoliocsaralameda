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
      <main className="pt-28 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
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
