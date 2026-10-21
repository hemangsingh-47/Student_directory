import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, UserCheck, MapPin, Calendar, Award, Layers } from "lucide-react";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import Badge from "@/components/Badge";
import PageFooter from "@/components/PageFooter";
import StudentCard from "@/components/StudentCard";
import { departments, getDepartment, getSpecialization, studentsInSpecialization } from "@/data/campus";

export function generateStaticParams() {
  return departments.flatMap((d) => d.specializations.map((s) => ({ department: d.slug, specialization: s.slug })));
}

export default async function SpecializationPage({
  params,
}: {
  params: Promise<{ department: string; specialization: string }>;
}) {
  const { department, specialization } = await params;
  const dept = getDepartment(department);
  const spec = getSpecialization(department, specialization);
  if (!dept || !spec) notFound();

  const list = studentsInSpecialization(dept.slug, spec.slug);

  return (
    <div className="py-8">
      <Container size="lg">
        <Breadcrumbs
          items={[
            { label: "Overview", href: "/" },
            { label: "Departments", href: "/departments" },
            { label: dept.name, href: `/departments/${dept.slug}` },
            { label: spec.name },
          ]}
        />

        <div className="mt-3 mb-6 flex items-center justify-between text-xs">
          <Link
            href={`/departments/${dept.slug}`}
            className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={14} /> Return to {dept.name} Faculty
          </Link>
          <Link
            href={`/students?department=${dept.slug}`}
            className="inline-flex items-center gap-1 font-bold text-teal-700 hover:underline"
          >
            <span>View all faculty students</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Track Header Card */}
        <section className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 rounded-lg px-2.5 py-1">
                  {spec.code}
                </span>
                <Badge variant="teal">{dept.name}</Badge>
              </div>

              <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {spec.name}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 max-w-2xl">
                {spec.description}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Track Lead Faculty</p>
              <p className="mt-1 text-sm font-bold text-slate-800 flex items-center gap-2">
                <UserCheck size={16} className="text-teal-600" />
                {spec.lead}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Research Facility</p>
              <p className="mt-1 text-sm font-bold text-slate-800 flex items-center gap-2">
                <MapPin size={16} className="text-rose-500" />
                {spec.lab}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Curriculum Revision</p>
              <p className="mt-1 text-sm font-bold text-slate-800 flex items-center gap-2">
                <Calendar size={16} className="text-indigo-600" />
                {spec.cycle}
              </p>
            </div>
          </div>
        </section>

        {/* Enrolled Students in Track */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Enrolled Specialization Roster
              </h2>
              <p className="text-xs text-slate-500">Students actively registered under {spec.name}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              {list.length} Enrollees
            </span>
          </div>

          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center text-xs text-slate-500">
              No students are currently registered in this specialization track.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          )}
        </section>

        <PageFooter
          left={`${spec.name} · ${dept.name}`}
          right="Verified Informatics Track"
        />
      </Container>
    </div>
  );
}
