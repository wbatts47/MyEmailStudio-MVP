import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import FadeUp from "../components/FadeUp";
import { motion } from "framer-motion";

const USE_CASES = [
  {
    id: "franchise",
    label: "Franchise Operators",
    headline: "Every location. One brand voice.",
    subhead: "For regional marketing managers and franchise networks.",
    painPoints: [
      "30+ locations, each sending emails that look nothing alike",
      "Franchisees don't have marketing training — they have a business to run",
      "Brand compliance is a full-time job to enforce",
      "No budget for a designer at every location",
    ],
    benefits: [
      {
        title: "Brand Kit enforces standards automatically",
        desc: "Every email your franchisees generate uses the exact colors, fonts, and company info you've defined. No exceptions.",
      },
      {
        title: "Non-marketers can send professional emails",
        desc: "Your franchisee speaks a brief out loud. Email Studio builds the email. No training required.",
      },
      {
        title: "Multi-brand management on Agency plan",
        desc: "Manage 10, 50, or 100 locations from one Agency account. Each brand keeps its own identity.",
      },
    ],
    quote: "Our franchise operators went from sending embarrassing emails to sending professional campaigns in the same week we onboarded them.",
    quoteName: "Mike R., Regional VP",
    accentColor: "#4CAF50",
  },
  {
    id: "smallbiz",
    label: "Small Business",
    headline: "Professional emails without the agency price tag.",
    subhead: "For small business owners who wear every hat.",
    painPoints: [
      "You know what you want to say but can't make it look professional",
      "Email templates take 2 hours and still look generic",
      "Your designer charges $100+ per email",
      "Outlook breaks your carefully designed email every time",
    ],
    benefits: [
      {
        title: "From idea to inbox in 30 seconds",
        desc: "Speak your brief, get production-quality HTML. No templates, no drag-and-drop, no headaches.",
      },
      {
        title: "Looks great in every inbox",
        desc: "MJML-compiled HTML works in Gmail, Outlook, Apple Mail, and every mobile client. No more broken emails.",
      },
      {
        title: "Starter plan at $29/month",
        desc: "10 emails per month with Brand Kit and history. That's less than the cost of one freelance email.",
      },
    ],
    quote: "I was spending 3 hours on every email campaign. Now it takes 15 minutes including reviewing it. That's time I spend with customers.",
    quoteName: "Jennifer L., Owner",
    accentColor: "#4CAF50",
  },
  {
    id: "agency",
    label: "Marketing Agencies",
    headline: "Scale client work without scaling headcount.",
    subhead: "For service agencies managing email for multiple clients.",
    painPoints: [
      "Writing and designing emails for 10 clients takes your entire team",
      "Each client has different brand guidelines to juggle",
      "Copy rounds and revision back-and-forth kill project timelines",
      "HTML email development is expensive and slow",
    ],
    benefits: [
      {
        title: "Multi-brand management built in",
        desc: "Each client gets their own Brand Kit. Switch between clients in seconds. No cross-contamination.",
      },
      {
        title: "Revision chat cuts back-and-forth",
        desc: "Make client-requested changes in plain English. \"Make it more casual\" is now a one-second operation.",
      },
      {
        title: "White-label HTML export",
        desc: "Export clean HTML you can present as your own work. Download and paste into any ESP your client already uses.",
      },
    ],
    quote: "We cut email production time by 70% across our client accounts. Email Studio paid for itself in the first week.",
    quoteName: "David P., Agency Director",
    accentColor: "#F5D000",
  },
];

const INDUSTRIES = [
  { name: "Pest Control", emoji: "🐛" },
  { name: "Lawn Care", emoji: "🌿" },
  { name: "Home Services", emoji: "🏠" },
  { name: "Cleaning", emoji: "✨" },
  { name: "HVAC", emoji: "❄️" },
  { name: "Plumbing", emoji: "🔧" },
  { name: "Franchises", emoji: "🏢" },
  { name: "Real Estate", emoji: "🏡" },
];

export default function UseCasesPage() {
  const [active, setActive] = useState("franchise");
  const current = USE_CASES.find((u) => u.id === active);

  return (
    <div style={{ background: "#0a0a0a" }} className="pt-24">
      <section className="py-20 px-6 lg:px-10 text-center">
        <FadeUp>
          <p className="section-label mb-4">Use Cases</p>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-5xl md:text-6xl text-[#f0f0f0] leading-tight mb-5">
            Built for businesses<br />that move fast.
          </h1>
          <p className="text-[#888] text-xl max-w-lg mx-auto">
            Email Studio works for any business that sends customer emails. These are the ones that love it most.
          </p>
        </FadeUp>
      </section>

      {/* Tab navigation */}
      <section className="px-6 lg:px-10 pb-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="flex gap-2 flex-wrap">
              {USE_CASES.map((uc) => (
                <button
                  key={uc.id}
                  data-testid={`usecase-tab-${uc.id}`}
                  onClick={() => setActive(uc.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    active === uc.id
                      ? "bg-[#4CAF50]/15 border-[#4CAF50]/50 text-[#4CAF50]"
                      : "border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a] hover:text-[#888]"
                  }`}
                >
                  {uc.label}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Active use case */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-8 md:p-12 mb-5" data-testid={`usecase-content-${active}`}>
              <p className="section-label mb-3" style={{ color: current.accentColor }}>{current.label}</p>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-3xl md:text-4xl text-[#f0f0f0] mb-2">
                {current.headline}
              </h2>
              <p className="text-[#555] mb-10">{current.subhead}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="section-label mb-4">The problem</p>
                  <ul className="space-y-3">
                    {current.painPoints.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-[#3a3a3a] mt-2.5 flex-shrink-0" />
                        <span className="text-[#888] text-sm leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="section-label mb-4">How Email Studio helps</p>
                  <div className="space-y-4">
                    {current.benefits.map((b) => (
                      <div key={b.title} className="flex items-start gap-2.5">
                        <Check size={14} color={current.accentColor} className="mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[#f0f0f0] text-sm font-medium mb-0.5">{b.title}</p>
                          <p className="text-[#888] text-xs leading-relaxed">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="mt-8 rounded-xl p-6"
                style={{ background: `${current.accentColor}08`, border: `1px solid ${current.accentColor}20` }}
              >
                <p className="text-[#888] text-sm leading-relaxed italic mb-3">"{current.quote}"</p>
                <p className="text-xs font-medium" style={{ color: current.accentColor }}>{current.quoteName}</p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00" className="btn-primary text-sm">Get Started for $29/month <ArrowRight size={14} /></a>
              <a href="/demo" className="btn-secondary text-sm">See Demo</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry tags */}
      <section className="py-20 px-6 lg:px-10 border-t border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-10">
            <p className="section-label mb-3">Industries</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-3xl md:text-4xl text-[#f0f0f0]">
              Works for any service business.
            </h2>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-wrap gap-3 justify-center">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="flex items-center gap-2 bg-[#141414] border border-[#2a2a2a] rounded-full px-4 py-2 text-sm text-[#888] hover:border-[#3a3a3a] hover:text-[#f0f0f0] transition-colors">
                  <span>{ind.emoji}</span>
                  <span>{ind.name}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
