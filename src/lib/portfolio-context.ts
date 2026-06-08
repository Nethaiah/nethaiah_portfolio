export type PortfolioProject = {
  name: string;
  summary: string;
  role: string;
  date: string;
  url?: string;
  github?: string;
  stack: readonly string[];
  overview: string;
  highlights: readonly string[];
  outcomes: readonly string[];
};

export type PortfolioExperience = {
  organization: string;
  title: string;
  type: string;
  date: string;
  duration?: string;
  location?: string;
  project?: string;
  stack: readonly string[];
  highlights: readonly string[];
};

export const portfolioContext = {
  assistant: {
    name: "nethaiah-cli",
    behavior:
      "Answer as a concise portfolio assistant for Jomar Maestro. Use only this context. If the answer is not covered, say that the portfolio does not include that detail and offer a relevant contact path.",
    fallback:
      "If an API key is unavailable, use the local rule-based terminal responses.",
  },
  profile: {
    displayName: "Jomar Maestro",
    fullName: "Jomar Dela Cruz Maestro",
    alias: "Nethaiah",
    pronouns: "he/him",
    location: "Laguna, Philippines",
    status: "Open to work",
    headline: "Full-Stack Web Developer focused on AI-enabled applications",
    summary:
      "Detail-oriented Full-Stack Developer with a strong foundation in software engineering and AI technologies. Experienced in building secure, scalable applications using Next.js and PostgreSQL, with hands-on expertise across multiple frameworks and tools. Proven ability to deliver production-ready solutions that solve real-world problems and streamline operations.",
  },
  contact: {
    email: "maestrojomar143@gmail.com",
    github: "https://github.com/Nethaiah",
    linkedin: "https://www.linkedin.com/in/maestro-jomar-d-134876330/",
    x: "https://x.com/Nethaiah_",
    preferredCallToAction:
      "For hiring, collaboration, or project inquiries, ask the visitor to email Jomar or connect through LinkedIn.",
  },
  skills: {
    primary: [
      "TypeScript",
      "JavaScript",
      "Python",
      "PHP",
      "SQL",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
      "Laravel",
      "PostgreSQL",
      "Supabase",
    ],
    categories: [
      {
        title: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
      },
      {
        title: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Shadcn/UI", "HTML & CSS"],
      },
      {
        title: "Backend & APIs",
        items: [
          "Node.js",
          "Hono",
          "FastAPI",
          "Laravel",
          "Django",
          "REST API",
          "Zod",
        ],
      },
      {
        title: "Databases & ORM",
        items: [
          "PostgreSQL",
          "MySQL",
          "Supabase",
          "Neon",
          "Firebase",
          "Drizzle ORM",
          "Pinecone",
        ],
      },
      {
        title: "AI & Machine Learning",
        items: [
          "LLM Integration",
          "Vector Search",
          "NLP",
          "Web Scraping",
          "OpenRouter",
          "Hugging Face",
          "Claude Code",
          "OpenCode",
        ],
      },
      {
        title: "Auth & Security",
        items: ["Better Auth", "Clerk", "OAuth", "Arcjet"],
      },
      {
        title: "Infrastructure & Deployment",
        items: [
          "Git/GitHub",
          "Vercel",
          "Railway",
          "GCP",
          "XAMPP",
          "Laravel Herd",
        ],
      },
      {
        title: "Dev Tools & Workflow",
        items: [
          "npm",
          "pnpm",
          "nuqs",
          "Resend",
          "Postman",
          "HTTPie",
          "TablePlus",
          "Agile",
          "Biome",
          "ESLint",
        ],
      },
    ],
  },
  projects: [
    {
      name: "Nethaiah Portfolio",
      summary: "Personal developer portfolio with a terminal-style assistant.",
      role: "Full Stack Developer",
      date: "2026",
      url: "https://www.nethaiah.online",
      github: "https://github.com/Nethaiah/nethaiah_portfolio.git",
      stack: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/UI",
        "Base UI",
        "Supabase",
        "Resend",
        "OpenRouter",
        "Motion",
      ],
      overview:
        "Personal developer site for presenting projects, technical experience, GitHub activity, certifications, and direct contact paths in a focused CLI-inspired interface.",
      highlights: [
        "Built structured sections for profile details, projects, experience, certifications, tech stack, GitHub activity, and contact links.",
        "Added a CLI-style portfolio assistant with local command responses and optional server-side OpenRouter integration.",
        "Implemented a responsive contact modal with schema validation, Supabase persistence, Resend email notifications, and theme-matched toast feedback.",
        "Integrated dark-first shadcn/ui and Base UI components with custom portfolio styling and motion effects.",
        "Configured the portfolio for production use at nethaiah.online.",
      ],
      outcomes: [
        "Built a single source of truth for portfolio facts so assistant answers stay consistent.",
        "Aligned the contact flow from UI validation through API handling and database storage.",
        "Refined shadcn component styling for calendar, select, dialog, input, and sonner behavior while preserving the portfolio theme.",
      ],
    },
    {
      name: "Doculens (Laguna University Semantic Theses Search)",
      summary: "AI-powered document management and semantic search platform.",
      role: "Full Stack Developer",
      date: "Oct 2025 – May 2026",
      url: "https://doculens-rho.vercel.app/",
      github: "https://github.com/Nethaiah/deped-semantic-docs.git",
      stack: [
        "Next.js",
        "FastAPI",
        "Supabase",
        "PgVector",
        "Gemini 2.5 Flash",
        "BM25",
        "Sentence Transformers",
        "TailwindCSS",
        "Shadcn/UI",
      ],
      overview:
        "Centralized AI-powered document management and search platform for the Research and Development Center of Laguna University. It digitizes past theses, IMRADS, and abstracts and lets students and faculty discover research through NLP, semantic search, and AI retrieval.",
      highlights: [
        "Implemented semantic vector search so users can search by context and intent instead of exact keywords.",
        "Integrated RAG Q&A grounded strictly in stored academic papers to reduce hallucinations.",
        "Built a centralized repository with PDF viewing, rich text formatting, and administrative upload workflows.",
        "Implemented RBAC for students, faculty, and R&D administrators.",
        "Used a silent security model where unauthorized admin route access returns a 404.",
      ],
      outcomes: [
        "Achieved 92% top-result accuracy by combining keyword matching with semantic algorithms.",
        "Reached 94% semantic accuracy in document summarization by filtering highly relevant AI context.",
        "Reduced load times by roughly 150–200 ms with Next.js cache components.",
      ],
    },
    {
      name: "STARS (Student Test Analysis and Record System)",
      summary: "Android-based OMR assessment and class record platform.",
      role: "IT Intern",
      date: "Feb 2026 – April 2026",
      github: "https://github.com/Argieeel/OMRScanner.git",
      stack: [
        "Java",
        "Android SDK",
        "CameraX",
        "OpenCV",
        "Room",
        "Gson",
        "Material Components",
        "Zip4j",
      ],
      overview:
        "Android app for paper assessment scanning, grading, and local class management. It uses live camera processing to detect sheet anchors, capture answer sheets, align perspective, and extract LRN plus marked answers.",
      highlights: [
        "Built automated live scanning with CameraX and OpenCV.",
        "Supported handheld and fixed-mount scanning modes for different teacher workflows.",
        "Implemented perspective alignment, template detection, orientation handling, and bubble reading.",
        "Built local teacher, class, assessment, and answer-key management with Room Database.",
        "Supported CSV export and protected ZIP packaging.",
      ],
      outcomes: [
        "Accelerated OMR auto-capture by optimizing the OpenCV pipeline and avoiding expensive NV21-to-Bitmap conversions.",
        "Achieved at least 94%+ bubble detection accuracy across 30–60 item exam formats.",
        "Delivered a production-ready APK to Calangay Integrated High School teachers and earned a Certificate of Recognition.",
      ],
    },
    {
      name: "MedAssist (AI-Powered Treatment Plan Assistant)",
      summary: "AI healthcare consultation and treatment planning platform.",
      role: "Full Stack Developer",
      date: "Dec 2025",
      github: "https://github.com/Nethaiah/medassist.git",
      stack: [
        "Next.js",
        "React 19",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Google GenAI",
        "OpenFDA API",
        "Zod",
        "MailerSend",
      ],
      overview:
        "Full-stack healthcare platform connecting patients and medical professionals through AI-driven clinical analysis and OpenFDA-backed safety checks.",
      highlights: [
        "Built separate role-based dashboards for patients and doctors.",
        "Used Gemini AI to analyze intake forms and generate preliminary treatment plans.",
        "Integrated OpenFDA checks for interactions, contraindications, dosages, and adverse events.",
        "Implemented consultation workflow from patient form submission to scheduling and doctor approval.",
        "Added scheduling, email reminders, cron jobs, audit trails, and secure role-based access.",
      ],
      outcomes: [
        "Engineered a real-time safety validation layer using OpenFDA.",
        "Built an AI treatment planner during a 24-hour Ship or Be Shipped Hackathon sprint.",
        "Parsed patient intake into structured JSON recommendations through an LLM.",
      ],
    },
    {
      name: "Wattify (Intelligent Energy Management & Bill Forecasting Platform)",
      summary: "Energy consumption tracker with ML bill forecasting.",
      role: "Full Stack Developer",
      date: "Feb 2025 – May 2025",
      github: "https://github.com/thebadsektor/tc3202-3a-3.git",
      stack: [
        "React",
        "Django",
        "Python",
        "Tailwind CSS",
        "XGBoost",
        "SARIMAX",
        "Firebase",
        "Gemini API",
      ],
      overview:
        "Web application for tracking electricity consumption, forecasting future bills, and generating AI-powered energy-saving recommendations.",
      highlights: [
        "Built appliance-based energy consumption and cost calculations.",
        "Trained XGBoost and SARIMAX models on historical electricity rate data.",
        "Used Gemini API to generate personalized energy recommendations.",
        "Built dashboards for visualizing historical rates, predictions, and appliance sets.",
        "Implemented Firebase authentication with email verification and Google OAuth.",
      ],
      outcomes: [
        "Visualized 10+ years of electricity rate data.",
        "Delivered 3-month bill forecasts with sub-second latency under 500 ms.",
      ],
    },
    {
      name: "VideoNotes AI",
      summary: "AI tool that converts YouTube videos into study notes.",
      role: "Full Stack Developer",
      date: "2026",
      url: "https://videonotes-ai.vercel.app/",
      github: "https://github.com/Nethaiah/videonotes-ai.git",
      stack: [
        "React 18",
        "TypeScript",
        "Vite",
        "Supabase",
        "PostgreSQL",
        "Gemini 2.0 Flash",
        "Tailwind CSS",
      ],
      overview:
        "Full-stack learning tool that accepts a YouTube URL, extracts the transcript through Supadata API, and uses Gemini 2.0 Flash to generate a summary, outline, key takeaways, and Markdown study notes.",
      highlights: [
        "Automatically extracts transcripts and validates YouTube URLs.",
        "Runs concurrent Gemini requests for summary, outline, takeaways, and Markdown notes.",
        "Supports email/password and Google Sign-In through Google Identity Services.",
        "Stores notes in Supabase PostgreSQL with Row-Level Security.",
        "Includes searchable dashboard and TXT/MD export.",
      ],
      outcomes: [
        "Built a performant React 18, TypeScript, and Vite frontend.",
        "Used TanStack React Query for optimized data fetching.",
        "Implemented secure Supabase RLS policies for user notes.",
      ],
    },
  ] satisfies readonly PortfolioProject[],
  experience: [
    {
      organization: "Laguna Management Information Systems Office (MISO)",
      title: "IT Intern",
      type: "Internship",
      date: "Feb 2026 – April 2026",
      duration: "3 months",
      location: "Santa Cruz, Laguna",
      project: "STARS (Student Test Analysis and Record System)",
      stack: ["Java", "OpenCV", "SQLite", "Android Studio"],
      highlights: [
        "Accelerated real-time OMR auto-capture by optimizing an OpenCV pipeline.",
        "Achieved at least 94%+ bubble detection accuracy across 30–60 item exam formats.",
        "Delivered a production-ready APK to Calangay Integrated High School teachers.",
      ],
    },
    {
      organization: "Ship or Be Shipped Hackathon",
      title: "Developer (MedAssist)",
      type: "Hackathon",
      date: "Dec 2025",
      duration: "24 hours",
      location: "Makati City, Metro Manila",
      project: "MedAssist",
      stack: [
        "TypeScript",
        "Next.js",
        "Supabase",
        "OpenFDA API",
        "Google Gemini",
        "TailwindCSS",
        "Shadcn/UI",
      ],
      highlights: [
        "Engineered OpenFDA-backed AI safety validation for treatment plans.",
        "Built an AI treatment planner that converts patient intake into structured JSON recommendations.",
      ],
    },
    {
      organization: "Freelance",
      title: "Full-Stack Developer",
      type: "Freelance",
      date: "July 2025 – Aug 2025",
      duration: "2 months",
      location: "Santa Cruz, Laguna",
      project: "RPTAS Project (Real Property Tax Assessment System)",
      stack: [
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Material UI",
      ],
      highlights: [
        "Architected secure role-based authentication for administrators, assessors, and taxpayers.",
        "Implemented Zod schema validation to protect tax assessment records from invalid submissions.",
      ],
    },
  ] satisfies readonly PortfolioExperience[],
  education: {
    school: "Laguna University",
    degree:
      "Bachelor of Science in Computer Science with specialization in Data Science",
    shortDegree: "BS Computer Science — Data Science",
    date: "Aug 2021 – June 2026",
    location: "Santa Cruz, Laguna",
    coursework: [
      "Software Engineering",
      "Artificial Intelligence",
      "Information Management",
      "Machine Learning",
      "Database Management System",
    ],
  },
  certifications: [
    "AWS Cloud Practitioner (CLF-C02) — DataCamp, 2024",
    "AWS Cloud Technology & Services Concepts — DataCamp, 2024",
    "AWS Concepts — DataCamp, 2024",
    "AWS Security and Cost Management — DataCamp, 2024",
    "Understanding Cloud Computing — DataCamp, 2024",
    "Intro to Cloud Computing — Coursera, 2024",
    "Intro to HTML, CSS, JavaScript — Coursera, 2024",
    "Intro to Software Engineering — Coursera, 2024",
    "Programming for Beginners Using Python — DICT, 2024",
    "Programming for Intermediate Using Python — DICT, 2024",
    "Unveiling Tomorrow: AI and Machine Learning — Webinar, 2024",
    "Immutable Backend Web Dev with Internet Computer — Webinar, 2024",
    "AI-Innovative Week — DICT Rizal, 2024",
    "IBM Software Engineering — Coursera",
    "IBM Cloud Computing — Coursera",
  ],
  awards: [
    "Certificate of Recognition for successful STARS field deployment",
    "Best Thesis (CCS)",
    "Best Research Presenter (Institutional)",
  ],
} as const;

export function getPortfolioContextForPrompt() {
  return JSON.stringify(portfolioContext);
}
