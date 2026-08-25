"use client";

import { motion } from "framer-motion";

export default function SecurityPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303] py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-white/[0.06] bg-[#050505]/60 p-8 shadow-2xl backdrop-blur-xl sm:p-16"
        >
          <div className="mb-16 border-b border-white/5 pb-8">
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white">Security at AYONIQ</h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="space-y-12 text-[16px] leading-relaxed text-zinc-300">
            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">1. Our Commitment</h2>
              <p>
                Security is foundational to everything we build at AYONIQ. We are committed to protecting 
                your data, our infrastructure, and the integrity of our AI and cloud services.
              </p>
            </section>

            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">2. Data Encryption</h2>
              <p>
                All data is encrypted in transit using industry-standard TLS encryption, and at rest 
                using advanced encryption algorithms to ensure maximum security.
              </p>
            </section>
            
            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">3. Vulnerability Disclosure</h2>
              <p>
                If you believe you have found a security vulnerability in any AYONIQ product or service, 
                please report it to <a href="mailto:security@ayoniq.org" className="text-emerald-400 hover:text-emerald-300 transition-colors">security@ayoniq.org</a>. We take all reports seriously and will investigate promptly.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
