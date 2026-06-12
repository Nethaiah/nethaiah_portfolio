import * as z from "zod";
import { contactPurposes } from "@/lib/contact";

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

function getPreferredDateTime(dateValue: string, timeValue: string) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hours, minutes] = timeValue.split(":").map(Number);

  if (!year || !month || !day || hours === undefined || minutes === undefined) {
    return null;
  }

  const date = new Date(year, month - 1, day, hours, minutes);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day ||
    date.getHours() !== hours ||
    date.getMinutes() !== minutes
  ) {
    return null;
  }

  return date;
}

export const contactFormSchema = z
  .object({
    purpose: z.enum(contactPurposes, {
      message: "Purpose is required.",
    }),
    email: z
      .string()
      .max(320, "Email must be 320 characters or fewer.")
      .default(""),
    username: z
      .string()
      .max(120, "Username must be 120 characters or fewer.")
      .default(""),
    preferred_date: z
      .string()
      .max(10, "Preferred date must use YYYY-MM-DD format.")
      .default(""),
    preferred_time: z
      .string()
      .max(5, "Preferred time must use HH:MM format.")
      .default(""),
    additional_notes: z
      .string()
      .max(5000, "Additional notes must be 5000 characters or fewer.")
      .default(""),
    message: z
      .string()
      .max(5000, "Message must be 5000 characters or fewer.")
      .default(""),
    is_anonymous: z.boolean().default(false),
  })
  .superRefine((values, context) => {
    const anonymousFeedback =
      values.purpose === "Feedback" && values.is_anonymous === true;

    if (!anonymousFeedback) {
      if (!values.email.trim()) {
        context.addIssue({
          code: "custom",
          message: "Email is required.",
          path: ["email"],
        });
      } else if (!z.email().safeParse(values.email.trim()).success) {
        context.addIssue({
          code: "custom",
          message: "Enter a valid email address.",
          path: ["email"],
        });
      }
    }

    if (values.purpose === "Schedule a Call") {
      const preferredDate = values.preferred_date.trim();
      const preferredTime = values.preferred_time.trim();
      let hasValidDateTime = true;

      if (!preferredDate) {
        hasValidDateTime = false;
        context.addIssue({
          code: "custom",
          message: "Preferred date is required.",
          path: ["preferred_date"],
        });
      } else if (!datePattern.test(preferredDate)) {
        hasValidDateTime = false;
        context.addIssue({
          code: "custom",
          message: "Preferred date must use YYYY-MM-DD format.",
          path: ["preferred_date"],
        });
      }

      if (!preferredTime) {
        hasValidDateTime = false;
        context.addIssue({
          code: "custom",
          message: "Preferred time is required.",
          path: ["preferred_time"],
        });
      } else if (!timePattern.test(preferredTime)) {
        hasValidDateTime = false;
        context.addIssue({
          code: "custom",
          message: "Preferred time must use HH:MM format.",
          path: ["preferred_time"],
        });
      }

      if (hasValidDateTime) {
        const preferredDateTime = getPreferredDateTime(
          preferredDate,
          preferredTime,
        );

        if (!preferredDateTime) {
          context.addIssue({
            code: "custom",
            message: "Preferred date and time must be valid.",
            path: ["preferred_date"],
          });
        } else if (preferredDateTime <= new Date()) {
          context.addIssue({
            code: "custom",
            message: "Preferred date and time must be in the future.",
            path: ["preferred_time"],
          });
        }
      }
    }

    if (values.purpose === "Collaboration" && !values.message.trim()) {
      context.addIssue({
        code: "custom",
        message: "Collaboration details are required.",
        path: ["message"],
      });
    }

    if (values.purpose === "Feedback" && !values.message.trim()) {
      context.addIssue({
        code: "custom",
        message: "Feedback message is required.",
        path: ["message"],
      });
    }
  });

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaultValues: ContactFormValues = {
  purpose: "Schedule a Call",
  email: "",
  username: "",
  preferred_date: "",
  preferred_time: "12:00",
  additional_notes: "",
  message: "",
  is_anonymous: false,
};
