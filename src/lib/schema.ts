export interface Profile {
  name: string;
  location: string;
  languages: string[];
  roles: string[];
  summary: { es: string; en: string };
  avatar?: string;
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
  cv: { es: string; en: string };
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: { start: string; end: string | null };
  description: { es: string; en: string };
  technologies: string[];
  type: "software" | "other";
}

export interface Skill {
  name: string;
  category:
    | "Backend"
    | "Databases"
    | "Enterprise Software"
    | "Frontend"
    | "Dev Tools"
    | "Game Development"
    | "Emerging";
  level?: "expert" | "advanced" | "intermediate" | "familiar";
}

export interface ProjectFrontmatter {
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  technologies: string[];
  images: string[];
  links: {
    github?: string;
    demo?: string;
    website?: string;
  };
  featured: boolean;
  year: number;
}

export interface Project extends ProjectFrontmatter {
  content: string;
}

export interface Social {
  linkedin: string;
  github: string;
  email: string;
}

export interface ContentData {
  profile: Profile;
  experience: Experience[];
  skills: Skill[];
  social: Social;
  projects: Project[];
}

export const SKILL_CATEGORY_LABELS: Record<
  Skill["category"],
  { es: string; en: string }
> = {
  Backend: { es: "Backend", en: "Backend" },
  Databases: { es: "Bases de Datos", en: "Databases" },
  "Enterprise Software": {
    es: "Software Empresarial",
    en: "Enterprise Software",
  },
  Frontend: { es: "Frontend", en: "Frontend" },
  "Dev Tools": { es: "Herramientas de Desarrollo", en: "Dev Tools" },
  "Game Development": {
    es: "Desarrollo de Videojuegos",
    en: "Game Development",
  },
  Emerging: {
    es: "Emergente",
    en: "Emerging",
  },
} as const;
