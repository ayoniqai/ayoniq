"use client";

import { Zap, Shield, Globe, Code2, BarChart3, Lock } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  { icon: Zap,       title: "Blazing Fast",          desc: "Millisecond latency globally with our optimized edge network." },
  { icon: Shield,    title: "Bank-Grade Security",   desc: "SOC 2, end-to-end encryption, and real-time DDoS protection." },
  { icon: Globe,     title: "Global Reach",          desc: "Deploy across 50+ regions with 99.99% uptime SLA." },
  { icon: Code2,     title: "Developer First",       desc: "Rich APIs, SDKs, and docs to ship faster." },
  { icon: BarChart3, title: "Real-time Analytics",  desc: "Live dashboards, logs, and performance insights." },
  { icon: Lock,      title: "Privacy by Design",    desc: "GDPR compliant. Your data never leaves your control." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 relative">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mb-16 text-center">
          <motion.p variants={itemVariants} className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Why AYONIQ</motion.p>
          <motion.h2 variants={itemVariants} className="mt-3 text-[2.5rem] font-bold tracking-tight text-white">
            Built for the modern enterprise
          </motion.h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={f.title}
                className="group relative flex flex-col gap-4 rounded-3xl border border-white/[0.05] bg-[#09090b] p-8 overflow-hidden transition-all duration-300 hover:bg-white/[0.02] hover:border-white/[0.1] hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]"
              >
                {/* Subtle gradient glow behind the icon on hover */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white/[0.03] blur-2xl transition-all duration-500 group-hover:bg-indigo-500/10" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.08] shadow-inner">
                  <Icon size={20} className="text-zinc-300 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                
                <div className="relative mt-2">
                  <h3 className="text-[17px] font-bold text-zinc-100 group-hover:text-white transition-colors">{f.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
