import { getPortfolioContextForPrompt } from "@/lib/portfolio-context";

export const runtime = "nodejs";

const OPENROUTER_CHAT_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = "google/gemma-4-31b-it:free";
const MAX_MESSAGE_LENGTH = 1_000;

type ChatRequestBody = {
  message?: unknown;
};

type OpenRouterChatResponse = {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
  error?: {
    message?: string;
  };
};

function buildSystemPrompt() {
  return [
    "You are the portfolio terminal assistant for Jomar Maestro, also known as Nethaiah.",
    "Use only the provided portfolio context. Do not invent facts.",
    "Answer in a concise terminal-friendly style, usually 2-5 short lines.",
    "If the visitor asks about hiring or contact, provide the email and LinkedIn.",
    "If the answer is not in context, say the portfolio does not include that detail.",
    "",
    "PORTFOLIO_CONTEXT_JSON:",
    getPortfolioContextForPrompt(),
  ].join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "OPENROUTER_API_KEY is not configured." },
      { status: 503 },
    );
  }

  let body: ChatRequestBody;

  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body.message !== "string") {
    return Response.json(
      { error: "Message must be a string." },
      { status: 400 },
    );
  }

  const message = body.message.trim();

  if (!message) {
    return Response.json({ error: "Message is required." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or less.` },
      { status: 400 },
    );
  }

  const openRouterResponse = await fetch(OPENROUTER_CHAT_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer":
        process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
      "X-Title": "Nethaiah Portfolio",
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [
        {
          role: "system",
          content: buildSystemPrompt(),
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 350,
      temperature: 0.3,
      top_p: 0.9,
    }),
  });

  const data = (await openRouterResponse.json()) as OpenRouterChatResponse;

  if (!openRouterResponse.ok) {
    return Response.json(
      {
        error:
          data.error?.message ??
          `OpenRouter request failed with status ${openRouterResponse.status}.`,
      },
      { status: 502 },
    );
  }

  const reply = data.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    return Response.json(
      { error: "OpenRouter returned an empty response." },
      { status: 502 },
    );
  }

  return Response.json({ reply, model: OPENROUTER_MODEL });
}
