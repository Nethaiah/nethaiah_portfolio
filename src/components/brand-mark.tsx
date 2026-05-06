/**
 * Inline brand SVG (NT monogram).
 * Uses `currentColor` so it's theme-aware without CSS filters.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 160"
      className={className}
      aria-label="Nethaiah brand mark"
      role="img"
    >
      {/* Letter N */}
      <rect x="0"   y="0"   width="40" height="160" fill="currentColor" />
      <rect x="40"  y="40"  width="40" height="40"  fill="currentColor" />
      <rect x="80"  y="80"  width="40" height="40"  fill="currentColor" />
      <rect x="120" y="0"   width="40" height="160" fill="currentColor" />
      {/* Letter T */}
      <rect x="200" y="0"   width="120" height="40"  fill="currentColor" />
      <rect x="240" y="40"  width="40"  height="120" fill="currentColor" />
    </svg>
  );
}
