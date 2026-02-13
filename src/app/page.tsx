"use client";

import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { TimelineSection } from "./components/sections/TimelineSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
    </main>
  );
}
