import { Code2, Terminal, BookOpen } from "lucide-react";
import Link from "next/link";

export default function StackSection() {
  const stack = [
    {
      title: "APIs & SDKs",
      desc: "Comprehensive client libraries in Python, Rust, Go, and TypeScript.",
      icon: Code2,
    },
    {
      title: "CLI Tools",
      desc: "Command-line utilities for deployment, monitoring, and local testing.",
      icon: Terminal,
    },
    {
      title: "Developer Docs",
      desc: "Extensive documentation, guides, and reference architectures.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Built for Developers</h2>
          <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">The Software Stack</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stack.map((item, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl border border-white/[0.06] bg-[#050505] p-8 text-center transition-colors hover:bg-white/[0.02]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.05] text-white">
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-[17px] font-semibold text-white">{item.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/developers"
            className="inline-flex text-[14px] font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            View Documentation →
          </Link>
        </div>
      </div>
    </section>
  );
}
