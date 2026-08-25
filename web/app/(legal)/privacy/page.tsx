"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303] py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-white/[0.06] bg-[#050505]/60 p-8 shadow-2xl backdrop-blur-xl sm:p-16"
        >
          <div className="mb-16 border-b border-white/5 pb-8">
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white">Privacy Policy</h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="space-y-12 text-[16px] leading-relaxed text-zinc-300">
            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">1. Introduction</h2>
              <p>
                At AYONIQ, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                and protect your personal information when you use our website, products, and services.
              </p>
            </section>

            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">2. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                contact support, or subscribe to our newsletter. We may also collect certain information 
                automatically when you visit our website.
              </p>
            </section>
            
            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to operate and improve our services, communicate with you, 
                and ensure the security of our platform.
              </p>
            </section>

            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">4. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@ayoniq.org" className="text-indigo-400 hover:text-indigo-300 transition-colors">privacy@ayoniq.org</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
