"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, Network, Sparkles, Globe } from "lucide-react";

const partners = [
  { name: "Global AI Fund", type: "Strategic Partner", icon: Landmark },
  { name: "TechNova Ventures", type: "Venture Partner", icon: Building2 },
  { name: "Stanford AI Lab", type: "Academic Partner", icon: GraduationCap },
  { name: "MIT CSAIL", type: "Academic Partner", icon: GraduationCap },
  { name: "Quantum Research", type: "Research Partner", icon: Network },
  { name: "Future Compute", type: "Infrastructure Partner", icon: Sparkles },
  { name: "Open Intelligence", type: "Alliance Partner", icon: Globe },
];

export function PartnershipsSection() {
  // Duplicate partners for seamless infinite scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="bg-[#030509] text-white py-20 md:py-32 border-y border-white/5 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.05),transparent_70%)]" />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); } /* Since we duplicated 3 times */
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest text-indigo-400 uppercase mb-4"
          >
            Global Network
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6"
          >
            Backed by the world's best.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg leading-relaxed font-light"
          >
            We collaborate with leading universities, research institutions, and visionary organizations to advance the frontiers of safe AI.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#030509] to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4 md:gap-6 w-max animate-scroll px-4">
          {duplicatedPartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={`${partner.name}-${index}`} 
                className="group flex flex-col justify-center min-w-[240px] md:min-w-[280px] bg-white/[0.02] border border-white/5 hover:border-white/20 p-6 md:p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:from-indigo-500/20 group-hover:to-fuchsia-500/20 group-hover:border-indigo-500/40 transition-colors">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 text-sm md:text-base group-hover:text-white transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-white/40 text-xs md:text-sm font-light mt-0.5 group-hover:text-white/60 transition-colors">
                      {partner.type}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#030509] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
