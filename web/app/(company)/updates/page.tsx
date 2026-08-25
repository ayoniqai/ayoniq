import type { Metadata } from "next";
import { client } from "@/core/lib/sanity";
import { NEWS_QUERY } from "@/core/lib/queries";
import { ExternalLink } from "lucide-react";
import UpdatesHero from "@/modules/updates/UpdatesHero";
import UpdatesList from "@/modules/updates/UpdatesList";

export const metadata: Metadata = {
  title: "Updates & Announcements | AYONIQ",
  description: "Product updates, company announcements, research milestones, and press coverage from AYONIQ.",
  alternates: {
    canonical: "https://ayoniq.org/updates",
  },
};

export const revalidate = 60;

export default async function UpdatesPage() {
  let newsItems: any[] = [];
  try {
    newsItems = await client.fetch(NEWS_QUERY);
  } catch {
    newsItems = [];
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <UpdatesHero />

      <section className="mx-auto max-w-4xl px-6 pb-32">
        <UpdatesList items={newsItems} />

        <div className="mt-16 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
          <h3 className="text-[16px] font-semibold">Media Enquiries</h3>
          <p className="mt-2 text-[14px] text-zinc-400">
            Journalists and media professionals can reach our communications team directly.
          </p>
          <a
            href="mailto:press@ayoniq.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-[13px] font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
          >
            press@ayoniq.com <ExternalLink size={12} />
          </a>
        </div>
      </section>
    </main>
  );
}
