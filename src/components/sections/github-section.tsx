import { Suspense } from "react";
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import { SectionHeading } from "@/components/section-heading";

interface GitHubSectionProps {
  contributions: ReturnType<
    typeof import("@/lib/get-cached-contributions").getCachedContributions
  >;
}

export function GitHubSection({ contributions }: GitHubSectionProps) {
  return (
    <section className="portfolio-col portfolio-section">
      <SectionHeading title="GitHub Contributions" />
      <Suspense fallback={<GitHubContributionsFallback />}>
        <GitHubContributions
          contributions={contributions}
          githubProfileUrl="https://github.com/Nethaiah"
        />
      </Suspense>
    </section>
  );
}
