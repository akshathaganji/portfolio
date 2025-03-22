import HeroBanner from '@/components/hero-banner';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ExperienceSection from '@/components/experience-section';
import ContactSection from '@/components/contact-section';
import SectionHeader from '../components/section-header';
import SectionDivider from '@/components/ui/section-divider';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div id="about" className="pt-8 md:pt-12">
        <SectionHeader title="ABOUT ME" />
        <AboutSection />
        <SectionDivider />
      </div>
      <div id="experience" className="pt-4 md:pt-8">
        <SectionHeader title="EXPERIENCE" />
        <ExperienceSection />
        <SectionDivider />
      </div>
      <div id="skills" className="pt-4 md:pt-8">
        <SectionHeader title="SKILLS" />
        <SkillsSection />
        <SectionDivider />
      </div>
      <div id="projects" className="pt-4 md:pt-8">
        <SectionHeader title="PROJECTS" />
        <ProjectsSection />
        <SectionDivider />
      </div>
      <div id="contact" className="pt-4 md:pt-8 pb-16">
        <SectionHeader title="CONTACT" />
        <ContactSection />
      </div>
    </>
  );
}
