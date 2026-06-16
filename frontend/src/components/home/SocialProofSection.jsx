import FadeUp from "../FadeUp";
import { ArrowRight } from "lucide-react";

export default function SocialProofSection() {
  return (
    <section
      data-testid="social-proof-section"
      className="py-24 md:py-32 px-6 lg:px-10 border-t border-[#2a2a2a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center">
          <p className="section-label mb-6">Early Access</p>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-6 max-w-2xl mx-auto"
          >
            Email Studio is currently in early access.
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto mb-10">
            We're working with a small group of home service operators and franchise teams. Want in?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 btn-primary"
            style={{ padding: "14px 32px", fontSize: "15px" }}
          >
            Request Early Access
            <ArrowRight size={16} />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
