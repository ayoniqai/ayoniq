"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function FeaturedResearchSection({ featuredPublication }: { featuredPublication: any }) {

  return (
    <section className="bg-[#030509] text-white py-20 md:py-32 border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-widest text-indigo-400 uppercase mb-2"
            >
              Featured Work
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-medium tracking-tight"
            >
              Pushing the boundaries of intelligence.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-lg leading-relaxed font-light mb-2"
            >
              Explore our most significant breakthroughs in generative models, safety alignment, and reasoning architectures.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                href="/publications"
                className="group flex items-center justify-center sm:justify-start text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-full w-fit transition-colors"
              >
                View all research <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          {/* Right Column: Featured Card */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {featuredPublication ? (
                <Link 
                  href={`/publications/${featuredPublication.slug}`}
                  className="group flex flex-col md:flex-row bg-[#030509] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative"
                >
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-fuchsia-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:via-fuchsia-500/5 group-hover:to-indigo-500/5 transition-colors duration-700 pointer-events-none" />

                  {/* Abstract Image side */}
                  <div className="w-full md:w-[40%] min-h-[240px] md:min-h-full bg-[#050810] border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden shrink-0 flex items-center justify-center p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.15),transparent_60%)] group-hover:scale-110 transition-transform duration-700" />
                    <BookOpen className="w-16 h-16 text-indigo-400/30 group-hover:text-indigo-400/60 transition-colors duration-500" strokeWidth={1} />
                  </div>
                  
                  {/* Content side */}
                  <div className="flex flex-col p-8 md:p-10 w-full relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-medium text-indigo-400 tracking-wider uppercase">
                        {featuredPublication.data.type}
                      </span>
                      <div className="text-xs text-white/30 font-medium">
                        {featuredPublication.data.date}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-medium mb-4 leading-tight group-hover:text-indigo-300 transition-colors text-white">
                      {featuredPublication.data.title}
                    </h3>
                    
                    <p className="text-white/50 leading-relaxed font-light mb-8 line-clamp-3">
                      {featuredPublication.data.summary}
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      Read full paper <ArrowRight className="ml-2 w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="text-white/40 italic p-12 text-center border border-white/10 rounded-2xl bg-white/[0.02]">
                  No featured research available.
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
