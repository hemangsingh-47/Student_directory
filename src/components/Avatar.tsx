"use client";

import { useState } from "react";
import { initials, type Tone } from "@/data/campus";

const tones: Record<Tone, string> = {
  teal: "bg-gradient-to-tr from-teal-500 to-emerald-600 text-white shadow-teal-500/20",
  emerald: "bg-gradient-to-tr from-emerald-500 to-teal-700 text-white shadow-emerald-500/20",
  indigo: "bg-gradient-to-tr from-indigo-500 to-teal-600 text-white shadow-indigo-500/20",
  rose: "bg-gradient-to-tr from-rose-500 to-pink-600 text-white shadow-rose-500/20",
  amber: "bg-gradient-to-tr from-amber-500 to-orange-600 text-white shadow-amber-500/20",
  slate: "bg-gradient-to-tr from-slate-600 to-slate-800 text-white shadow-slate-500/20",
};

export default function Avatar({
  name,
  tone = "teal",
  size = "md",
  src,
  showStatus = false,
}: {
  name: string;
  tone?: Tone;
  size?: "sm" | "md" | "lg" | "xl";
  src?: string;
  showStatus?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  const dims = {
    sm: "h-9 w-9 text-xs rounded-xl",
    md: "h-12 w-12 text-sm rounded-2xl",
    lg: "h-16 w-16 text-base rounded-2xl",
    xl: "h-22 w-22 text-2xl rounded-3xl",
  }[size];

  const statusDims = {
    sm: "h-2.5 w-2.5 bottom-0 right-0",
    md: "h-3 w-3 bottom-0.5 right-0.5",
    lg: "h-3.5 w-3.5 bottom-1 right-1",
    xl: "h-4 w-4 bottom-1.5 right-1.5",
  }[size];

  return (
    <div className="relative inline-block shrink-0">
      <div
        className={`flex shrink-0 items-center justify-center font-bold tracking-wider shadow-xs ring-2 ring-white/90 select-none overflow-hidden ${dims} ${
          src && !imageError ? "bg-slate-100" : tones[tone] ?? tones.teal
        }`}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          initials(name)
        )}
      </div>
      {showStatus && (
        <span
          className={`absolute rounded-full bg-emerald-500 ring-2 ring-white ${statusDims}`}
          title="Active Student"
        />
      )}
    </div>
  );
}
