"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Terminal, Microscope } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28 relative">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#050505]/60 px-6 py-20 text-center backdrop-blur-2xl shadow-2xl shadow-black/50"
      >
        <div className="mx-auto max-w-[800px]">
          <div className="mb-6 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.1]">
            <Sparkles size={20} className="text-zinc-300" />
          </div>
          
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
            Ready to build the future?
          </h2>
          
          <p className="mx-auto mt-6 max-w-[480px] text-[16px] leading-relaxed text-zinc-400 mb-12">
            Join the organizations building their intelligent infrastructure on AYONIQ.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto mt-12">
            {/* Path 1: Organizations */}
            <Link
              href="/contact"
              className="group relative flex flex-col items-center justify-center gap-4 rounded-3xl bg-white px-6 py-8 text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-black/5" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 shadow-inner">
                <Building2 size={24} className="text-black/80" strokeWidth={1.5} />
              </div>
              <div className="relative text-center">
                <span className="block text-[16px] font-bold">Organizations</span>
                <span className="mt-2 text-[13.5px] font-bold text-indigo-600 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Contact Sales <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Path 2: Developers */}
            <Link
              href="/developers"
              className="group relative flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/[0.08] bg-[#09090b] px-6 py-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute top-0 left-1/2 -ml-10 -mt-10 h-20 w-20 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/5 transition-transform group-hover:scale-110 shadow-inner">
                <Terminal size={24} className="text-blue-400" strokeWidth={1.5} />
              </div>
              <div className="relative text-center">
                <span className="block text-[16px] font-bold text-white">Developers</span>
                <span className="mt-2 text-[13.5px] font-medium text-zinc-400 flex items-center justify-center gap-1 group-hover:text-white transition-colors">
                  Read Docs <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* Path 3: Researchers */}
            <Link
              href="/research"
              className="group relative flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/[0.08] bg-[#09090b] px-6 py-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.15] hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute top-0 left-1/2 -ml-10 -mt-10 h-20 w-20 rounded-full bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/5 transition-transform group-hover:scale-110 shadow-inner">
                <Microscope size={24} className="text-pink-400" strokeWidth={1.5} />
              </div>
              <div className="relative text-center">
                <span className="block text-[16px] font-bold text-white">Researchers</span>
                <span className="mt-2 text-[13.5px] font-medium text-zinc-400 flex items-center justify-center gap-1 group-hover:text-white transition-colors">
                  Join Lab <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
