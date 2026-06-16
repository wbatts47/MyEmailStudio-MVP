import { Mic, Zap, Eye, MessageSquare, Palette, History, Send } from "lucide-react";
import FadeUp from "../FadeUp";

const FEATURES = [
  {
    id: "voice",
    icon: Mic,
    label: "7 Email Styles",
    title: "Newsletter, promo, seasonal, and more",
    desc: "Newsletter, hero promo, announcement, follow-up, seasonal campaign, event invite, re-engagement. Pick the format, describe the content.",
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
    label: "Brand Kit Built In",
    title: "Every email on-brand",
    desc: "Upload your logo, set your colors and fonts once. Every email you generate reflects your brand automatically.",
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
    title: "See exactly what your email looks like",
    desc: "Real-time rendering shows exactly how your email will look before you download it.",
    accent: "#4CAF50",
    span: "md:col-span-1",
    visual: null,
  },
  {
    id: "ai",
    icon: Zap,
    label: "Outlook-Compatible HTML",
    title: "Brief to HTML in seconds",
    desc: "MJML compilation means your emails render correctly everywhere — including Outlook, which breaks most hand-coded emails.",
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
    title: "Revise in plain English",
    desc: "Don't like the subject line? Want a different CTA? Just tell it. No re-prompting from scratch.",
    accent: "#4CAF50",
    span: "md:col-span-1",
    visual: null,
  },
  {
    id: "history",
    icon: History,
    label: "Email History",
    title: "Your full library",
    desc: "Every email you generate is saved. Go back, revise, reuse, or rebuild from any previous send.",
    accent: "#4CAF50",
    span: "md:col-span-1",
    visual: null,
  },
  {
    id: "esp",
    icon: Send,
    label: "Works With Your ESP",
    title: "Download and paste anywhere",
    desc: "Download clean HTML and paste it into whatever platform you already send from — Mailchimp, Constant Contact, Klaviyo, FranConnect, anything.",
    accent: "#F5D000",
    span: "md:col-span-1",
    visual: (
      <div className="flex flex-wrap gap-2 mt-4">
        {["Mailchimp","Constant Contact","Klaviyo","FranConnect"].map((s) => (
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
