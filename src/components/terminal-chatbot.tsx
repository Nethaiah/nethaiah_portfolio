"use client";

import {
  BotIcon,
  CornerDownLeftIcon,
  Maximize2Icon,
  MinusIcon,
  TerminalIcon,
  XIcon,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
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

const terminalCommands: TerminalCommand[] = [
  { command: "/help", description: "Show all commands" },
  { command: "/about", description: "Profile summary" },
  { command: "/skills", description: "Core stack and tools" },
  { command: "/projects", description: "Featured work" },
  { command: "/contact", description: "Ways to reach Jomar" },
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
      "Ask about Jomar's skills, projects, contact links, or availability.",
      "Type /help to see available commands.",
    ],
  },
];

const commandReplies: Record<string, string[]> = {
  "/about": [
    "Jomar Maestro, also known as nethaiah, is a full-stack web developer based in Laguna, Philippines.",
    "Focus areas: web apps, portfolio systems, and AI-assisted product workflows.",
  ],
  "/contact": [
    "Email: maestrojomar143@gmail.com",
    "GitHub: https://github.com/Nethaiah",
    "LinkedIn: https://www.linkedin.com/in/maestro-jomar-d-134876330/",
    "X / Twitter: https://x.com/Nethaiah_",
  ],
  "/github": ["GitHub profile: https://github.com/Nethaiah"],
  "/help": [
    "Available commands:",
    "/about     profile summary",
    "/skills    core stack and tools",
    "/projects  featured work",
    "/contact   ways to reach Jomar",
    "/github    GitHub profile",
    "/clear     reset the terminal",
  ],
  "/projects": [
    "The projects section below contains the current featured work.",
    "Try scrolling to Projects, or ask: show projects.",
  ],
  "/skills": [
    "Core stack: Next.js, React, TypeScript, Tailwind CSS, and full-stack web development.",
    "Current portfolio also uses shadcn/ui, Base UI, Motion, and GitHub contribution data.",
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

  if (commandReplies[normalized]) {
    return commandReplies[normalized];
  }

  if (normalized.includes("skill") || normalized.includes("stack")) {
    return commandReplies["/skills"];
  }

  if (normalized.includes("project") || normalized.includes("work")) {
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

  if (
    normalized.includes("available") ||
    normalized.includes("open to work") ||
    normalized.includes("availability")
  ) {
    return [
      "Status: open to work.",
      "Best next step: send an email to maestrojomar143@gmail.com.",
    ];
  }

  return [
    `No local rule matched "${input.trim()}".`,
    "Try /help, /skills, /projects, /about, or /contact.",
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
  const [input, setInput] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = React.useState(0);
  const [messages, setMessages] =
    React.useState<TerminalMessage[]>(initialMessages);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const nextId = React.useRef(initialMessages.length + 1);
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
    setInput(command);
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
      setInput("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const command = input.trim();

    if (!command || isPending) {
      return;
    }

    setInput("");
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
              onSubmit={handleSubmit}
              className="border-border border-t p-2"
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
              <InputGroup className="h-9 bg-background">
                <InputGroupInput
                  ref={inputRef}
                  value={input}
                  onChange={(event) => {
                    setInput(event.target.value);
                    setActiveSuggestionIndex(0);
                  }}
                  onKeyDown={handleInputKeyDown}
                  placeholder={
                    isPending
                      ? "Waiting for portfolio assistant..."
                      : "Ask about skills, projects, contact..."
                  }
                  aria-label="Terminal command"
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
            </form>
          </>
        ) : null}
      </div>
    </section>
  );
}
