export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase border border-[#30363d]">
          Social Media Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Fake Engagement<br />
          <span className="text-[#58a6ff]">Before It Spreads</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Self-Upvote Detector analyzes voting patterns using statistical algorithms to surface coordinated manipulation — with confidence scores and visual reports your team can act on.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get API Access — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No database required. Plug into any platform via REST API.</p>

        {/* Feature pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Coordinated vote detection","Confidence scoring","Suspicious activity reports","REST API","Dashboard visualizations"].map(f => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to protect your platform</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Full REST API access",
              "Statistical manipulation detection",
              "Confidence scores per report",
              "Dashboard with visualizations",
              "Up to 500k events/month",
              "Email support"
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the detection algorithm work?</h3>
            <p className="text-sm text-[#8b949e]">We apply statistical analysis to voting timestamps, user behavior patterns, and network graphs to identify coordinated or anomalous engagement. Each finding is assigned a confidence score so you can prioritize action.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What platforms does it support?</h3>
            <p className="text-sm text-[#8b949e]">Any platform that can send event data via REST API — Reddit-style communities, product review sites, forums, or custom-built social apps. If you can POST JSON, you can use Self-Upvote Detector.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is there a free trial?</h3>
            <p className="text-sm text-[#8b949e]">We offer a 7-day money-back guarantee. If the API doesn't surface actionable insights for your platform within the first week, we'll refund you — no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Self-Upvote Detector. All rights reserved.
      </footer>
    </main>
  )
}
