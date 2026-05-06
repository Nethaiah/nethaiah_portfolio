"use client";

import { ChevronDownIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";

/* ─── Data ─── */

interface Role {
  title: string;
  type: string;
  dates: string;
  duration: string;
  bullets: readonly string[];
  tags: readonly string[];
}

interface Company {
  company: string;
  live?: boolean;
  roles: readonly Role[];
}

const experience: readonly Company[] = [
  {
    company: "Standard Chartered",
    live: true,
    roles: [
      {
        title: "AI Engineer",
        type: "Full-time",
        dates: "01.2025 → ∞",
        duration: "Current",
        bullets: [
          "Build AI-powered enterprise banking solutions",
          "Lead GenAI and LLM workflow integration into production",
        ],
        tags: ["Python", "LangChain", "AWS"],
      },
      {
        title: "AI Ops Engineer",
        type: "Full-time",
        dates: "01.2025 → ∞",
        duration: "Current",
        bullets: [],
        tags: ["GenAI", "MLOps"],
      },
    ],
  },
  {
    company: "Core Technology, Cambridge",
    roles: [
      {
        title: "Senior Full-Stack Developer",
        type: "Full-time",
        dates: "03.2023 – 12.2024",
        duration: "1y 9m",
        bullets: [
          "Built scalable applications for 50K+ daily users",
          "Architected microservices on AWS",
        ],
        tags: ["React", "Node.js", "PostgreSQL"],
      },
    ],
  },
  {
    company: "PocketDevs",
    roles: [
      {
        title: "Software Engineering Lead",
        type: "Full-time",
        dates: "01.2021 – 02.2023",
        duration: "2y 1m",
        bullets: [
          "Led team of 8 building SaaS products for SMEs",
          "Established CI/CD pipelines and code review culture",
        ],
        tags: ["Vue.js", "Laravel", "Docker"],
      },
    ],
  },
];

const education = {
  school: "Laguna University",
  degree: "BS Computer Science — Data Science",
  dates: "Aug 2021 – Jun 2026",
};

/* ─── Components ─── */

function ExperienceBlock({ company }: { company: Company }) {
  return (
    <Collapsible defaultOpen={!!company.live} className="exp-block">
      {/* Left green gradient bar */}
      <div className="exp-block-bar" aria-hidden="true" />

      {/* Company header — acts as the trigger */}
      <CollapsibleTrigger className="exp-company group">
        <span
          className={cn(
            "exp-dot",
            company.live ? "exp-dot--live" : "exp-dot--old",
          )}
        />
        <span className="exp-co">{company.company}</span>
        {company.live ? (
          <Badge variant="default" className="exp-live-badge">
            LIVE
          </Badge>
        ) : null}
        <ChevronDownIcon className="exp-chevron" />
      </CollapsibleTrigger>

      {/* Collapsible roles */}
      <CollapsibleContent className="exp-roles-panel">
        {company.roles.map((role, index) => (
          <div
            key={`${company.company}-${role.title}`}
            className={cn(
              "exp-role",
              index === company.roles.length - 1 && "exp-role--last",
            )}
          >
            <div className="exp-role-top">
              <span className="exp-rname">{role.title}</span>
              <Badge variant="outline" className="exp-rtype">
                {role.type}
              </Badge>
            </div>
            <p className="exp-dates">
              {role.dates}{" "}
              <span className="exp-dur">{role.duration}</span>
            </p>
            {role.bullets.length > 0 ? (
              <ul className="exp-bul">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            <div className="exp-chips">
              {role.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="exp-tag">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

function EducationBlock() {
  return (
    <Collapsible defaultOpen className="exp-block">
      <div className="exp-block-bar" aria-hidden="true" />
      <CollapsibleTrigger className="exp-company group">
        <span className="exp-dot exp-dot--old" />
        <span className="exp-co">{education.school}</span>
        <ChevronDownIcon className="exp-chevron" />
      </CollapsibleTrigger>
      <CollapsibleContent className="exp-roles-panel">
        <div className="exp-role exp-role--last">
          <div className="exp-role-top">
            <span className="exp-rname">{education.degree}</span>
          </div>
          <p className="exp-dates">{education.dates}</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-col portfolio-section">
      <SectionHeading title="Experience" />

      <div className="flex flex-col gap-6">
        {/* Experience blocks */}
        <div className="flex flex-col gap-3">
          {experience.map((company) => (
            <ExperienceBlock key={company.company} company={company} />
          ))}
        </div>

        {/* Education sub-section */}
        <div className="flex flex-col gap-6" style={{ marginTop: 24 }}>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Education
            </h2>
            <div className="h-px flex-1 bg-linear-to-r from-border/50 to-transparent" />
          </div>
          <EducationBlock />
        </div>
      </div>
    </section>
  );
}
