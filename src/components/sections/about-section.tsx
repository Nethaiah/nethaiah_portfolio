import { SectionHeading } from "@/components/section-heading";

const aboutParagraphs = [
  "Detail-oriented Full-Stack Developer with a strong foundation in software engineering and AI technologies. Experienced in building secure, scalable applications using Next.js and PostgreSQL, with hands-on expertise across various frameworks and tools. Proven ability to deliver production-ready solutions that solve real-world problems and streamline operations.",
] as const;

export function AboutSection() {
  return (
    <section className="portfolio-col portfolio-section">
      <SectionHeading title="About" />
      <div className="flex flex-col gap-4 text-sm leading-7 text-foreground/90">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
