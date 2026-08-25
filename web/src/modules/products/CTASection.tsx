import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export default function CTASection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-32 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-white">
          Ready to deploy?
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-[16.5px] leading-relaxed text-zinc-400">
          Join thousands of developers building scalable, intelligent applications on the AYONIQ platform.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/developers"
            className="group inline-flex items-center gap-2 rounded-full bg-purple-500 px-7 py-3 text-[14px] font-semibold text-white transition-opacity hover:bg-purple-400"
          >
            Start Building Free
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 text-[14px] font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
          >
            Contact Sales
            <Terminal size={14} className="text-zinc-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
