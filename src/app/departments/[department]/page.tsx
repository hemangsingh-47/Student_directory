import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Network, Users, Layers, ExternalLink } from "lucide-react";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import DepartmentIcon from "@/components/DepartmentIcon";
import PageFooter from "@/components/PageFooter";
import StudentCard from "@/components/StudentCard";
import { departments, getDepartment, students, studentsInSpecialization } from "@/data/campus";

export function generateStaticParams() {
  return departments.map((d) => ({ department: d.slug }));
}

export default async function DepartmentPage({ params }: { params: Promise<{ department: string }> }) {
  const { department } = await params;
  const dept = getDepartment(department);
  if (!dept) notFound();

  // Get all students enrolled in this department
  const deptStudents = students.filter((s) => s.department === dept.slug);

  return (
    <div className="py-8">
      <Container size="lg">
        <Breadcrumbs
          items={[
            { label: "Overview", href: "/" },
            { label: "Departments", href: "/departments" },
            { label: dept.name },
          ]}
        />

        <div className="mt-3 mb-6 flex items-center justify-between text-xs">
          <Link
            href="/departments"
            className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={14} /> Back to all departments
          </Link>
          <Link
            href={`/students?department=${dept.slug}`}
            className="inline-flex items-center gap-1 font-bold text-teal-700 hover:underline"
          >
            <span>View {deptStudents.length} enrolled students</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Department Hero Card */}
        <section className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-700 via-emerald-600 to-teal-800 text-white shadow-md shadow-teal-500/20">
                <DepartmentIcon name={dept.icon} />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {dept.name}
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-xl">
                  {dept.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Enrolled</p>
              <p className="mt-1 text-lg font-bold text-slate-900 flex items-center gap-1.5">
                <Users size={16} className="text-teal-600" />
                {dept.enrolled} Students
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Specializations</p>
              <p className="mt-1 text-lg font-bold text-slate-900 flex items-center gap-1.5">
                <Network size={16} className="text-indigo-600" />
                {dept.specializations.length} Tracks
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-100 col-span-2 sm:col-span-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Curriculum Cycle</p>
              <p className="mt-1 text-lg font-bold text-slate-900 flex items-center gap-1.5">
                <Layers size={16} className="text-emerald-600" />
                2024–2025
              </p>
            </div>
          </div>
        </section>

        {/* Specialization Tracks */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Specialization Tracks
              </h2>
              <p className="text-xs text-slate-500">Curriculum concentrations offered within this faculty</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dept.specializations.map((spec) => {
              const specStudents = studentsInSpecialization(dept.slug, spec.slug);
              return (
                <div
                  key={spec.slug}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-teal-300 transition-all card-hover-effect"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
                      {spec.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {specStudents.length} {specStudents.length === 1 ? "student" : "students"}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 hover:text-teal-700 transition-colors">
                    <Link href={`/departments/${dept.slug}/${spec.slug}`}>{spec.name}</Link>
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {spec.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500">
                      Lead: <strong className="text-slate-700">{spec.lead}</strong>
                    </span>
                    <Link
                      href={`/departments/${dept.slug}/${spec.slug}`}
                      className="font-bold text-teal-700 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Enrolled Students in this Department */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Enrolled Students
              </h2>
              <p className="text-xs text-slate-500">Profiles affiliated with {dept.name}</p>
            </div>
            <Link
              href={`/students?department=${dept.slug}`}
              className="text-xs font-bold text-teal-700 hover:underline"
            >
              Filter in directory →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deptStudents.map((s) => (
              <StudentCard key={s.id} student={s} />
            ))}
          </div>
        </section>

        <PageFooter
          left={`${dept.name} · Faculty Academic Board`}
          right="Accredited Program Curriculum"
        />
      </Container>
    </div>
  );
}
