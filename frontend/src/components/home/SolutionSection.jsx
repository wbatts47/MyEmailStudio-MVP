import FadeUp from "../FadeUp";
import { Mic, Zap, Send } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Mic,
    title: "Brief it",
    subtitle: "Type what you need",
    desc: 'Type what you need. "Monthly newsletter for our pest control customers — promote our mosquito program, include a spring discount." That\'s it.',
    accent: "#4CAF50",
    example: '"Write a follow-up email for pest control customers due for their summer inspection. Offer a 15% discount and make it feel personal."',
  },
  {
    number: "02",
    icon: Zap,
    title: "Get your email",
    subtitle: "Production HTML in seconds",
    desc: "Email Studio generates a fully coded, MJML-compiled HTML email in seconds — styled to your brand, ready for any inbox.",
    accent: "#4CAF50",
    example: "Output: Fully coded, MJML-compiled HTML — brand colors applied, logo included, Outlook-compatible.",
  },
  {
    number: "03",
    icon: Send,
    title: "Download and send",
    subtitle: "No lock-in",
    desc: "Copy the HTML or download the file. Paste it into Mailchimp, Constant Contact, FranConnect, or any platform you already use. No lock-in, no switching tools.",
    accent: "#F5D000",
    example: "Works with Mailchimp, Constant Contact, FranConnect, Klaviyo, or anything else you already send from.",
  },
];

export default function SolutionSection() {
  return (
    <section
      data-testid="solution-section"
      className="py-24 md:py-32 px-6 lg:px-10 bg-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-20">
          <p className="section-label mb-4">How It Works</p>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-5"
          >
            Describe it. Generate it. Send it.
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Three steps from brief to inbox.
          </p>
        </FadeUp>

        <div className="space-y-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeUp key={step.number} delay={i * 0.15}>
                <div
                  data-testid={`solution-step-${i + 1}`}
                  className="bg-[#141414] rounded-2xl border border-[#2a2a2a] p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:border-[#3a3a3a] transition-colors duration-300"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${step.accent}18`, border: `1px solid ${step.accent}30` }}
                      >
                        <Icon size={18} color={step.accent} />
                      </div>
                      <span
                        className="text-4xl font-bold"
                        style={{
                          fontFamily: "'DM Serif Display', Georgia, serif",
                          color: `${step.accent}22`,
                          lineHeight: 1,
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                      className="text-2xl md:text-3xl text-[#f0f0f0] mb-1.5"
                    >
                      {step.title}
                    </h3>
                    <p className="section-label text-[10px] mb-4" style={{ color: step.accent }}>
                      {step.subtitle}
                    </p>
                    <p className="text-[#888] leading-relaxed">{step.desc}</p>
                  </div>
                  <div
                    className="rounded-xl border border-[#2a2a2a] p-5 bg-[#1a1a1a]"
                    style={{ borderColor: `${step.accent}20` }}
                  >
                    <p className="text-[11px] text-[#555] mb-2 uppercase tracking-widest">
                      {i === 0 ? "Example brief" : i === 1 ? "What you get" : "Where it goes"}
                    </p>
                    <p className="text-[#888] text-sm leading-relaxed italic">
                      {step.example}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
