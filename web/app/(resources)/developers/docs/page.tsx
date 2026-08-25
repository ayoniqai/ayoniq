"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303] py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-6">
        <Link href="/developers" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft size={16} /> Back to Developer Portal
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/[0.06] bg-[#050505]/60 p-8 shadow-2xl backdrop-blur-xl sm:p-16 text-center"
        >
          <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4">
            <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Documentation</h1>
          <p className="mt-4 text-zinc-400 text-lg">
            Comprehensive guides and tutorials for integrating AYONIQ models.
          </p>
          
          <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-zinc-500">
            <p>Documentation structure is currently being finalized. Check back soon for full guides.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
