"use client";

import Link from "next/link";
import { Code2, Bot, Globe, Microscope, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const stats = [
  {
    title: "Open",
    subtitle: "TECHNOLOGY",
    metric: "100",
    suffix: "%",
    desc: "Building open technologies that expand access to AI and accelerate innovation.",
    linkText: "Learn More",
    href: "/technology",
    icon: Code2,
    accent: "#60a5fa",
    bg: "rgba(96, 165, 250, 0.08)",
  },
  {
    title: "AI",
    subtitle: "& AUTOMATION",
    metric: "3",
    suffix: "",
    desc: "Foundational models driving intelligent automation for real-world impact.",
    linkText: "Our AI Research",
    href: "/research",
    icon: Bot,
    accent: "#c084fc",
    bg: "rgba(192, 132, 252, 0.08)",
  },
  {
    title: "Global",
    subtitle: "INFRASTRUCTURE",
    metric: "50",
    suffix: "+",
    desc: "Global regions deployed. Scalable, secure, and reliable infrastructure.",
    linkText: "View Infrastructure",
    href: "/technology",
    icon: Globe,
    accent: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.08)",
  },
  {
    title: "Research",
    subtitle: "DRIVEN",
    metric: "12",
    suffix: "+",
    desc: "Published papers pushing the boundaries of continuous AI research.",
    linkText: "Explore Research",
    href: "/research",
    icon: Microscope,
    accent: "#f472b6",
    bg: "rgba(244, 114, 182, 0.08)",
  },
];

import { useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 1.5 }: { from?: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const start = performance.now();
    let frameId: number;
    const updateCount = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(from + (to - from) * ease);
      setCount(current);

      if (progress < 1) frameId = requestAnimationFrame(updateCount);
    };
    frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [from, to, duration]);

  return <>{count}</>;
}

export default function StatsSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8 // Wait for hero to animate
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } }
  };

  const [isInView, setIsInView] = useState(false);

  return (
    <section 
      className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 pt-10"
      onMouseEnter={() => !isInView && setIsInView(true)} 
    >
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        onViewportEnter={() => setIsInView(true)}
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-px border border-white/[0.08] rounded-2xl overflow-hidden md:grid-cols-4 bg-white/[0.02] backdrop-blur-md shadow-2xl shadow-indigo-500/5"
      >
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              variants={item}
              key={s.title}
              className="group flex flex-col gap-4 bg-[#050505]/80 p-7 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: s.bg }}
                >
                  <Icon size={22} style={{ color: s.accent }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white">{s.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: s.accent }}>
                    {s.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="mt-2 text-[3rem] font-black leading-none tracking-tighter text-white">
                {isInView ? <Counter to={parseInt(s.metric)} /> : "0"}
                <span className="text-[1.5rem]" style={{ color: s.accent }}>{s.suffix}</span>
              </div>
              
              <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-400 min-h-[60px]">
                {s.desc}
              </p>
              
              <Link 
                href={s.href}
                className="mt-auto flex items-center gap-1.5 text-[13px] font-medium transition-colors"
                style={{ color: s.accent }}
              >
                {s.linkText}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
