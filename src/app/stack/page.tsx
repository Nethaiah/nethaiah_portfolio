import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioNav } from "@/components/portfolio-nav";
import { SiteFooter } from "@/components/sections/site-footer";
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
    items: [
      "Node.js",
      "Hono",
      "FastAPI",
      "Laravel",
      "Django",
      "REST API",
      "Zod",
    ],
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
      "Skills",
    ],
  },
  {
    title: "Auth & Security",
    items: ["Better Auth", "Clerk", "OAuth", "Arcjet"],
  },
  {
    title: "Infrastructure & Deployment",
    items: [
      "Git/GitHub",
      "Vercel",
      "Railway",
      "Google Cloud Platform",
      "XAMPP",
      "Laravel Herd",
    ],
  },
  {
    title: "Dev Tools & Workflow",
    items: [
      "npm",
      "pnpm",
      "nuqs",
      "Resend",
      "Postman",
      "HTTPie",
      "TablePlus",
      "Agile",
      "Biome",
      "ESLint",
    ],
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
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeftIcon className="size-3" />
              Back to home
            </Link>
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

        <SiteFooter />
      </main>
    </>
  );
}
