import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-32 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-white">
          Help Build the Future of AI
        </h2>
        <p className="mx-auto mt-6 max-w-[600px] text-[16.5px] leading-relaxed text-zinc-400">
          Whether you are a researcher, engineer, developer, student, or builder, there is a place for you in the future of AI.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/research"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-black transition-opacity hover:opacity-85"
          >
            Explore Research
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/careers"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 text-[14px] font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
          >
            Join AYONIQ
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
