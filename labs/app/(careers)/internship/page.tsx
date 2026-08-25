"use client";

import { FadeIn } from "@/src/components/ui/FadeIn";
import { ArrowRight, Code, BrainCircuit, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const programBenefits = [
  {
    title: "Mentorship",
    description: "Work directly with leading researchers and engineers in AI and systems computing.",
    icon: Users
  },
  {
    title: "Real-world Impact",
    description: "Contribute to open-source projects that are used by thousands of developers globally.",
    icon: Lightbulb
  },
  {
    title: "Cutting-edge Tech",
    description: "Access our compute clusters and work with state-of-the-art foundation models.",
    icon: BrainCircuit
  },
  {
    title: "Skill Development",
    description: "Enhance your software engineering, machine learning, and research publishing skills.",
    icon: Code
  }
];

const openPositions = [
  {
    title: "Machine Learning Research Intern",
    team: "Core AI",
    location: "Remote / Hybrid",
    duration: "6 Months",
    tags: ["PyTorch", "LLMs", "Research"]
  },
  {
    title: "Software Engineering Intern",
    team: "Infrastructure",
    location: "Remote",
    duration: "3-6 Months",
    tags: ["Rust", "Go", "Distributed Systems"]
  },
  {
    title: "Open Source Contributor Intern",
    team: "Community",
    location: "Remote",
    duration: "3 Months",
    tags: ["React", "TypeScript", "Next.js"]
  }
];

export default function InternshipPage() {
  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-[#0B0F19] text-white py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(37,99,235,0.15),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIi8+Cjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              2026 Applications Open
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-8"
            >
              Build the future of open research with us.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
            >
              The AYONIQ LABS Internship Program is designed for exceptional students and early-career researchers who want to make a tangible impact on open-source AI and computing.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
              Why intern at AYONIQ LABS?
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              We provide an environment where you can learn, experiment, and contribute to projects that matter.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.1} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0B0F19] border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Open Roles
              </h2>
              <p className="text-lg text-white/60">
                Find a position that matches your skills and interests.
              </p>
            </FadeIn>
            
            <div className="flex flex-col gap-6">
              {openPositions.map((job, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-[#030509] border border-white/10 rounded-2xl hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
                    <div className="mb-6 md:mb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                          {job.team}
                        </span>
                        <span className="text-sm font-medium text-white/40">
                          {job.duration} • {job.location}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors text-white">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link href="/apply" className="shrink-0 flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn delay={0.4} className="mt-12 p-8 bg-[#030509] rounded-2xl border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold mb-2 text-white">Don't see a perfect fit?</h3>
                <p className="text-white/60">We're always looking for talented individuals. Send us an open application.</p>
              </div>
              <Link href="/apply" className="relative z-10 shrink-0 flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-white/5 text-blue-400 border border-blue-500/30 font-medium hover:bg-blue-500/10 transition-colors">
                General Application
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold tracking-tight mb-4 text-white">Application Process</h2>
            </FadeIn>
            
            <div className="space-y-6">
              {[
                "Submit your resume and a brief cover letter outlining your interests.",
                "If selected, you'll be invited to a 30-minute introductory call.",
                "Complete a short technical assessment or share a relevant portfolio project.",
                "Final interview with the team lead."
              ].map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} className="flex gap-4 p-6 rounded-xl bg-[#0B0F19] border border-white/10">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    {idx + 1}
                  </div>
                  <p className="text-white/80 font-medium pt-1">{step}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
