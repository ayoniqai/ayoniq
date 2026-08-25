import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-32 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-white">
          Join the Frontier
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-[16.5px] leading-relaxed text-zinc-400">
          We are always looking for exceptional researchers, engineers, and scientists to help build the future of artificial intelligence at AYONIQ LABS.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/careers"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3 text-[14px] font-semibold text-black transition-opacity hover:bg-cyan-400"
          >
            View Open Roles
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 text-[14px] font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
          >
            Learn about AYONIQ
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
