import FadeUp from "../components/FadeUp";
import { ArrowRight } from "lucide-react";

const TEAM = [
  { name: "Alex Chen", role: "CEO & Co-founder", bio: "Former email marketing lead at a 200-location franchise network. Built Email Studio after spending 3 years watching marketers waste hours in template editors.", initials: "AC" },
  { name: "Maria Santos", role: "CTO & Co-founder", bio: "10 years building deliverability systems and email infrastructure at enterprise scale. Obsessed with getting emails to the inbox.", initials: "MS" },
  { name: "James Park", role: "Head of AI", bio: "ML researcher turned product builder. Spent 5 years working on NLP systems before focusing specifically on structured content generation.", initials: "JP" },
  { name: "Lauren Kim", role: "Head of Design", bio: "Former agency creative director who has designed email campaigns for 50+ brands. Brings zero tolerance for emails that look broken.", initials: "LK" },
];

const STATS = [
  { value: "2,000+", label: "Businesses" },
  { value: "180k+", label: "Emails Generated" },
  { value: "1.8s", label: "Average Generation" },
  { value: "99.7%", label: "Inbox Delivery" },
];

const INVESTORS = ["Y Combinator", "Sequoia Scout", "Founders Fund", "Operator Angels"];

export default function AboutPage() {
  return (
    <div style={{ background: "#0a0a0a" }} className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="section-label mb-6">About Email Studio</p>
            <h1
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-5xl md:text-6xl lg:text-7xl text-[#f0f0f0] leading-[0.95] tracking-tight mb-8"
            >
              Built by people<br />who actually send email.
            </h1>
            <p className="text-[#888] text-xl leading-relaxed max-w-2xl">
              Email Studio exists because we spent years watching small business owners and franchise operators 
              waste hours in clunky template editors — and still end up with broken emails in Outlook.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 lg:px-10 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <p style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-4xl text-[#f0f0f0] mb-1.5">
                    {s.value}
                  </p>
                  <p className="text-[#555] text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 lg:px-10 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeUp>
            <p className="section-label mb-4">Our Mission</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-3xl md:text-4xl text-[#f0f0f0] mb-5 leading-tight">
              Make professional email creation accessible to every business.
            </h2>
            <p className="text-[#888] leading-relaxed mb-5">
              There's no reason a pest control company in Austin should have to hire a designer to send 
              a professional email to their customers. The technology exists to remove that barrier entirely.
            </p>
            <p className="text-[#888] leading-relaxed">
              Email Studio is built on a simple belief: the quality of your email shouldn't depend on 
              your budget or your design skills. It should depend on the quality of your idea.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="section-label mb-4">What We're Not</p>
            <div className="space-y-4">
              {[
                { label: "Not a template editor", desc: "We don't give you 500 templates and wish you luck. We give you a generation engine." },
                { label: "Not a general-purpose AI tool", desc: "We're purpose-built for email. Everything we do is optimized for deliverability, cross-client rendering, and conversion." },
                { label: "Not trying to replace your ESP", desc: "We work alongside your existing email platform. We create. You send." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-[#f0f0f0] text-sm font-medium mb-0.5">{item.label}</p>
                    <p className="text-[#888] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-10 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="mb-12">
            <p className="section-label mb-4">The Team</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-4xl text-[#f0f0f0]">
              Small team. Serious craft.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TEAM.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <div
                  data-testid={`team-member-${i}`}
                  className="bg-[#141414] rounded-2xl border border-[#2a2a2a] p-7 card-hover"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-sm font-bold text-[#0a0a0a]">
                      {member.initials}
                    </div>
                    <div>
                      <p className="text-[#f0f0f0] font-medium text-sm">{member.name}</p>
                      <p className="text-[#555] text-xs">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-16 px-6 lg:px-10 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="section-label mb-6">Backed By</p>
            <div className="flex flex-wrap gap-8 justify-center">
              {INVESTORS.map((inv) => (
                <span key={inv} className="text-[#3a3a3a] font-bold text-sm tracking-widest uppercase">
                  {inv}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10 border-t border-[#2a2a2a] text-center">
        <FadeUp>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-4xl md:text-5xl text-[#f0f0f0] mb-5">
            Join us.
          </h2>
          <p className="text-[#888] mb-8 max-w-md mx-auto">
            2,000 businesses are already creating better emails in less time.
            Your next email is 30 seconds away.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00" data-testid="about-cta" className="btn-primary">
              Get Started for $29/month <ArrowRight size={16} />
            </a>
            <a href="/demo" className="btn-secondary">See Demo</a>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
