"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, DownloadIcon } from "lucide-react";
import { LiveTime } from "@/components/portfolio-widgets";
import { ProfileAvatar } from "@/components/profile-avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const profileMeta: {
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
  action?: "resume";
}[] = [
  { label: "status", value: "open to work", accent: true },
  {
    label: "email",
    value: "maestrojomar143@gmail.com",
    href: "mailto:maestrojomar143@gmail.com",
  },
  { label: "resume", value: "View Resume", action: "resume" },
  { label: "location", value: "Laguna, PH" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maestro-jomar-d-134876330/",
    icon: "in",
  },
  {
    label: "GitHub",
    href: "https://github.com/Nethaiah",
    icon: "⌥",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Nethaiah_",
    icon: "𝕏",
  },
] as const;

const RESUME_PDF = "/Resume_Jomar_Maestro_v3.pdf";
const RESUME_IMG = "/Resume_Jomar_Maestro_v3.jpg";

export function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="about" className="portfolio-col pt-6 pb-12 sm:pt-8 sm:pb-14">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <ProfileAvatar />

          {/* Name + tagline */}
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              <LiveTime />
              <span>·</span>
              <span>Laguna, PH</span>
            </div>
            <h1 className="portfolio-name flex flex-wrap items-baseline gap-3 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
              Jomar Maestro
              <span className="font-mono text-lg font-normal tracking-widest text-muted-foreground">
                nethaiah
              </span>
            </h1>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="text-primary">Full-Stack</span> · Web Developer ·{" "}
              <span className="text-primary">AI</span>
            </p>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {profileMeta.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-3 border border-border bg-card px-4 py-3",
                item.action === "resume" &&
                  "cursor-pointer transition-colors hover:border-primary/40 hover:text-primary",
              )}
              onClick={
                item.action === "resume"
                  ? () => setResumeOpen(true)
                  : undefined
              }
            >
              <span className="min-w-14 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  {item.value}
                </Link>
              ) : (
                <span
                  className={cn(
                    "text-sm text-foreground",
                    item.accent
                      ? "inline-flex items-center gap-2 text-primary"
                      : "",
                    item.action === "resume"
                      ? "inline-flex items-center gap-2"
                      : "",
                  )}
                >
                  {item.accent ? (
                    <span className="portfolio-pulse-dot" />
                  ) : null}
                  {item.value}
                  {item.action === "resume" ? (
                    <ArrowUpRightIcon className="size-3.5 text-muted-foreground" />
                  ) : null}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {/* First row: first 3 links */}
          <div className="grid gap-2 sm:grid-cols-3">
            {socialLinks.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-border bg-card px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <span className="flex size-4 items-center justify-center text-xs text-foreground">
                  {link.icon}
                </span>
                <span>{link.label}</span>
                <ArrowUpRightIcon className="ml-auto size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
          {/* Second row: last link centered */}
          <div className="flex justify-center">
            {socialLinks.slice(3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center gap-3 border border-border bg-card px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:w-1/3"
              >
                <span className="flex size-4 items-center justify-center text-xs text-foreground">
                  {link.icon}
                </span>
                <span>{link.label}</span>
                <ArrowUpRightIcon className="ml-auto size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Dialog */}
      <Dialog
        open={resumeOpen}
        onOpenChange={(open) => {
          if (!open) setResumeOpen(false);
        }}
      >
        <DialogContent className="w-[95vw] sm:max-w-3xl max-h-[90vh] p-4 sm:p-6 flex flex-col">
          <DialogHeader>
            <DialogTitle>Resume</DialogTitle>
            <DialogDescription>
              Jomar Maestro · Full-Stack Web Developer
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-auto flex-1 min-h-0">
            <Image
              src={RESUME_IMG}
              alt="Resume — Jomar Maestro"
              width={1200}
              height={1600}
              className="w-full h-auto rounded-sm"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={
                <Link href={RESUME_PDF} download="Resume_Jomar_Maestro.pdf" />
              }
            >
              <DownloadIcon />
              Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
