import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/src/components/ui/FadeIn";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AYONIQ LABS",
  description: "Privacy policy for AYONIQ LABS, a nonprofit research organization.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#030509] text-white min-h-screen pb-24">
      
      {/* Massive Typography Header */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 rounded-full">
                ← Back to Home
              </Link>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              Privacy <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Policy.
              </span>
            </h1>
            
            <div className="flex items-center gap-3 text-white/50 text-sm md:text-base font-medium uppercase tracking-widest border-l-2 border-indigo-500 pl-4 py-1">
              <ShieldAlert className="w-5 h-5 text-indigo-400" />
              Last Updated: August 2026
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn delay={0.1}>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-6 prose-h2:text-white prose-p:text-white/60 prose-p:leading-relaxed prose-p:font-light prose-li:text-white/60 prose-li:font-light prose-strong:text-white/90 prose-strong:font-medium space-y-16">
              
              <div className="p-8 md:p-10 border border-white/10 rounded-3xl bg-white/[0.02]">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to AYONIQ LABS. We are a nonprofit research organization dedicated to advancing artificial intelligence. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                </p>
              </div>
              
              <div>
                <h2>2. The Data We Collect About You</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-4 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                    <span><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-4 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                    <span><strong>Contact Data</strong> includes email address and telephone numbers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-4 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                    <span><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-4 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                    <span><strong>Usage Data</strong> includes information about how you use our website, products and services.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2>3. How We Use Your Personal Data</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2 mr-4 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                    <span>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2 mr-4 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                    <span>Where we need to comply with a legal obligation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2 mr-4 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                    <span>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2 mr-4 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                    <span>To administer and protect our organization and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2>4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
              </div>

              <div className="p-8 md:p-10 border border-indigo-500/20 rounded-3xl bg-indigo-500/5">
                <h2>5. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@ayoniq.org" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors border-b border-indigo-400/30 pb-0.5 no-underline">privacy@ayoniq.org</a>.
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
