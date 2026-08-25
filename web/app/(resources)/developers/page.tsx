"use client";

import { Book, Code, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DevelopersPage() {
  const links = [
    { title: "Documentation", desc: "Guides, tutorials, and integration concepts.", icon: Book, href: "/developers/docs", color: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/50" },
    { title: "API Reference", desc: "Detailed endpoints, parameters, and responses.", icon: Code, href: "/developers/api", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/50" },
    { title: "SDKs & Tools", desc: "Client libraries for your favorite languages.", icon: Download, href: "/developers/sdk", color: "text-violet-400", bg: "bg-violet-500/10", border: "hover:border-violet-500/50" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <section className="pt-32 pb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold tracking-tight md:text-7xl"
        >
          Developer Portal
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400"
        >
          Build powerful applications with AYONIQ APIs and SDKs.
        </motion.p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-8 md:grid-cols-3">
          {links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
            >
              <Link href={link.href} className={`group relative block h-full rounded-3xl border border-white/[0.06] bg-[#050505]/60 p-8 shadow-2xl backdrop-blur-xl transition-colors ${link.border}`}>
                <div className={`mb-6 inline-flex rounded-2xl ${link.bg} p-4`}>
                  <link.icon className={link.color} size={32} />
                </div>
                <h3 className="text-2xl font-bold">{link.title}</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">{link.desc}</p>
                <div className={`mt-8 flex items-center gap-2 font-semibold ${link.color}`}>
                  Explore <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
