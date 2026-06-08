import { FluidGradientText } from "@/components/fluid-gradient-text";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-border/80 bg-background">
      <div className="portfolio-col flex flex-col gap-8 py-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          © 2026 Jomar Maestro. All rights reserved.
        </p>
      </div>

      <div className="mx-auto hidden max-w-6xl px-4 text-foreground md:block md:h-56">
        <FluidGradientText text="Nethaiah" svgViewBoxHeight={220} />
      </div>
    </footer>
  );
}
