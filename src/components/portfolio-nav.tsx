"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { BrandMark } from "@/components/brand-mark";
import { MenuIcon, XIcon } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "about" },
  { href: "/#stack", label: "stack" },
  { href: "/#experience", label: "exp" },
  { href: "/#projects", label: "projects" },
  { href: "/#contact", label: "contact" },
] as const;

export function PortfolioNav() {
  // true when the hero brand section has scrolled out of the viewport
  const [heroOut, setHeroOut] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-brand");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroOut(!entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="portfolio-col flex h-14 items-center">
        {/* Brand logo — hidden by default, appears when hero scrolls out */}
        <Link
          href="/"
          aria-label="Go to home"
          className={cn(
            "mr-6 overflow-hidden transition-all duration-300 text-foreground",
            heroOut
              ? "opacity-100 max-w-[80px] pointer-events-auto"
              : "opacity-0 max-w-0 pointer-events-none",
          )}
          tabIndex={heroOut ? 0 : -1}
        >
          <BrandMark className="block select-none h-5 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground capitalize"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b border-border/80 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-2 border-b border-border/40 capitalize"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
