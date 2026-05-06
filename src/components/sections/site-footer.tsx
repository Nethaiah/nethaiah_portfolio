import { FluidGradientText } from "@/components/fluid-gradient-text";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/Nethaiah" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maestro-jomar-d-134876330/",
  },
  { label: "X", href: "https://x.com/Nethaiah_" },
] as const;

export function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-border/80 bg-background">
      <div className="portfolio-col flex flex-col gap-8 py-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          © 2026 Jomar Maestro. All rights reserved.
        </p>
      </div>

      <div className="mx-auto h-48 max-w-6xl px-4 text-foreground sm:h-56">
        <FluidGradientText text="Nethaiah" svgViewBoxHeight={220} />
      </div>
    </footer>
  );
}
