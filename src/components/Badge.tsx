export type BadgeVariant =
  | "teal"
  | "emerald"
  | "indigo"
  | "amber"
  | "purple"
  | "rose"
  | "slate"
  | "neutral"
  | "outline"
  | "green"
  | "blue";

const variants: Record<BadgeVariant, string> = {
  teal: "bg-teal-50 text-teal-700 border-teal-200/80",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
  amber: "bg-amber-50 text-amber-700 border-amber-200/80",
  purple: "bg-purple-50 text-purple-700 border-purple-200/80",
  rose: "bg-rose-50 text-rose-700 border-rose-200/80",
  slate: "bg-slate-100 text-slate-700 border-slate-200/80",
  neutral: "bg-slate-100 text-slate-700 border-slate-200",
  outline: "bg-white text-slate-600 border-slate-200/90 shadow-2xs",
  green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  blue: "bg-teal-50 text-teal-700 border-teal-200",
};

export default function Badge({
  children,
  variant = "teal",
  mono = false,
  className = "",
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  mono?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-tight transition-colors ${
        mono ? "font-mono" : ""
      } ${variants[variant] ?? variants.neutral} ${className}`}
    >
      {children}
    </span>
  );
}
