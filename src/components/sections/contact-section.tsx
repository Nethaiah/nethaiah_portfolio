"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  FileTextIcon,
  MailIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LetsTalkModal } from "@/components/lets-talk-modal";
import { SectionHeading } from "@/components/section-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


const RESUME_PDF = "/Resume_Jomar_Maestro_v3.pdf";
const RESUME_IMG = "/Resume_Jomar_Maestro_v3.jpg";

export function ContactSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="contact" className="portfolio-col portfolio-section">
      <SectionHeading title="Get In Touch" />
      <div className="grid gap-3 sm:grid-cols-2">
        {/* Email */}
        <a
          href="mailto:maestrojomar143@gmail.com"
          className="group flex items-center gap-4 border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <span className="flex size-9 items-center justify-center border border-border bg-muted text-foreground">
            <MailIcon className="size-4" />
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Email
            </p>
            <p className="text-sm text-foreground transition-colors group-hover:text-primary">
              maestrojomar143@gmail.com
            </p>
          </div>
          <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
        </a>

        {/* Let's Talk */}
        <LetsTalkModal />

        {/* Resume */}
        <button
          type="button"
          className="group flex items-center gap-4 border border-border bg-card px-4 py-4 text-left transition-colors hover:border-primary/40 hover:text-primary"
          onClick={() => setResumeOpen(true)}
        >
          <span className="flex size-9 items-center justify-center border border-border bg-muted text-foreground">
            <FileTextIcon className="size-4" />
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              Resume
            </p>
            <p className="text-sm text-foreground transition-colors group-hover:text-primary">
              View & Download Resume
            </p>
          </div>
          <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
        </button>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/maestro-jomar-d-134876330/"
          className="group flex items-center gap-4 border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <span className="flex size-9 items-center justify-center border border-border bg-muted text-foreground">
            in
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              LinkedIn
            </p>
            <p className="text-sm text-foreground transition-colors group-hover:text-primary">
              Maestro Jomar D.
            </p>
          </div>
          <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Nethaiah"
          className="group flex items-center gap-4 border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <span className="flex size-9 items-center justify-center border border-border bg-muted text-foreground">
            ⌥
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              GitHub
            </p>
            <p className="text-sm text-foreground transition-colors group-hover:text-primary">
              @Nethaiah
            </p>
          </div>
          <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
        </a>

        {/* X / Twitter */}
        <a
          href="https://x.com/Nethaiah_"
          className="group flex items-center gap-4 border border-border bg-card px-4 py-4 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <span className="flex size-9 items-center justify-center border border-border bg-muted text-foreground">
            𝕏
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              X
            </p>
            <p className="text-sm text-foreground transition-colors group-hover:text-primary">
              @Nethaiah_
            </p>
          </div>
          <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
        </a>
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
                <a href={RESUME_PDF} download="Resume_Jomar_Maestro.pdf" />
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
