import {
  type ContactEmailField,
  renderContactEmailHtml,
} from "@/components/email-template";
import { createAdminClient } from "@/utils/supabase/admin";
import { contactSubjectByPurpose, type ContactPurpose } from "@/lib/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
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

function validatePayload(payload: unknown): ValidationResult {
  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message || "Invalid contact submission.",
    };
  }

  const values: ContactFormValues = parsed.data;
  const purpose = values.purpose;
  const isAnonymous = purpose === "Feedback" && values.is_anonymous === true;
  const email = values.email.trim().toLowerCase();
  const username = values.username.trim();

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
    row.preferred_date = values.preferred_date.trim();
    row.preferred_time = values.preferred_time.trim();
    row.additional_notes = optional(values.additional_notes.trim());
  }

  if (purpose === "Collaboration") {
    row.message = values.message.trim();
  }

  if (purpose === "Feedback") {
    row.message = values.message.trim();
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

  const validated = validatePayload(payload);

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
