import Link from "next/link";
import { ArrowRight, Code2, Cpu, Globe, Layers, Sparkles, Terminal } from "lucide-react";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageFooter from "@/components/PageFooter";

const techStack = [
  { name: "Next.js 16 (App Router)", desc: "Server components, streaming, dynamic nested routing, and static generation", icon: Globe },
  { name: "React 19", desc: "Modern concurrent primitives, transitions, and reactive UI architecture", icon: Cpu },
  { name: "TypeScript 5", desc: "Strict end-to-end type safety, typed route params, and robust schemas", icon: Terminal },
  { name: "Tailwind CSS 4", desc: "Modern utility-first styling with fine-tuned design tokens and responsive layouts", icon: Layers },
  { name: "Lucide React", desc: "High-performance vector iconography system", icon: Sparkles },
];

const routes = [
  { path: "/", label: "Overview & Dashboard", desc: "Portal hero, live metrics, departments preview, and spotlight profiles" },
  { path: "/students", label: "Student Directory", desc: "Multi-filter search by name, department, cohort year, and sorting" },
  { path: "/students/[id]", label: "Student Profile", desc: "Verified campus records, high-res portraits, enrolled subjects, and GPA standing" },
  { path: "/departments", label: "Faculties Directory", desc: "Academic divisions with curriculum tracks and enrollment counts" },
  { path: "/departments/[department]", label: "Faculty Hub", desc: "Detailed department overview, faculty tracks, and enrolled students" },
  { path: "/departments/[department]/[specialization]", label: "Specialization Track", desc: "Curriculum specifications, lab details, and enrolled roster" },
  { path: "/not-found", label: "Custom 404 Handler", desc: "Graceful route recovery with automated navigation suggestions" },
];

export default function AboutPage() {
  return (
    <div className="py-10">
      <Container size="lg">
        <Breadcrumbs items={[{ label: "Overview", href: "/" }, { label: "About" }]} />

        {/* Hero */}
        <div className="mt-4 border-b border-slate-200/80 pb-8 mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800 mb-4">
            <Code2 size={13} />
            <span>Architecture & System Specifications</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            About EduNexus Directory
          </h1>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl">
            A production-ready student and faculty directory application developed with Next.js App Router and TypeScript.
            Demonstrates nested layout composition, multi-parameter filtering, statically generated parameter routes, and responsive UI engineering.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <section className="mb-12">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
            Engineered With Modern Technologies
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs card-hover-effect"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 mb-3">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{tech.name}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Route Architecture */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              System Route Map
            </h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              {routes.length} Registered Routes
            </span>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs divide-y divide-slate-100">
            {routes.map((r) => (
              <div key={r.path} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 hover:bg-slate-50/70 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
                      {r.path}
                    </span>
                    <span className="text-xs font-bold text-slate-800">{r.label}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{r.desc}</p>
                </div>

                {!r.path.includes("[") && (
                  <Link
                    href={r.path}
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:underline shrink-0"
                  >
                    <span>Visit route</span>
                    <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-3xl bg-slate-900 p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-lg font-bold">Explore the Live Directory</h3>
            <p className="mt-1 text-xs text-slate-400">
              Search by cohort, department, or view individual curriculum specializations.
            </p>
          </div>
          <Link
            href="/students"
            className="shrink-0 rounded-2xl bg-teal-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-teal-500 transition-colors"
          >
            Launch Student Directory
          </Link>
        </div>

        <PageFooter
          left="EduNexus Campus Directory Documentation · v1.0.0"
          right="Verified Informatics Specifications"
        />
      </Container>
    </div>
  );
}
