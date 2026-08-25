"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 text-center lg:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-cyan-400"
      >
        <BookOpen size={16} />
        Journal & Insights
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-8 max-w-[800px] text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
      >
        Thoughts, research, and product updates from the <span className="text-cyan-400">AYONIQ team</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-zinc-400"
      >
        Explore deep dives into our engineering processes, artificial intelligence research, and the future of decentralized infrastructure.
      </motion.p>
    </section>
  );
}
