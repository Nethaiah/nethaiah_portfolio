import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  {
    name: "CodeCred",
    desc: "Online certifications for programmers with AI-powered assessments",
    url: "codecred.dev",
    tags: ["Next.js", "PostgreSQL", "AI"],
    date: "01.2024 – ∞",
  },
  {
    name: "BASE404",
    desc: "Online coding bootcamp with live sessions and structured mentorship",
    url: "base-404.com",
    tags: ["React", "Node.js"],
    date: "06.2023 – ∞",
  },
  {
    name: "DIIN.PH",
    desc: "AI-powered wardrobe assistant with style recommendation engine",
    url: "diin.ph",
    tags: ["Python", "OpenAI"],
    date: "03.2024 – ∞",
  },
  {
    name: "DYNAMIS",
    desc: "AI-powered workout tracker that adapts to your fitness goals",
    url: "dynamis-app.online",
    tags: ["Flutter", "Firebase"],
    date: "09.2023 – ∞",
  },
] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-col portfolio-section">
      <SectionHeading
        title="Recent Projects"
        count={12}
        action={{ href: "#projects", label: "View All" }}
      />
      <div className="proj-grid">
        {projects.map((project) => (
          <a key={project.name} href="#" className="proj-card group">
            <div className="proj-card-bar" aria-hidden="true" />
            <div className="proj-name">{project.name}</div>
            <div className="proj-desc">{project.desc}</div>
            <div className="proj-url">↗ {project.url}</div>
            <div className="proj-tags">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="exp-tag">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="proj-date">{project.date}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
