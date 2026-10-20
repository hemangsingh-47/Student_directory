"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Landmark, Info, LayoutGrid } from "lucide-react";

const links = [
  { href: "/", label: "Overview", icon: LayoutGrid, exact: true },
  { href: "/students", label: "Students", icon: Users },
  { href: "/departments", label: "Departments", icon: Landmark },
  { href: "/about", label: "About", icon: Info },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1.5">
      {links.map((l) => {
        const Icon = l.icon;
        const active = l.exact ? pathname === l.href : pathname === l.href || pathname.startsWith(l.href + "/");
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              active
                ? "bg-teal-50 text-teal-800 shadow-2xs font-bold border border-teal-200/60"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Icon size={14} className={active ? "text-teal-700" : "text-slate-400"} />
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
