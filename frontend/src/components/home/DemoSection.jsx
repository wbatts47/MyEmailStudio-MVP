import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "../FadeUp";
import { Zap, ArrowRight } from "lucide-react";

const BRIEFS = [
  {
    label: "Lawn Care",
    text: "Write a summer promo email for GreenLeaf Landscaping. 20% off lawn care booked this week. Warm, urgent tone.",
  },
  {
    label: "Pest Control",
    text: "Summer inspection reminder for BrightShield customers. Offer 15% off if they book by end of month. Professional but friendly.",
  },
  {
    label: "Cleaning Service",
    text: "Announce a new deep-clean package for CleanSweep. $50 off first booking. Target existing customers.",
  },
];

const EMAIL_DATA = [
  {
    companyName: "GreenLeaf Landscaping",
    headerBg: "#1a3a2a",
    accentColor: "#F5D000",
    heroImg: "https://images.unsplash.com/photo-1592984164493-25c84259bf9a?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    title: "Summer Special",
    subtitle: "Limited Time Offer",
    greeting: "Hi Sarah,",
    headline: "20% Off Lawn Care — This Week Only",
    body: "Summer is here and your lawn deserves the best. Book any service this week and save 20% on your total.",
    bullets: ["20% off all lawn care this week", "Free lawn assessment included", "Same-week scheduling"],
    cta: "Book My Service — Save 20%",
    expiry: "Offer expires Sunday, June 30",
    footer: "GreenLeaf Landscaping · Austin, TX",
  },
  {
    companyName: "BrightShield Pest Control",
    headerBg: "#0e1f30",
    accentColor: "#4CAF50",
    heroImg: "https://images.pexels.com/photos/7546775/pexels-photo-7546775.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mosquito Season Alert",
    subtitle: "Protect Your Outdoor Space",
    greeting: "Hi James,",
    headline: "Summer mosquito season is here. Is your yard protected?",
    body: "Mosquito activity peaks between June and August. Our seasonal protection plan keeps your family safe and your backyard enjoyable all summer.",
    bullets: ["15% off summer inspection this month", "Treatment results within 48 hours", "100% satisfaction guaranteed"],
    cta: "Schedule My Inspection →",
    expiry: "Offer expires Friday, June 28",
    footer: "BrightShield Pest Control · Serving your neighborhood",
  },
  {
    companyName: "CleanSweep Home Services",
    headerBg: "#1a1a2e",
    accentColor: "#4CAF50",
    heroImg: "https://images.pexels.com/photos/6996087/pexels-photo-6996087.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "New Service Launch",
    subtitle: "Introducing Deep Clean",
    greeting: "Hi Rachel,",
    headline: "Introducing our Premium Deep-Clean Package",
    body: "We've listened to your feedback and built something special. Our Deep-Clean Package covers every inch of your home — top to bottom, inside out.",
    bullets: ["$50 off your first deep-clean booking", "Move-in/move-out ready standard", "Eco-friendly certified products"],
    cta: "Book My Deep Clean →",
    expiry: "Limited spots — book this week",
    footer: "CleanSweep Home Services · Trusted. Spotless. On time.",
  },
];

const EmailPreview = ({ briefIndex = 1 }) => {
  const d = EMAIL_DATA[briefIndex];
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
      <div style={{ background: d.headerBg, padding: "20px 28px", textAlign: "center" }}>
        <p style={{ color: d.accentColor, fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 5px" }}>{d.companyName}</p>
        <h1 style={{ color: "#fff", fontSize: "18px", margin: 0, fontWeight: 700, fontFamily: "Georgia, serif" }}>{d.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", margin: "4px 0 0" }}>{d.subtitle}</p>
      </div>
      <img src={d.heroImg} alt="" style={{ width: "100%", height: "120px", objectFit: "cover", display: "block" }} />
      <div style={{ padding: "18px 28px", background: "#fff" }}>
        <p style={{ margin: "0 0 8px" }}>{d.greeting}</p>
        <h2 style={{ color: d.headerBg, fontSize: "14px", margin: "0 0 8px", fontWeight: 700, lineHeight: 1.3 }}>{d.headline}</h2>
        <p style={{ color: "#555", lineHeight: 1.6, margin: "0 0 12px", fontSize: "12px" }}>{d.body}</p>
        <div style={{ background: "#f0f7f0", borderLeft: "3px solid #4CAF50", padding: "10px 14px", margin: "0 0 14px", borderRadius: "0 6px 6px 0" }}>
          {d.bullets.map((b, i) => (
            <p key={i} style={{ color: "#2a5c2a", fontSize: "11px", margin: i > 0 ? "5px 0 0" : 0, fontWeight: 600 }}>✓ {b}</p>
          ))}
        </div>
        <div style={{ textAlign: "center", margin: "14px 0 8px" }}>
          <a href="#" style={{ background: "#4CAF50", color: "#fff", padding: "10px 22px", borderRadius: "50px", textDecoration: "none", fontSize: "12px", fontWeight: 700, display: "inline-block" }}>{d.cta}</a>
          <p style={{ color: "#888", fontSize: "10px", margin: "7px 0 0" }}>{d.expiry}</p>
        </div>
      </div>
      <div style={{ background: "#f8f8f8", padding: "10px 28px", borderTop: "1px solid #eee", textAlign: "center" }}>
        <p style={{ color: "#999", fontSize: "10px", margin: 0 }}>{d.footer} · <span style={{ color: "#4CAF50" }}>Unsubscribe</span></p>
      </div>
    </div>
  );
};

export default function DemoSection() {
  const [activeBrief, setActiveBrief] = useState(1);
  const [phase, setPhase] = useState("idle");

  const handleGenerate = () => {
    setPhase("loading");
    setTimeout(() => setPhase("done"), 2400);
  };

  const handleReset = () => { setPhase("idle"); };

  return (
    <section
      data-testid="demo-section"
      className="py-24 md:py-32 px-6 lg:px-10 bg-[#0d0d0d] border-t border-[#2a2a2a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-14">
          <p className="section-label mb-4">Live Demo</p>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-5"
          >
            Try it right now.
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Pick a brief below and watch Email Studio generate a real email in seconds.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="rounded-2xl border border-[#2a2a2a] overflow-hidden bg-[#141414]">
            {/* Tab header */}
            <div className="flex items-center gap-1 px-4 py-3 bg-[#1a1a1a] border-b border-[#2a2a2a]">
              <div className="flex gap-1.5 mr-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-[11px] text-[#555] font-mono">Email Studio — Demo</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Input panel */}
              <div className="p-7 border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
                <p className="section-label mb-4">Brief</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {BRIEFS.map((b, i) => (
                    <button
                      key={b.label}
                      data-testid={`demo-brief-tab-${i}`}
                      onClick={() => { setActiveBrief(i); setPhase("idle"); }}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                        activeBrief === i
                          ? "border-[#4CAF50] text-[#4CAF50] bg-[#4CAF50]/10"
                          : "border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a]"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 mb-5 min-h-[100px]">
                  <p className="text-[#888] text-sm leading-relaxed">{BRIEFS[activeBrief].text}</p>
                </div>

                <button
                  data-testid="demo-generate-btn"
                  onClick={phase === "done" ? handleReset : handleGenerate}
                  disabled={phase === "loading"}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    phase === "done"
                      ? "bg-[#1a1a1a] border border-[#2a2a2a] text-[#888] hover:text-[#f0f0f0]"
                      : "btn-primary"
                  }`}
                  style={{ borderRadius: "12px", ...(phase !== "done" && { boxShadow: "0 0 22px rgba(76,175,80,0.3)" }) }}
                >
                  {phase === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : phase === "done" ? (
                    "Generate Another →"
                  ) : (
                    <>
                      <Zap size={15} />
                      Generate Email
                    </>
                  )}
                </button>
              </div>

              {/* Right: Preview panel */}
              <div className="p-7">
                <p className="section-label mb-4">Preview</p>
                <div className="rounded-xl border border-[#2a2a2a] overflow-hidden min-h-[200px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {phase === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-16 px-8">
                        <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mx-auto mb-4">
                          <Zap size={18} color="#2a2a2a" />
                        </div>
                        <p className="text-[#555] text-sm">Click "Generate Email" to preview</p>
                      </motion.div>
                    )}
                    {phase === "loading" && (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-16 px-8">
                        <div className="w-10 h-10 border-2 border-[#2a2a2a] border-t-[#4CAF50] rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-[#888] text-sm mb-1">Generating your email...</p>
                        <p className="text-[#555] text-xs">Compiling Outlook-compatible HTML</p>
                      </motion.div>
                    )}
                    {phase === "done" && (
                      <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full overflow-auto max-h-[420px]">
                        <EmailPreview briefIndex={activeBrief} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {phase === "done" && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                      <span className="text-xs text-[#4CAF50]">Outlook-compatible HTML ready</span>
                    </div>
                    <a href="/demo" className="text-xs text-[#888] hover:text-[#f0f0f0] flex items-center gap-1 transition-colors">
                      Full demo <ArrowRight size={12} />
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
