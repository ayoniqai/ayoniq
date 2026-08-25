import Link from "next/link";

export function SupportSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="p-12 md:p-20 border-t border-border text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight mb-4">Research should be shared.</h2>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          Help us maintain an open ecosystem of knowledge, tools, and data for the global research community.
        </p>
        <Link
          href="/donate"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Support AYONIQ LABS
        </Link>
      </div>
    </section>
  );
}
