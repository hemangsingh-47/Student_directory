# EduNexus — Campus Student & Academic Directory

A modern, full-stack campus informatics directory engineered with **Next.js 16 (App Router)**, **React 19**, **TypeScript 5**, and **Tailwind CSS 4**. 

EduNexus provides a comprehensive portal for exploring undergraduate student records, academic divisions, specialized research curriculum tracks, and verified course enrollment credits.

---

## Key Features

- **Dynamic Student Directory:** Instant multi-criteria filtering by name, keywords, department, cohort year (Freshman through Senior), and sorting (alphabetical, cohort seniority).
- **Rich Student Profiles:** Verified campus profile pages with high-resolution portraits, academic standing, cumulative GPA, faculty affiliation, and enrolled credit units.
- **Academic Faculties & Tracks:** Dedicated department hubs and specialized curriculum pages detailing lab facilities, lead professors, and course rosters.
- **Modern Responsive Design:** Designed with a refined Emerald & Teal aesthetic, ambient glassmorphism, micro-animations, and full mobile responsiveness.
- **Optimized Performance:** Built with React Server Components, streaming Suspense boundaries, and statically pre-rendered route params.

---

## System Route Architecture

| Route | Purpose | Features |
|---|---|---|
| `/` | Campus Portal Dashboard | Live KPIs, department overview, spotlight student profiles |
| `/students` | Directory Search & Filters | Live search, URL query state, multi-criteria filtering, pagination |
| `/students/[id]` | Student Profile Detail | Verified record badge, contact link, enrolled subjects table, peers |
| `/departments` | Faculties Overview | List of academic divisions and specialized curriculum tracks |
| `/departments/[department]` | Faculty Hub | Department dean, stats, curriculum tracks, enrolled students |
| `/departments/[department]/[specialization]` | Track Details | Lab location, faculty lead, cycle revision, student roster |
| `/about` | System Architecture | Technical specifications, route map, and stack overview |

---

## Tech Stack

- **Framework:** Next.js 16.4 (App Router)
- **Library:** React 19.3
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React

---

## Getting Started

### Prerequisites

- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hemangsingh-47/Student_directory.git
cd Student_directory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To validate type checks and generate static pages:
```bash
npm run build
npm run start
```

---

## License

MIT License — Academic Project Submission.
