export const contactPurposes = [
  "Schedule a Call",
  "Collaboration",
  "Feedback",
] as const;

export type ContactPurpose = (typeof contactPurposes)[number];

export const contactSubjectByPurpose: Record<ContactPurpose, string> = {
  "Schedule a Call": "New Call Request",
  Collaboration: "New Collaboration Request",
  Feedback: "New Portfolio Feedback",
};

export function isContactPurpose(value: unknown): value is ContactPurpose {
  return (
    typeof value === "string" &&
    contactPurposes.includes(value as ContactPurpose)
  );
}
