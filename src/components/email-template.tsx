import type { ContactPurpose } from "@/lib/contact";

export type ContactEmailField = {
  label: string;
  value: string;
};

type EmailTemplateProps = {
  purpose: ContactPurpose;
  fields: ContactEmailField[];
  submittedAt: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderField({ label, value }: ContactEmailField) {
  return `
    <div style="border-top:1px solid #2a2a2a;padding:14px 0;">
      <p style="color:#9ca3af;font-family:&quot;Geist Mono&quot;,&quot;SFMono-Regular&quot;,Consolas,&quot;Liberation Mono&quot;,monospace;font-size:11px;letter-spacing:0.12em;margin:0 0 6px;text-transform:uppercase;">${escapeHtml(label)}</p>
      <p style="color:#f5f5f5;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${escapeHtml(value)}</p>
    </div>`;
}

export function renderContactEmailHtml({
  purpose,
  fields,
  submittedAt,
}: EmailTemplateProps) {
  const renderedFields = [
    { label: "Submitted At", value: submittedAt },
    ...fields,
  ]
    .map(renderField)
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;background:#0a0a0a;color:#f5f5f5;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,sans-serif;padding:24px;">
    <div style="border:1px solid #2a2a2a;background:#111111;padding:24px;">
      <p style="color:#9ca3af;font-family:&quot;Geist Mono&quot;,&quot;SFMono-Regular&quot;,Consolas,&quot;Liberation Mono&quot;,monospace;font-size:11px;letter-spacing:0.16em;margin:0 0 8px;text-transform:uppercase;">Portfolio Contact</p>
      <h1 style="color:#ffffff;font-size:22px;line-height:1.3;margin:0 0 20px;">${escapeHtml(purpose)}</h1>
      ${renderedFields}
    </div>
  </body>
</html>`;
}
