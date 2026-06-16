import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, ArrowRight, Zap } from "lucide-react";

const BRIEF_TEXT = "Write a summer promo email for GreenLeaf Landscaping — 20% off lawn care this week. Warm tone, urgent CTA.";
const WAVE_HEIGHTS = [35, 70, 25, 90, 50, 80, 30, 100, 55, 75, 40, 85, 45, 65, 35, 95, 50, 72, 28, 60];

const EmailPreview = () => (
  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "13px" }}>
    <div style={{ background: "#1a3a2a", padding: "22px 28px", textAlign: "center" }}>
      <p style={{ color: "#F5D000", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 5px" }}>GreenLeaf Landscaping</p>
      <h1 style={{ color: "#fff", fontSize: "18px", margin: 0, fontWeight: 700, fontFamily: "Georgia, serif" }}>Summer Special</h1>
      <p style={{ color: "#a0c4a0", fontSize: "11px", margin: "4px 0 0" }}>Limited Time Offer</p>
    </div>
    <div style={{ padding: "22px 28px", background: "#fff" }}>
      <p style={{ color: "#333", margin: "0 0 10px" }}>Hi Sarah,</p>
      <h2 style={{ color: "#1a3a2a", fontSize: "15px", margin: "0 0 10px", fontWeight: 700, lineHeight: 1.3 }}>20% Off Lawn Care — This Week Only</h2>
      <p style={{ color: "#555", lineHeight: 1.6, margin: "0 0 16px", fontSize: "12px" }}>Summer is here and your lawn deserves the best. Book any service this week and save 20% on your total.</p>
      <div style={{ background: "#f0f7f0", borderLeft: "3px solid #4CAF50", padding: "10px 14px", margin: "0 0 16px", borderRadius: "0 6px 6px 0" }}>
        <p style={{ color: "#2a5c2a", fontSize: "11px", margin: 0, fontWeight: 600 }}>✓ 20% off all lawn care this week</p>
        <p style={{ color: "#2a5c2a", fontSize: "11px", margin: "5px 0 0", fontWeight: 600 }}>✓ Free lawn assessment included</p>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0 10px" }}>
        <a href="#" style={{ background: "#4CAF50", color: "#fff", padding: "10px 24px", borderRadius: "50px", textDecoration: "none", fontSize: "12px", fontWeight: 700, display: "inline-block" }}>
          Book Now — Save 20%
        </a>
      </div>
    </div>
    <div style={{ background: "#f8f8f8", padding: "12px 28px", borderTop: "1px solid #eee", textAlign: "center" }}>
      <p style={{ color: "#999", fontSize: "10px", margin: 0 }}>GreenLeaf Landscaping · Austin, TX · <span style={{ color: "#4CAF50" }}>Unsubscribe</span></p>
    </div>
  </div>
);

const HeroMockup = () => {
  const [phase, setPhase] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [loopKey, setLoopKey] = useState(0);
  const timerRef = useRef([]);

  useEffect(() => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
    setPhase(0);
    setCharCount(0);
    timerRef.current.push(setTimeout(() => setPhase(1), 900));
    timerRef.current.push(setTimeout(() => setPhase(2), 4200));
    timerRef.current.push(setTimeout(() => setPhase(3), 5800));
    timerRef.current.push(setTimeout(() => setLoopKey((k) => k + 1), 13000));
    return () => timerRef.current.forEach(clearTimeout);
  }, [loopKey]);

  useEffect(() => {
    if (phase !== 1) { setCharCount(0); return; }
    let i = 0;
    const iv = setInterval(() => {
      i += 3;
      setCharCount(i);
      if (i >= BRIEF_TEXT.length) clearInterval(iv);
    }, 45);
    return () => clearInterval(iv);
  }, [phase]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl" style={{ background: "#141414" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border-b border-[#2a2a2a]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-[#2a2a2a] rounded-full px-3 py-1 text-[10px] text-[#555] font-mono">
          app.emailstudio.ai
        </div>
        <div className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
      </div>

      {/* Content area */}
      <div className="p-5 min-h-[340px] flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="section-label text-[10px]">Email Studio</span>
          <span className="text-[#2a2a2a] text-xs">—</span>
          <span className="text-[10px] text-[#555]">New Email</span>
        </div>

        <AnimatePresence mode="wait">
          {/* Phase 0 — Idle */}
          {phase === 0 && (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center flex-1 gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                  <Mic size={26} color="#4CAF50" />
                </div>
                <div className="absolute inset-0 rounded-full border border-[#4CAF50] opacity-40 animate-[pulse-ring_2s_ease-out_infinite]" />
                <div className="absolute inset-0 rounded-full border border-[#4CAF50] opacity-20 animate-[pulse-ring_2s_ease-out_0.5s_infinite]" />
              </div>
              <p className="text-[#555] text-xs text-center">Speak your brief or type below</p>
              <div className="w-full bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] px-3 py-2.5 text-[#444] text-xs italic">
                Describe the email you need...
              </div>
            </motion.div>
          )}

          {/* Phase 1 — Recording */}
          {phase === 1 && (
            <motion.div key="recording" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-xl p-3 border border-[#4CAF50]/30">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#4CAF50]/20 flex items-center justify-center">
                    <Mic size={14} color="#4CAF50" />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#4CAF50] animate-[pulse-ring_1.5s_ease-out_infinite]" />
                </div>
                <div className="flex items-end gap-[2px] h-7">
                  {WAVE_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className="wave-bar rounded-full bg-[#4CAF50]"
                      style={{
                        width: "3px",
                        height: `${h * 0.28}px`,
                        animationDelay: `${i * 0.04}s`,
                        animationDuration: `${0.6 + (i % 5) * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-[#4CAF50] font-medium ml-auto">Recording...</span>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-3 flex-1">
                <p className="text-[11px] text-[#888] mb-1.5">Transcribing...</p>
                <p className="text-[#f0f0f0] text-xs leading-relaxed">
                  {BRIEF_TEXT.slice(0, charCount)}
                  <span className="animate-blink border-r border-[#4CAF50] ml-px" />
                </p>
              </div>
            </motion.div>
          )}

          {/* Phase 2 — Generating */}
          {phase === 2 && (
            <motion.div key="generating" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center flex-1 gap-5">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-[#2a2a2a] border-t-[#4CAF50] animate-spin" />
                <div className="absolute inset-3 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                  <Zap size={14} color="#4CAF50" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-[#f0f0f0] text-sm font-medium mb-1">Generating your email...</p>
                <p className="text-[#555] text-xs">AI is crafting production-ready HTML</p>
              </div>
              <div className="w-full space-y-2">
                {["Applying brand colors...", "Structuring layout...", "Compiling HTML..."].map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                    <span className="text-[10px] text-[#555]">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 3 — Email Preview */}
          {phase === 3 && (
            <motion.div key="preview" initial={{ opacity: 0, scale: 0.97, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} className="flex-1 overflow-hidden rounded-lg border border-[#2a2a2a]">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-b border-[#2a2a2a]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                <span className="text-[10px] text-[#4CAF50] font-medium">Email ready</span>
                <span className="text-[10px] text-[#555] ml-auto">Outlook-compatible HTML</span>
              </div>
              <div className="overflow-auto max-h-[250px]">
                <EmailPreview />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6 lg:px-10 overflow-hidden"
    >
      {/* Green ambient glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(76,175,80,0.07) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#141414] border border-[#2a2a2a] rounded-full px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
            <span className="section-label text-[10px]">AI-Powered Email Creation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-5xl md:text-6xl lg:text-7xl text-[#f0f0f0] leading-[0.95] tracking-tight mb-6"
          >
            Your next email,<br />
            <span className="text-green-gradient">done in under a minute.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#888] text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            Describe what you want in plain English. Email Studio generates
            production-ready HTML — brand colors, your logo, Outlook-compatible —
            no templates, no designer, no drag-and-drop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00" data-testid="hero-cta-primary" className="btn-primary">
              Get Started for $29/month
              <ArrowRight size={16} />
            </a>
            <a href="#solution" data-testid="hero-cta-secondary" className="btn-secondary">
              See how it works ↓
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-5 text-sm text-[#555]"
          >
            {["Describe it, don't design it", "No drag-and-drop", "Works in Outlook", "Your brand, every time"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Animated Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Green ambient behind mockup */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(76,175,80,0.12) 0%, transparent 70%)",
              filter: "blur(20px)",
              transform: "scale(1.1)",
            }}
          />
          <HeroMockup />
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-6 bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-2.5 shadow-xl"
          >
            <p className="text-[10px] text-[#555] mb-0.5">Generated in</p>
            <p className="text-[#4CAF50] font-bold text-sm">under a minute</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-4 -right-4 bg-[#141414] border border-[#F5D000]/30 rounded-xl px-4 py-2.5 shadow-xl"
          >
            <p className="text-[10px] text-[#555] mb-0.5">Email client</p>
            <p className="text-[#F5D000] font-bold text-sm">Outlook-ready</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
