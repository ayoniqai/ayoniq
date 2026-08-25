"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Lightbulb, Network, Rocket } from "lucide-react";
import Link from "next/link";
import { BRAND_MISSION } from "@/core/constants/brand";

const pillars = [
  {
    icon: Lightbulb,
    title: "Research",
    desc: "Open foundational models and advanced NLP research.",
    color: "#c084fc",
  },
  {
    icon: Network,
    title: "Infrastructure",
    desc: "Global edge network optimized for low-latency AI.",
    color: "#38bdf8",
  },
  {
    icon: Rocket,
    title: "Empowerment",
    desc: "Tools to accelerate builders across the globe.",
    color: "#f472b6",
  },
];

export default function MissionSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
  };

  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#050505]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[-10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-pink-600/10 blur-[120px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <motion.div 
          className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Left Column: Statement */}
          <motion.div variants={item} className="max-w-xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400">Our Mission</p>
            <h2 className="text-[2.2rem] font-bold leading-[1.2] tracking-tight text-white md:text-[3rem]">
              {BRAND_MISSION}
            </h2>
            
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-[14.5px] font-bold text-white transition-colors hover:text-indigo-300">
              Read our full story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          
          {/* Right Column: Pillars */}
          <motion.div variants={item} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm" />
            
            <div className="relative flex flex-col gap-8 p-6">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex gap-5 group">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#09090b] border border-white/10 transition-colors group-hover:border-white/20">
                      <Icon size={24} style={{ color: pillar.color }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                      <p className="text-[15px] leading-relaxed text-zinc-400">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
