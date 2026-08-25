import { BRAND_VISION } from "@/core/constants/brand";

export default function VisionSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-400">Our Vision</h2>
        
        <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-[1.3] text-zinc-100">
          {BRAND_VISION}
        </p>

        <p className="mx-auto mt-12 max-w-3xl text-[17px] leading-[1.8] text-zinc-400">
          We believe the future of AI should not be built by a handful of places alone. Bangladesh and the broader region should have the talent, infrastructure, research capacity, and open technologies needed to participate in that future.
        </p>
      </div>
    </section>
  );
}
