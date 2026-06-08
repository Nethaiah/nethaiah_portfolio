import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

const stackItems = [
  "TypeScript",
  "JavaScript",
  "Python",
  "PHP",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Shadcn/UI",
  "Node.js",
  "FastAPI",
  "Laravel",
  "PostgreSQL",
  "Supabase",
  "Drizzle ORM",
  "Better Auth",
  "Vercel",
  "OpenRouter",
  "Git/GitHub",
  "Google Cloud Platform",
] as const;

export function StackSection() {
  return (
    <section id="stack" className="portfolio-col portfolio-section">
      <SectionHeading
        title="Stack"
        action={{ href: "/stack", label: "View All" }}
      />
      <div className="flex flex-wrap gap-2">
        {stackItems.map((item) => (
          <Badge key={item} variant="outline" className="h-7 gap-2 px-3">
            <span className="portfolio-stack-dot" aria-hidden="true" />
            {item}
          </Badge>
        ))}
      </div>
    </section>
  );
}
