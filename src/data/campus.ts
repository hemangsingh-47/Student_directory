export type DepartmentIcon = "terminal" | "pen" | "trend";
export type Tone = "teal" | "emerald" | "indigo" | "rose" | "amber" | "slate";

export type Specialization = {
  slug: string;
  name: string;
  code: string;
  description: string;
  lead: string;
  lab: string;
  cycle: string;
};

export type Department = {
  slug: string;
  name: string;
  icon: DepartmentIcon;
  description: string;
  enrolled: number;
  specializations: Specialization[];
};

export type Subject = { code: string; title: string; credits: number };

export type Student = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  department: string;
  specialization: string;
  focus: string;
  year: 1 | 2 | 3 | 4;
  gpa?: number;
  enrolled: string;
  about: string;
  tone: Tone;
  subjects: Subject[];
  recordId: string;
};

export const departments: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    icon: "terminal",
    description: "Software engineering, artificial intelligence, algorithms, distributed computing, and cybersecurity systems.",
    enrolled: 340,
    specializations: [
      { slug: "ai-machine-learning", name: "AI & Machine Learning", code: "CS-SPEC-01", description: "Neural networks, data modelling, and applied machine learning systems.", lead: "Prof. Rahul Iyer", lab: "Turing Hall 201", cycle: "2024–2025 Revised" },
      { slug: "systems-cloud", name: "Systems & Cloud", code: "CS-SPEC-02", description: "Operating systems, virtualization, and cloud-native infrastructure.", lead: "Prof. Hana Becker", lab: "Turing Hall 305", cycle: "2024–2025 Revised" },
      { slug: "cybersecurity", name: "Cybersecurity", code: "CS-SPEC-03", description: "Applied cryptography, network defence, and secure software design.", lead: "Prof. Omar Haddad", lab: "Turing Hall 112", cycle: "2024–2025 Revised" },
      { slug: "web-development", name: "Web Development", code: "CS-SPEC-04", description: "Modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.", lead: "Prof. Elena Vance", lab: "Turing Hall 408", cycle: "2024–2025 Revised" },
    ],
  },
  {
    slug: "design",
    name: "Design",
    icon: "pen",
    description: "User experience research, visual communication, interaction design, and digital product prototyping.",
    enrolled: 195,
    specializations: [
      { slug: "ux-research", name: "UX Research", code: "DS-SPEC-01", description: "Qualitative and quantitative research methods for product teams.", lead: "Prof. Nadia Fontaine", lab: "Studio B12", cycle: "2024–2025 Revised" },
      { slug: "interaction-design", name: "Interaction Design", code: "DS-SPEC-02", description: "Designing responsive, accessible and delightful interactive systems.", lead: "Prof. Jonas Weber", lab: "Studio B14", cycle: "2024–2025 Revised" },
      { slug: "visual-communication", name: "Visual Communication", code: "DS-SPEC-03", description: "Typography, branding, and visual storytelling across digital and physical media.", lead: "Prof. Lila Moreau", lab: "Studio A03", cycle: "2024–2025 Revised" },
    ],
  },
  {
    slug: "business",
    name: "Business",
    icon: "trend",
    description: "Strategic management, financial technology, international entrepreneurship, and quantitative market analytics.",
    enrolled: 255,
    specializations: [
      { slug: "fintech", name: "Financial Technology", code: "BS-SPEC-01", description: "Digital payments, financial analytics, algorithmic trading, and market infrastructure.", lead: "Prof. Daniel Okafor", lab: "Commerce Block 210", cycle: "2024–2025 Revised" },
      { slug: "strategic-management", name: "Strategic Management", code: "BS-SPEC-02", description: "Corporate strategy, global operations, and organisational leadership.", lead: "Prof. Mei Tanaka", lab: "Commerce Block 118", cycle: "2024–2025 Revised" },
      { slug: "entrepreneurship", name: "Entrepreneurship", code: "BS-SPEC-03", description: "Venture creation, startup accelerators, growth strategy, and international venture ecosystems.", lead: "Prof. Carlos Vega", lab: "Commerce Block 305", cycle: "2024–2025 Revised" },
    ],
  },
];

export const students: Student[] = [
  {
    id: "stu-1042",
    name: "Aarav Mehta",
    email: "aarav.mehta@campus.edu",
    department: "computer-science",
    specialization: "web-development",
    focus: "Full-Stack Architecture",
    year: 3,
    enrolled: "Fall 2022",
    tone: "teal",
    recordId: "0948-CS-AM",
    about: "Aarav is an undergraduate researcher focusing on distributed web systems and cloud architecture. When not coding in TypeScript or Rust, he mentors first-year engineering students in algorithm fundamentals.",
    subjects: [
      { code: "CS-301", title: "Distributed Systems & Microservices", credits: 4.0 },
      { code: "CS-340", title: "Web Application Architecture", credits: 4.0 },
      { code: "CS-280", title: "Algorithms & Complexity", credits: 3.5 },
    ],
  },
  {
    id: "stu-1089",
    name: "Elena Rostova",
    email: "elena.rostova@campus.edu",
    department: "design",
    specialization: "ux-research",
    focus: "Cognitive UX Research",
    year: 2,
    enrolled: "Fall 2023",
    tone: "indigo",
    recordId: "1021-DS-ER",
    about: "Elena explores how human cognition intersects with digital interfaces. She runs observational usability studies for student-led campus startups and designs inclusive digital accessibility guidelines.",
    subjects: [
      { code: "DS-210", title: "Research Methods for Designers", credits: 3.5 },
      { code: "DS-225", title: "Information Architecture", credits: 3.0 },
      { code: "DS-240", title: "Human-Centred Design Studio", credits: 4.0 },
    ],
  },
  {
    id: "stu-1120",
    name: "Marcus Chen",
    email: "marcus.chen@campus.edu",
    department: "business",
    specialization: "strategic-management",
    focus: "Global Strategy & Operations",
    year: 4,
    enrolled: "Fall 2021",
    tone: "amber",
    recordId: "1187-BS-MC",
    about: "Marcus leads the campus consulting society and is writing his senior honors thesis on supply-chain resilience in emerging Asian and Latin American markets.",
    subjects: [
      { code: "BS-410", title: "Global Strategy & Operations", credits: 4.0 },
      { code: "BS-422", title: "Organisational Leadership", credits: 3.5 },
      { code: "BS-450", title: "Capstone: International Market Entry", credits: 4.0 },
    ],
  },
  {
    id: "stu-1155",
    name: "Priya Sharma",
    email: "priya.sharma@campus.edu",
    department: "computer-science",
    specialization: "web-development",
    focus: "Reactive UI & Accessibility",
    year: 1,
    enrolled: "Fall 2024",
    tone: "emerald",
    recordId: "1203-CS-PS",
    about: "Priya is a standout first-year student passionate about building accessible, component-driven web interfaces, design tokens, and modern reactive client frameworks.",
    subjects: [
      { code: "CS-101", title: "Introduction to Programming & OOP", credits: 4.0 },
      { code: "CS-120", title: "Modern Web Fundamentals", credits: 3.5 },
      { code: "MA-110", title: "Discrete Mathematics for Computing", credits: 3.0 },
    ],
  },
  {
    id: "stu-1201",
    name: "Lucas Dubois",
    email: "lucas.dubois@campus.edu",
    department: "design",
    specialization: "interaction-design",
    focus: "Motion Systems & Prototyping",
    year: 3,
    enrolled: "Fall 2022",
    tone: "rose",
    recordId: "1266-DS-LD",
    about: "Lucas crafts high-fidelity interactive prototypes and design systems, with a particular specialization in kinetic choreography and micro-interactions.",
    subjects: [
      { code: "DS-310", title: "Advanced Interaction Prototyping", credits: 4.0 },
      { code: "DS-322", title: "Motion for Interactive Interfaces", credits: 3.5 },
      { code: "DS-335", title: "Enterprise Design Systems", credits: 3.5 },
    ],
  },
  {
    id: "stu-1244",
    name: "Maya Lin",
    email: "maya.lin@campus.edu",
    department: "business",
    specialization: "fintech",
    focus: "Financial Analytics & Algo Trading",
    year: 2,
    enrolled: "Fall 2023",
    tone: "teal",
    recordId: "1309-BS-ML",
    about: "Maya studies algorithmic trading and retail banking disruption. She directs the data modeling committee for the university's student investment syndicate.",
    subjects: [
      { code: "BS-215", title: "Financial Accounting & Valuation", credits: 3.5 },
      { code: "BS-230", title: "Quantitative Data Analytics", credits: 4.0 },
      { code: "BS-245", title: "Intro to Financial Technology & DeFi", credits: 3.0 },
    ],
  },
  {
    id: "stu-1310",
    name: "Tariq Al-Mansoor",
    email: "tariq.almansoor@campus.edu",
    department: "computer-science",
    specialization: "systems-cloud",
    focus: "Distributed Cloud Systems",
    year: 4,
    enrolled: "Fall 2021",
    tone: "slate",
    recordId: "1342-CS-TA",
    about: "Tariq is completing his senior capstone on containerized edge orchestration and high-throughput serverless microservices for decentralized applications.",
    subjects: [
      { code: "CS-410", title: "Scalable Distributed Computing", credits: 4.0 },
      { code: "CS-430", title: "Cloud Architecture & Kubernetes", credits: 4.0 },
      { code: "CS-490", title: "Senior Engineering Capstone", credits: 4.5 },
    ],
  },
  {
    id: "stu-1388",
    name: "Sophia Müller",
    email: "sophia.muller@campus.edu",
    department: "computer-science",
    specialization: "web-development",
    focus: "Offline-First Web Apps",
    year: 2,
    enrolled: "Fall 2023",
    tone: "emerald",
    recordId: "1401-CS-SM",
    about: "Sophia focuses on local-first web sync protocols, Service Worker caching strategies, and ultra-high-speed client rendering pipelines.",
    subjects: [
      { code: "CS-210", title: "Data Structures & Performance", credits: 4.0 },
      { code: "CS-235", title: "Progressive Web Applications", credits: 3.5 },
      { code: "CS-250", title: "Software Design Patterns", credits: 3.5 },
    ],
  },
];

/* ---------- helpers ---------- */
export const getDepartment = (slug: string) => departments.find((d) => d.slug === slug);
export const getSpecialization = (dept: string, spec: string) =>
  getDepartment(dept)?.specializations.find((s) => s.slug === spec);
export const getStudent = (id: string) => students.find((s) => s.id === id.toLowerCase());
export const studentsInSpecialization = (dept: string, spec: string) =>
  students.filter((s) => s.department === dept && s.specialization === spec);
export const studentsInDepartment = (dept: string) => students.filter((s) => s.department === dept);

export const studentCode = (id: string) => id.toUpperCase();
export const initials = (name: string) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
export const yearLabel = (y: number) => ["1st Year", "2nd Year", "3rd Year", "4th Year"][y - 1];
export const yearTitle = (y: number) => ["Freshman", "Sophomore", "Junior", "Senior"][y - 1];
