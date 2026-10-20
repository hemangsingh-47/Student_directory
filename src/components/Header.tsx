import Link from "next/link";
import { GraduationCap, Sparkles } from "lucide-react";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-bold text-slate-900 transition-transform active:scale-95"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-teal-700 text-white shadow-md shadow-teal-500/20 group-hover:shadow-teal-500/30 transition-shadow">
              <GraduationCap size={22} className="transition-transform group-hover:rotate-6" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-tight text-slate-900">EduNexus</span>
              <span className="text-[10px] font-semibold text-teal-700">Student & Campus Directory</span>
            </div>
          </Link>
          <NavLinks />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Fall 2024 Active</span>
          </div>

          <Link
            href="/students"
            className="flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50/70 px-3.5 py-1.5 text-xs font-semibold text-teal-800 hover:bg-teal-100/80 hover:text-teal-900 hover:border-teal-300 transition-all shadow-2xs"
          >
            <Sparkles size={13} className="text-amber-500" />
            <span>Directory</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
