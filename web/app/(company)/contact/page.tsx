import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AYONIQ",
  description: "Get in touch with the AYONIQ team.",
  alternates: {
    canonical: "https://ayoniq.org/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-24 text-center">
        <h1 className="text-5xl font-extrabold md:text-7xl">Get in Touch</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          We&apos;d love to hear from you. Reach out to our team.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <form className="flex flex-col gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-400">Name</label>
                <input type="text" className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder-zinc-500 focus:border-cyan-500 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-400">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder-zinc-500 focus:border-cyan-500 outline-none" placeholder="john@company.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-400">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder-zinc-500 focus:border-cyan-500 outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="rounded-xl bg-cyan-500 p-4 font-bold text-black transition-transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <Mail className="text-cyan-400" size={32} />
              <div>
                <h3 className="text-xl font-bold">Email Us</h3>
                <p className="text-zinc-400">hello@ayoniq.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <MapPin className="text-purple-400" size={32} />
              <div>
                <h3 className="text-xl font-bold">Visit Us</h3>
                <p className="text-zinc-400">Global HQ, Tech District</p>
              </div>
            </div>

            <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <Phone className="text-blue-400" size={32} />
              <div>
                <h3 className="text-xl font-bold">Call Us</h3>
                <p className="text-zinc-400">+1 (555) 000-0000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}