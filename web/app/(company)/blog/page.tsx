import type { Metadata } from "next";
import { client } from "@/core/lib/sanity";
import { POSTS_QUERY } from "@/core/lib/queries";
import BlogHero from "@/modules/blog/BlogHero";
import CategoryFilter from "@/modules/blog/CategoryFilter";
import PostCard from "@/modules/blog/PostCard";

export const metadata: Metadata = {
  title: "Blog & Journal | AYONIQ",
  description: "Read the latest updates, engineering deep dives, and research from the AYONIQ team.",
  alternates: {
    canonical: "https://ayoniq.org/blog",
  },
};

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch {
    posts = [];
  }

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const regularPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <main className="min-h-screen bg-[#020202] text-white">
      <BlogHero />
      <CategoryFilter />

      <section className="mx-auto max-w-7xl px-6 pb-32">
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 py-32 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">No posts found</h2>
            <p className="text-zinc-400">Check back later for new content.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12">
                <PostCard post={featuredPost} featured={true} />
              </div>
            )}

            {/* Grid Posts */}
            {regularPosts.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
