"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Users } from "lucide-react";
import StarField from "./StarField";
import EarthHorizon from "./EarthHorizon";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 55, damping: 16 },
    },
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 60px)",
        background: "#030308",
        overflow: "hidden",
      }}
    >
      {/* ── 1. Star Field ─────────────────────────────────────── */}
      <StarField />

      {/* ── 2. Earth + Atmosphere (all glow layers + globe) ──── */}
      <EarthHorizon />

      {/* ── 3. Hero Content — upper center ───────────────────── */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: 0,
          right: 0,
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 1.5rem",
          pointerEvents: "none",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "840px",
          }}
        >
          {/* ── Headline ───────────────────────────────────────── */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.6rem, 5.6vw, 5.2rem)",
              fontWeight: 800,
              lineHeight: 1.07,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: 0,
              textShadow:
                "0 2px 40px rgba(0,0,0,1), 0 4px 16px rgba(0,0,0,0.9)",
            }}
          >
            Building the AI
            <br />
            Infrastructure of
            <br />

            {/* ── "Tomorrow" — bright gradient + glow ─────────── */}
            <span style={{ position: "relative", display: "inline-block", marginTop: "0.05em" }}>
              {/* Wide ambient halo glow */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "-2rem -4rem",
                  background:
                    "radial-gradient(ellipse at 50% 55%, rgba(34,211,238,0.6) 0%, rgba(139,92,246,0.55) 40%, rgba(236,72,153,0.35) 85%)",
                  filter: "blur(32px)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              {/* The gradient text */}
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  background:
                    "linear-gradient(95deg, #06b6d4 0%, #22d3ee 18%, #60a5fa 40%, #a78bfa 62%, #e879f9 82%, #f472b6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                  textShadow: "none", // Prevents the parent's dark shadow from bleeding through
                  // Saturate & brighten via CSS filter on the element itself
                  filter: "saturate(1.4) brightness(1.25)",
                }}
              >
                Tomorrow
              </span>
            </span>
          </motion.h1>

          {/* ── Subtitle ───────────────────────────────────────── */}
          <motion.p
            variants={fadeUp}
            style={{
              marginTop: "1.6rem",
              maxWidth: "540px",
              fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
              lineHeight: 1.75,
              color: "rgba(210,215,235,0.9)",
              fontWeight: 400,
              textShadow: "0 2px 20px rgba(0,0,0,0.95)",
              textAlign: "center",
            }}
          >
            AYONIQ is building the foundation for intelligent systems
            <br className="hidden sm:block" />
            {" "}that empower people and accelerate global progress.
          </motion.p>

          {/* ── Counter Badge ───────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-zinc-300 backdrop-blur-sm"
          >
            <Users size={14} className="text-indigo-400" />
            <span>Trusted by <span className="font-bold text-white">500+</span> innovative organizations</span>
          </motion.div>

          {/* ── CTA Buttons ────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row pointer-events-auto"
          >
            <Link
              href="/research"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[14.5px] font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              Explore Research
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://labs.ayoniq.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-8 py-3.5 text-[14.5px] font-semibold text-indigo-300 transition-all hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-200 backdrop-blur-sm"
            >
              AYONIQ Labs
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── 4. Scroll Indicator — bottom center ──────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: 0,
          right: 0,
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.30em",
            color: "rgba(180,180,200,0.8)",
            textTransform: "uppercase",
            textShadow: "0 2px 10px rgba(0,0,0,0.9)",
          }}
        >
          Scroll
        </span>
        {/* Mouse icon */}
        <div
          style={{
            width: "20px",
            height: "32px",
            border: "1.5px solid rgba(180,180,210,0.5)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "5px",
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 0 14px rgba(0,0,0,0.7)",
          }}
        >
          <motion.div
            animate={{ y: [0, 9, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "3px",
              height: "6px",
              borderRadius: "2px",
              background: "rgba(255,255,255,0.85)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
