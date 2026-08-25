import Link from "next/link";

export function DatasetsSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold tracking-tight">Datasets & Models</h2>
          <Link href="/datasets" className="text-sm font-medium text-muted hover:text-foreground">Explore all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 border border-border rounded-lg bg-card">
              <h3 className="font-bold mb-2">Dataset {i}</h3>
              <p className="text-sm text-muted">1.2M annotated samples for NLP tasks.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
