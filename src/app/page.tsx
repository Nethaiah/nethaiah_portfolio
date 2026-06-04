import { HeroBrand } from "@/components/hero-brand";
import { PortfolioNav } from "@/components/portfolio-nav";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/experience-section";
// import { GallerySection } from "@/components/sections/gallery-section";
import { GitHubSection } from "@/components/sections/github-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { StackSection } from "@/components/sections/stack-section";
import { TerminalChatbot } from "@/components/terminal-chatbot";

export default function Home() {
  const githubContributions = getCachedContributions("Nethaiah");

  return (
    <>
      <PortfolioNav />
      <HeroBrand />

      <main id="top" className="bg-background text-foreground">
        <HeroSection />
        <AboutSection />
        <GitHubSection contributions={githubContributions} />
        <StackSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        {/* <GallerySection /> */}
        <ContactSection />
        <SiteFooter />
      </main>
      <TerminalChatbot />
    </>
  );
}
