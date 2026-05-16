import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "./schema";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

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

export function loadProjectBySlug(slug: string): Project | null {
  const projects = loadAllProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs(): string[] {
  const projects = loadAllProjects();
  return projects.map((p) => p.slug);
}
