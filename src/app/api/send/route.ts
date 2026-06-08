import {
  type ContactEmailField,
  renderContactEmailHtml,
} from "@/components/email-template";
import { createAdminClient } from "@/utils/supabase/admin";
import {
  contactSubjectByPurpose,
  isContactPurpose,
  type ContactPurpose,
} from "@/lib/contact";
import { Resend } from "resend";

type ContactRow = {
  purpose: ContactPurpose;
  email: string | null;
  username: string | null;
  message: string | null;
  preferred_date: string | null;
  preferred_time: string | null;
  additional_notes: string | null;
  is_anonymous: boolean;
};

type ValidationResult =
  | {
      row: ContactRow;
      fields: ContactEmailField[];
      subject: string;
    }
  | {
      error: string;
    };

const ownerEmail = process.env.CONTACT_TO_EMAIL || "maestrojomar143@gmail.com";
const fromEmail =
  process.env.RESEND_FROM_EMAIL || "Nethaiah <noreply@nethaiah.online>";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

function text(payload: Record<string, unknown>, key: string, maxLength = 5000) {
  const value = payload[key];

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function optional(value: string) {
  return value.length > 0 ? value : null;
}

function errorMessage(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return "Unexpected contact submission error.";
}

function appendField(
  fields: ContactEmailField[],
  label: string,
  value: string | null,
) {
  if (!value) {
    return;
  }

  fields.push({ label, value });
}

function validatePayload(payload: Record<string, unknown>): ValidationResult {
  const purpose = payload.purpose;

  if (!isContactPurpose(purpose)) {
    return { error: "Select a valid purpose." };
  }

  const isAnonymous = purpose === "Feedback" && payload.is_anonymous === true;
  const email = text(payload, "email", 320).toLowerCase();
  const username = text(payload, "username", 120);

  if (!isAnonymous && !email) {
    return { error: "Email is required." };
  }

  if (email && !emailPattern.test(email)) {
    return { error: "Enter a valid email address." };
  }

  const row: ContactRow = {
    purpose,
    email: isAnonymous ? null : optional(email),
    username: isAnonymous ? null : optional(username),
    message: null,
    preferred_date: null,
    preferred_time: null,
    additional_notes: null,
    is_anonymous: isAnonymous,
  };

  if (purpose === "Schedule a Call") {
    const preferredDate = text(payload, "preferred_date", 10);
    const preferredTime = text(payload, "preferred_time", 5);

    if (!preferredDate) {
      return { error: "Preferred date is required." };
    }

    if (!datePattern.test(preferredDate)) {
      return { error: "Preferred date must use YYYY-MM-DD format." };
    }

    if (!preferredTime) {
      return { error: "Preferred time is required." };
    }

    if (!timePattern.test(preferredTime)) {
      return { error: "Preferred time must use HH:MM format." };
    }

    row.preferred_date = preferredDate;
    row.preferred_time = preferredTime;
    row.additional_notes = optional(text(payload, "additional_notes"));
  }

  if (purpose === "Collaboration") {
    const message = text(payload, "message");

    if (!message) {
      return { error: "Collaboration details are required." };
    }

    row.message = message;
  }

  if (purpose === "Feedback") {
    const message = text(payload, "message");

    if (!message) {
      return { error: "Feedback message is required." };
    }

    row.message = message;
  }

  const fields: ContactEmailField[] = [];
  appendField(fields, "Purpose", row.purpose);

  if (purpose === "Feedback") {
    appendField(fields, "Submit Anonymously", row.is_anonymous ? "Yes" : "No");
  }

  appendField(fields, "Email", row.email);
  appendField(fields, "Username", row.username);
  appendField(fields, "Preferred Date", row.preferred_date);
  appendField(fields, "Preferred Time", row.preferred_time);
  appendField(fields, "Additional Notes", row.additional_notes);
  appendField(fields, "Message", row.message);

  return {
    row,
    fields,
    subject: contactSubjectByPurpose[purpose],
  };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  if (
    typeof payload !== "object" ||
    payload === null ||
    Array.isArray(payload)
  ) {
    return Response.json(
      { ok: false, error: "Invalid contact submission." },
      { status: 400 },
    );
  }

  const validated = validatePayload(payload as Record<string, unknown>);

  if ("error" in validated) {
    return Response.json(
      { ok: false, error: validated.error },
      { status: 400 },
    );
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("contacts")
      .insert(validated.row)
      .select("id")
      .single();

    if (error) {
      return Response.json(
        { ok: false, error: error.message },
        { status: 500 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { ok: false, error: "RESEND_API_KEY is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const submittedAt = new Intl.DateTimeFormat("en", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Manila",
    }).format(new Date());

    const { error: resendError } = await resend.emails.send(
      {
        from: fromEmail,
        to: [ownerEmail],
        subject: validated.subject,
        replyTo: validated.row.email ?? undefined,
        html: renderContactEmailHtml({
          purpose: validated.row.purpose,
          fields: validated.fields,
          submittedAt,
        }),
      },
      { idempotencyKey: `contact/${data.id}` },
    );

    if (resendError) {
      return Response.json(
        { ok: false, error: errorMessage(resendError) },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { ok: false, error: errorMessage(error) },
      { status: 500 },
    );
  }
}
