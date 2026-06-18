import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2, XCircle } from 'lucide-react';
import { ModuleHero, SectionHeader, CalloutCard, AccordionSection, QuizBlock } from '../UniversityComponents';

const philosophyDiffs = [
  {
    dimension: 'Design Philosophy',
    generic: 'Built for any industry. Configured to sort of fit yours.',
    cleanBid: 'Built specifically for exterior home service businesses. Every feature reflects the workflow of that industry.',
    why: 'Generic tools require workarounds. CleanBid is plug-and-play for the customer we serve.',
  },
  {
    dimension: 'Workflow Unification',
    generic: 'Multiple modules that may or may not talk to each other. Data often duplicated.',
    cleanBid: 'One unified platform where leads → estimates → jobs → invoices → recurring revenue flows automatically.',
    why: 'Fragmented tools create fragmented data. Unified workflow creates unified visibility.',
  },
  {
    dimension: 'Automation First',
    generic: 'Basic automation as an add-on or advanced tier feature.',
    cleanBid: 'Automation is core to the product — follow-ups, invoicing, scheduling, review requests happen without manual triggers.',
    why: 'Small business owners don\'t have time to trigger automations manually. CleanBid runs without intervention.',
  },
  {
    dimension: 'Recurring Revenue Focus',
    generic: 'Recurring subscriptions are a billing feature — not a growth strategy.',
    cleanBid: 'Recurring revenue is a strategic pillar. CleanBid helps businesses convert one-time customers into recurring revenue streams.',
    why: 'Recurring revenue is the most valuable type of revenue for a home service business. Most tools treat it as an afterthought.',
  },
  {
    dimension: 'Dispatch Intelligence',
    generic: 'Calendar-based scheduling with manual assignment.',
    cleanBid: 'Route-optimized dispatch board with real-time technician tracking, mobile job delivery, and status updates.',
    why: 'The difference between scheduling and intelligent dispatch is hours of wasted time per truck per week.',
  },
  {
    dimension: 'Business Visibility',
    generic: 'Reports you export at the end of the month.',
    cleanBid: 'Real-time dashboard showing pipeline, revenue, team performance, and outstanding actions — every morning.',
    why: 'Real-time visibility enables real-time decisions. Monthly reports are too late.',
  },
  {
    dimension: 'Customer Lifecycle Management',
    generic: 'CRM ends when the invoice is paid.',
    cleanBid: 'Customer relationships are managed through recurring service, retention, and upsell — not just through the transaction.',
    why: 'The job isn\'t done when the invoice is paid. The most valuable customer is the one who comes back.',
  },
  {
    dimension: 'Operator-First Design',
    generic: 'Designed by software engineers for general business use.',
    cleanBid: 'Designed by a former home service operator who experienced every problem firsthand.',
    why: 'The difference between "it works" and "it fits" is operator empathy. CleanBid was built by someone who knows the chaos.',
  },
];

const quiz = [
  {
    question: 'What is CleanBid\'s core differentiator from generic business software?',
    options: ['It is cheaper', 'It was built specifically for exterior home service businesses by a former operator', 'It has more features', 'It has better customer support hours'],
    correct: 1,
  },
  {
    question: 'Why does CleanBid prioritize recurring revenue as a strategic pillar?',
    options: ['It\'s easier to invoice', 'Recurring revenue is the most valuable revenue type for home service businesses', 'It reduces technician workload', 'It\'s required by regulations'],
    correct: 1,
  },
  {
    question: 'When positioning against competitors, CleanBid representatives should:',
    options: ['Attack the competitor\'s weaknesses aggressively', 'Explain the philosophy difference without criticizing competitors by name', 'Avoid mentioning competitors at all', 'Offer a better price immediately'],
    correct: 1,
  },
];

export default function M08_CompetitivePositioning({ onComplete, saveQuizScore }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="08"
        title="Competitive Positioning"
        description="CleanBid doesn't win by attacking competitors. It wins by clearly articulating a different philosophy — one built for operators, not administrators."
        icon={BarChart3}
        tag="Strategy"
      />

      <CalloutCard type="warning" title="The Positioning Rule">
        Never speak negatively about competitors by name. Doing so makes you look insecure and unprofessional. Instead, articulate where CleanBid's thinking differs — and let the prospect draw their own conclusions. Confidence, not aggression, wins deals.
      </CalloutCard>

      <SectionHeader number="1" title="Philosophy Comparison" subtitle="This isn't about features. It's about how we think about building software for home service businesses — and how that thinking produces a fundamentally different product." />

      <div className="space-y-4 mb-10">
        {philosophyDiffs.map((diff, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl border border-[#2a2a2a] overflow-hidden"
          >
            <div className="bg-[#141414] px-4 py-3 border-b border-[#2a2a2a]">
              <h4 className="font-semibold text-[#f0f0f0] text-sm">{diff.dimension}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a]">
              <div className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">Generic Legacy Tools</span>
                </div>
                <p className="text-xs text-[#888] leading-relaxed">{diff.generic}</p>
              </div>
              <div className="p-4 bg-green-500/5">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">CleanBid</span>
                </div>
                <p className="text-xs text-[#ccc] leading-relaxed">{diff.cleanBid}</p>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-[#2a2a2a] bg-[#0d0d0d]">
              <p className="text-xs text-[#666]"><span className="text-yellow-400 font-semibold">Why it matters: </span>{diff.why}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <SectionHeader number="2" title="How to Position in Conversation" />
      <AccordionSection title="When they mention a competitor by name" defaultOpen>
        Don't take the bait. Respond with: "I respect that tool — a lot of great businesses use it. Where CleanBid tends to win is when operators need the whole stack to work together automatically, not just scheduling. What's the main reason you're exploring alternatives today?" Then redirect to their pain.
      </AccordionSection>
      <AccordionSection title="When they ask 'how are you different?'">
        "The biggest difference is that we built CleanBid from the operator's perspective, not the software engineer's perspective. We focus specifically on exterior home service businesses and obsess over the full customer lifecycle — from the first lead all the way through recurring service and retention. Most tools stop at the invoice. We keep going."
      </AccordionSection>
      <AccordionSection title="When they ask about specific features">
        Never go feature-for-feature with a competitor. Instead: "I can speak to what CleanBid does — I'd rather show you what your operation looks like running on our platform than compare bullet points. Can I show you a quick demo?"
      </AccordionSection>
      <AccordionSection title="When they say a competitor does something you don't">
        Be honest. "That's fair — every tool has tradeoffs. What I'd ask you to consider is what matters most for where you're going. [Feature X] is useful, but it doesn't solve [the specific pain they shared]. CleanBid was built to solve that pain end-to-end."
      </AccordionSection>

      <SectionHeader number="3" title="CleanBid's Unfair Advantage" />
      <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-2xl p-6 mb-8">
        <p className="text-sm text-[#ccc] leading-relaxed mb-4">
          CleanBid's greatest competitive advantage isn't a feature. It's the fact that the platform was built by someone who ran the same business our customers run. That means every workflow reflects real-world operational knowledge — not theoretical UX design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: 'Operator-Built', desc: 'Designed by someone who lived the problem' },
            { label: 'Industry-Specific', desc: 'Not adapted for home services — built for it' },
            { label: 'Lifecycle-Complete', desc: 'Lead to recurring revenue in one system' },
          ].map((item, i) => (
            <div key={i} className="text-center p-3 bg-[#0a0a0a] rounded-xl border border-green-500/20">
              <p className="font-bold text-green-400 text-sm">{item.label}</p>
              <p className="text-xs text-[#888] mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <CalloutCard type="tip" title="The Winning Positioning Statement">
        "CleanBid is the only operating system built specifically for exterior home service businesses. It manages the full customer lifecycle — from first lead to recurring revenue — in one platform, designed by someone who ran the same business you do."
      </CalloutCard>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 8 Knowledge Check</h3>
        <QuizBlock
          moduleId={8}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(8, score, total);
            if (score / total >= 0.7) onComplete(8);
          }}
        />
      </div>
    </div>
  );
}
