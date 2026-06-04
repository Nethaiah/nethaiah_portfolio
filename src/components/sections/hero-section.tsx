import { ArrowUpRightIcon } from "lucide-react";
import { LiveTime } from "@/components/portfolio-widgets";
import { ProfileAvatar } from "@/components/profile-avatar";
import { cn } from "@/lib/utils";

const profileMeta: {
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}[] = [
  { label: "location", value: "Laguna, PH" },
  {
    label: "email",
    value: "maestrojomar143@gmail.com",
    href: "mailto:maestrojomar143@gmail.com",
  },
  { label: "status", value: "open to work", accent: true },
  { label: "pronouns", value: "he/him" },
];

const socialLinks = [
  {
    label: "X / Twitter",
    href: "https://x.com/Nethaiah_",
    icon: "𝕏",
  },
  {
    label: "GitHub",
    href: "https://github.com/Nethaiah",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maestro-jomar-d-134876330/",
    icon: "in",
  },
] as const;

export function HeroSection() {
  return (
    <section id="about" className="portfolio-col pt-8 pb-14">
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

        <div className="grid overflow-hidden border border-border bg-card sm:grid-cols-2">
          {profileMeta.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-3 border-border px-4 py-3",
                index < profileMeta.length - 2 ? "border-b" : "",
                index % 2 === 0 ? "sm:border-r" : "",
              )}
            >
              <span className="min-w-14 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  {item.value}
                </a>
              ) : (
                <span
                  className={cn(
                    "text-sm text-foreground",
                    item.accent
                      ? "inline-flex items-center gap-2 text-primary"
                      : "",
                  )}
                >
                  {item.accent ? (
                    <span className="portfolio-pulse-dot" />
                  ) : null}
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {/* First row: first 3 links */}
          <div className="grid gap-2 sm:grid-cols-3">
            {socialLinks.slice(0, 3).map((link) => (
              <a
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
              </a>
            ))}
          </div>
          {/* Second row: last link centered */}
          <div className="flex justify-center">
            {socialLinks.slice(3).map((link) => (
              <a
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
