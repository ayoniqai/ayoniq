import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { BRAND_CORE_STATEMENT } from "@/core/constants/brand";

export const metadata: Metadata = {
  title: "Careers | AYONIQ",
  description: `Join us. ${BRAND_CORE_STATEMENT}`,
  alternates: {
    canonical: "https://ayoniq.org/careers",
  },
};

export default function CareersPage() {
  const jobs = [
    { title: "Senior AI Researcher", dept: "Research", location: "Remote" },
    { title: "Frontend Engineer", dept: "Engineering", location: "New York, USA" },
    { title: "Product Manager", dept: "Product", location: "Remote" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-24 text-center">
        <h1 className="text-5xl font-extrabold md:text-7xl">Join AYONIQ</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          {BRAND_CORE_STATEMENT}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32">
        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <div key={i} className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950 p-6 transition-colors hover:border-cyan-500/50 hover:bg-zinc-900">
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <Briefcase className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="mt-1 flex gap-4 text-sm text-zinc-500">
                    <span>{job.dept}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}