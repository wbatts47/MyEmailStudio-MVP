import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import FadeUp from "../components/FadeUp";
import { motion, AnimatePresence } from "framer-motion";

const PLANS = [
  {
    name: "Starter",
    price: 29,
    tagline: "For small businesses just getting started with email marketing.",
    features: [
      "15 emails per month",
      "1 user seat",
      "Brand Kit (colors, fonts, company info)",
      "Email History",
      "HTML & plain-text export",
      "Live email preview",
      "Revision chat",
      "Standard email support",
    ],
    notIncluded: ["Multi-user access"],
    cta: "Get Started →",
    ctaHref: "https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00",
    popular: false,
  },
  {
    name: "Pro",
    price: 79,
    tagline: "For growing teams who send email consistently.",
    features: [
      "60 emails per month",
      "3 user seats",
      "Brand Kit + custom fonts",
      "Unlimited email history",
      "Revision chat — plain-language edits",
      "Priority email + chat support",
    ],
    notIncluded: ["Multi-brand management", "White-label export"],
    cta: "Get Started →",
    ctaHref: "https://buy.stripe.com/test_4gM6oz54Qgsn32J1lwcbC01",
    popular: true,
  },
  {
    name: "Agency",
    price: 199,
    tagline: "For agencies and franchise operators managing multiple brands.",
    features: [
      "200 emails per month",
      "10 user seats",
      "Multi-brand management",
      "All Pro features",
    ],
    notIncluded: [],
    cta: "Book a Call →",
    ctaHref: "https://cal.com/myemailstudio",
    popular: false,
  },
];

const FAQS = [
  { q: "What counts as one email?", a: "Each generation request counts as one email. Revisions within the same session using Revision Chat don't count." },
  { q: "Can I cancel anytime?", a: "Yes. Cancel from your account settings at any time. No questions, no penalties." },
  { q: "What happens if I go over my monthly limit?", a: "You'll get a notification at 80% usage. You can upgrade mid-cycle or purchase add-on email packs." },
  { q: "Do I need a credit card to start?", a: "Yes. All plans are paid subscriptions — no free tier. You can cancel anytime from your account settings." },
  { q: "Can I switch plans?", a: "Yes, upgrade or downgrade anytime. Changes take effect at the next billing cycle." },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: "#0a0a0a" }} className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-10 text-center">
        <FadeUp>
          <p className="section-label mb-4">Pricing</p>
          <h1
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-5xl md:text-6xl text-[#f0f0f0] leading-tight mb-5"
          >
            Simple, transparent pricing.
          </h1>
          <p className="text-[#888] text-xl max-w-lg mx-auto mb-8">
            No surprise charges. No confusing tiers. Pay for the output, not the platform.
          </p>
        </FadeUp>
      </section>

      {/* Plans */}
      <section className="pb-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => {
            const displayPrice = plan.price;
            return (
              <FadeUp key={plan.name} delay={i * 0.1}>
                <motion.div
                  data-testid={`plan-${plan.name.toLowerCase()}`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                    plan.popular
                      ? "bg-[#0f1f10] border-[#4CAF50]/50"
                      : "bg-[#141414] border-[#2a2a2a]"
                  }`}
                  style={plan.popular ? { boxShadow: "0 0 60px rgba(76,175,80,0.12)" } : {}}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                        style={{ background: "rgba(245,208,0,0.12)", border: "1px solid rgba(245,208,0,0.4)", color: "#F5D000" }}>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-7">
                    <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-[#f0f0f0] text-2xl mb-1.5">{plan.name}</h3>
                    <p className="text-[#555] text-sm mb-5">{plan.tagline}</p>
                    <div className="flex items-end gap-1.5">
                      <span style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-5xl text-[#f0f0f0]">
                        ${displayPrice}
                      </span>
                      <span className="text-[#555] text-sm mb-2">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} color="#4CAF50" className="mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-[#888] text-sm">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 opacity-40">
                        <svg width="14" height="14" viewBox="0 0 14 14" className="mt-0.5 flex-shrink-0">
                          <path d="M3 11L11 3M3 3l8 8" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <span className="text-[#555] text-sm line-through">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.ctaHref}
                    data-testid={`cta-${plan.name.toLowerCase()}`}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                      plan.popular ? "btn-primary" : "btn-secondary"
                    }`}
                    style={{ borderRadius: "12px", ...(plan.popular ? { boxShadow: "0 0 22px rgba(76,175,80,0.3)" } : {}) }}
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-10 border-t border-[#2a2a2a]">
        <div className="max-w-2xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="section-label mb-4">FAQ</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-4xl text-[#f0f0f0]">
              Common questions
            </h2>
          </FadeUp>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.07}>
                <div className="border border-[#2a2a2a] rounded-xl overflow-hidden bg-[#141414]" data-testid={`faq-item-${i}`}>
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-[#f0f0f0] text-sm font-medium">{faq.q}</span>
                    <span className={`text-[#555] transition-transform duration-200 flex-shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[#888] text-sm leading-relaxed border-t border-[#2a2a2a]" style={{ paddingTop: "16px" }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-10 border-t border-[#2a2a2a] text-center">
        <FadeUp>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-4xl md:text-5xl text-[#f0f0f0] mb-5">
            Ready to send your next email?
          </h2>
          <p className="text-[#888] mb-8">No contracts. Cancel anytime.</p>
          <a href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00" data-testid="pricing-final-cta" className="btn-primary">
            Get Started for $29/month <ArrowRight size={16} />
          </a>
        </FadeUp>
      </section>
    </div>
  );
}
