"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "playing" | "fading";

/**
 * ProfileAvatar
 *
 * - Shows dark_profile.png in dark mode, light_profile.png in light mode
 * - When theme toggles, plays a transition video INSIDE the avatar container:
 *     dark → light : /dark_light.mp4
 *     light → dark : /light_dark.mp4
 * - After the video ends it fades out smoothly, revealing the new static image
 */
export function ProfileAvatar() {
  const { resolvedTheme } = useTheme();
  const prevTheme = useRef<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  // Which static image to show (based on current settled theme)
  const [currentTheme, setCurrentTheme] = useState<string>("dark");

  // Video transition state
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect theme changes and trigger the video
  useEffect(() => {
    if (!resolvedTheme) return;

    const prev = prevTheme.current;
    prevTheme.current = resolvedTheme;

    if (prev === undefined) {
      // First mount — just set the theme, no video
      setCurrentTheme(resolvedTheme);
      return;
    }
    if (prev === resolvedTheme) return;

    // Clear any in-progress fade
    if (fadeTimer.current) clearTimeout(fadeTimer.current);

    const src =
      prev === "dark" && resolvedTheme === "light"
        ? "/dark_light.mp4"
        : "/light_dark.mp4";

    setVideoSrc(src);
    setPhase("playing");
    // Update the underlying static image immediately so it's ready under the video
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  // Play the video when it becomes active
  useEffect(() => {
    if (phase !== "playing" || !videoRef.current) return;

    const video = videoRef.current;
    video.currentTime = 0;
    video.play().catch(() => {});

    function onEnded() {
      setPhase("fading");
      fadeTimer.current = setTimeout(() => {
        setPhase("idle");
        setVideoSrc(null);
      }, 400); // matches the CSS transition duration
    }

    video.addEventListener("ended", onEnded, { once: true });
    return () => video.removeEventListener("ended", onEnded);
  }, [phase, videoSrc]);

  const imgSrc = currentTheme === "light" ? "/light_profile.png" : "/dark_profile.png";

  return (
    <div className="relative shrink-0 w-fit">
      {/* Avatar container */}
      <div className="relative size-20 overflow-hidden border border-border bg-card">

        {/* Static profile image — always present underneath */}
        {mounted ? (
          <Image
            src={imgSrc}
            alt="Jomar Maestro"
            fill
            sizes="80px"
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="size-full bg-card" />
        )}

        {/* Transition video — overlaid on top, fades out after playing */}
        {videoSrc && (
          <video
            ref={videoRef}
            key={videoSrc}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{
              opacity: phase === "fading" ? 0 : 1,
              transition: phase === "fading" ? "opacity 400ms ease" : "none",
            }}
          />
        )}

        {/* Subtle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
      </div>

      {/* Corner decorations */}
      <span className="portfolio-corner-tl" aria-hidden="true" />
      <span className="portfolio-corner-br" aria-hidden="true" />

      {/* LIVE badge */}
      <span className="absolute -right-2 -bottom-2 inline-flex items-center gap-1 border border-primary/30 bg-background px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-primary">
        <span className="portfolio-pulse-dot" />
        live
      </span>
    </div>
  );
}
