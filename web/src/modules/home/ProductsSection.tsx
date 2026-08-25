"use client";

import Link from "next/link";
import { Cpu, CreditCard, Server, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const products = [
  {
    href: "/products/ai",
    icon: Cpu,
    label: "AYONIQ AI",
    desc: "LLMs, autonomous agents, and enterprise AI automation.",
    accent: "#818cf8",
  },
  {
    href: "/products/pay",
    icon: CreditCard,
    label: "AYONIQ PAY",
    desc: "Global payments, intelligent routing, and cross-border payouts.",
    accent: "#c084fc",
  },
  {
    href: "/products/cloud",
    icon: Server,
    label: "AYONIQ Cloud",
    desc: "Edge infrastructure, serverless compute, and secure storage.",
    accent: "#60a5fa",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
};

export default function ProductsSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 relative">
      {/* Background glow for this section */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[100px]" />

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section header */}
        <div className="mb-14 text-center">
          <motion.p variants={itemVariants} className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-400">Products</motion.p>
          <motion.h2 variants={itemVariants} className="mt-3 text-[2.5rem] font-bold tracking-tight">
            One ecosystem. Endless possibilities.
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Featured Product: AYONIQ AI */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Link
              href="/products/ai"
              className="group flex flex-col h-full gap-5 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-xl p-10 transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Cpu size={120} style={{ color: "#818cf8" }} />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#818cf8]20 shadow-lg">
                  <Cpu size={26} style={{ color: "#818cf8" }} strokeWidth={2} />
                </div>
                <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-300">Featured</span>
              </div>

              <div className="mt-4 max-w-[80%] relative z-10">
                <h3 className="text-[24px] font-bold text-white">AYONIQ AI</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-zinc-300">
                  LLMs, autonomous agents, and enterprise AI automation. Build intelligent workflows that adapt and learn.
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {["Foundation Models", "Autonomous Agents", "Enterprise Automation"].map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 flex items-center gap-2 text-[14.5px] font-semibold" style={{ color: "#818cf8" }}>
                Explore AYONIQ AI
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>
          </motion.div>

          {/* Secondary Products Container */}
          <div className="flex flex-col gap-5 md:col-span-1">
            {products.slice(1).map((p) => {
              const Icon = p.icon;
              return (
                <motion.div variants={itemVariants} key={p.label} className="flex-1">
                  <Link
                    href={p.href}
                    className="group flex flex-col h-full gap-4 rounded-3xl border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: `${p.accent}20` }}>
                        <Icon size={22} style={{ color: p.accent }} strokeWidth={1.8} />
                      </div>
                    </div>

                    <div className="mt-2">
                      <h3 className="text-[18px] font-bold text-white transition-colors group-hover:text-white">{p.label}</h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">{p.desc}</p>
                    </div>

                    <div className="mt-auto pt-4 flex items-center gap-2 text-[13px] font-semibold transition-colors" style={{ color: p.accent }}>
                      Learn more
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
