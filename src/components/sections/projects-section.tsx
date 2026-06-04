"use client";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    name: "Doculens (Laguna University Semantic Theses Search)",
    shortDesc: "AI-Powered Document Management & Search Platform",
    url: "https://doculens-rho.vercel.app/",
    github: "https://github.com/Nethaiah/deped-semantic-docs.git",
    tags: ["Next.js", "FastAPI", "Supabase", "PgVector", "Gemini 2.5 Flash", "BM25", "Sentence Transformers", "TailwindCSS", "Shadcn/UI"],
    date: "Oct 2025 – May 2026",
    role: "Full Stack Developer",
    overview: "Doculens is a centralized, AI-powered document management and search platform built for the Research and Development Center of Laguna University. Designed to modernize academic archiving, the system digitizes past theses, IMRADS, and abstracts from various departments. It empowers students and faculty to discover and interact with academic research using advanced natural language processing, semantic search, and AI-driven retrieval techniques.",
    bullets: [
      "Semantic Vector Search: Upgraded traditional keyword-based search by implementing vector search. This allows users to query the repository based on context, meaning, and intent rather than exact word matches.",
      "Retrieval-Augmented Generation (RAG) Q&A: Integrated an AI-powered conversational interface where users can ask complex questions about specific research topics. The AI generates natural language answers grounded strictly in the academic papers stored in the system, preventing hallucinations.",
      "Centralized Digital Repository: Created a single, unified hub for multiple university departments to securely store, manage, and browse academic documents. Features include PDF viewing and rich text formatting.",
      "Role-Based Access Control (RBAC): Built a secure, delineated access system. Regular users (students/faculty) have restricted access for browsing and searching, while administrators (R&D staff) have secure access to a dedicated dashboard for uploading, processing, and managing documents.",
      "Silent Security Model: Implemented a robust security layer where unauthorized attempts to access admin routes do not just redirect, but silently return a 404 Not Found page, completely hiding administrative infrastructure from non-admins."
    ],
    accomplishments: [
      "Engineered an AI search system, achieving 92% top-result accuracy, by combining keyword matching with meaning-based semantic algorithms.",
      "Enhanced AI document summarization, attaining a 94% semantic accuracy score, by building a custom filtering system to feed the AI only highly relevant context.",
      "Optimized application performance, decreasing load times by approximately 150-200 ms by implementing Next.js cache components for server-rendered UI and data fetching."
    ]
  },
  {
    name: "STARS (Student Test Analysis and Record System)",
    shortDesc: "Android-based Optical Mark Recognition (OMR) Assessment Platform",
    url: "",
    github: "https://github.com/Argieeel/OMRScanner.git",
    tags: ["Java", "Android SDK", "CameraX", "OpenCV", "Room", "Gson", "Material Components", "Zip4j"],
    date: "Feb 2026 – April 2026",
    role: "IT Intern",
    overview: "STARS is a comprehensive Android application designed to modernize school-style paper assessments. It functions as both a live camera scanner and a local class management system, allowing educators to instantly scan, grade, and record OMR answer sheets using their smartphone's camera. The app utilizes computer vision to automatically detect sheet anchor points, capture the image, align the perspective, and accurately extract both the Learner Reference Number (LRN) and the marked answers.",
    bullets: [
      "Automated Live Scanning: Built with CameraX and OpenCV, the app actively processes live preview frames to detect corner anchors (squares) on the paper. Once valid anchors are found, it triggers an immediate auto-capture, eliminating the need for manual shutter presses.",
      "Dual Scanning Modes: Features a Handheld Mode optimized for quick, close-up scanning and a Fixed-Mount Mode engineered for elevated camera setups, including distance compensation and dynamic zoom stepping for bulk processing.",
      "Intelligent Image Processing Pipeline: The OMR engine performs perspective alignment to warp the captured sheet into a fixed reference frame, automatically detects the template type (e.g., ZPH30, ZPH40) and orientation, and precisely reads the filled bubbles.",
      "Integrated Class Management: A robust local dashboard built with Room Database allows users to manage teacher profiles, create classes, set up assessments, and assign reusable answer keys for instant grading.",
      "Data Export & Security: Scanned data and images are stored locally and can be exported as CSV files or securely packaged into protected ZIP archives for external record-keeping."
    ],
    accomplishments: [
      "Accelerated real-time OMR auto-capture speeds, by engineering an optimized OpenCV pipeline that bypasses expensive NV21-to-Bitmap frame conversions.",
      "Achieved at least 94%+ bubble detection accuracy across 30–60 item exam formats by calculating pixel density and applying solidity, darkness, and fill ratio filters to reject false positives.",
      "Delivered a production-ready APK to Calangay Integrated High School teachers, earning a Certificate of Recognition for successful field deployment."
    ]
  },
  {
    name: "MedAssist (AI-Powered Treatment Plan Assistant)",
    shortDesc: "Intelligent Healthcare Platform & Consultation Assistant",
    url: "",
    github: "https://github.com/Nethaiah/medassist.git",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Supabase", "PostgreSQL", "Google GenAI", "OpenFDA API", "Zod", "MailerSend"],
    date: "Dec 2025",
    role: "Full Stack Developer",
    overview: "MedAssist is an intelligent, full-stack healthcare platform designed to bridge the gap between patients and medical professionals. By integrating AI-driven clinical analysis with the official FDA database, MedAssist streamlines the consultation process, enhances patient safety, and empowers doctors with data-driven insights for treatment planning.",
    bullets: [
      "Role-Based Dashboards: Distinct, secure interfaces for both Patients and Doctors to manage health data, review cases, and manage schedules.",
      "AI-Powered Clinical Analysis: Utilizes Google's Gemini AI to analyze patient intake forms (symptoms, vitals, medical history, allergies) and generate comprehensive preliminary treatment plans.",
      "OpenFDA Integration for Patient Safety: Automatically flags potential interactions, checks for contraindications, validates dosages, and tracks adverse events using real-time OpenFDA data.",
      "End-to-End Consultation Workflow: Complete pipeline from patient health form submission to AI case generation, scheduling, and final doctor approval of the treatment plan.",
      "Scheduling & Notifications: Built-in scheduling system with automated email reminders and cron jobs to keep patients and doctors aligned.",
      "Audit Trails & Security: Maintains strict audit logs for any modifications made to a consultation or treatment plan, ensuring compliance and accountability."
    ],
    accomplishments: [
      "Engineered a real-time safety validation layer using the OpenFDA API to cross-reference AI outputs against federal drug databases, automatically flagging contraindications and ensuring clinical compliance.",
      "Developed an AI-powered treatment planner during a 24-hour Ship or Be Shipped Hackathon coding sprint, parsing patient intake data into structured JSON recommendations via LLM.",
      "Engineered a complex, multi-step state management system for patient onboarding, scheduling, and payment gateways.",
      "Established a secure backend architecture utilizing Next.js Server Actions and Supabase to enforce strict role-based access controls between doctors and patients."
    ]
  },
  {
    name: "Wattify (Intelligent Energy Management & Bill Forecasting Platform)",
    shortDesc: "Smart Energy Consumption Tracker & ML Bill Prediction",
    url: "",
    github: "https://github.com/thebadsektor/tc3202-3a-3.git",
    tags: ["React", "Django", "Python", "Tailwind CSS", "XGBoost", "SARIMAX", "Firebase", "Gemini API"],
    date: "Feb 2025 - May 2025",
    role: "Full Stack Developer",
    overview: "Wattify is an intelligent web application designed to help small-scale businesses, building managers, and environmentally conscious individuals manage and optimize their electricity usage. By analyzing historical electricity rates and user-specific appliance data, the system not only tracks current energy consumption but leverages machine learning to predict future electricity bills and provides personalized energy-saving recommendations.",
    bullets: [
      "Smart Energy Consumption Calculator: Manually input or import predefined sets of appliances to accurately calculate total energy consumption and cost breakdown (per hour, day, and week).",
      "Machine Learning Bill Prediction: Integrates an XGBoost and SARIMAX model trained on historical electricity rate data (from MERALCO, BSP, and PSA) to forecast users' electricity bills up to three months in advance.",
      "AI-Powered Energy Recommendations: Analyzes the user's consumption breakdown and utilizes generative AI (WattBot / Gemini API) to generate actionable, personalized tips.",
      "Interactive Data Visualization & Management: A comprehensive dashboard allows users to visually track historical electricity rates, compare predictions, and logically group multiple devices into 'appliance sets'.",
      "Secure Authentication: Features seamless user sign-up and login, including email verification and Google OAuth integration, backed by Firebase."
    ],
    accomplishments: [
      "Developed a full-stack web application using React and Django, visualizing 10+ years of historical electricity rates to help users track trends and identify potential cost spikes.",
      "Trained and deployed predictive models XGBoost & SARIMAX to solve monthly budget uncertainty, serving 3-month bill forecasts with sub-second latency <500ms for real-time financial planning."
    ]
  },
  {
    name: "VideoNotes AI",
    shortDesc: "AI-powered tool that converts YouTube videos into study notes.",
    url: "https://videonotes-ai.vercel.app/",
    github: "https://github.com/Nethaiah/videonotes-ai.git",
    tags: ["React 18", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Gemini 2.0 Flash", "Tailwind CSS"],
    date: "2026",
    role: "Full Stack Developer",
    overview: "VideoNotes AI is a full-stack AI-powered learning tool that I built to solve a real problem: the time-consuming process of manually taking notes from educational YouTube videos. Users simply paste a YouTube URL, and the app automatically extracts the video transcript (via Supadata API), then fires 4 concurrent requests to Google Gemini 2.0 Flash to generate a rich summary, hierarchical outline, bullet-point key takeaways, and complete Markdown study notes. The frontend is built with React 18 and TypeScript using Vite for blazing-fast development, styled with Tailwind CSS and shadcn/ui components for a polished, responsive UI. Authentication supports both email/password and Google Sign-In (via Google Identity Services with One Tap), backed by Supabase Auth. All user data is stored in a PostgreSQL database with Row-Level Security policies ensuring strict data privacy. The dashboard lets users search, view, download (TXT/MD), and manage their saved notes across devices.",
    bullets: [
      "YouTube Transcript Extraction: Automatically extracts video transcripts using the Supadata API, validating URLs and auto-fetching titles before processing.",
      "AI-Powered Note Generation: Fires concurrent requests to Google Gemini 2.0 Flash to produce a rich summary, a hierarchical outline, bullet-point key takeaways, and formatted Markdown notes.",
      "Robust Authentication: Features email/password and Google Sign-In via Google Identity Services, backed by Supabase Auth with automated profile creation and session persistence.",
      "Comprehensive Notes Dashboard: Allows users to search, sort, and manage saved notes across devices, featuring a detailed tabbed modal for viewing generated content.",
      "Flexible Export Options: Enables users to download generated study materials as combined text files (.txt) or fully formatted Markdown (.md) for use in other applications."
    ],
    accomplishments: [
      "Engineered a high-performance frontend using React 18, TypeScript, and Vite, state-managed by TanStack React Query for optimal data fetching.",
      "Implemented a secure backend with Supabase PostgreSQL, leveraging Row-Level Security policies to ensure strict data privacy for user notes."
    ]
  },
] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-col portfolio-section">
      <SectionHeading
        title="Recent Projects"
        count={projects.length}
        action={projects.length > 6 ? { href: "#projects", label: "View All" } : undefined}
      />
      <div className="proj-grid">
        {projects.map((project) => (
          <Dialog key={project.name}>
            <DialogTrigger className="proj-card group text-left h-full flex flex-col justify-between">
              <div>
                <div className="proj-card-bar" aria-hidden="true" />
                <div className="proj-name">{project.name}</div>
                <div className="proj-desc">{project.shortDesc}</div>
              </div>
              <div className="mt-4">
                <div className="proj-tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="exp-tag">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="exp-tag">+{project.tags.length - 3}</Badge>
                  )}
                </div>
                <div className="proj-date mt-2">{project.date}</div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl sm:max-w-4xl w-[95vw] sm:w-[90vw] md:w-[80vw] max-h-[85vh] overflow-y-auto p-4 sm:p-8">
              <DialogHeader tabIndex={0} className="focus:outline-none">
                <DialogTitle className="text-2xl font-bold">{project.name}</DialogTitle>
                <DialogDescription className="text-muted-foreground mt-1">
                  {project.shortDesc} • {project.date}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 flex flex-col gap-6 text-sm text-foreground/90">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-foreground text-base">Overview</h4>
                  <p className="leading-relaxed">{project.overview}</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-foreground text-base">Key Features</h4>
                  <ul className="list-disc list-outside pl-5 flex flex-col gap-2 leading-relaxed">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-foreground text-base">Accomplishments</h4>
                  <ul className="list-disc list-outside pl-5 flex flex-col gap-2 leading-relaxed">
                    {project.accomplishments.map((accomp) => (
                      <li key={accomp}>{accomp}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-foreground text-base">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      Live Demo ↗
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      GitHub Repository ↗
                    </a>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
