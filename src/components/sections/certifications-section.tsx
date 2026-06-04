"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRightIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Certificate = {
  name: string;
  issuer: string;
  year: string;
  file: string;
};

const INITIAL_COUNT = 5;

const certifications: Certificate[] = [
  {
    name: "AWS Cloud Practitioner (CLF-C02)",
    issuer: "DataCamp",
    year: "2024",
    file: "/certificates/Maestro Jomar Data Camp AWS Cloud Practitioner (CLF-C02).jpg",
  },
  {
    name: "AWS Cloud Technology & Services Concepts",
    issuer: "DataCamp",
    year: "2024",
    file: "/certificates/Maestro Jomar Data Camp AWS Cloud Technology and Services Concepts.jpg",
  },
  {
    name: "AWS Concepts",
    issuer: "DataCamp",
    year: "2024",
    file: "/certificates/Maestro Jomar Data Camp AWS Concepts.jpg",
  },
  {
    name: "AWS Security and Cost Management",
    issuer: "DataCamp",
    year: "2024",
    file: "/certificates/Maestro Jomar Data Camp AWS Security and Cost Management.jpg",
  },
  {
    name: "Understanding Cloud Computing",
    issuer: "DataCamp",
    year: "2024",
    file: "/certificates/Maestro Jomar Data Camp Understanding Cloud Computing.jpg",
  },
  {
    name: "Intro to Cloud Computing",
    issuer: "Coursera",
    year: "2024",
    file: "/certificates/Coursera Intro to Cloud Computing.jpg",
  },
  {
    name: "Intro to HTML, CSS, JavaScript",
    issuer: "Coursera",
    year: "2024",
    file: "/certificates/Coursera Intro to HTML, CSS, Js.jpg",
  },
  {
    name: "Intro to Software Engineering",
    issuer: "Coursera",
    year: "2024",
    file: "/certificates/Coursera Intro to Software Engineering.jpg",
  },
  {
    name: "Programming for Beginners Using Python",
    issuer: "DICT",
    year: "2024",
    file: "/certificates/DICT Programming for Beginners Using Python Maestro Jomar D. Cert.jpg",
  },
  {
    name: "Programming for Intermediate Using Python",
    issuer: "DICT",
    year: "2024",
    file: "/certificates/DICT Programming for Intermediate Using Python Maestro Jomar D. Cert.jpg",
  },
  {
    name: "Unveiling Tomorrow: AI and Machine Learning",
    issuer: "Webinar",
    year: "2024",
    file: "/certificates/Jomar D. Maestro Certificate for Unveiling Tomorrow The Force of Artificial Intelligence and Machine Learning July 3, 2024.jpg",
  },
  {
    name: "Immutable Backend Web Dev with Internet Computer",
    issuer: "Webinar",
    year: "2024",
    file: "/certificates/Jomar D. Maestro Immutable Backend Web Development with Internet Computer june 25 Certificate.jpg",
  },
  {
    name: "AI-Innovative Week (June 18)",
    issuer: "DICT Rizal",
    year: "2024",
    file: "/certificates/Jomar Maestro DICT Rizal Ai-Innovative week june 18 Certificate.jpg",
  },
  {
    name: "AI-Innovative Week (June 20)",
    issuer: "DICT Rizal",
    year: "2024",
    file: "/certificates/Jomar Maestro DICT Rizal Ai-Innovative week june 20 Certificate.jpg",
  },
];

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visible = expanded
    ? certifications
    : certifications.slice(0, INITIAL_COUNT);
  const hasMore = certifications.length > INITIAL_COUNT;

  return (
    <section className="portfolio-col portfolio-section">
      <SectionHeading
        title="Certifications"
        count={certifications.length}
      />
      <div className="flex flex-col gap-3">
        {visible.map((item) => (
          <Card
            key={item.file}
            size="sm"
            className="cursor-pointer transition-colors hover:bg-accent/50"
            onClick={() => setSelectedCert(item)}
          >
            <CardContent className="flex items-center gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <p className="text-sm font-medium text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  @ {item.issuer}
                </p>
              </div>
              <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                <span>{item.year}</span>
                <ArrowUpRightIcon className="size-3.5" />
              </div>
            </CardContent>
          </Card>
        ))}
        {hasMore && (
          <Button
            variant="ghost"
            className="w-full text-xs text-muted-foreground"
            onClick={() => setExpanded((prev) => !prev)}
          >
            <ChevronDownIcon
              data-icon="inline-start"
              className={cn(
                "transition-transform duration-200",
                expanded && "rotate-180"
              )}
            />
            {expanded
              ? "Show Less"
              : `Show ${certifications.length - INITIAL_COUNT} More`}
          </Button>
        )}
      </div>

      <Dialog
        open={selectedCert !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCert(null);
        }}
      >
        <DialogContent className="w-[95vw] sm:max-w-3xl max-h-[90vh] p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle>{selectedCert?.name}</DialogTitle>
            <DialogDescription>
              Issued by {selectedCert?.issuer} · {selectedCert?.year}
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-auto max-h-[calc(90vh-8rem)]">
            {selectedCert && (
              <Image
                src={selectedCert.file}
                alt={selectedCert.name}
                width={1200}
                height={850}
                className="w-full h-auto rounded-sm"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
