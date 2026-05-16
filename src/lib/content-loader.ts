import fs from "fs";
import path from "path";
import type { ContentData, Profile, Experience, Skill, Social } from "./schema";

const CONTENT_DIR = path.join(process.cwd(), "content");

function loadJSON<T>(filePath: string): T {
  const fullPath = path.join(CONTENT_DIR, filePath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(raw) as T;
}

export function loadProfile(): Profile {
  return loadJSON<Profile>("profile.json");
}

export function loadExperience(): Experience[] {
  return loadJSON<Experience[]>("experience.json");
}

export function loadSkills(): Skill[] {
  return loadJSON<Skill[]>("skills.json");
}

export function loadSocial(): Social {
  return loadJSON<Social>("social.json");
}

export function loadAllContent(): Omit<ContentData, "projects"> {
  return {
    profile: loadProfile(),
    experience: loadExperience(),
    skills: loadSkills(),
    social: loadSocial(),
  };
}
