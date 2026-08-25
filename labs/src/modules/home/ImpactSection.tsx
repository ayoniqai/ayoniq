"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/src/components/ui/FadeIn";

const stats = [
  { label: "Research Papers", value: "50+" },
  { label: "Open Source Projects", value: "20+" },
  { label: "Global Partners", value: "15" },
  { label: "Active Datasets", value: "100TB" },
];

export function ImpactSection() {
  return (
    <section className="bg-[#030509] text-white py-24 md:py-32 relative overflow-hidden border-y border-white/5">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.08),transparent_50%)]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-medium tracking-widest text-indigo-400 uppercase mb-4">
            Global Impact
          </h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">
            Accelerating progress for all.
          </h3>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed font-light">
            By keeping our research open, we empower scientists, developers, and organizations worldwide to build upon our findings and advance artificial general intelligence safely.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx} 
              className="flex flex-col items-center justify-center p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-medium mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 group-hover:to-indigo-400 transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-white/40 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
