import type { Metadata } from "next";
import { client } from "@/core/lib/sanity";
import { NEWS_BY_CATEGORY_QUERY } from "@/core/lib/queries";
import UpdatesHero from "@/modules/updates/UpdatesHero";
import UpdatesList from "@/modules/updates/UpdatesList";

export const metadata: Metadata = {
  title: "Company News | AYONIQ",
  description: "Company news, culture, and team updates from AYONIQ.",
};

export const revalidate = 60;

export default async function CompanyUpdatesPage() {
  let newsItems: any[] = [];
  try {
    newsItems = await client.fetch(NEWS_BY_CATEGORY_QUERY, { category: "Company" });
  } catch {
    newsItems = [];
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <UpdatesHero />
      <section className="mx-auto max-w-4xl px-6 pb-32">
        <UpdatesList items={newsItems} />
      </section>
    </main>
  );
}
