import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, AlertTriangle, Target, Heart } from 'lucide-react';
import {
  ModuleHero, SectionHeader, CalloutCard, AccordionSection,
  StatCard, VideoPlaceholder, QuizBlock
} from '../UniversityComponents';

const problems = [
  { icon: '🏚️', title: 'Fragmented Systems', desc: 'Most operators use 4–7 different tools: one for estimates, one for scheduling, another for invoicing, a separate CRM, email for communication — none of them talk to each other.' },
  { icon: '👻', title: 'Information Silos', desc: 'When data lives in multiple places, nothing is complete anywhere. Your dispatch board doesn\'t know what the estimate said. Your CRM doesn\'t know the job was cancelled.' },
  { icon: '👁️', title: 'Owner Blind Spots', desc: 'Owners have no single view of their business. Revenue, pipeline, technician utilization, outstanding invoices — scattered across spreadsheets, apps, and memory.' },
  { icon: '💸', title: 'Revenue Leaks', desc: 'Leads fall through. Estimates expire without follow-up. Invoices sit unpaid. Recurring customers aren\'t re-booked. Each gap is money leaving the business silently.' },
  { icon: '📅', title: 'Scheduling Chaos', desc: 'Double-bookings happen. Drive time is wasted. Technicians don\'t know job details. Customers get wrong arrival times. The entire day can unravel from one scheduling error.' },
  { icon: '🔀', title: 'Dispatch Waste', desc: 'Dispatching by phone or text creates delays, confusion, and inefficiency. Without route optimization, trucks crisscross the city burning fuel and time.' },
  { icon: '🤐', title: 'Inconsistent Communication', desc: 'Customers receive updates inconsistently or not at all. No automated reminders, no post-job follow-ups, no consistent experience — every interaction depends on human memory.' },
  { icon: '💔', title: 'Follow-Up Failure', desc: 'The #1 reason home service businesses lose revenue: they simply forget to follow up. Estimates go cold. Leads go dark. Recurring clients don\'t get called back.' },
];

const quiz = [
  {
    question: 'What is the primary problem CleanBid was designed to solve?',
    options: ['High software licensing costs', 'Fragmented and disconnected business operations', 'Lack of GPS tracking for trucks', 'Difficulty hiring technicians'],
    correct: 1,
  },
  {
    question: 'Which of the following best describes a "revenue leak" in a home service business?',
    options: ['Money stolen by employees', 'Missed opportunities like expired estimates and forgotten follow-ups', 'Overpaying for materials', 'High credit card processing fees'],
    correct: 1,
  },
  {
    question: 'CleanBid was built by:',
    options: ['A software engineer with no field experience', 'A private equity firm', 'An operator who experienced the problems firsthand', 'A marketing agency'],
    correct: 2,
  },
  {
    question: 'What does CleanBid aim to be for home service businesses?',
    options: ['A payment processor', 'A social media manager', 'A single operating system', 'An HR platform'],
    correct: 2,
  },
];

export default function M01_WhyCleanBid({ onComplete, saveQuizScore }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="01"
        title="Why CleanBid Exists"
        description="Before you can sell the platform, support a customer, or train a team — you must understand why it was built. Not the features. The mission."
        icon={Zap}
        tag="Foundation"
      />

      <VideoPlaceholder title="The CleanBid Origin Story" duration="8 min" />

      {/* Section 1 */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        <SectionHeader
          number="1"
          title="The State of the Home Service Industry"
          subtitle="Home service businesses — pressure washing, window cleaning, roof cleaning — are among the hardest businesses to operate. They require coordination across sales, scheduling, field operations, and customer relationships. Yet most operators run them with a collection of disconnected tools."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <StatCard icon={AlertTriangle} value="73%" label="operators use 4+ tools" color="yellow" />
          <StatCard icon={Target} value="$34k" label="avg annual revenue leak" color="blue" />
          <StatCard icon={Zap} value="1 in 3" label="estimates never followed up" color="purple" />
          <StatCard icon={Heart} value="60%" label="churn from poor follow-up" color="green" />
        </div>

        <CalloutCard type="warning" title="The Hidden Cost of Fragmentation">
          Every disconnected tool creates friction. Friction costs time. Time costs money. Most operators don't realize how much revenue they're leaving on the table until they see it clearly for the first time.
        </CalloutCard>
      </motion.div>

      {/* Problems grid */}
      <SectionHeader number="2" title="Eight Problems CleanBid Was Built to Solve" />
      <div className="space-y-3 mb-8">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i }}
            className="flex items-start gap-4 p-4 rounded-xl border border-[#2a2a2a] bg-[#141414] hover:border-[#3a3a3a] transition-colors"
          >
            <span className="text-2xl flex-shrink-0">{p.icon}</span>
            <div>
              <h4 className="font-semibold text-[#f0f0f0] text-sm mb-1">{p.title}</h4>
              <p className="text-xs text-[#888] leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Founder story */}
      <SectionHeader number="3" title="Built by an Operator, for Operators" />
      <div className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] border border-[#2a2a2a] rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500/30 flex items-center justify-center flex-shrink-0 text-xl">🧹</div>
          <div>
            <p className="text-xs text-green-400 font-semibold uppercase tracking-wide mb-2">The Founder's Story</p>
            <p className="text-[#ccc] text-sm leading-relaxed mb-3">
              CleanBid didn't start in a boardroom. It started in the field. The founder ran a home service business and faced every one of these problems daily: losing leads because follow-ups were manual, dispatching technicians by text message, chasing invoices at month end, never having a clear picture of the business's health.
            </p>
            <p className="text-[#ccc] text-sm leading-relaxed mb-3">
              After trying every tool on the market — piecing together Jobber, Joist, Google Sheets, QuickBooks, and a dozen other apps — the conclusion was clear: <strong className="text-[#f0f0f0]">no single tool was built specifically for this type of business, at this scale, with this level of automation.</strong>
            </p>
            <p className="text-[#ccc] text-sm leading-relaxed">
              CleanBid was built to be that tool. Not a generic CRM dressed up for home services. A purpose-built operating system designed by someone who understood the chaos from the inside.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <SectionHeader number="4" title="The Mission" />
      <div className="relative overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-500/5 p-8 mb-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/5" />
        <div className="relative">
          <p className="text-[#888] text-xs uppercase tracking-widest mb-4">Our Mission</p>
          <p className="text-2xl md:text-3xl font-bold text-[#f0f0f0] leading-relaxed" style={{ fontFamily: '"DM Serif Display", serif' }}>
            "Give every home service business the same operational power that enterprise companies have — in one tool, at a price they can afford."
          </p>
        </div>
      </div>

      <AccordionSection title="Why This Matters for Sales">
        When you're selling CleanBid, you're not selling software. You're selling relief from chaos. You're selling the ability for an owner to stop being buried in operations and start building a real business. Lead with the pain — the platform is just the solution.
      </AccordionSection>

      <AccordionSection title="Why This Matters for Customer Success">
        When you're onboarding a customer, understand that they've likely been living in dysfunction for years. Be patient. Be empathetic. Show them — step by step — how their business will look different. Small wins early build confidence.
      </AccordionSection>

      <AccordionSection title="Why This Matters for Support">
        Every support ticket is someone trying to run their business. Even a simple question about scheduling means a real person is trying to serve a real customer today. Treat every interaction with urgency and care.
      </AccordionSection>

      <CalloutCard type="tip" title="Pro Tip: Start With the Problem, Not the Product">
        When introducing CleanBid to anyone — a prospect, a new hire, a partner — start with the industry problem, not the feature list. "Home service businesses lose an average of $34,000 per year to operational inefficiency" is far more powerful than "We have a dispatch board."
      </CalloutCard>

      {/* Quiz */}
      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 1 Knowledge Check</h3>
        <QuizBlock
          moduleId={1}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(1, score, total);
            if (score / total >= 0.7) onComplete(1);
          }}
        />
      </div>
    </div>
  );
}
