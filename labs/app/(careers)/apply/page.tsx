"use client";

import { FadeIn } from "@/src/components/ui/FadeIn";
import { ArrowLeft, CheckCircle2, Paperclip, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "Machine Learning Research Intern",
    linkedin: "",
    github: "",
    portfolio: "",
    coverLetter: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API/database
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#030509] min-h-screen flex items-center justify-center py-24 px-4 text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center p-10 border border-white/10 rounded-2xl bg-[#0B0F19] shadow-2xl"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-heading text-3xl font-bold mb-4 text-white">Application Received!</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Thank you for applying to AYONIQ LABS. We've received your application for the <span className="font-semibold text-white">{formData.role}</span> position. Our team will review your profile and get back to you shortly.
          </p>
          <Link href="/" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors w-full shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#030509] min-h-screen text-white pb-24">
      {/* Header */}
      <div className="bg-[#0B0F19] text-white py-16 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <Link href="/internship" className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Internships
              </Link>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Join our team
              </h1>
              <p className="text-lg text-white/70">
                Submit your application to become part of AYONIQ LABS.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-[#0B0F19] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10">
              
              {/* Role Selection */}
              <div className="mb-10">
                <label htmlFor="role" className="block text-sm font-bold text-white mb-2">Position applying for <span className="text-blue-400">*</span></label>
                <select 
                  id="role" 
                  name="role" 
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow [&>option]:bg-[#0B0F19]"
                >
                  <option value="Machine Learning Research Intern">Machine Learning Research Intern (Core AI)</option>
                  <option value="Software Engineering Intern">Software Engineering Intern (Infrastructure)</option>
                  <option value="Open Source Contributor Intern">Open Source Contributor Intern (Community)</option>
                  <option value="General Open Application">General Open Application</option>
                </select>
              </div>

              <div className="border-t border-white/10 my-8"></div>

              {/* Personal Info */}
              <h3 className="font-heading text-xl font-bold mb-6 text-white">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-white mb-2">First Name <span className="text-blue-400">*</span></label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-white/30"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-white mb-2">Last Name <span className="text-blue-400">*</span></label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-white/30"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2">Email Address <span className="text-blue-400">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-white/30"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-white/30"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>
              </div>

              <div className="border-t border-white/10 my-8"></div>

              {/* Profiles */}
              <h3 className="font-heading text-xl font-bold mb-6 text-white">Profiles & Links</h3>
              <div className="space-y-6 mb-10">
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-bold text-white mb-2">LinkedIn Profile <span className="text-blue-400">*</span></label>
                  <input 
                    type="url" 
                    id="linkedin" 
                    name="linkedin" 
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-white/30"
                    placeholder="https://linkedin.com/in/janedoe"
                  />
                </div>
                <div>
                  <label htmlFor="github" className="block text-sm font-bold text-white mb-2">GitHub Profile</label>
                  <input 
                    type="url" 
                    id="github" 
                    name="github" 
                    value={formData.github}
                    onChange={handleInputChange}
                    className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-white/30"
                    placeholder="https://github.com/janedoe"
                  />
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-bold text-white mb-2">Personal Website / Portfolio</label>
                  <input 
                    type="url" 
                    id="portfolio" 
                    name="portfolio" 
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow placeholder-white/30"
                    placeholder="https://janedoe.com"
                  />
                </div>
              </div>

              <div className="border-t border-white/10 my-8"></div>

              {/* Cover Letter */}
              <h3 className="font-heading text-xl font-bold mb-6 text-white">Additional Information</h3>
              <div className="mb-8">
                <label htmlFor="coverLetter" className="block text-sm font-bold text-white mb-2">Cover Letter / Why AYONIQ LABS? <span className="text-blue-400">*</span></label>
                <textarea 
                  id="coverLetter" 
                  name="coverLetter" 
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-black/20 border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none placeholder-white/30"
                  placeholder="Tell us about your background, interests, and why you'd be a great fit for this role..."
                ></textarea>
              </div>

              {/* Resume Upload (Mock) */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-white mb-2">Resume / CV <span className="text-blue-400">*</span></label>
                <div className="w-full border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Paperclip className="w-6 h-6" />
                  </div>
                  <p className="text-white font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm text-white/40">PDF or Word document (max 5MB)</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 gap-4">
                <p className="text-sm text-white/40 text-center sm:text-left">
                  By applying, you agree to our <Link href="#" className="text-blue-400 hover:underline">Privacy Policy</Link>.
                </p>
                <button 
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center h-12 px-8 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors hover:shadow-lg hover:shadow-blue-600/20"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </button>
              </div>

            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
