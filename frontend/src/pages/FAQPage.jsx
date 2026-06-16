import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "../components/FadeUp";
import { ArrowRight } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    category: "Getting Started",
    items: [
      { q: "What is Email Studio?", a: "Email Studio is an AI-powered email creation tool that turns a voice note or a few sentences into a production-ready, cross-client HTML email in seconds. No templates, no drag-and-drop, no designer required." },
      { q: "How do I get started?", a: "Choose a plan, enter your payment details, and you're in. Describe your email, click generate, and your production HTML is ready in seconds." },
      { q: "Do I need to know HTML or coding?", a: "No. Email Studio handles everything. You describe what you want in plain English (or out loud), and the AI generates fully structured, inline-CSS HTML." },
      { q: "What kinds of emails can I create?", a: "Promotional emails, seasonal campaigns, service reminders, re-engagement campaigns, announcements, newsletters — anything you'd send to a customer list." },
    ],
  },
  {
    category: "Voice Input",
    items: [
      { q: "How does the voice input work?", a: "Tap the microphone button and speak your brief naturally. Email Studio transcribes your speech, extracts your intent and requirements, and uses that to generate the email. No special phrases needed." },
      { q: "Does it work in any language?", a: "The voice input supports English, Spanish, French, German, and Portuguese. The generated email will match the language of your brief." },
      { q: "What if I speak unclearly or make mistakes?", a: "You can review and edit the transcription before generating. Small inaccuracies in speech are handled gracefully by the AI context engine." },
    ],
  },
  {
    category: "Output & Quality",
    items: [
      { q: "Will my email look right in Outlook?", a: "Yes. Email Studio outputs MJML-compiled HTML with inline CSS — the gold standard for cross-client email compatibility. It renders correctly in Outlook 2007 through the latest version, Gmail, Apple Mail, and all major mobile clients." },
      { q: "Can I customize the output after generation?", a: "Yes. Use Revision Chat to iterate in plain English: 'make the CTA more urgent,' 'change the tone to more casual,' 'add a bullet list of benefits.' Changes apply immediately." },
      { q: "What does the email output include?", a: "Fully compiled HTML with inline CSS, responsive layout for mobile, your Brand Kit colors and fonts applied, a subject line suggestion, and a plain-text fallback version." },
    ],
  },
  {
    category: "Pricing & Plans",
    items: [
      { q: "What counts as one email?", a: "Each generation request counts as one email. Revisions to the same email using Revision Chat don't consume additional email credits." },
      { q: "Can I cancel my subscription?", a: "Yes, anytime. Cancel from your account settings — no calls, no forms, no cancellation fees." },
      { q: "Is there a free trial?", a: "Not at this time. All plans are paid subscriptions starting at $29/month. You can cancel anytime from your account settings." },
      { q: "What happens if I go over my monthly email limit?", a: "You'll receive a notification at 80% of your monthly limit. You can upgrade your plan or purchase additional email packs from your account settings." },
    ],
  },
  {
    category: "Integrations",
    items: [
      { q: "Which ESPs does Email Studio connect to?", a: "Gmail, Mailchimp, SendGrid, Klaviyo, and Outlook. We're adding Constant Contact and HubSpot next. All integrations are available on the Pro plan and above." },
      { q: "Can I use the HTML in any email platform?", a: "Yes. You can always export the HTML and use it in any platform that accepts custom HTML input — which is virtually every email platform." },
      { q: "Is the Brand Kit required?", a: "No, but recommended. If you don't set up a Brand Kit, Email Studio will generate a professional-looking email using sensible defaults based on your brief." },
    ],
  },
];

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState("Getting Started");
  const [openItem, setOpenItem] = useState(null);

  const currentItems = FAQ_CATEGORIES.find((c) => c.category === openCategory)?.items || [];

  return (
    <div style={{ background: "#0a0a0a" }} className="pt-24">
      <section className="py-20 px-6 lg:px-10 text-center">
        <FadeUp>
          <p className="section-label mb-4">FAQ</p>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-5xl md:text-6xl text-[#f0f0f0] leading-tight mb-5">
            Questions, answered.
          </h1>
          <p className="text-[#888] text-xl max-w-lg mx-auto">
            Everything you need to know about Email Studio.
          </p>
        </FadeUp>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <FadeUp className="mb-8">
            <div className="flex gap-2 flex-wrap">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.category}
                  data-testid={`faq-category-${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => { setOpenCategory(cat.category); setOpenItem(null); }}
                  className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                    openCategory === cat.category
                      ? "bg-[#4CAF50]/12 border-[#4CAF50]/40 text-[#4CAF50] font-medium"
                      : "border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a] hover:text-[#888]"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* FAQ items */}
          <motion.div key={openCategory} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="space-y-2">
              {currentItems.map((item, i) => (
                <div
                  key={item.q}
                  data-testid={`faq-item-${i}`}
                  className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#3a3a3a] transition-colors"
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    onClick={() => setOpenItem(openItem === `${openCategory}-${i}` ? null : `${openCategory}-${i}`)}
                  >
                    <span className="text-[#f0f0f0] text-sm font-medium">{item.q}</span>
                    <motion.span
                      animate={{ rotate: openItem === `${openCategory}-${i}` ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#555] flex-shrink-0"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openItem === `${openCategory}-${i}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[#888] text-sm leading-relaxed border-t border-[#2a2a2a] pt-4">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Still have questions */}
          <FadeUp delay={0.3} className="mt-12">
            <div className="bg-[#141414] rounded-2xl border border-[#2a2a2a] p-8 text-center">
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-2xl text-[#f0f0f0] mb-3">
                Still have questions?
              </h3>
              <p className="text-[#888] text-sm mb-6">
                Our team responds within 2 hours on business days.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="mailto:hello@emailstudio.ai" data-testid="contact-email" className="btn-primary text-sm" style={{ padding: "11px 24px" }}>
                  Email Us <ArrowRight size={14} />
                </a>
                <a href="/demo" className="btn-secondary text-sm" style={{ padding: "10px 24px" }}>
                  Try The Demo
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
