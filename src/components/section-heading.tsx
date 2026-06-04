import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  title: string;
  count?: number;
  action?: { href: string; label: string };
}

export function SectionHeading({ title, count, action }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {typeof count === "number" ? (
        <Badge variant="outline">{count}</Badge>
      ) : null}
      <div className="h-px flex-1 bg-linear-to-r from-border/50 to-transparent" />
      {action ? (
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          href={action.href}
        >
          {action.label} →
        </a>
      ) : null}
    </div>
  );
}
