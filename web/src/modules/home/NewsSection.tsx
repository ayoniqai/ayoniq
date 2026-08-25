"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const news = [
  {
    tag: "Announcement",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    date: "August 20, 2026",
    title: "Introducing AYONIQ Enterprise",
    desc: "The operating system for the next generation of AI-native companies. Get unparalleled security, scale, and dedicated support for your most mission-critical workloads.",
    readTime: "4 min read",
  },
  {
    tag: "Product",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    date: "July 12, 2026",
    title: "Global Edge Network Expands",
    desc: "We've added 12 new regions across Asia and Europe for lower latency.",
    readTime: "2 min read",
  },
  {
    tag: "Infrastructure",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    date: "June 05, 2026",
    title: "Zero-Trust Architecture Standard",
    desc: "All products now enforce zero-trust by default, with no configuration needed.",
    readTime: "3 min read",
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } }
};

export default function NewsSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 relative">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.p variants={itemVariants} className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">News & Updates</motion.p>
            <motion.h2 variants={itemVariants} className="mt-3 text-[2.5rem] font-bold tracking-tight text-white">
              Latest from the lab
            </motion.h2>
          </div>
          <motion.div variants={itemVariants}>
            <Link
              href="/updates"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-2.5 text-[13.5px] font-medium text-white transition-all hover:bg-white/[0.06] hover:border-white/20 backdrop-blur-md"
            >
              View all updates
              <ArrowRight size={14} className="text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {/* Featured News (First item) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <Link
              href="/updates"
              className="group flex flex-col h-full rounded-3xl border border-white/[0.05] bg-[#09090b] p-10 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.1] hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${news[0].tagColor}`}>
                  {news[0].tag}
                </span>
                <span className="text-[12px] font-medium text-zinc-500">
                  {news[0].date} • {news[0].readTime}
                </span>
              </div>
              
              <div className="mt-8 relative z-10 max-w-[90%]">
                <h3 className="text-[26px] font-bold text-white transition-colors">
                  {news[0].title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-zinc-400">
                  {news[0].desc}
                </p>
              </div>

              <div className="mt-auto pt-10 flex items-center gap-1.5 text-[14px] font-bold text-white transition-colors relative z-10">
                Read full article
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>
          </motion.div>

          {/* Secondary News */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {news.slice(1).map((item) => (
              <motion.div variants={itemVariants} key={item.title} className="flex-1">
                <Link
                  href="/updates"
                  className="group flex flex-col h-full rounded-3xl border border-white/[0.05] bg-[#09090b] p-8 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.1] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-[12px] font-medium text-zinc-500">
                      {item.date} • {item.readTime}
                    </span>
                  </div>
                  
                  <div className="mt-5">
                    <h3 className="text-[18px] font-bold text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-zinc-400 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 flex items-center gap-1.5 text-[13px] font-semibold text-white/50 transition-colors group-hover:text-white">
                    Read article
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
