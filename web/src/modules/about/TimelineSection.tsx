export default function TimelineSection() {
  const timeline = [
    { year: "2026", event: "AYONIQ founded" },
    { year: "2026", event: "AYONIQ Labs established" },
    { year: "2026", event: "Open-source development begins" },
    { year: "2027+", event: "Research publications and AI systems" },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-16 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Timeline</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none">
          {timeline.map((item, i) => (
            <div key={i} className="group relative mb-12 flex items-start md:mb-8 md:items-center">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-[#050505] bg-zinc-600 transition-colors group-hover:bg-indigo-400 md:hidden" />
              <div className="w-24 pl-6 text-[15px] font-bold text-white md:w-32 md:pl-0 md:text-right md:pr-8">{item.year}</div>
              <div className="hidden h-3 w-3 rounded-full border-2 border-[#050505] bg-zinc-600 transition-colors group-hover:bg-indigo-400 md:block" />
              <div className="flex-1 pl-6 text-[15px] text-zinc-400 md:pl-8">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
