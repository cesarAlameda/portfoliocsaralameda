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
      "Explora mis proyectos destacados: desarrollo backend, integraciones ERP, plugins Minecraft y soluciones empresariales.",
  },
  en: {
    title: "Projects",
    subtitle: "Featured work and personal projects",
    metaTitle: "Projects | César Alameda",
    metaDesc:
      "Explore my featured projects: backend development, ERP integrations, Minecraft plugins, and enterprise solutions.",
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
      <main className="pt-24 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            {t.title}
          </h1>
          <p className="text-text-secondary mb-8">{t.subtitle}</p>
          <ProjectsGrid projects={projects} />
        </div>
      </main>
      <Footer social={social} />
    </>
  );
}
