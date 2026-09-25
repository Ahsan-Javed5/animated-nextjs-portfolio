// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT MODEL
// Edit the values in this file to update the entire website.
// Nothing here is UI — it is pure content/data, consumed by the components
// in src/components/. Replace the placeholder text with your real content.
// ─────────────────────────────────────────────────────────────────────────

export type Role = {
  key: string;
  title: string;
  blurb: string;
  icon: "code" | "podium" | "compass" | "flask";
};

export type Skill = {
  category: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  year: string;
  featured?: boolean;
};

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "work" | "education" | "teaching";
};

export type SocialLink = {
  label: string;
  href: string;
};

export const personal = {
  name: "Ahsan Javed",
  location: "Islamabad, Pakistan",
  // Drop your photo at /public/images/profile.jpg (or .png) then set the
  // path below, e.g. "/images/profile.jpg". Leave empty to show initials.
  photo: "/images/profile.webp",
  taglines: [
    "Senior Software Developer",
    "University Lecturer",
    "Math & CS Tutor",
    "AI Researcher",
  ],
  summary:
    "Passionate Data Scientist, Researcher & Software Engineer specializing in AI solutions, web & mobile apps, and expert technical tutoring in CS & Mathematics.",
  longBio:
    "Passionate Data Scientist, Researcher & Software Engineer with an MS in Data Science and a solid background in Computer Science and Mathematics. My active research focuses on Artificial Intelligence, Smart Algorithms, and Optimization—applying mathematical modeling to solve complex, real-world data problems. Alongside research, I have extensive experience building end-to-end digital solutions, ranging from custom AI models to modern web platforms and mobile applications (both standard and AI-integrated). Beyond research and development, I am deeply committed to education. I provide personalized tutoring and technical mentorship in Python, Higher Mathematics, Data Science, and Computer Science—helping students, researchers, and professionals master complex concepts through practical, hands-on guidance.",
      email: "ahsanjaved5000@gmail.com",
  phone: "+92 331 5534673",
  resumeHref: "#",
};

export const roles: Role[] = [
  {
    key: "developer",
    title: "Developer",
    blurb:
      "5+ years building production Flutter apps across fintech, food-tech, and transportation — currently a part-time remote developer for a Chicago-based dispatch company.",
    icon: "code",
  },
  {
    key: "lecturer",
    title: "Lecturer",
    blurb:
      "Lecturer at Bahria University, teaching Swarm Intelligence and ICT, with prior faculty roles at Virtual University of Pakistan and Quaid-i-Azam University.",
    icon: "podium",
  },
  {
    key: "tutor",
    title: "Tutor",
    blurb:
      "5 years tutoring Mathematics, Computer Science, Statistics, and AI — working with IGCSE, GCSE, IB, and university students across the UK, USA, Canada, the Gulf, and Europe.",
    icon: "compass",
  },
  {
    key: "researcher",
    title: "AI Researcher",
    blurb:
      "Conducting research on time-step-aware attention mechanisms to enhance masked diffusion language models. My work aims to make AI language generation faster, more precise, and computationally efficient.",
    icon: "flask",
  },
];

export const skills: Skill[] = [
  {
    category: "Mobile & App Development",
    items: [
      "Flutter",
      "Dart",
      "iOS (Xcode)",
      "Android Studio",
      "BLoC",
      "GetX",
      "Provider",
      "MVVM",
      "Firebase",
      "RESTful APIs",
      "Stripe / Square / JazzCash",
    ],
  },
  {
    category: "AI & Data Science",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "RAG",
      "ChromaDB",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Analysis",
    ],
  },
  {
    category: "Teaching & Mentoring",
    items: [
      "Curriculum Design",
      "Lab Instruction",
      "1:1 Tutoring",
      "Mathematics",
      "Statistics",
      "Calculus",
      "Computer Science Majors",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
      "Android Studio",
      "Xcode",
      "Firebase Firestore",
      "SQLite",
    ],
  },
];

export const projects: Project[] = [
     {
    title: "American Taxi Dispatch — Cab Booking App",
    description:
      "RoutineFix is an AI-powered Flutter app that converts your goals into structured daily routines, complete with smart reminders, occasion scheduling, habit streaks, and progress analytics.",
    tags: ["AI", "Flutter", "Habit Tracker", "Disciplined Routine"],
    href: "https://github.com/Ahsan-Javed5/routine_fix.git",
    year: "2026",
  },
   {
    title: "American Taxi Dispatch — Cab Booking App",
    description:
      "Production ride-hailing app with real-time GPS tracking, Google Maps integration, and multi-gateway payments (Stripe, Square, Google Pay, Apple Pay) secured by Firebase OTP authentication. Live on the Play Store and App Store.",
    tags: ["Flutter", "Firebase", "Google Maps API", "Stripe/Square", "MVVM"],
    href: "https://play.google.com/store/apps/details?id=com.ataxi.orders.ui",
    year: "2023",
  },
  {
    title: "Rental AI — AI-Powered Rental Agreement Analyzer",
    description:
      "An AI-powered app that analyzes rental agreements using a Mistral LLM and Retrieval-Augmented Generation (RAG), automatically flagging potentially problematic clauses. Flutter frontend with a Python/ChromaDB backend, deployed on a rented GPU pod via RunPod.",
    tags: ["Flutter", "Python", "Mistral LLM", "RAG", "ChromaDB"],
    repo: "https://github.com/Ahsan-Javed5/rental_ai",
    year: "2026",
    featured: true,
  },
  {
    title: "Feyst — Food Tech Platform",
    description:
      "Multi-restaurant food ordering platform with real-time order tracking, secure payments (JazzCash, credit card), and a BLoC-based architecture. Published on the Play Store and App Store",
    tags: ["Flutter", "BLoC", "JazzCash"],
    href: "https://play.google.com/store/apps/details?id=com.feyst.foodies",
    year: "2024",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "2026 — Present",
    title: "Lecturer",
    org: "Bahria University, Islamabad",
    description:
      "Teaching Swarm Intelligence and ICT labs to BS students.",
    type: "teaching",
  },
   {
    period: "2023 — Present",
    title: "Senior Product Developer",
    org: "American Taxi Dispatch Inc., Chicago, IL",
    description:
      "Building and maintaining a production Flutter ride-hailing app with thousands of active users, cutting dispatch response time by 15%.",
    type: "work",
  },
  {
    period: "2025 — 2026",
    title: "MS Data Science",
    org: "Abasyn University, Islamabad",
    description:
      "Thesis on time-step-aware attention mechanisms for diffusion language models, exploring Sinkhorn-style and softmax attention across the diffusion timeline.",
    type: "education",
  },
  {
    period: "2024 — 2025",
    title: "Visiting Faculty — Probability & Statistics, AI with Python",
    org: "Quaid-i-Azam University",
    description:
      "Teaching Probability & Statistics and AI with Python to BS students with hands-on labs.",
    type: "teaching",
  },
  {
    period: "2022 — 2024",
    title: "Software Engineer",
    org: "Infiniun Pvt Ltd",
    description:
      "Took Feyst, a food-tech app, from initial development through launch on the Play Store and App Store.",
    type: "work",
  },
  {
    period: "2021 — Present",
    title: "Private Online Tutor & Academic Mentor",
    org: "International Students — UK, USA, Canada, Gulf & Europe",
    description:
      "5 years tutoring Mathematics, Computer Science, Statistics, and AI across IGCSE, GCSE, IB, and university-level curricula.",
    type: "teaching",
  },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Ahsan-Javed5" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahsanjaved5" },
  { label: "Email", href: "mailto:ahsanjaved5000@gmail.com" },
];

export const navSections = [
  { id: "hero", label: "Intro" },
  { id: "roles", label: "What I do" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "timeline", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;