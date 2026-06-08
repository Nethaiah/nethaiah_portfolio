import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import { LetsTalkModal } from "@/components/lets-talk-modal";
import { SectionHeading } from "@/components/section-heading";

const contactLinks = [
  {
    label: "Email",
    value: "maestrojomar143@gmail.com",
    href: "mailto:maestrojomar143@gmail.com",
    icon: <MailIcon className="size-4" />,
  },
  {
    label: "GitHub",
    value: "@Nethaiah",
    href: "https://github.com/Nethaiah",
    icon: "⌥",
  },
  {
    label: "LinkedIn",
    value: "Maestro Jomar D.",
    href: "https://www.linkedin.com/in/maestro-jomar-d-134876330/",
    icon: "in",
  },
  {
    label: "X",
    value: "@Nethaiah_",
    href: "https://x.com/Nethaiah_",
    icon: "𝕏",
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="portfolio-col portfolio-section">
      <SectionHeading title="Get In Touch" />
      <div className="grid gap-3 sm:grid-cols-2">
        {contactLinks.slice(0, 1).map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center gap-4 border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <span className="flex size-9 items-center justify-center border border-border bg-muted text-foreground">
              {item.icon}
            </span>
            <div className="flex flex-1 flex-col gap-1">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
              <p className="text-sm text-foreground transition-colors group-hover:text-primary">
                {item.value}
              </p>
            </div>
            <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        ))}
        <LetsTalkModal />
        {contactLinks.slice(1).map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center gap-4 border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <span className="flex size-9 items-center justify-center border border-border bg-muted text-foreground">
              {item.icon}
            </span>
            <div className="flex flex-1 flex-col gap-1">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
              <p className="text-sm text-foreground transition-colors group-hover:text-primary">
                {item.value}
              </p>
            </div>
            <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        ))}
      </div>
    </section>
  );
}
