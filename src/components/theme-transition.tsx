"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "visible" | "fading";

/**
 * ThemeTransition
 *
 * Plays a full-screen video overlay whenever the user switches themes:
 *  - dark → light : /dark_light.mp4
 *  - light → dark : /light_dark.mp4
 *
 * Flow: theme changes → video fades IN → plays → ends → fades OUT → idle
 */
export function ThemeTransition() {
  const { resolvedTheme } = useTheme();
  const prevTheme = useRef<string | undefined>(undefined);

  const [src, setSrc] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeOutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect theme direction change
  useEffect(() => {
    if (!resolvedTheme) return;
    const prev = prevTheme.current;
    prevTheme.current = resolvedTheme;

    // Skip initial mount
    if (prev === undefined) return;
    if (prev === resolvedTheme) return;

    // Cancel any in-progress fade-out
    if (fadeOutTimer.current) clearTimeout(fadeOutTimer.current);

    const nextSrc =
      prev === "dark" && resolvedTheme === "light"
        ? "/dark_light.mp4"
        : "/light_dark.mp4";

    setSrc(nextSrc);
    setPhase("visible");
  }, [resolvedTheme]);

  // Play video whenever src + phase become "visible"
  useEffect(() => {
    if (phase !== "visible" || !videoRef.current) return;

    const video = videoRef.current;
    video.currentTime = 0;
    video.play().catch(() => {});

    function handleEnded() {
      setPhase("fading");
      fadeOutTimer.current = setTimeout(() => {
        setPhase("idle");
        setSrc(null);
      }, 500); // matches the CSS transition below
    }

    video.addEventListener("ended", handleEnded, { once: true });
    return () => video.removeEventListener("ended", handleEnded);
  }, [phase, src]); // re-run when src changes mid-play too

  if (phase === "idle") return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: phase === "fading" ? "opacity 500ms ease" : "opacity 80ms ease",
      }}
    >
      {src && (
        <video
          ref={videoRef}
          key={src}              /* remount when src changes mid-transition */
          src={src}
          muted
          playsInline
          preload="auto"
          className="block h-full w-full object-cover"
        />
      )}
    </div>
  );
}
