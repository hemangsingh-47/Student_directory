"use client";

import { useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X, Filter, ArrowUpDown } from "lucide-react";

export default function StudentFilters({
  departments,
}: {
  departments: { slug: string; name: string }[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const query = params.get("q") ?? "";
  const selectedDept = params.get("department") ?? "";
  const selectedYear = params.get("year") ?? "";
  const selectedSort = params.get("sort") ?? "";

  const hasActiveFilters = Boolean(query || selectedDept || selectedYear || selectedSort);

  function update(key: string, value: string, delay = 0) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const next = new URLSearchParams(params.toString());
      if (value) next.set(key, value);
      else next.delete(key);
      next.delete("page"); // reset to page 1 on filter changes
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname);
    }, delay);
  }

  function clearAll() {
    router.replace(pathname);
  }

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-4 shadow-xs">
      <div className="flex flex-wrap items-center gap-3">
        {/* Search Input */}
        <div className="relative min-w-[240px] flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search students by name, focus, bio..."
            defaultValue={query}
            onChange={(e) => update("q", e.target.value, 250)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 py-2.5 pl-10 pr-9 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 transition-all"
          />
          {query && (
            <button
              onClick={() => update("q", "")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Department Filter */}
        <div className="flex items-center gap-1.5">
          <label className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-colors">
            <Filter size={13} className="text-teal-600" />
            <span className="hidden sm:inline text-slate-500">Dept:</span>
            <select
              value={selectedDept}
              onChange={(e) => update("department", e.target.value)}
              className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
            >
              <option value="">All Departments</option>
              {departments.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Study Year Filter */}
        <div className="flex items-center gap-1.5">
          <label className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-colors">
            <span className="text-slate-500">Year:</span>
            <select
              value={selectedYear}
              onChange={(e) => update("year", e.target.value)}
              className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
            >
              <option value="">All Cohorts</option>
              <option value="1">Year 1 (Freshman)</option>
              <option value="2">Year 2 (Sophomore)</option>
              <option value="3">Year 3 (Junior)</option>
              <option value="4">Year 4 (Senior)</option>
            </select>
          </label>
        </div>

        {/* Sort Filter */}
        <div className="flex items-center gap-1.5">
          <label className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-colors">
            <ArrowUpDown size={13} className="text-teal-600" />
            <span className="hidden sm:inline text-slate-500">Sort:</span>
            <select
              value={selectedSort}
              onChange={(e) => update("sort", e.target.value)}
              className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
            >
              <option value="">Default Registry</option>
              <option value="name-asc">Name (A → Z)</option>
              <option value="name-desc">Name (Z → A)</option>
              <option value="year-asc">Cohort (Year 1 → 4)</option>
              <option value="year-desc">Cohort (Year 4 → 1)</option>
            </select>
          </label>
        </div>

        {/* Reset Filter Action */}
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700 hover:bg-rose-100 transition-colors shadow-2xs"
          >
            <X size={13} />
            <span>Clear Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}
