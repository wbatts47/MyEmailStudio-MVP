import { Mic, Zap, Eye, MessageSquare, Palette, History, Send } from "lucide-react";
import FadeUp from "../FadeUp";
import { motion } from "framer-motion";

const FEATURES = [
  {
    id: "voice",
    icon: Mic,
    label: "Voice & Text Input",
    title: "Brief it out loud",
    desc: "Tap record and speak naturally. Email Studio transcribes, interprets context, and extracts your intent — no special phrasing required.",
    accent: "#4CAF50",
    span: "md:col-span-2",
    highlight: true,
    visual: (
      <div className="flex items-end gap-[3px] h-8 mt-4">
        {[40,80,25,95,50,75,30,100,55,70,38,85,45,65,32].map((h, i) => (
          <div key={i} className="wave-bar rounded-full bg-[#4CAF50]"
            style={{ width: "4px", height: `${h * 0.28}px`, animationDelay: `${i * 0.05}s`, animationDuration: `${0.7 + (i % 4) * 0.1}s` }} />
        ))}
      </div>
    ),
  },
  {
    id: "brand",
    icon: Palette,
    label: "Brand Kit",
    title: "Every email on-brand",
    desc: "Store your colors, fonts, and company info once. Every generated email automatically matches your brand guidelines.",
    accent: "#F5D000",
    span: "md:col-span-1",
    visual: (
      <div className="flex gap-2 mt-4">
        {["#4CAF50","#F5D000","#1a1a1a","#f0f0f0"].map((c) => (
          <div key={c} className="w-6 h-6 rounded-full border border-[#2a2a2a]" style={{ background: c }} />
        ))}
      </div>
    ),
  },
  {
    id: "preview",
    icon: Eye,
    label: "Live Preview",
    title: "See exactly what they'll see",
    desc: "Real-time rendering shows your email in every client — Gmail, Outlook, Apple Mail — before you send.",
    accent: "#4CAF50",
    span: "md:col-span-1",
    visual: null,
  },
  {
    id: "ai",
    icon: Zap,
    label: "AI Email Generation",
    title: "Brief to HTML in seconds",
    desc: "From description to production-ready, MJML-compiled HTML email. Works perfectly in every inbox including Outlook 2007.",
    accent: "#4CAF50",
    span: "md:col-span-2",
    visual: (
      <div className="mt-4 font-mono text-[10px] leading-5">
        <span className="text-[#555]">&lt;table</span> <span className="text-[#4CAF50]">role</span><span className="text-[#555]">=</span><span className="text-[#F5D000]">"presentation"</span><span className="text-[#555]">&gt;</span>
        <br/><span className="text-[#888] ml-4">AI-generated, cross-client HTML</span>
      </div>
    ),
  },
  {
    id: "chat",
    icon: MessageSquare,
    label: "Revision Chat",
    title: "Iterate in plain English",
    desc: "Don't like the CTA? Say \"make it more urgent\" and it's done. No re-prompting, no starting over.",
    accent: "#4CAF50",
    span: "md:col-span-1",
    visual: null,
  },
  {
    id: "history",
    icon: History,
    label: "Email History",
    title: "Your full library",
    desc: "Every email you've generated is saved. Reload, revise, re-send, or use as a starting point for your next campaign.",
    accent: "#4CAF50",
    span: "md:col-span-1",
    visual: null,
  },
  {
    id: "esp",
    icon: Send,
    label: "ESP Integrations",
    title: "Send from anywhere",
    desc: "Connect Gmail, Mailchimp, SendGrid, Klaviyo, or Outlook and send directly from Email Studio without touching another tool.",
    accent: "#F5D000",
    span: "md:col-span-1",
    visual: (
      <div className="flex flex-wrap gap-2 mt-4">
        {["Gmail","Mailchimp","SendGrid","Klaviyo"].map((s) => (
          <span key={s} className="text-[10px] border border-[#2a2a2a] rounded-full px-2.5 py-0.5 text-[#555]">{s}</span>
        ))}
      </div>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section
      data-testid="features-section"
      id="features"
      className="py-24 md:py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="section-label mb-4">Features</p>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-5"
          >
            Everything you need.<br />Nothing you don't.
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Built for speed. Designed for professionals who send email for a living.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <FadeUp key={f.id} delay={i * 0.08} className={f.span}>
                <div
                  data-testid={`feature-card-${f.id}`}
                  className={`card-hover rounded-2xl p-7 h-full ${
                    f.highlight
                      ? "bg-[#0f1f10]"
                      : "bg-[#141414]"
                  }`}
                  style={f.highlight ? { borderColor: "rgba(76,175,80,0.2)" } : {}}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: `${f.accent}15`,
                      border: `1px solid ${f.accent}25`,
                    }}
                  >
                    <Icon size={16} color={f.accent} strokeWidth={1.5} />
                  </div>
                  <p className="section-label mb-2" style={{ color: f.accent }}>
                    {f.label}
                  </p>
                  <h3
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    className="text-[#f0f0f0] text-xl mb-2.5"
                  >
                    {f.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">{f.desc}</p>
                  {f.visual}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
