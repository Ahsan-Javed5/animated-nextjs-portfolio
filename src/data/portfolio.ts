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
    "I build production Flutter apps, teach Computer Science and Mathematics at university and online, and research adaptive attention mechanisms for diffusion language models.",
  longBio:
    "I started out teaching Mathematics and Computer Science over a decade ago, and later moved into software engineering, where I've spent the last 5+ years building production Flutter apps for fintech, food-tech, and transportation companies. Alongside industry work, I teach at the university level — currently a lab instructor at Bahria University — and tutor Math, CS, Statistics, and AI to students across the UK, USA, Canada, the Gulf, and Europe. I'm now completing an MS in Data Science, researching time-step-aware attention mechanisms for diffusion language models, with an eye on taking that research further abroad.",
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
      "Visiting lecturer and lab instructor at Bahria University, teaching Swarm Intelligence and Introduction to Programming, with prior faculty roles at Virtual University of Pakistan and Quaid-i-Azam University.",
    icon: "podium",
  },
  {
    key: "tutor",
    title: "Tutor",
    blurb:
      "10 years tutoring Mathematics, Computer Science, Statistics, and AI — working with IGCSE, GCSE, IB, and university students across the UK, USA, Canada, the Gulf, and Europe.",
    icon: "compass",
  },
  {
    key: "researcher",
    title: "AI Researcher",
    blurb:
      "MS Data Science thesis researching time-step-aware attention mechanisms for masked diffusion language models.",
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
      "Swarm Intelligence (PSO, ACO, ABC, GWO)",
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
    title: "Rental AI — AI-Powered Rental Agreement Analyzer",
    description:
      "An AI-powered app that analyzes rental agreements using a Mistral LLM and Retrieval-Augmented Generation (RAG), automatically flagging potentially problematic clauses. Flutter frontend with a Python/ChromaDB backend, deployed on a rented GPU pod via RunPod.",
    tags: ["Flutter", "Python", "Mistral LLM", "RAG", "ChromaDB"],
    repo: "https://github.com/Ahsan-Javed5/rental_ai",
    year: "2025",
    featured: true,
  },
  {
    title: "American Taxi Dispatch — Cab Booking App",
    description:
      "Production ride-hailing app with real-time GPS tracking, Google Maps integration, and multi-gateway payments (Stripe, Square, Google Pay, Apple Pay) secured by Firebase OTP authentication. Live on the Play Store and App Store with 10,000+ active users.",
    tags: ["Flutter", "Firebase", "Google Maps API", "Stripe/Square", "MVVM"],
    href: "https://play.google.com/store/apps/details?id=com.ataxi.orders.ui",
    year: "2023",
  },
  {
    title: "Feyst — Food Tech Platform",
    description:
      "Multi-restaurant food ordering platform with real-time order tracking, secure payments (JazzCash, credit card), and a BLoC-based architecture. Published on the Play Store and App Store with 5,000+ downloads and a 4.5-star rating.",
    tags: ["Flutter", "BLoC", "JazzCash"],
    href: "https://play.google.com/store/apps/details?id=com.feyst.foodies",
    year: "2024",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "2026 — Present",
    title: "Lecturer / Lab Instructor",
    org: "Bahria University",
    description:
      "Teaching Swarm Intelligence (PSO, ACO, ABC, GWO) and Introduction to Programming labs to BS students.",
    type: "teaching",
  },
  {
    period: "2025 — Present",
    title: "MS Data Science (Thesis Stage)",
    org: "Abasyn University, Islamabad",
    description:
      "Thesis on time-step-aware attention mechanisms for diffusion language models, exploring Sinkhorn-style and softmax attention across the diffusion timeline.",
    type: "education",
  },
  {
    period: "2024 — Present",
    title: "Visiting Faculty — Probability & Statistics, AI with Python",
    org: "Quaid-i-Azam University",
    description:
      "Teaching Probability & Statistics and AI with Python to BS students with hands-on labs.",
    type: "teaching",
  },
  {
    period: "2023 — Present",
    title: "Mobile App Developer (Part-Time Remote)",
    org: "American Taxi Dispatch Inc., Chicago, IL",
    description:
      "Building and maintaining a production Flutter ride-hailing app with 100,000+ active users, cutting dispatch response time by 15%.",
    type: "work",
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
    period: "2015 — Present",
    title: "Private Online Tutor & Academic Mentor",
    org: "International Students — UK, USA, Canada, Gulf & Europe",
    description:
      "10 years tutoring Mathematics, Computer Science, Statistics, and AI across IGCSE, GCSE, IB, and university-level curricula.",
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