import { BRAND_MISSION } from "@/core/constants/brand";

export default function MissionSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">Our Mission</h2>
        
        <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-[1.3] text-zinc-100">
          {BRAND_MISSION}
        </p>

        <div className="mx-auto mt-16 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <p className="mx-auto mt-16 max-w-2xl text-[17px] leading-[1.8] text-zinc-400">
          We are building from Bangladesh with a global ambition—to contribute meaningful research, technology, and infrastructure to the advancement of AI.
        </p>
      </div>
    </section>
  );
}
