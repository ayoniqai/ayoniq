"use client";

import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303] py-24 sm:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-white/[0.06] bg-[#050505]/60 p-8 shadow-2xl backdrop-blur-xl sm:p-16"
        >
          <div className="mb-16 border-b border-white/5 pb-8">
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white">Cookie Policy</h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="space-y-12 text-[16px] leading-relaxed text-zinc-300">
            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-pink-300 transition-colors">1. What are cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They are widely used to make websites work more efficiently and provide 
                information to the owners of the site.
              </p>
            </section>

            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-pink-300 transition-colors">2. How we use cookies</h2>
              <p>
                We use cookies to understand how you interact with our website, to remember your preferences, 
                and to improve your overall experience. This includes essential cookies required for the site 
                to function, as well as analytics cookies to help us improve.
              </p>
            </section>
            
            <section className="group">
              <h2 className="mb-4 text-xl font-bold text-white group-hover:text-pink-300 transition-colors">3. Managing cookies</h2>
              <p>
                You can control and manage cookies in your browser settings. Please note that removing or 
                blocking cookies may impact your user experience and parts of our website may no longer be 
                fully accessible.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
