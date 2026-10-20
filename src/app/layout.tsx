import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "EduNexus | Campus Student & Academic Directory",
    template: "%s | EduNexus",
  },
  description: "Explore student profiles, academic departments, specializations, and verified campus enrollment records.",
  keywords: ["students", "university", "campus", "directory", "departments", "academics", "edunexus"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-slate-900 antialiased flex flex-col selection:bg-teal-700 selection:text-white`}>
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur-sm py-6 text-center text-xs text-slate-500">
          <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} EduNexus · Campus Student & Faculty Informatics Core</p>
            <div className="flex items-center gap-4 text-slate-500 font-medium">
              <span>Next.js 16</span>
              <span>·</span>
              <span>TypeScript</span>
              <span>·</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
