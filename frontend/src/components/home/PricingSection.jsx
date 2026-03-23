import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeUp from "../FadeUp";
import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Starter",
    price: 29,
    period: "mo",
    tagline: "For small businesses just getting started.",
    features: [
      "10 emails per month",
      "1 user seat",
      "Brand Kit",
      "Email History (30 days)",
      "HTML export",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaHref: "#",
    popular: false,
  },
  {
    name: "Pro",
    price: 79,
    period: "mo",
    tagline: "For growing teams who send consistently.",
    features: [
      "50 emails per month",
      "3 user seats",
      "Brand Kit + multi-font",
      "Unlimited email history",
      "ESP integrations (Gmail, Mailchimp, SendGrid)",
      "Revision chat",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    ctaHref: "#",
    popular: true,
  },
  {
    name: "Agency",
    price: 199,
    period: "mo",
    tagline: "For agencies and franchise operators.",
    features: [
      "Unlimited emails",
      "10 user seats",
      "Multi-brand management",
      "All Pro features",
      "White-label export",
      "Dedicated account manager",
      "SLA-backed priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "#",
    popular: false,
  },
];

const ROI_BULLETS = [
  "A freelance copywriter charges $75–$150 per email",
  "Email Studio costs $1.58/email on the Pro plan",
  "The average Pro subscriber saves 6+ hours per month",
];

export default function PricingSection() {
  return (
    <section
      data-testid="pricing-section"
      className="py-24 md:py-32 px-6 lg:px-10 bg-[#0d0d0d] border-t border-[#2a2a2a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="section-label mb-4">Pricing</p>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-5"
          >
            Pay for the output.<br />Save on everything else.
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            No contracts. Cancel anytime. Your first 5 emails are free.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {PLANS.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.12}>
              <motion.div
                data-testid={`pricing-card-${plan.name.toLowerCase()}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                  plan.popular
                    ? "bg-[#0f1f10] border-[#4CAF50]/50"
                    : "bg-[#141414] border-[#2a2a2a] hover:border-[#3a3a3a]"
                }`}
                style={plan.popular ? { boxShadow: "0 0 50px rgba(76,175,80,0.12)" } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border"
                      style={{
                        background: "rgba(245,208,0,0.1)",
                        border: "1px solid rgba(245,208,0,0.4)",
                        color: "#F5D000",
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    className="text-[#f0f0f0] text-2xl mb-1.5"
                  >
                    {plan.name}
                  </h3>
                  <p className="text-[#555] text-sm mb-5">{plan.tagline}</p>
                  <div className="flex items-end gap-1.5">
                    <span
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                      className="text-5xl text-[#f0f0f0]"
                    >
                      ${plan.price}
                    </span>
                    <span className="text-[#555] text-sm mb-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={14} color="#4CAF50" className="mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[#888] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                  style={{
                    borderRadius: "12px",
                    ...(plan.popular
                      ? { boxShadow: "0 0 22px rgba(76,175,80,0.3)" }
                      : {}),
                  }}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* ROI note */}
        <FadeUp delay={0.4}>
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#141414] p-7">
            <p className="section-label mb-4">The ROI is obvious</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ROI_BULLETS.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                  <p className="text-[#888] text-sm">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.5} className="text-center mt-8">
          <Link to="/pricing" className="text-sm text-[#555] hover:text-[#888] transition-colors no-underline">
            View full pricing details →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
