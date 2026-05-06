import { SectionHeading } from "@/components/section-heading";

const aboutParagraphs = [
  "I'm a full-stack software engineer specializing in JavaScript, TypeScript, Python, and PHP — building modern web applications and AI-powered products across the full stack, with a focus on quality, performance, and real-world impact.",
  "I've gained most of my experience through building a variety of experimental projects, ranging from full-stack web apps to REST APIs. I'm always eager to learn and improve—whether that's by staying up to date with the latest tech news.",
  "Lately I've been diving deeper into artificial intelligence — integrating LLM-powered features, vector search, and generative AI workflows into modern applications to build smarter, more useful software.",
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
