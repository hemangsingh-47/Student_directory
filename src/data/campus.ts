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
  id: string; // e.g. "stu-1042" (used in the URL)
  name: string;
  email: string;
  avatar: string;
  department: string; // department slug
  specialization: string; // specialization slug
  focus: string;
  year: 1 | 2 | 3 | 4;
  gpa: number;
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
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    department: "computer-science",
    specialization: "web-development",
    focus: "Full-Stack Architecture",
    year: 3,
    gpa: 3.89,
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
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    department: "design",
    specialization: "ux-research",
    focus: "Cognitive UX Research",
    year: 2,
    gpa: 3.94,
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
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    department: "business",
    specialization: "strategic-management",
    focus: "Global Strategy & Operations",
    year: 4,
    gpa: 3.82,
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
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    department: "computer-science",
    specialization: "web-development",
    focus: "Reactive UI & Accessibility",
    year: 1,
    gpa: 3.96,
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
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    department: "design",
    specialization: "interaction-design",
    focus: "Motion Systems & Prototyping",
    year: 3,
    gpa: 3.78,
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
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    department: "business",
    specialization: "fintech",
    focus: "Financial Analytics & Algo Trading",
    year: 2,
    gpa: 3.91,
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
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    department: "computer-science",
    specialization: "systems-cloud",
    focus: "Distributed Cloud Systems",
    year: 4,
    gpa: 3.85,
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
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    department: "computer-science",
    specialization: "web-development",
    focus: "Offline-First Web Apps",
    year: 2,
    gpa: 3.87,
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
  {
    id: "stu-1425",
    name: "Devansh Patel",
    email: "devansh.patel@campus.edu",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    department: "design",
    specialization: "visual-communication",
    focus: "Brand Identity & Visual Storytelling",
    year: 3,
    gpa: 3.75,
    enrolled: "Fall 2022",
    tone: "indigo",
    recordId: "1460-DS-DP",
    about: "Devansh is a visual communication specialist who combines typography, 3D graphics, and experimental brand systems for international creative clients.",
    subjects: [
      { code: "DS-301", title: "Advanced Typography & Editorial", credits: 4.0 },
      { code: "DS-315", title: "Brand Identity Systems", credits: 3.5 },
      { code: "DS-340", title: "Digital Media Narratives", credits: 3.5 },
    ],
  },
  {
    id: "stu-1480",
    name: "Ananya Deshmukh",
    email: "ananya.deshmukh@campus.edu",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    department: "business",
    specialization: "entrepreneurship",
    focus: "Venture Capital & Scale-Up Strategy",
    year: 4,
    gpa: 3.92,
    enrolled: "Fall 2021",
    tone: "teal",
    recordId: "1515-BS-AD",
    about: "Ananya has co-founded an EdTech peer-tutoring marketplace on campus and represents the university in national collegiate startup pitch competitions.",
    subjects: [
      { code: "BS-430", title: "Venture Financing & Angel Syndicates", credits: 4.0 },
      { code: "BS-445", title: "Startup Growth & Go-To-Market", credits: 3.5 },
      { code: "BS-460", title: "Innovation Capstone Practicum", credits: 4.5 },
    ],
  },
  {
    id: "stu-1512",
    name: "Liam O'Connor",
    email: "liam.oconnor@campus.edu",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
    department: "computer-science",
    specialization: "cybersecurity",
    focus: "Applied Cryptography & Network Defence",
    year: 2,
    gpa: 3.83,
    enrolled: "Fall 2023",
    tone: "slate",
    recordId: "1544-CS-LO",
    about: "Liam is an ethical hacker and cybersecurity researcher who competes in collegiate Capture The Flag tournaments and audits open-source encryption tools.",
    subjects: [
      { code: "CS-260", title: "Applied Cryptography Fundamentals", credits: 4.0 },
      { code: "CS-275", title: "Network Security Protocols", credits: 3.5 },
      { code: "CS-290", title: "Penetration Testing & Red Teaming", credits: 3.5 },
    ],
  },
  {
    id: "stu-1570",
    name: "Chloe Dubois",
    email: "chloe.dubois@campus.edu",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    department: "design",
    specialization: "ux-research",
    focus: "Behavioral Analytics & Human Factors",
    year: 1,
    gpa: 3.72,
    enrolled: "Fall 2024",
    tone: "amber",
    recordId: "1590-DS-CD",
    about: "Chloe is a passionate first-year student studying how physical environment and sensory ergonomics influence digital workspace productivity.",
    subjects: [
      { code: "DS-110", title: "Design Thinking & Behavioral Studies", credits: 3.5 },
      { code: "DS-130", title: "Visual Prototyping Basics", credits: 3.0 },
      { code: "SO-105", title: "Introduction to Social Psychology", credits: 3.5 },
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
