import Link from "next/link";
import { ArrowRight, BookOpen, Mail, Star } from "lucide-react";
import Avatar from "./Avatar";
import Badge from "./Badge";
import { getDepartment, studentCode, yearLabel, type Student } from "@/data/campus";

const deptBadgeVariant: Record<string, "teal" | "purple" | "amber" | "neutral"> = {
  "computer-science": "teal",
  design: "purple",
  business: "amber",
};

export default function StudentCard({ student }: { student: Student }) {
  const dept = getDepartment(student.department);
  const badgeVar = deptBadgeVariant[student.department] ?? "neutral";

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:border-teal-300 hover:shadow-lg card-hover-effect">
      <div>
        {/* Top bar: Avatar & ID */}
        <div className="mb-4 flex items-center justify-between">
          <Avatar
            name={student.name}
            tone={student.tone}
            src={student.avatar}
            size="md"
            showStatus
          />
          <div className="flex items-center gap-1.5">
            {student.gpa && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/70 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                <Star size={10} className="fill-amber-500 text-amber-500" />
                {student.gpa.toFixed(2)}
              </span>
            )}
            <Badge mono variant="outline">
              {studentCode(student.id)}
            </Badge>
          </div>
        </div>

        {/* Student Name */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
          <Link href={`/students/${student.id}`} className="focus:outline-none">
            {student.name}
          </Link>
        </h3>

        {/* Department & Year Standing */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <Badge variant={badgeVar}>{dept?.name ?? student.department}</Badge>
          <span className="text-[11px] font-semibold text-slate-500">
            {yearLabel(student.year)}
          </span>
        </div>

        {/* Focus / Specialization */}
        <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-2">
          {student.about}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-5 border-t border-slate-100 pt-3.5 flex items-center justify-between text-xs">
        <a
          href={`mailto:${student.email}`}
          className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-teal-700 transition-colors"
          title={`Email ${student.name}`}
        >
          <Mail size={13} className="text-slate-400 group-hover:text-teal-600" />
          <span>Contact</span>
        </a>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
            <BookOpen size={12} className="text-slate-400" />
            {student.subjects.length} Subjects
          </span>

          <Link
            href={`/students/${student.id}`}
            className="inline-flex items-center gap-1 font-bold text-teal-700 group-hover:text-teal-800 group-hover:translate-x-0.5 transition-all"
          >
            <span>Profile</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
