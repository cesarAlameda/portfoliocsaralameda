import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { loadProjectBySlug, getAllProjectSlugs } from "@/lib/mdx-loader";
import { loadAllContent } from "@/lib/content-loader";
import { generatePersonSchema, generateProjectSchema } from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <main className="pt-24 min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            {project.images.length > 0 && (
              <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-10">
                <img
                  src={project.images[0]}
                  alt={project.title[l]}
                  className="w-full h-64 md:h-[28rem] object-cover"
                />
              </div>
            )}
            <h1 className="text-[clamp(2rem,4vw,4rem)] font-bold text-text-primary -tracking-0.02em leading-tight mb-3">
              {project.title[l]}
            </h1>
            <p className="text-base text-text-secondary mb-4 max-w-prose leading-relaxed">
              {project.description[l]}
            </p>
            <div className="flex items-center gap-4 font-mono text-xs text-text-tertiary mb-4">
              <span>{project.year}</span>
            </div>
            <div className="flex flex-wrap gap-x-1 gap-y-1 mb-8">
              {project.technologies.map((tech, i) => (
                <span key={tech} className="tech-label">
                  {i > 0 && <span className="text-text-tertiary mx-1">·</span>}
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-primary hover:border-accent hover:text-accent transition-colors duration-150 font-mono text-xs uppercase tracking-widest"
                >
                  GitHub →
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg-primary hover:bg-accent-hover transition-colors duration-150 font-mono text-xs uppercase tracking-widest font-bold"
                >
                  Demo →
                </a>
              )}
            </div>
          </header>

          {/* Content — surface card, no glass */}
          <div className="surface-card p-6 md:p-8 mb-16">
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
                  <code className="px-1.5 py-0.5 bg-bg-secondary rounded text-sm font-mono text-accent">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="surface-card p-4 rounded overflow-x-auto mb-4 text-sm font-mono">
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
                    className="w-full rounded my-4"
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
