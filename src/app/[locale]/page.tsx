import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { loadProfile, loadExperience, loadSkills, loadSocial } from "@/lib/content-loader";
import { loadAllProjects } from "@/lib/mdx-loader";

export default function HomePage() {
  const profile = loadProfile();
  const experience = loadExperience();
  const skills = loadSkills();
  const social = loadSocial();
  const projects = loadAllProjects();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection profile={profile} />
        <AboutSection />
        <ExperienceSection allExperience={experience} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection profile={profile} />
      </main>
      <Footer social={social} />
    </>
  );
}
