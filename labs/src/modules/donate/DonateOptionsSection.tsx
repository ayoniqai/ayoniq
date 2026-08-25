export function DonateOptionsSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Individual Donation */}
        <div className="flex flex-col p-8 border border-white/10 rounded-xl bg-[#030509] hover:border-blue-500/50 transition-colors hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          <h3 className="font-heading text-2xl font-bold mb-4 text-white">Individual Support</h3>
          <p className="text-white/60 mb-8 flex-grow">
            Make a one-time or recurring donation to support our compute resources, dataset hosting, and operational costs.
          </p>
          <div className="flex flex-col gap-3">
            <button className="w-full h-11 rounded-md bg-blue-600 text-white font-medium shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:bg-blue-700 transition-colors">
              Donate $10
            </button>
            <button className="w-full h-11 rounded-md border border-white/10 bg-transparent text-white hover:bg-white/5 font-medium transition-colors">
              Custom Amount
            </button>
          </div>
        </div>

        {/* Corporate Sponsorship */}
        <div className="flex flex-col p-8 border border-white/10 rounded-xl bg-[#0B0F19] hover:border-blue-500/50 transition-colors hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          <h3 className="font-heading text-2xl font-bold mb-4 text-white">Corporate Sponsor</h3>
          <p className="text-white/60 mb-8 flex-grow">
            Partner with us to accelerate specific research areas. Corporate sponsors receive priority access to enterprise-grade APIs and models.
          </p>
          <button className="w-full h-11 mt-auto rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">
            Contact for Sponsorship
          </button>
        </div>

        {/* Compute Donation */}
        <div className="flex flex-col p-8 border border-white/10 rounded-xl bg-[#030509] hover:border-blue-500/50 transition-colors hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] md:col-span-2 lg:col-span-1">
          <h3 className="font-heading text-2xl font-bold mb-4 text-white">Compute Credits</h3>
          <p className="text-white/60 mb-8 flex-grow">
            Are you a cloud provider or hardware vendor? Donating compute credits directly accelerates our foundation model training.
          </p>
          <button className="w-full h-11 mt-auto rounded-md border border-white/10 bg-transparent text-white hover:bg-white/5 font-medium transition-colors">
            Donate Compute
          </button>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center mt-16 pt-16 border-t border-white/10">
        <h3 className="font-heading text-xl font-bold mb-4 text-white">Where does your money go?</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          100% of individual donations go directly toward server costs for hosting open datasets and models, and computational resources required for non-profit open research. We are fully transparent about our funding.
        </p>
      </div>
    </section>
  );
}
