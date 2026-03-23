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

const EmailPreview = () => (
  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "13px", color: "#333" }}>
    <div style={{ background: "#1a3a2a", padding: "24px 32px", textAlign: "center" }}>
      <p style={{ color: "#F5D000", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 5px" }}>GreenLeaf Landscaping</p>
      <h1 style={{ color: "#fff", fontSize: "20px", margin: 0, fontWeight: 700, fontFamily: "Georgia, serif" }}>Summer Special</h1>
      <p style={{ color: "#a0c4a0", fontSize: "11px", margin: "4px 0 0" }}>Limited Time Offer</p>
    </div>
    <div style={{ padding: "28px 32px", background: "#fff" }}>
      <p style={{ margin: "0 0 12px" }}>Hi Sarah,</p>
      <h2 style={{ color: "#1a3a2a", fontSize: "16px", margin: "0 0 12px", fontWeight: 700, lineHeight: 1.3 }}>20% Off Lawn Care — This Week Only</h2>
      <p style={{ color: "#555", lineHeight: 1.7, margin: "0 0 20px", fontSize: "14px" }}>
        Summer is here and your lawn deserves the best care. Whether you need a full overhaul
        or regular maintenance, our team is ready to make your yard the best on the block.
      </p>
      <div style={{ background: "#f0f7f0", borderLeft: "3px solid #4CAF50", padding: "12px 16px", margin: "0 0 20px", borderRadius: "0 8px 8px 0" }}>
        <p style={{ color: "#2a5c2a", fontSize: "13px", margin: 0, fontWeight: 600 }}>✓ 20% off all lawn care services booked this week</p>
        <p style={{ color: "#2a5c2a", fontSize: "13px", margin: "6px 0 0", fontWeight: 600 }}>✓ Free lawn assessment with every booking</p>
        <p style={{ color: "#2a5c2a", fontSize: "13px", margin: "6px 0 0", fontWeight: 600 }}>✓ Same-week scheduling available</p>
      </div>
      <div style={{ textAlign: "center", margin: "28px 0 12px" }}>
        <a href="#" style={{ background: "#4CAF50", color: "#fff", padding: "14px 32px", borderRadius: "50px", textDecoration: "none", fontSize: "15px", fontWeight: 700, display: "inline-block" }}>
          Book My Service — Save 20%
        </a>
        <p style={{ color: "#888", fontSize: "11px", margin: "10px 0 0" }}>Offer expires Sunday, June 30</p>
      </div>
    </div>
    <div style={{ background: "#f8f8f8", padding: "16px 32px", borderTop: "1px solid #eee", textAlign: "center" }}>
      <p style={{ color: "#999", fontSize: "11px", margin: 0 }}>
        GreenLeaf Landscaping · 1234 Garden Way, Austin, TX · <span style={{ color: "#4CAF50" }}>Unsubscribe</span>
      </p>
    </div>
  </div>
);

export default function DemoSection() {
  const [activeBrief, setActiveBrief] = useState(0);
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
                        <EmailPreview />
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
