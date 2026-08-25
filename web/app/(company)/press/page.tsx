import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | AYONIQ",
  description: "AYONIQ Press & Media resources.",
  alternates: {
    canonical: "https://ayoniq.org/press",
  },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">PRESS</h1>
      <p className="mt-4 text-zinc-400 text-sm">Coming soon...</p>
    </div>
  );
}
