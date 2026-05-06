import { ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const certifications = [
  { name: "Huawei Developer Expert", issuer: "Huawei", year: "2024" },
  { name: "Generative AI Leader", issuer: "Google", year: "2024" },
  { name: "Software Engineering", issuer: "TestDome", year: "2023" },
  { name: "Generative AI Professional", issuer: "Oracle", year: "2024" },
] as const;

export function CertificationsSection() {
  return (
    <section className="portfolio-col portfolio-section">
      <SectionHeading
        title="Certifications"
        count={19}
        action={{ href: "#contact", label: "View All" }}
      />
      <div className="flex flex-col gap-3">
        {certifications.map((item) => (
          <Card key={item.name} size="sm">
            <CardContent className="flex items-center gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <p className="text-sm font-medium text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">@ {item.issuer}</p>
              </div>
              <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                <span>{item.year}</span>
                <ArrowUpRightIcon className="size-3.5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
