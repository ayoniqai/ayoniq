"use client";

import { FadeIn } from "@/src/components/ui/FadeIn";
import { ArrowRight, Handshake, Globe, Server, TrendingUp, Building2, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const partnershipModels = [
  {
    title: "Strategic Partnership",
    description: "Long-term, multi-year funding agreements to support core research operations and institutional growth.",
    icon: Handshake,
    benefits: ["Seat on Advisory Board", "Co-branding on major releases", "Quarterly strategy briefings"]
  },
  {
    title: "Research Grants",
    description: "Fund specific projects or research tracks aligned with your organization's goals and our open science mission.",
    icon: TrendingUp,
    benefits: ["Early access to findings", "Dedicated research reports", "Naming rights for datasets/models"]
  },
  {
    title: "Compute & Infrastructure",
    description: "Provide cloud credits, GPU clusters, or hardware resources to accelerate our large-scale AI training.",
    icon: Server,
    benefits: ["Technical case studies", "Performance benchmarking", "Developer community visibility"]
  }
];

export default function CollaboratePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Strategic Partnership",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partnership inquiry submitted:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-[#0B0F19] text-white py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(37,99,235,0.15),transparent_60%)]" />
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
              <Globe className="w-4 h-4" />
              Global Partnerships
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              Fund the future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">open research.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
            >
              Partner with AYONIQ LABS through long-term funding and strategic agreements. Together, we can drive breakthrough innovations and ensure advanced technology benefits humanity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#partner-inquiry"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                Become a Partner <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Collaborate */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                Why partner with us?
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                As a non-profit research lab, our independence allows us to tackle foundational problems that commercial entities often overlook. By funding our research, you are investing in open science that accelerates global innovation.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Tax-Deductible Contributions", desc: "Funding provided to AYONIQ LABS may be eligible for charitable tax deductions depending on your jurisdiction." },
                  { title: "Brand Visibility", desc: "Gain recognition as a pioneer in supporting ethical AI and open-source computing." },
                  { title: "Access to Talent", desc: "Connect with our network of world-class researchers, engineers, and academic partners." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mt-1 border border-blue-500/20">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-[#0B0F19] overflow-hidden relative shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-purple-900/40"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <Building2 className="w-16 h-16 text-blue-400 mb-6 opacity-80" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Join Our Ecosystem</h3>
                  <p className="text-white/60 text-sm max-w-sm">
                    Be part of a coalition of forward-thinking organizations shaping the future of open technology.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Partnership Models
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              We offer flexible engagement models to align with your organization's philanthropic, strategic, or technical objectives.
            </p>
          </FadeIn>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnershipModels.map((model, idx) => {
              const Icon = model.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.15}>
                  <div className="flex flex-col h-full p-8 bg-[#030509] border border-white/10 rounded-2xl hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4 text-white">{model.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                      {model.description}
                    </p>
                    
                    <div className="pt-6 border-t border-white/10">
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {model.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="partner-inquiry" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-[#0B0F19] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            <div className="md:w-2/5 bg-black/40 text-white p-10 flex flex-col justify-between relative overflow-hidden border-r border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(37,99,235,0.3),transparent_70%)]" />
              
              <div className="relative z-10">
                <h3 className="font-heading text-3xl font-bold mb-4">Start a Conversation</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Fill out the form to discuss funding opportunities, compute grants, or long-term strategic partnerships.
                </p>
              </div>
              
              <div className="relative z-10 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Email</h4>
                  <p className="font-medium">partnerships@ayoniqlabs.org</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Office</h4>
                  <p className="font-medium text-white/80">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-10 md:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2 text-white">Inquiry Sent</h3>
                  <p className="text-white/60 text-sm">
                    Thank you for your interest in partnering with AYONIQ LABS. Our partnership team will review your message and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-white mb-2">Full Name <span className="text-blue-400">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-white mb-2">Work Email <span className="text-blue-400">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-bold text-white mb-2">Organization / Company <span className="text-blue-400">*</span></label>
                    <input 
                      type="text" 
                      id="organization" 
                      name="organization" 
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-bold text-white mb-2">Partnership Type</label>
                    <select 
                      id="inquiryType" 
                      name="inquiryType" 
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-sm [&>option]:bg-[#0B0F19]"
                    >
                      <option value="Strategic Partnership">Strategic Partnership (Multi-year funding)</option>
                      <option value="Research Grants">Research Grants</option>
                      <option value="Compute & Infrastructure">Compute & Infrastructure Donation</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white mb-2">Message <span className="text-blue-400">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-sm resize-none"
                      placeholder="Briefly describe your organization and how you'd like to collaborate..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="mt-2 w-full flex items-center justify-center h-12 px-8 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
