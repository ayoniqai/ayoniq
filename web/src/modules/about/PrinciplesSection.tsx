export default function PrinciplesSection() {
  const principles = [
    {
      num: "01",
      title: "Research Deeply",
      desc: "We pursue evidence, experimentation and understanding.",
    },
    {
      num: "02",
      title: "Build Boldly",
      desc: "We work on difficult problems with long-term ambition.",
    },
    {
      num: "03",
      title: "Stay Open",
      desc: "We believe knowledge and technology advance faster when shared responsibly.",
    },
    {
      num: "04",
      title: "Think Globally",
      desc: "We build from Bangladesh with a global perspective.",
    },
    {
      num: "05",
      title: "Build for Humanity",
      desc: "Technology should expand human capability and create meaningful positive impact.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#030303] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Our Principles</h2>
          <p className="mt-4 text-[2rem] font-bold tracking-tight text-white">How we operate.</p>
        </div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.num} className="flex flex-col border-t border-white/10 pt-6">
              <div className="mb-4 text-[12px] font-mono text-zinc-500">{p.num}</div>
              <h3 className="mb-2 text-[17px] font-semibold text-white">{p.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-zinc-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
