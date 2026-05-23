import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "./schema";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

/**
 * Strips content sections that don't match the given locale.
 * Sections wrapped in <!-- es:start -->...<!-- es:end --> or
 * <!-- en:start -->...<!-- en:end --> are filtered so only
 * the active locale's content remains.
 *
 * Content outside any locale markers is preserved for both locales.
 */
function stripNonMatchingLocaleContent(
  content: string,
  locale: "es" | "en"
): string {
  const otherLocale = locale === "es" ? "en" : "es";

  // Remove the other locale's sections
  const otherRegex = new RegExp(
    `<!-- ${otherLocale}:start -->[\\s\\S]*?<!-- ${otherLocale}:end -->`,
    "g"
  );
  let result = content.replace(otherRegex, "");

  // Clean up the current locale's markers (keep the content)
  const currentStartRegex = new RegExp(`<!-- ${locale}:start -->\\s*`, "g");
  const currentEndRegex = new RegExp(`\\s*<!-- ${locale}:end -->`, "g");
  result = result.replace(currentStartRegex, "").replace(currentEndRegex, "");

  // Trim extra blank lines left after removals
  return result.replace(/\n{3,}/g, "\n\n").trim();
}

export function loadAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(PROJECTS_DIR);
  const projects: Project[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const fullPath = path.join(PROJECTS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);

    const frontmatter = data as unknown as ProjectFrontmatter;

    if (!frontmatter.slug) continue;

    projects.push({
      ...frontmatter,
      content,
    });
  }

  // Sort by year descending, then by slug alphabetically
  projects.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return a.slug.localeCompare(b.slug);
  });

  return projects;
}

export function loadProjectBySlug(
  slug: string,
  locale?: "es" | "en"
): Project | null {
  const project = loadAllProjects().find((p) => p.slug === slug) ?? null;

  if (project && locale) {
    return {
      ...project,
      content: stripNonMatchingLocaleContent(project.content, locale),
    };
  }

  return project;
}

export function getAllProjectSlugs(): string[] {
  const projects = loadAllProjects();
  return projects.map((p) => p.slug);
}
