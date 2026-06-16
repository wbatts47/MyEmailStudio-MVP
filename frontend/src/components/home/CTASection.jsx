import FadeUp from "../FadeUp";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      data-testid="cta-section"
      className="py-24 md:py-32 px-6 lg:px-10 relative overflow-hidden"
    >
      {/* Gold accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(245,208,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <FadeUp>
          <p className="section-label mb-6" style={{ color: "#F5D000" }}>
            Get Started Today
          </p>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-5xl md:text-6xl lg:text-7xl text-[#f0f0f0] leading-[0.95] tracking-tight mb-7"
          >
            Stop staring at a blank<br />
            <span style={{ color: "#F5D000" }}>Mailchimp window.</span>
          </h2>
          <p className="text-[#888] text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Describe your email. Download the HTML. Done.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#"
            data-testid="final-cta-primary"
            className="btn-primary text-base"
            style={{ padding: "16px 40px", fontSize: "16px" }}
          >
            Get Started for $29/month
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            data-testid="final-cta-demo"
            className="btn-secondary text-base"
            style={{ padding: "15px 40px", fontSize: "16px" }}
          >
            See how it works ↓
          </a>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {[
              "Describe it, don't design it",
              "No drag-and-drop",
              "Works in Outlook",
              "Your brand, every time",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-[#555]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
