import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import { PortfolioNav } from "@/components/portfolio-nav";
import { FluidGradientText } from "@/components/fluid-gradient-text";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Tech Stack | Nethaiah",
  description:
    "Full list of technologies, tools, and frameworks Jomar Maestro (Nethaiah) works with — from TypeScript and React to AI/ML tooling and infrastructure.",
};

const stackCategories = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Shadcn/UI", "HTML & CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Hono", "FastAPI", "Laravel", "Django", "REST API", "Zod"],
  },
  {
    title: "Databases & ORM",
    items: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Neon",
      "Firebase",
      "Drizzle ORM",
      "Pinecone",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "LLM Integration",
      "Vector Search",
      "NLP",
      "Web Scraping",
      "OpenRouter",
      "Hugging Face",
      "Claude Code",
      "OpenCode",
    ],
  },
  {
    title: "Auth & Security",
    items: ["Better Auth", "Clerk", "OAuth", "Arcjet"],
  },
  {
    title: "Infrastructure & Deployment",
    items: ["Git/GitHub", "Vercel", "Railway", "GCP", "XAMPP", "Laravel Herd"],
  },
  {
    title: "Dev Tools & Workflow",
    items: ["npm", "pnpm", "nuqs", "Resend", "Postman", "HTTPie", "TablePlus", "Agile", "Biome", "ESLint"],
  },
] as const;



export default function StackPage() {
  return (
    <>
      <PortfolioNav />

      <main className="bg-background text-foreground">
        {/* Page header */}
        <section className="portfolio-col py-10">
          <div className="flex flex-col gap-4">
            <a
              href="/"
              className="inline-flex w-fit items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeftIcon className="size-3" />
              Back to home
            </a>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                Tech Stack
              </h1>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                Tools, frameworks &amp; technologies I work with
              </p>
            </div>
          </div>
        </section>

        {/* Stack categories */}
        {stackCategories.map((category) => (
          <div key={category.title}>
            <section className="portfolio-col portfolio-section">
              <SectionHeading title={category.title} />
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="h-7 gap-2 px-3"
                  >
                    <span className="portfolio-stack-dot" aria-hidden="true" />
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
        ))}

        <footer className="overflow-hidden border-t border-border/80 bg-background">
          <div className="portfolio-col flex flex-col gap-4 py-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              <a
                href="https://github.com/Nethaiah"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/maestro-jomar-d-134876330/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/Nethaiah_"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                X
              </a>
            </div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              © 2026 Jomar Maestro. All rights reserved.
            </p>
          </div>

          <div className="mx-auto h-48 max-w-6xl px-4 text-foreground sm:h-56">
            <FluidGradientText text="Nethaiah" svgViewBoxHeight={220} />
          </div>
        </footer>
      </main>
    </>
  );
}
