import FadeUp from "../FadeUp";

const TESTIMONIALS = [
  {
    quote: "This saved us 4 hours a week. We used to argue over templates. Now we just speak the brief and it's done.",
    name: "Sarah K.",
    role: "Marketing Director",
    company: "GreenLeaf Landscaping",
    initials: "SK",
  },
  {
    quote: "Every email looks like it came from the same brand now. Our franchise locations finally have consistency.",
    name: "Mike R.",
    role: "Regional Marketing Manager",
    company: "ProGroup Franchises",
    initials: "MR",
  },
  {
    quote: "The Outlook compatibility alone is worth it. Every other tool we tried broke in half our customers' inboxes.",
    name: "Jennifer L.",
    role: "Owner",
    company: "BrightShield Pest Control",
    initials: "JL",
  },
];

const LOGOS = ["GreenLeaf", "ProGroup", "BrightShield", "CleanSweep", "Angi Pro", "ServiceTitan"];

export default function SocialProofSection() {
  return (
    <section
      data-testid="social-proof-section"
      className="py-24 md:py-32 px-6 lg:px-10 border-t border-[#2a2a2a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="section-label mb-4">Social Proof</p>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-5"
          >
            Trusted by 2,000+ businesses<br />who send email for a living.
          </h2>
        </FadeUp>

        {/* Logo row */}
        <FadeUp className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-[#3a3a3a] font-bold text-sm tracking-widest uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.12}>
              <div
                data-testid={`testimonial-${i}`}
                className="bg-[#141414] rounded-2xl border border-[#2a2a2a] p-7 h-full card-hover flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#F5D000">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#888] text-sm leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#0a0a0a]"
                    style={{ background: "#4CAF50" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] text-sm font-medium">{t.name}</p>
                    <p className="text-[#555] text-xs">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Stats row */}
        <FadeUp delay={0.3} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#2a2a2a] pt-12">
            {[
              { value: "2,000+", label: "Businesses using Email Studio" },
              { value: "180k+", label: "Emails generated" },
              { value: "1.8s", label: "Average generation time" },
              { value: "99.7%", label: "Inbox delivery rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-3xl md:text-4xl text-[#f0f0f0] mb-1.5"
                >
                  {s.value}
                </p>
                <p className="text-[#555] text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
