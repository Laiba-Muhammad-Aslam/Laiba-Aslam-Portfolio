import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { VolunteerSection } from "@/components/portfolio/volunteer-section"
import { FooterCTA } from "@/components/portfolio/footer-cta"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      {/* <VolunteerSection /> */}
      <FooterCTA />
    </main>
  )
}
