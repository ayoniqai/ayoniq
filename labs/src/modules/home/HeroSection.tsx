"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Beaker, BookOpen, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#030509] flex items-center overflow-hidden">

      {/* ── Background Image & Overlays ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Image */}
        <Image
          src="/images/hero.png"
          alt="AYONIQ HERO"
          fill
          priority
          className="object-cover opacity-85 mix-blend-screen"
        />

        {/* Gradients for Text Readability and Blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030509] via-[#030509]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030509]/20 via-transparent to-[#030509]" />

        {/* Deep, subtle color bleeds to maintain theme */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[130px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-indigo-600/10 blur-[150px] mix-blend-screen" />

        {/* Subtle noise texture for premium editorial feel */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      {/* ── Main Editorial Content ── */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6">
        <div className="max-w-5xl">

          {/* Latest Update Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-5 md:mb-6"
          >
            <Link
              href="/research/latest"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
                Explore our latest AI research
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Massive Typography Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] leading-[1.05] text-white mb-5 md:mb-6"
          >
            Pioneering the next era of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-500">
              intelligence.
            </span>
          </motion.h1>

          {/* Elegant Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light mb-6 md:mb-8"
          >
            AYONIQ LABS is a nonprofit research organization dedicated to advancing artificial intelligence. Our mission is to ensure that artificial general intelligence benefits all of humanity.
          </motion.p>

          {/* Clean, Minimalist Links (No heavy buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6 md:gap-8 mb-8"
          >
            <Link
              href="/research"
              className="bg-white text-black px-6 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-medium hover:bg-white/90 transition-colors flex items-center group"
            >
              Explore our research
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-6 sm:px-7 py-2.5 rounded-full border border-white/20 text-white/90 text-sm sm:text-base font-medium hover:bg-white/10 transition-colors"
            >
              Who we are
            </Link>
          </motion.div>
        </div> {/* <-- Close max-w-5xl here so text is constrained, but cards go full width */}

        {/* Feature Highlights Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full"
        >
          {[
            { Icon: Beaker, color: "text-indigo-400", title: "Research First", desc: "Pushing the boundaries of what's possible." },
            { Icon: BookOpen, color: "text-blue-400", title: "Open Knowledge", desc: "Sharing insights to empower everyone." },
            { Icon: Globe, color: "text-purple-400", title: "Real Impact", desc: "Solving meaningful problems at scale." },
            { Icon: Sparkles, color: "text-fuchsia-400", title: "Future Focused", desc: "Building safe AGI for all of humanity." },
          ].map(({ Icon, color, title, desc }) => (
            <div key={title} className="flex flex-col p-4 md:p-5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
              <Icon className={`w-4 h-4 ${color} mb-3`} strokeWidth={1.5} />
              <h3 className="text-white text-sm font-semibold mb-1">{title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}

