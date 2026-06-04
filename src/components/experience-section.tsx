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
    company: "Laguna Management Information Systems Office (MISO)",
    roles: [
      {
        title: "IT Intern",
        type: "Internship",
        dates: "Feb 2026 – April 2026",
        duration: "3 mos",
        bullets: [
          "Accelerated real-time OMR auto-capture speeds, by engineering an optimized OpenCV pipeline that bypasses expensive NV21-to-Bitmap frame conversions.",
          "Achieved at least 94%+ bubble detection accuracy across 30–60 item exam formats by calculating pixel density and applying solidity, darkness, and fill ratio filters to reject false positives.",
          "Delivered a production-ready APK to Calangay Integrated High School teachers, earning a Certificate of Recognition for successful field deployment.",
        ],
        tags: ["Java", "OpenCV", "SQLite", "Android Studio"],
      },
    ],
  },
  {
    company: "Ship or Be Shipped Hackathon",
    roles: [
      {
        title: "Developer (MedAssist)",
        type: "Hackathon",
        dates: "Dec 2025",
        duration: "24h",
        bullets: [
          "Engineered a real-time safety validation layer using the OpenFDA API to cross-reference AI outputs against federal drug databases, automatically flagging contraindications and ensuring clinical compliance.",
          "Developed an AI-powered treatment planner during a 24-hour coding sprint, parsing patient intake data into structured JSON recommendations via LLM.",
        ],
        tags: ["Typescript", "Next.js", "Supabase", "OpenFDA API", "Google Gemini 3.0 pro", "TailwindCSS", "Shadcn/UI"],
      },
    ],
  },
  {
    company: "Freelance",
    roles: [
      {
        title: "Full-Stack Developer",
        type: "Freelance",
        dates: "July 2025 – Aug 2025",
        duration: "2 mos",
        bullets: [
          "Architected a secure role-based authentication system using Next.js and PostgreSQL for administrators, assessors, and taxpayers.",
          "Implemented schema-based validation with Zod, protecting critical tax assessment records from invalid submissions.",
        ],
        tags: ["Typescript", "Next.js", "PostgreSQL", "Prisma", "TailwindCSS", "Material UI"],
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
              <ul className="exp-bul list-outside list-disc pl-5">
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
