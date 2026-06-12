"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  BotIcon,
  CornerDownLeftIcon,
  Maximize2Icon,
  MinusIcon,
  TerminalIcon,
  XIcon,
} from "lucide-react";
import * as React from "react";
import { Controller, type Resolver, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

type TerminalMessage = {
  id: number;
  role: "assistant" | "user" | "system";
  content: string[];
};

type ChatApiResponse = {
  reply?: string;
  error?: string;
};

type TerminalCommand = {
  command: string;
  description: string;
};

const terminalFormSchema = z.object({
  command: z
    .string()
    .trim()
    .min(1, "Enter a command or question.")
    .max(1000, "Command must be 1000 characters or fewer."),
});

type TerminalFormValues = z.infer<typeof terminalFormSchema>;
const resolveTerminalForm = zodResolver as unknown as (
  schema: typeof terminalFormSchema,
) => Resolver<TerminalFormValues>;

const terminalCommands: TerminalCommand[] = [
  { command: "/help", description: "Show command guide" },
  { command: "/about", description: "Profile and focus" },
  { command: "/skills", description: "Core stack by category" },
  { command: "/projects", description: "Featured work summary" },
  { command: "/experience", description: "Internship and freelance history" },
  { command: "/education", description: "Degree and coursework" },
  { command: "/certs", description: "Certifications and awards" },
  { command: "/availability", description: "Work status and next step" },
  { command: "/contact", description: "Email and social links" },
  { command: "/github", description: "GitHub profile" },
  { command: "/clear", description: "Reset the terminal" },
];

const initialMessages: TerminalMessage[] = [
  {
    id: 1,
    role: "system",
    content: ["nethaiah-cli v0.1.0", "Static portfolio assistant online."],
  },
  {
    id: 2,
    role: "assistant",
    content: [
      "Ask about Jomar's skills, projects, experience, education, contact links, or availability.",
      "Use /help for commands, or type a normal question for a fuller AI answer.",
    ],
  },
];

const commandReplies: Record<string, string[]> = {
  "/about": [
    "Jomar Dela Cruz Maestro, also known as Nethaiah, is a full-stack web developer from Laguna, Philippines.",
    "Headline: Full-Stack Web Developer focused on AI-enabled applications.",
    "He builds secure, scalable web apps with Next.js, PostgreSQL, Supabase, and AI integrations.",
    "Current status: open to work.",
  ],
  "/availability": [
    "Status: open to work.",
    "Best fit: full-stack web development, AI-enabled apps, portfolio/product systems, and data-backed tools.",
    "Best next step: email maestrojomar143@gmail.com or connect on LinkedIn.",
  ],
  "/certs": [
    "Certifications include AWS Cloud Practitioner CLF-C02 plus AWS cloud, security, cost, and services courses from DataCamp.",
    "Also listed: Coursera intro courses for cloud computing, HTML/CSS/JavaScript, software engineering, IBM software engineering, and IBM cloud computing.",
    "Awards include Certificate of Recognition for STARS deployment, Best Thesis (CCS), and Best Research Presenter (Institutional).",
  ],
  "/contact": [
    "Email: maestrojomar143@gmail.com",
    "GitHub: https://github.com/Nethaiah",
    "LinkedIn: https://www.linkedin.com/in/maestro-jomar-d-134876330/",
    "X / Twitter: https://x.com/Nethaiah_",
    "Use email or LinkedIn for hiring, collaboration, and project inquiries.",
  ],
  "/education": [
    "School: Laguna University.",
    "Degree: BS Computer Science with specialization in Data Science.",
    "Timeline: Aug 2021 - June 2026.",
    "Relevant coursework: Software Engineering, AI, Information Management, Machine Learning, and DBMS.",
  ],
  "/experience": [
    "Laguna MISO IT Intern, Feb 2026 - April 2026: worked on STARS, an Android OMR scanning and class record system.",
    "Ship or Be Shipped Hackathon, Dec 2025: built MedAssist with Next.js, Supabase, OpenFDA, and Google Gemini.",
    "Freelance Full-Stack Developer, July 2025 - Aug 2025: worked on RPTAS with Next.js, PostgreSQL, Prisma, and role-based auth.",
  ],
  "/github": ["GitHub profile: https://github.com/Nethaiah"],
  "/help": [
    "Available commands:",
    "/about        profile and current focus",
    "/skills       stack grouped by frontend, backend, database, AI, and tooling",
    "/projects     featured projects with outcomes",
    "/experience   internship, hackathon, and freelance history",
    "/education    degree, school, and coursework",
    "/certs        certifications and awards",
    "/availability open-to-work status and next step",
    "/contact      email and social links",
    "/github       GitHub profile",
    "/clear        reset the terminal",
    "Tip: normal questions use the AI assistant for more detailed answers.",
  ],
  "/projects": [
    "Featured work:",
    "Nethaiah Portfolio: Next.js portfolio with terminal assistant, Supabase contact storage, and Resend notifications.",
    "Doculens: semantic theses search for Laguna University with Next.js, FastAPI, Supabase, pgvector, BM25, and RAG Q&A.",
    "STARS: Android OMR scanner using Java, CameraX, OpenCV, Room, and local class record workflows.",
    "MedAssist: AI treatment plan assistant with Next.js, Supabase, Google GenAI, OpenFDA, Zod, and email reminders.",
    "Wattify and VideoNotes AI: ML energy forecasting and YouTube-to-study-notes workflows.",
    "Ask a project name for a deeper breakdown.",
  ],
  "/skills": [
    "Languages: TypeScript, JavaScript, Python, PHP, and SQL.",
    "Frontend: React, Next.js, Tailwind CSS, shadcn/ui, Base UI, HTML, and CSS.",
    "Backend/API: Node.js, Hono, FastAPI, Laravel, Django, REST APIs, and Zod validation.",
    "Data: PostgreSQL, MySQL, Supabase, Neon, Firebase, Drizzle ORM, and Pinecone.",
    "AI/ML: LLM integration, vector search, NLP, web scraping, OpenRouter, Hugging Face, Gemini, XGBoost, and SARIMAX.",
    "Workflow: Git/GitHub, Vercel, Railway, Google Cloud Platform, Resend, Postman, TablePlus, Agile, and Biome.",
  ],
};

function getTerminalReply(input: string) {
  const normalized = input.trim().toLowerCase();

  if (!normalized) {
    return ["Enter a command or question. Try /help."];
  }

  if (normalized === "/clear" || normalized === "clear") {
    return "clear" as const;
  }

  if (normalized === "/skill") {
    return commandReplies["/skills"];
  }

  if (
    normalized === "/certifications" ||
    normalized === "/certificates" ||
    normalized === "/awards"
  ) {
    return commandReplies["/certs"];
  }

  if (normalized === "/available" || normalized === "/status") {
    return commandReplies["/availability"];
  }

  if (commandReplies[normalized]) {
    return commandReplies[normalized];
  }

  if (normalized.includes("skill") || normalized.includes("stack")) {
    return commandReplies["/skills"];
  }

  if (
    normalized.includes("available") ||
    normalized.includes("open to work") ||
    normalized.includes("availability")
  ) {
    return commandReplies["/availability"];
  }

  if (
    normalized.includes("experience") ||
    normalized.includes("intern") ||
    normalized.includes("freelance") ||
    normalized.includes("hackathon")
  ) {
    return commandReplies["/experience"];
  }

  if (
    normalized.includes("education") ||
    normalized.includes("school") ||
    normalized.includes("degree") ||
    normalized.includes("coursework")
  ) {
    return commandReplies["/education"];
  }

  if (
    normalized.includes("cert") ||
    normalized.includes("award") ||
    normalized.includes("recognition")
  ) {
    return commandReplies["/certs"];
  }

  if (
    normalized.includes("project") ||
    normalized.includes("featured work") ||
    normalized.includes("portfolio")
  ) {
    return commandReplies["/projects"];
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("hire") ||
    normalized.includes("reach")
  ) {
    return commandReplies["/contact"];
  }

  if (
    normalized.includes("about") ||
    normalized.includes("who") ||
    normalized.includes("jomar") ||
    normalized.includes("nethaiah")
  ) {
    return commandReplies["/about"];
  }

  if (normalized.includes("github") || normalized.includes("repo")) {
    return commandReplies["/github"];
  }

  if (normalized.startsWith("/")) {
    return [
      `Unknown command: ${input.trim()}`,
      "Try /help for the full command list.",
    ];
  }

  return [
    "No local fallback matched that question.",
    "Try /help, or ask again while the AI assistant is available.",
  ];
}

async function getApiReply(input: string) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: input }),
  });

  const data = (await response.json()) as ChatApiResponse;

  if (!response.ok || !data.reply) {
    throw new Error(data.error ?? "Chat API request failed.");
  }

  return data.reply
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function TerminalLines({ message }: { message: TerminalMessage }) {
  const prefix =
    message.role === "user" ? "you" : message.role === "system" ? "sys" : "bot";

  return (
    <div
      className={cn(
        "grid grid-cols-[auto_1fr] gap-x-2 font-mono text-[0.72rem] leading-relaxed",
        message.role === "user" ? "text-foreground" : "text-muted-foreground",
      )}
    >
      <span className="text-primary">{prefix} &gt;</span>
      <div className="flex min-w-0 flex-col gap-1">
        {message.content.map((line, index) => (
          <p key={`${message.id}-${line}-${index}`} className="wrap-break-word">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export function TerminalChatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = React.useState(0);
  const [messages, setMessages] =
    React.useState<TerminalMessage[]>(initialMessages);
  const form = useForm<TerminalFormValues>({
    resolver: resolveTerminalForm(terminalFormSchema),
    defaultValues: {
      command: "",
    },
    mode: "onSubmit",
  });
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const nextId = React.useRef(initialMessages.length + 1);
  const input = form.watch("command");
  const trimmedInput = input.trim().toLowerCase();
  const commandSuggestions = React.useMemo(() => {
    if (!trimmedInput.startsWith("/")) {
      return [];
    }

    return terminalCommands.filter((item) =>
      item.command.startsWith(trimmedInput),
    );
  }, [trimmedInput]);
  const showCommandSuggestions = commandSuggestions.length > 0;

  React.useEffect(() => {
    if (!isOpen || isMinimized) {
      return;
    }

    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  });

  React.useEffect(() => {
    if (!isOpen || isMinimized) {
      return;
    }

    inputRef.current?.focus();
  }, [isOpen, isMinimized]);

  function appendMessage(role: TerminalMessage["role"], content: string[]) {
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: nextId.current++,
        role,
        content,
      },
    ]);
  }

  function applySuggestion(command: string) {
    form.setValue("command", command, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setActiveSuggestionIndex(0);
    inputRef.current?.focus();
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!showCommandSuggestions) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveSuggestionIndex((currentIndex) =>
        currentIndex >= commandSuggestions.length - 1 ? 0 : currentIndex + 1,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveSuggestionIndex((currentIndex) =>
        currentIndex <= 0 ? commandSuggestions.length - 1 : currentIndex - 1,
      );
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      applySuggestion(commandSuggestions[activeSuggestionIndex].command);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      form.reset({ command: "" });
    }
  }

  async function handleSubmit(values: TerminalFormValues) {
    const command = values.command.trim();

    if (isPending) {
      return;
    }

    form.reset({ command: "" });
    appendMessage("user", [command]);

    const reply = getTerminalReply(command);

    if (reply === "clear") {
      setMessages(initialMessages);
      nextId.current = initialMessages.length + 1;
      return;
    }

    if (command.startsWith("/")) {
      window.setTimeout(() => {
        appendMessage("assistant", reply);
      }, 180);
      return;
    }

    setIsPending(true);
    appendMessage("system", ["thinking..."]);

    try {
      const apiReply = await getApiReply(command);

      setMessages((currentMessages) =>
        currentMessages.filter(
          (message) => message.content[0] !== "thinking...",
        ),
      );
      appendMessage("assistant", apiReply);
    } catch {
      setMessages((currentMessages) =>
        currentMessages.filter(
          (message) => message.content[0] !== "thinking...",
        ),
      );
      appendMessage("assistant", reply);
    } finally {
      setIsPending(false);
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
        <Button
          type="button"
          className="h-11 gap-2 border border-primary/30 bg-card px-4 font-mono text-foreground shadow-lg shadow-primary/10 hover:bg-muted"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
        >
          <TerminalIcon data-icon="inline-start" />
          Open CLI
          <span className="portfolio-pulse-dot" />
        </Button>
      </div>
    );
  }

  return (
    <section
      aria-label="Portfolio terminal chatbot"
      className="fixed right-3 bottom-3 z-50 w-[calc(100vw-1.5rem)] sm:right-6 sm:bottom-6 sm:w-[24rem]"
    >
      <div className="overflow-hidden border border-border bg-card shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-2 border-border border-b bg-muted/60 px-3 py-2">
          <span className="flex size-7 items-center justify-center border border-border bg-background text-primary">
            <BotIcon aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="truncate font-mono text-[0.72rem] font-medium uppercase tracking-[0.16em] text-foreground">
              nethaiah terminal
            </h2>
            <p className="font-mono text-[0.62rem] text-muted-foreground">
              ai-powered · online
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            aria-label={isMinimized ? "Expand terminal" : "Minimize terminal"}
            onClick={() => {
              setIsMinimized((currentValue) => !currentValue);
            }}
          >
            {isMinimized ? (
              <Maximize2Icon aria-hidden="true" />
            ) : (
              <MinusIcon aria-hidden="true" />
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            aria-label="Close terminal"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <XIcon aria-hidden="true" />
          </Button>
        </div>

        {!isMinimized ? (
          <>
            <div
              ref={scrollRef}
              className="flex max-h-[14rem] min-h-[12rem] flex-col gap-3 overflow-y-auto bg-background/80 px-3 py-3 sm:min-h-[18rem] sm:max-h-[22rem] lg:max-h-[28rem]"
            >
              {messages.map((message) => (
                <TerminalLines key={message.id} message={message} />
              ))}
            </div>

            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="border-border border-t p-2"
              noValidate
            >
              {showCommandSuggestions ? (
                <div
                  className="mb-2 flex max-h-36 flex-col overflow-y-auto border border-border bg-background"
                  role="listbox"
                  aria-label="Available terminal commands"
                >
                  {commandSuggestions.map((item, index) => (
                    <button
                      key={item.command}
                      type="button"
                      className={cn(
                        "flex items-center gap-3 px-2.5 py-2 text-left font-mono text-[0.68rem] transition-colors",
                        index === activeSuggestionIndex
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                      role="option"
                      aria-selected={index === activeSuggestionIndex}
                      onMouseEnter={() => {
                        setActiveSuggestionIndex(index);
                      }}
                      onClick={() => {
                        applySuggestion(item.command);
                      }}
                    >
                      <span className="min-w-16 text-primary">
                        {item.command}
                      </span>
                      <span>{item.description}</span>
                    </button>
                  ))}
                </div>
              ) : null}
              <Controller
                name="command"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="sr-only">
                      Terminal command
                    </FieldLabel>
                    <InputGroup className="h-9 bg-background">
                      <InputGroupInput
                        {...field}
                        ref={(node) => {
                          field.ref(node);
                          inputRef.current = node;
                        }}
                        id={field.name}
                        onChange={(event) => {
                          field.onChange(event);
                          setActiveSuggestionIndex(0);
                        }}
                        onKeyDown={handleInputKeyDown}
                        placeholder={
                          isPending
                            ? "Waiting for portfolio assistant..."
                            : "Ask about skills, projects, contact..."
                        }
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                        enterKeyHint="send"
                        disabled={isPending}
                        className="text-base sm:text-sm"
                      />
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton
                          type="submit"
                          size="icon-xs"
                          aria-label="Send command"
                          disabled={isPending}
                        >
                          <CornerDownLeftIcon aria-hidden="true" />
                        </InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </form>
          </>
        ) : null}
      </div>
    </section>
  );
}
