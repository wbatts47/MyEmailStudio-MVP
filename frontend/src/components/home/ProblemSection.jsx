import { motion } from "framer-motion";
import FadeUp from "../FadeUp";

const PAINS = [
{
  icon: "⏱",
  title: "Hours lost to template editors",
  desc: "You're moving blocks around a drag-and-drop grid. It looks fine until you preview it in Outlook and everything breaks."
},
{
  icon: "💸",
  title: "Design invoices for a weekly email",
  desc: "Paying $150+ for something your customer opens and deletes in 3 seconds. The math stopped making sense years ago."
},
{
  icon: "🔧",
  title: "HTML that breaks in half your client's inboxes",
  desc: "Gmail renders it one way. Outlook renders it another. Apple Mail does its own thing. You've given up testing."
},
{
  icon: "🧩",
  title: "Brand inconsistency across sends",
  desc: "Every person on your team picks different fonts and colors. Nothing looks like it came from the same company."
}];


export default function ProblemSection() {
  return (
    <section
      data-testid="problem-section"
      className="py-24 md:py-32 px-6 lg:px-10 border-t border-[#2a2a2a]">

      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <p className="section-label mb-4">The Problem</p>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-5">

            Building emails today<br />is embarrassingly broken.
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            The tools haven't caught up with how fast businesses actually move.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PAINS.map((p, i) =>
          <FadeUp key={p.title} delay={i * 0.1}>
              <div
              data-testid={`problem-card-${i}`}
              className="bg-[#141414] rounded-2xl border border-[#2a2a2a] p-7 hover:border-[#3a3a3a] transition-colors duration-300">

                <span className="text-2xl mb-4 block">{p.icon}</span>
                <h3
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[#f0f0f0] text-xl mb-2.5">

                  {p.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </FadeUp>
          )}
        </div>

        <FadeUp delay={0.4} className="mt-12 text-center">
          <p className="text-[#555] text-sm">
            Sound familiar?{" "}
            <a href="#" className="text-[#4CAF50] hover:underline">
              There's a better way.
            </a>
          </p>
        </FadeUp>
      </div>
    </section>);

}