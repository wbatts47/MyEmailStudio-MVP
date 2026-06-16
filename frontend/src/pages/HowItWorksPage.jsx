import { Mic, Zap, Send, CheckCircle, ArrowRight } from "lucide-react";
import FadeUp from "../components/FadeUp";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    icon: Mic,
    title: "Describe your email",
    subtitle: "Voice or text — your call",
    accent: "#4CAF50",
    content: [
      "Open Email Studio and tap the microphone — or type in the brief box.",
      'Speak naturally. "Write a follow-up email to our pest control customers due for a summer inspection. Offer 15% off and keep it friendly."',
      "Or type it. Email Studio understands context, tone requests, and business-specific language.",
      "That's it. No fields to fill in. No options to configure. Just tell it what you need.",
    ],
    visual: (
      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-5">
        <p className="section-label text-[10px] mb-3">Your brief</p>
        <p className="text-[#888] text-sm leading-relaxed italic">
          "Write a summer re-engagement email for GreenLeaf Landscaping. Remind customers their lawn care plan is due. Offer 20% off if they book this week. Warm, urgent, professional."
        </p>
        <div className="flex items-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
          <span className="text-[10px] text-[#4CAF50]">Transcribed from voice in 4 seconds</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: Zap,
    title: "AI generates production HTML",
    subtitle: "Done in under 3 seconds",
    accent: "#4CAF50",
    content: [
      "Email Studio sends your brief to its AI engine, which understands email design, copywriting, and HTML structure simultaneously.",
      "The output is fully compiled MJML — the industry standard for cross-client email HTML.",
      "Inline CSS, responsive layout, and your Brand Kit colors and fonts are applied automatically.",
      "The same email renders correctly in Gmail, Outlook 2007–2019, Apple Mail, and every major mobile client.",
    ],
    visual: (
      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#2a2a2a] flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
          <span className="text-[10px] text-[#4CAF50]">Generated in 1.8s</span>
        </div>
        <div className="p-4 font-mono text-[11px] leading-6">
          <span className="text-[#555]">&lt;!-- MJML compiled output --&gt;</span><br/>
          <span className="text-[#555]">&lt;</span><span className="text-[#4CAF50]">table</span>
          <span className="text-[#888]"> role="presentation"</span><span className="text-[#555]">&gt;</span><br/>
          <span className="text-[#555] ml-4">&lt;</span><span className="text-[#4CAF50]">tr</span><span className="text-[#555]">&gt;</span><br/>
          <span className="text-[#555] ml-8">&lt;</span><span className="text-[#4CAF50]">td</span>
          <span className="text-[#888]"> style="font-family:Arial"</span><span className="text-[#555]">&gt;</span><br/>
          <span className="text-[#888] ml-12">Your email content here...</span>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Preview, revise, perfect it",
    subtitle: "Iterate in plain English",
    accent: "#4CAF50",
    content: [
      "The Live Preview shows exactly how your email renders — not a guess, not a simulation.",
      "Don't like the CTA? Say \"make the button more urgent\" and it's updated instantly.",
      "Need a different tone? Say \"make it more casual\" or \"add a bullet list of benefits.\"",
      "You can also switch between mobile and desktop preview to check responsive behavior.",
    ],
    visual: (
      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-5">
        <p className="section-label text-[10px] mb-3">Revision chat</p>
        <div className="space-y-2.5">
          {[
            { from: "user", text: "Make the CTA button more urgent" },
            { from: "ai", text: 'Updated: "Book Now — Offer Ends Sunday" with red urgency styling.' },
            { from: "user", text: "Add a PS line about the free inspection" },
            { from: "ai", text: "Added P.S. with free lawn assessment mention." },
          ].map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-xl px-3 py-2 text-xs max-w-[80%] ${m.from === "user" ? "bg-[#4CAF50]/15 text-[#888]" : "bg-[#2a2a2a] text-[#888]"}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "04",
    icon: Send,
    title: "Download and send",
    subtitle: "Works with any ESP you already use",
    accent: "#F5D000",
    content: [
      "Click Download to get a clean .html file — or copy the HTML directly to your clipboard.",
      "Paste it into Mailchimp, Constant Contact, FranConnect, Klaviyo, or any platform that accepts custom HTML.",
      "No lock-in. No switching tools. Email Studio creates; you send from whatever platform you already use.",
      "Every export includes inline CSS and Outlook conditional comments — no additional processing needed.",
    ],
    visual: (
      <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-5">
        <p className="section-label text-[10px] mb-3" style={{ color: "#F5D000" }}>Paste into any platform</p>
        <div className="grid grid-cols-2 gap-2">
          {["Mailchimp", "Constant Contact", "FranConnect", "Klaviyo", "ActiveCampaign", "Export HTML"].map((s) => (
            <div key={s} className="flex items-center gap-2 text-xs text-[#888] bg-[#141414] rounded-lg px-3 py-2 border border-[#2a2a2a]">
              <CheckCircle size={11} color="#4CAF50" />
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <div style={{ background: "#0a0a0a" }} className="pt-24">
      <section className="py-20 px-6 lg:px-10 text-center">
        <FadeUp>
          <p className="section-label mb-4">How It Works</p>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-5xl md:text-6xl text-[#f0f0f0] leading-tight mb-5">
            From brief to inbox<br />in 3 steps.
          </h1>
          <p className="text-[#888] text-xl max-w-lg mx-auto mb-10">
            No templates. No design skills. No surprises in Outlook.
          </p>
          <a href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00" data-testid="hiw-cta" className="btn-primary inline-flex">
            Get Started for $29/month <ArrowRight size={16} />
          </a>
        </FadeUp>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto space-y-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeUp key={step.number} delay={i * 0.12}>
                <div
                  data-testid={`hiw-step-${i + 1}`}
                  className="bg-[#141414] rounded-2xl border border-[#2a2a2a] p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${step.accent}15`, border: `1px solid ${step.accent}25` }}>
                        <Icon size={18} color={step.accent} />
                      </div>
                      <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", color: `${step.accent}20`, fontSize: "3rem", lineHeight: 1 }}>
                        {step.number}
                      </span>
                    </div>
                    <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-2xl md:text-3xl text-[#f0f0f0] mb-1">
                      {step.title}
                    </h2>
                    <p className="section-label text-[10px] mb-5" style={{ color: step.accent }}>{step.subtitle}</p>
                    <ul className="space-y-3">
                      {step.content.map((c, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: step.accent }} />
                          <p className="text-[#888] text-sm leading-relaxed">{c}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>{step.visual}</div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 border-t border-[#2a2a2a] text-center">
        <FadeUp>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-4xl md:text-5xl text-[#f0f0f0] mb-5">
            Ready to try it?
          </h2>
          <p className="text-[#888] mb-8">No contracts. Cancel anytime.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00" className="btn-primary">Get Started for $29/month <ArrowRight size={16} /></a>
            <a href="/demo" className="btn-secondary">See Live Demo</a>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
