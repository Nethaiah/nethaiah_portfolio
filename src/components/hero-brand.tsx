"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import Magnet from "@/components/magnet/Magnet";
import { BrandMark } from "@/components/brand-mark";

interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  [key: string]: unknown;
}

// DotField is canvas-based — skip SSR
const DotField = dynamic(
  () => import("@/components/magnet/DotField").then((m) => (m.default ?? m) as ComponentType<DotFieldProps>),
  { ssr: false },
) as ComponentType<DotFieldProps>;

export function HeroBrand() {
  return (
    <div
      id="hero-brand"
      className="relative flex min-h-[240px] w-full items-center justify-center overflow-hidden bg-background"
    >
      {/* DotField fills the whole hero, faded at top/bottom using mask-image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
        }}
      >
        <DotField
          dotRadius={2.2}
          dotSpacing={18}
          bulgeStrength={55}
          glowRadius={130}
          sparkle={true}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(99, 102, 241, 0.4)"
          gradientTo="rgba(139, 92, 246, 0.2)"
          glowColor="rgba(139, 92, 246, 0.15)"
        />
      </div>

      {/* Brand SVG centered with Magnet effect */}
      <div className="relative z-2 text-foreground">
        <Magnet padding={120} magnetStrength={3} wrapperClassName="block">
          <BrandMark className="w-[160px] h-auto" />
        </Magnet>
      </div>
    </div>
  );
}
