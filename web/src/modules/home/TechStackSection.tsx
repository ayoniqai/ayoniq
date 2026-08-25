"use client";

import { motion, Variants } from "framer-motion";
import { Server, Code, Layers } from "lucide-react";

const technologies = [
  "PyTorch", "Rust", "CUDA", "Kubernetes", "TensorFlow", "React", "Next.js", "Go", "WebAssembly",
  "PostgreSQL", "Redis", "Kafka", "Docker", "Terraform", "GraphQL"
];

const pillars = [
  {
    icon: Layers,
    title: "AI & ML Stack",
    desc: "Built on optimized distributed systems for training large language models.",
    color: "#c084fc",
  },
  {
    icon: Server,
    title: "Global Infrastructure",
    desc: "Zero-trust edge compute network powered by Rust and WebAssembly.",
    color: "#60a5fa",
  },
  {
    icon: Code,
    title: "Open Source Core",
    desc: "Building and supporting open technologies that enable researchers and developers to create.",
    color: "#34d399",
  }
];

export default function TechStackSection() {
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
    <section className="mx-auto max-w-[1400px] px-6 py-28 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mb-14 text-center">
          <motion.p variants={itemVariants} className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Architecture</motion.p>
          <motion.h2 variants={itemVariants} className="mt-3 text-[2.5rem] font-bold tracking-tight text-white">
            Powered by cutting-edge technology
          </motion.h2>
        </div>

        {/* Marquee Animation */}
        <motion.div variants={itemVariants} className="relative flex overflow-hidden py-10 w-full mb-16 mask-linear-fade">
          {/* Fading edges for the marquee */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030308] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030308] to-transparent z-10" />
          
          <motion.div 
            className="flex gap-8 whitespace-nowrap min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {/* Double the array for seamless looping */}
            {[...technologies, ...technologies].map((tech, i) => (
              <div 
                key={`${tech}-${i}`}
                className="flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] px-6 py-3 text-[14px] font-semibold text-zinc-400"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Pillars */}
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div variants={itemVariants} key={pillar.title} className="group relative rounded-3xl border border-white/[0.05] bg-[#09090b] p-8 transition-all hover:bg-white/[0.02] hover:border-white/10">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-white/[0.02] blur-xl transition-all group-hover:bg-white/[0.04]" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] mb-6 shadow-inner transition-transform group-hover:scale-110">
                  <Icon size={22} style={{ color: pillar.color }} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-zinc-400">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
