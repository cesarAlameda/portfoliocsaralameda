import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { loadProjectBySlug, getAllProjectSlugs } from "@/lib/mdx-loader";
import { loadAllContent } from "@/lib/content-loader";
import { generatePersonSchema, generateProjectSchema } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TechBadge from "@/components/ui/TechBadge";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.flatMap((slug) => [
    { locale: "es", slug },
    { locale: "en", slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = loadProjectBySlug(slug);

  if (!project) return { title: "Not Found" };

  const siteUrl = "https://cesaralameda.github.io/portfoliocsaralameda";

  return {
    title:
      locale === "es"
        ? `${project.title.es} | César Alameda`
        : `${project.title.en} | César Alameda`,
    description: project.description[locale as "es" | "en"],
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: project.title[locale as "es" | "en"],
      description: project.description[locale as "es" | "en"],
      images: project.images.length > 0 ? project.images : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = loadProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const l = locale as "es" | "en";
  const content = loadAllContent();
  const personSchema = generatePersonSchema(content.profile);
  const projectSchema = generateProjectSchema(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: projectSchema }}
      />
      <Navbar />
      <main className="pt-24 px-4 min-h-screen">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            {project.images.length > 0 && (
              <img
                src={project.images[0]}
                alt={project.title[l]}
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-6"
              />
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              {project.title[l]}
            </h1>
            <p className="text-lg text-text-secondary mb-4">
              {project.description[l]}
            </p>
            <div className="flex items-center gap-4 text-sm text-text-secondary font-mono mb-4">
              <span>{project.year}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} size="md" />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 glass glass-hover rounded-lg text-sm text-text-primary transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg-primary rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
                >
                  Demo →
                </a>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none glass-card p-6 md:p-8">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl font-bold text-text-primary mt-8 mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl font-semibold text-text-primary mt-6 mb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-medium text-text-primary mt-4 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                code: ({ children }) => (
                  <code className="px-1.5 py-0.5 bg-bg-glass rounded text-sm font-mono text-accent">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="glass p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono">
                    {children}
                  </pre>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-text-secondary mb-4 space-y-1">
                    {children}
                  </ul>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover underline"
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt || ""}
                    className="w-full rounded-lg my-4"
                    loading="lazy"
                  />
                ),
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer social={content.social} />
    </>
  );
}
