import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { FadeIn } from "@/src/components/ui/FadeIn";

export function ContactFormSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
      <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Information */}
        <div className="md:col-span-2 flex flex-col gap-10">
          <FadeIn>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4 text-white">Reach Out</h2>
              <p className="text-white/50 mb-8 font-light leading-relaxed">
                Fill out the form to send us a message directly. We typically respond within 48 hours for collaboration and general inquiries.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-rose-500/10 rounded-2xl group-hover:bg-rose-500/20 group-hover:scale-110 transition-all duration-300 border border-rose-500/20">
                  <Mail className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Media & Press</h4>
                  <p className="text-white/50 text-sm group-hover:text-white transition-colors">press@ayoniqlabs.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-orange-500/10 rounded-2xl group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300 border border-orange-500/20">
                  <MessageCircle className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">General Inquiries</h4>
                  <p className="text-white/50 text-sm group-hover:text-white transition-colors">hello@ayoniqlabs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 border border-white/10">
                  <MapPin className="w-6 h-6 text-white/70" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Headquarters</h4>
                  <p className="text-white/50 text-sm group-hover:text-white transition-colors">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <form className="flex flex-col gap-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">Name</label>
                    <input type="text" id="name" placeholder="John Doe" className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/40 focus:bg-white/10 transition-all" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email</label>
                    <input type="email" id="email" placeholder="john@example.com" className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/40 focus:bg-white/10 transition-all" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/70">Subject</label>
                  <select id="subject" className="h-12 rounded-xl border border-white/10 bg-[#0B0F19] px-4 text-sm text-white/80 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/40 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Research Collaboration</option>
                    <option>Sponsorship</option>
                    <option>Press/Media</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Message</label>
                  <textarea id="message" rows={5} placeholder="How can we help you?" className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500/40 focus:bg-white/10 transition-all resize-none"></textarea>
                </div>

                <button type="button" className="group/btn flex items-center justify-center gap-2 h-14 mt-4 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] hover:-translate-y-1 transition-all duration-300">
                  Send Message <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
