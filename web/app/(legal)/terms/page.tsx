"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303] py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-white/[0.06] bg-[#050505]/60 p-8 shadow-2xl backdrop-blur-xl sm:p-16"
        >
          <div className="mb-16 border-b border-white/5 pb-8">
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white">Terms of Service</h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="space-y-12 text-[16px] leading-relaxed text-zinc-300">
            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-blue-300 transition-colors">1. Agreement to Terms</h2>
              <p>
                By accessing or using the AYONIQ website and services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-blue-300 transition-colors">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials (information or software) on AYONIQ&apos;s website 
                for personal, non-commercial transitory viewing only.
              </p>
            </section>
            
            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-blue-300 transition-colors">3. Disclaimer</h2>
              <p>
                The materials on AYONIQ&apos;s website are provided on an &apos;as is&apos; basis. AYONIQ makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
