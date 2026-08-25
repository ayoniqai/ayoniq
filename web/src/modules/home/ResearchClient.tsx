"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Paper {
  title: string;
  authors: string[];
  category: string;
  date: string;
  link: string;
  color: string;
}

export default function ResearchClient({ papers }: { papers: Paper[] }) {
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

  return (
    <motion.div
      className="grid gap-16 lg:grid-cols-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-pink-400 mb-4">Research & Labs</p>
        <h2 className="text-[2.5rem] font-bold leading-tight tracking-tight text-white mb-6">
          Pushing the frontier of artificial intelligence.
        </h2>
        <p className="text-[16px] leading-relaxed text-zinc-400 mb-10">
          Our research team works at the intersection of deep learning and distributed systems. We openly publish our findings to accelerate the global AI community.
        </p>
        
        <div>
          <Link
            href="/research"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-[14px] font-medium text-white transition-all hover:bg-white/[0.06] hover:border-white/20 backdrop-blur-md"
          >
            Read all publications
            <ArrowRight size={15} className="text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
          </Link>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-4">
        {papers.map((paper, i) => (
          <a
            key={i}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border border-white/[0.05] bg-[#09090b] p-6 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/[0.1] hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span 
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 bg-white/5"
                  style={{ color: paper.color }}
                >
                  {paper.category}
                </span>
                <span className="text-[12px] text-zinc-500">{paper.date}</span>
              </div>
              <h3 className="text-[17px] font-bold text-zinc-100 group-hover:text-white transition-colors mb-1">
                {paper.title}
              </h3>
              <p className="text-[14px] text-zinc-500">{paper.authors.join(", ")}</p>
            </div>
            
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.02] border border-white/[0.05] group-hover:bg-white/[0.05] group-hover:border-white/10 transition-colors">
              <ExternalLink size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
            </div>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
