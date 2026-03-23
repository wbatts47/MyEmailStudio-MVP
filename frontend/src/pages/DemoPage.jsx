import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Zap, ArrowRight, RotateCcw, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "../components/FadeUp";

const WAVE_HEIGHTS = [30, 65, 22, 88, 45, 75, 28, 95, 52, 70, 38, 80, 42, 60, 32, 90, 48, 68, 25, 55];

const SAMPLE_BRIEFS = [
  {
    label: "Lawn Care Promo",
    text: "Write a summer promotion email for GreenLeaf Landscaping. Offer 20% off any lawn care service booked this week. Tone: warm and urgent. Include a bold CTA button.",
  },
  {
    label: "Pest Control Reminder",
    text: "Seasonal inspection reminder for BrightShield Pest Control customers. Summer is peak season — offer 15% off if they book by end of month. Keep it professional but friendly.",
  },
  {
    label: "New Service Announcement",
    text: "Announce CleanSweep's new deep-clean package to existing customers. $50 off their first deep-clean booking. Highlight what's included. Drive bookings this month.",
  },
];

const EMAIL_DATA = [
  {
    companyName: "GreenLeaf Landscaping",
    headerBg: "#1a3a2a",
    accentColor: "#F5D000",
    heroImg: "https://images.unsplash.com/photo-1592984164493-25c84259bf9a?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    title: "Summer Special",
    subtitle: "Limited Time Offer — This Week Only",
    greeting: "Hi Sarah,",
    headline: "Your lawn deserves the best — and this week, it costs 20% less.",
    body: "Summer is here, and your lawn is the first thing people notice. Whether you need a full overhaul or just weekly maintenance, our team is ready to make your yard look incredible.",
    bullets: ["20% off all lawn care services booked this week", "Free lawn assessment with every booking", "Same-week scheduling available"],
    cta: "Book My Service — Save 20%",
    expiry: "Offer expires Sunday, June 30 · Valid for all lawn care services",
    footer: "GreenLeaf Landscaping · 1234 Garden Way, Austin, TX 78701",
  },
  {
    companyName: "BrightShield Pest Control",
    headerBg: "#0e1f30",
    accentColor: "#4CAF50",
    heroImg: "https://images.pexels.com/photos/7546775/pexels-photo-7546775.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mosquito Season Alert",
    subtitle: "Protect Your Outdoor Space This Summer",
    greeting: "Hi James,",
    headline: "Summer mosquito season is here. Is your yard protected?",
    body: "Mosquito activity peaks between June and August. Don't let pests take over your backyard. Our seasonal protection plan keeps your family safe and your outdoor space enjoyable all summer long.",
    bullets: ["15% off summer inspection booked this month", "Treatment results visible within 48 hours", "100% satisfaction guaranteed or we return for free"],
    cta: "Schedule My Inspection →",
    expiry: "Offer expires Friday, June 28 · Limited seasonal appointments",
    footer: "BrightShield Pest Control · Serving your neighborhood since 2009",
  },
  {
    companyName: "CleanSweep Home Services",
    headerBg: "#1a1a2e",
    accentColor: "#4CAF50",
    heroImg: "https://images.pexels.com/photos/6996087/pexels-photo-6996087.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "New Service Launch",
    subtitle: "Introducing Our Premium Deep-Clean",
    greeting: "Hi Rachel,",
    headline: "Introducing our Premium Deep-Clean Package",
    body: "We've listened to your feedback and built something special. Our new Deep-Clean Package covers every inch of your home — top to bottom, inside out — using eco-friendly, certified products.",
    bullets: ["$50 off your first deep-clean booking", "Move-in/move-out ready standard included", "Eco-friendly certified products throughout"],
    cta: "Book My Deep Clean →",
    expiry: "Limited spots available — book this week to secure your slot",
    footer: "CleanSweep Home Services · Trusted. Spotless. On time.",
  },
];

const EmailPreviewFull = ({ briefIndex = 1 }) => {
  const d = EMAIL_DATA[briefIndex];
  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
      <div style={{ background: d.headerBg, padding: "28px 40px", textAlign: "center" }}>
        <p style={{ color: d.accentColor, fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 6px" }}>{d.companyName}</p>
        <h1 style={{ color: "#fff", fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: "Georgia, serif" }}>{d.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: "5px 0 0" }}>{d.subtitle}</p>
      </div>
      <img src={d.heroImg} alt="" style={{ width: "100%", height: "190px", objectFit: "cover", display: "block" }} />
      <div style={{ padding: "32px 40px", background: "#fff" }}>
        <p style={{ color: "#333", margin: "0 0 14px" }}>{d.greeting}</p>
        <h2 style={{ color: d.headerBg, fontSize: "18px", margin: "0 0 14px", fontWeight: 700, lineHeight: 1.3 }}>{d.headline}</h2>
        <p style={{ color: "#555", lineHeight: 1.7, margin: "0 0 20px", fontSize: "14px" }}>{d.body}</p>
        <div style={{ background: "#f0f7f0", borderLeft: "4px solid #4CAF50", padding: "14px 18px", margin: "0 0 22px", borderRadius: "0 8px 8px 0" }}>
          {d.bullets.map((b, i) => (
            <p key={i} style={{ color: "#2a5c2a", fontSize: "13px", margin: i > 0 ? "7px 0 0" : 0, fontWeight: 600 }}>✓ {b}</p>
          ))}
        </div>
        <div style={{ textAlign: "center", margin: "28px 0 12px" }}>
          <a href="#" style={{ background: "#4CAF50", color: "#fff", padding: "15px 38px", borderRadius: "50px", textDecoration: "none", fontSize: "16px", fontWeight: 700, display: "inline-block" }}>{d.cta}</a>
          <p style={{ color: "#888", fontSize: "12px", margin: "11px 0 0" }}>{d.expiry}</p>
        </div>
      </div>
      <div style={{ background: "#f8f8f8", padding: "18px 40px", borderTop: "1px solid #eee", textAlign: "center" }}>
        <p style={{ color: "#999", fontSize: "12px", margin: 0 }}>
          {d.footer} · <span style={{ color: "#4CAF50" }}>Unsubscribe</span> · <span style={{ color: "#4CAF50" }}>View in browser</span>
        </p>
      </div>
    </div>
  );
};

export default function DemoPage() {
  const [activeBrief, setActiveBrief] = useState(1);
  const [customBrief, setCustomBrief] = useState(SAMPLE_BRIEFS[1].text);
  const [phase, setPhase] = useState("idle"); // idle | recording | loading | done
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedChars, setTranscribedChars] = useState(0);
  const timerRef = useRef([]);

  const handleBriefSelect = (i) => {
    setActiveBrief(i);
    setCustomBrief(SAMPLE_BRIEFS[i].text);
    setPhase("idle");
  };

  const handleGenerate = () => {
    setPhase("loading");
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [setTimeout(() => setPhase("done"), 2600)];
  };

  const handleReset = () => {
    setPhase("idle");
    setIsRecording(false);
  };

  const handleVoiceToggle = () => {
    if (isRecording) {
      setIsRecording(false);
      setTranscribedChars(0);
      setPhase("idle");
    } else {
      setIsRecording(true);
      setPhase("recording");
      setTranscribedChars(0);
      let i = 0;
      const iv = setInterval(() => {
        i += 3;
        setTranscribedChars(i);
        if (i >= customBrief.length) {
          clearInterval(iv);
          setTimeout(() => {
            setIsRecording(false);
            setPhase("idle");
          }, 600);
        }
      }, 40);
      timerRef.current.push(() => clearInterval(iv));
    }
  };

  return (
    <div style={{ background: "#0a0a0a" }} className="pt-24">
      <section className="py-16 px-6 lg:px-10 text-center">
        <FadeUp>
          <p className="section-label mb-4">Interactive Demo</p>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-5xl md:text-6xl text-[#f0f0f0] leading-tight mb-4">
            See it happen.
          </h1>
          <p className="text-[#888] text-xl max-w-md mx-auto">
            Pick a brief, hit generate, watch production HTML appear in seconds.
          </p>
        </FadeUp>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="rounded-2xl border border-[#2a2a2a] overflow-hidden bg-[#141414]">
              {/* Header bar */}
              <div className="flex items-center gap-3 px-5 py-3.5 bg-[#1a1a1a] border-b border-[#2a2a2a]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-xs text-[#555] font-mono flex-1 text-center">Email Studio — Live Demo</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                  <span className="text-[10px] text-[#4CAF50]">Live</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
                {/* Left: Brief input */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#2a2a2a] flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <p className="section-label">Your Brief</p>
                    <div className="flex gap-1">
                      {SAMPLE_BRIEFS.map((b, i) => (
                        <button
                          key={b.label}
                          data-testid={`brief-tab-${i}`}
                          onClick={() => handleBriefSelect(i)}
                          className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${
                            activeBrief === i
                              ? "border-[#4CAF50] text-[#4CAF50] bg-[#4CAF50]/10"
                              : "border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a]"
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Voice indicator */}
                  {isRecording && (
                    <div className="flex items-center gap-3 bg-[#0f1f10] rounded-xl border border-[#4CAF50]/30 p-3 mb-4">
                      <div className="w-7 h-7 rounded-full bg-[#4CAF50]/20 flex items-center justify-center flex-shrink-0">
                        <Mic size={13} color="#4CAF50" />
                      </div>
                      <div className="flex items-end gap-[2px] h-5 flex-1">
                        {WAVE_HEIGHTS.slice(0, 14).map((h, i) => (
                          <div key={i} className="wave-bar rounded-full bg-[#4CAF50]"
                            style={{ width: "3px", height: `${h * 0.2}px`, animationDelay: `${i * 0.05}s` }} />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#4CAF50] animate-pulse font-medium">Recording...</span>
                    </div>
                  )}

                  <textarea
                    data-testid="brief-textarea"
                    value={isRecording ? customBrief.slice(0, transcribedChars) : customBrief}
                    onChange={(e) => setCustomBrief(e.target.value)}
                    rows={6}
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-[#888] text-sm leading-relaxed resize-none outline-none focus:border-[#4CAF50]/40 transition-colors mb-5"
                    placeholder="Describe the email you need..."
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    readOnly={isRecording}
                  />

                  <div className="flex gap-3">
                    <button
                      data-testid="voice-toggle-btn"
                      onClick={handleVoiceToggle}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                        isRecording
                          ? "bg-red-500/10 border-red-500/30 text-red-400"
                          : "bg-[#1a1a1a] border-[#2a2a2a] text-[#555] hover:border-[#4CAF50]/30 hover:text-[#4CAF50]"
                      }`}
                    >
                      {isRecording ? <MicOff size={15} /> : <Mic size={15} />}
                      {isRecording ? "Stop" : "Voice"}
                    </button>
                    <button
                      data-testid="generate-btn"
                      onClick={phase === "done" ? handleReset : handleGenerate}
                      disabled={phase === "loading" || isRecording}
                      className="flex-1 btn-primary justify-center text-sm disabled:opacity-50"
                      style={{ borderRadius: "12px", padding: "12px 20px" }}
                    >
                      {phase === "loading" ? (
                        <><div className="w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />Generating...</>
                      ) : phase === "done" ? (
                        <><RotateCcw size={14} />Try Again</>
                      ) : (
                        <><Zap size={14} />Generate Email</>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right: Preview */}
                <div className="p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <p className="section-label">Preview</p>
                    {phase === "done" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                        <span className="text-xs text-[#4CAF50]">Ready</span>
                        <button
                          data-testid="download-btn"
                          className="ml-2 flex items-center gap-1.5 text-xs text-[#555] hover:text-[#888] border border-[#2a2a2a] rounded-lg px-3 py-1.5 transition-colors"
                        >
                          <Download size={11} />
                          Export HTML
                        </button>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex-1 rounded-xl border border-[#2a2a2a] overflow-hidden flex items-center justify-center min-h-[300px]">
                    <AnimatePresence mode="wait">
                      {phase === "idle" && (
                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center p-10">
                          <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center mx-auto mb-4">
                            <Zap size={20} color="#2a2a2a" />
                          </div>
                          <p className="text-[#555] text-sm mb-1.5">Your email will appear here</p>
                          <p className="text-[#3a3a3a] text-xs">Pick a brief and click Generate</p>
                        </motion.div>
                      )}
                      {phase === "recording" && (
                        <motion.div key="recording" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center p-10">
                          <div className="flex items-end gap-1 justify-center h-12 mb-4">
                            {WAVE_HEIGHTS.slice(0, 12).map((h, i) => (
                              <div key={i} className="wave-bar rounded-full bg-[#4CAF50]"
                                style={{ width: "4px", height: `${h * 0.4}px`, animationDelay: `${i * 0.06}s` }} />
                            ))}
                          </div>
                          <p className="text-[#888] text-sm">Listening to your brief...</p>
                        </motion.div>
                      )}
                      {phase === "loading" && (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center p-10">
                          <div className="relative w-14 h-14 mx-auto mb-5">
                            <div className="w-14 h-14 border-2 border-[#2a2a2a] border-t-[#4CAF50] rounded-full animate-spin" />
                            <div className="absolute inset-3 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                              <Zap size={16} color="#4CAF50" />
                            </div>
                          </div>
                          <p className="text-[#f0f0f0] text-sm font-medium mb-2">Generating your email...</p>
                          <div className="space-y-1.5 text-left max-w-[200px] mx-auto">
                            {["Analyzing brief...", "Building structure...", "Compiling HTML..."].map((s, i) => (
                              <div key={s} className="flex items-center gap-2 text-xs text-[#555]">
                                <div className="w-1 h-1 rounded-full bg-[#4CAF50]" style={{ animationDelay: `${i * 0.3}s` }} />
                                {s}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                      {phase === "done" && (
                        <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full overflow-auto max-h-[460px]">
                          <EmailPreviewFull briefIndex={activeBrief} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {phase === "done" && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-[#0f1f10] rounded-xl border border-[#4CAF50]/20">
                      <p className="text-xs text-[#888] mb-2">Want this quality every time?</p>
                      <a href="#" data-testid="demo-upgrade-cta" className="btn-primary text-xs" style={{ padding: "9px 20px" }}>
                        Start Free Trial <ArrowRight size={12} />
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
