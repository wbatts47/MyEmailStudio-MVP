import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, AlertCircle, CheckCircle2 } from 'lucide-react';
import {
  ModuleHero, SectionHeader, CalloutCard, AccordionSection,
  StatCard, VideoPlaceholder, QuizBlock
} from '../UniversityComponents';

const industries = [
  { emoji: '💧', name: 'Pressure Washing', why: 'High repeat potential, route-based scheduling, complex pricing tiers by surface type — all perfectly suited for CleanBid.' },
  { emoji: '🏠', name: 'Soft Washing', why: 'Requires detailed job notes, chemical tracking, and follow-up scheduling. CleanBid captures all of this.' },
  { emoji: '🏡', name: 'Roof Cleaning', why: 'Safety-critical job notes, specialized pricing, before/after documentation — CleanBid handles it.' },
  { emoji: '🪟', name: 'Window Cleaning', why: 'Recurring service model with seasonal demand spikes. CleanBid\'s recurring billing and scheduling are built for this.' },
  { emoji: '🌿', name: 'Exterior Cleaning', why: 'Multi-service businesses with complex job requirements benefit most from the unified platform.' },
  { emoji: '💡', name: 'Holiday Lighting', why: 'Seasonal rush requires flawless scheduling, crew coordination, and rapid invoicing — exactly what CleanBid delivers.' },
  { emoji: '🌿', name: 'Gutter Cleaning', why: 'High volume, fast-paced, multiple jobs per day. Route optimization and dispatch efficiency are critical.' },
];

const companySizes = [
  { size: 'Owner-Operator (Solo)', icon: '👤', fit: 'Perfect Fit', color: 'text-green-400', desc: 'One person doing everything. CleanBid eliminates admin work and lets the owner focus on the job and sales.', pain: 'Drowning in paperwork while trying to grow.' },
  { size: '2–3 Truck Operation', icon: '🚛', fit: 'Ideal Customer', color: 'text-green-400', desc: 'Coordinating a small crew without systems creates chaos. CleanBid gives them structure for the first time.', pain: 'Communication breaks down. Jobs get missed.' },
  { size: '4–10 Truck Operation', icon: '🚛🚛', fit: 'High Value', color: 'text-blue-400', desc: 'At this size, operational efficiency is the difference between growing and stalling. CleanBid becomes mission-critical.', pain: 'Scaling without the right infrastructure burns cash.' },
  { size: 'Outgrowing Spreadsheets', icon: '📊', fit: 'Urgent Need', color: 'text-yellow-400', desc: 'The moment a business outgrows spreadsheets is the perfect CleanBid entry point. They\'re in pain and ready.', pain: 'Manual systems break down at scale.' },
];

const painPoints = [
  { pain: 'Missed Estimates', impact: 'High', desc: 'A prospect requests a quote. It gets written on paper, then forgotten. The lead goes cold. That\'s $500–$5,000 in lost revenue per occurrence.', solution: 'CleanBid\'s estimate pipeline ensures every quote is tracked, followed up, and converted or closed.' },
  { pain: 'Manual Scheduling', impact: 'High', desc: 'Scheduling on paper or whiteboards creates double bookings, missed appointments, and wasted drive time.', solution: 'CleanBid\'s visual calendar and automated scheduling prevents conflicts and optimizes routes.' },
  { pain: 'Lost Leads', impact: 'Critical', desc: 'Leads that aren\'t followed up within 24 hours are 80% less likely to convert. Most operators follow up when they remember.', solution: 'CleanBid automatically reminds, nurtures, and tracks every lead through the pipeline.' },
  { pain: 'Forgotten Follow-Ups', impact: 'Critical', desc: 'The #1 revenue killer. A customer says "maybe later" and never gets called back. Months pass. They hire someone else.', solution: 'Automated follow-up sequences keep CleanBid users top of mind without manual effort.' },
  { pain: 'Revenue Unpredictability', impact: 'High', desc: 'Owners have no idea what next month looks like. No pipeline visibility. No recurring revenue tracking. Just hope.', solution: 'CleanBid\'s dashboard shows pipeline value, scheduled revenue, and projected growth in real time.' },
  { pain: 'Poor Dispatch', impact: 'Medium', desc: 'Calling or texting technicians their jobs for the day is slow, error-prone, and unprofessional.', solution: 'CleanBid\'s dispatch board assigns, tracks, and updates jobs in real time with technician visibility.' },
  { pain: 'Multiple Disconnected Tools', impact: 'High', desc: 'Jobber for scheduling, QuickBooks for invoicing, Google Sheets for leads, email for communication — data lives everywhere.', solution: 'CleanBid replaces all of these with a single unified platform.' },
];

const quiz = [
  {
    question: 'Which company type is typically the most urgent CleanBid prospect?',
    options: ['A Fortune 500 facilities management company', 'An owner-operator outgrowing spreadsheets', 'A national franchise with 200 locations', 'A software development agency'],
    correct: 1,
  },
  {
    question: 'What is the #1 revenue killer for home service businesses according to this module?',
    options: ['High material costs', 'Forgotten follow-ups and cold leads', 'Hiring the wrong technicians', 'Overpriced software'],
    correct: 1,
  },
  {
    question: 'A prospect has 3 trucks and is currently using WhatsApp to dispatch technicians. How would you categorize them?',
    options: ['Too small for CleanBid', 'An ideal CleanBid customer in active pain', 'Needs enterprise software instead', 'Should use spreadsheets longer'],
    correct: 1,
  },
  {
    question: 'Which industry is NOT typically served by CleanBid?',
    options: ['Pressure washing', 'Window cleaning', 'Commercial airline catering', 'Gutter cleaning'],
    correct: 2,
  },
  {
    question: 'Why do leads that aren\'t followed up within 24 hours rarely convert?',
    options: ['They find a cheaper option', 'They lose interest or hire a competitor who followed up first', 'They decide DIY is better', 'The pricing was wrong'],
    correct: 1,
  },
];

export default function M02_IdealCustomer({ onComplete, saveQuizScore }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="02"
        title="Ideal Customer"
        description="Knowing who benefits most from CleanBid is the foundation of great sales and great customer success. This module profiles the people we serve."
        icon={Users}
        tag="Go-To-Market"
      />

      <VideoPlaceholder title="Understanding Our Ideal Customer" duration="10 min" />

      {/* Industries */}
      <SectionHeader number="1" title="Industries We Serve" subtitle="CleanBid was purpose-built for exterior home service businesses. These are the verticals we understand deeply and serve best." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 p-4 rounded-xl border border-[#2a2a2a] bg-[#141414] hover:border-green-500/30 transition-colors"
          >
            <span className="text-2xl">{ind.emoji}</span>
            <div>
              <h4 className="font-semibold text-[#f0f0f0] text-sm mb-1">{ind.name}</h4>
              <p className="text-xs text-[#888] leading-relaxed">{ind.why}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <CalloutCard type="tip" title="Multi-Service Businesses are Our Sweet Spot">
        Businesses that offer multiple exterior services (e.g., pressure washing + window cleaning + gutter cleaning) benefit most from CleanBid because they have the most scheduling complexity and the most to gain from a unified system.
      </CalloutCard>

      {/* Company Sizes */}
      <SectionHeader number="2" title="Company Size & Fit" subtitle="CleanBid serves businesses at different stages of growth. Here's how to think about fit." />
      <div className="space-y-3 mb-8">
        {companySizes.map((cs, i) => (
          <div key={i} className="p-4 rounded-xl border border-[#2a2a2a] bg-[#141414]">
            <div className="flex items-start gap-3">
              <span className="text-xl">{cs.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-[#f0f0f0] text-sm">{cs.size}</h4>
                  <span className={`text-xs font-bold ${cs.color}`}>{cs.fit}</span>
                </div>
                <p className="text-xs text-[#888] mb-2">{cs.desc}</p>
                <div className="flex items-start gap-2 bg-[#0a0a0a] rounded-lg p-2">
                  <AlertCircle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-[#666]">{cs.pain}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pain Points */}
      <SectionHeader number="3" title="Pain Points Matrix" subtitle="These are the seven core pain points our customers experience. Understanding these deeply makes you better at every customer interaction." />
      <div className="space-y-3 mb-8">
        {painPoints.map((pp, i) => (
          <AccordionSection key={i} title={`${pp.pain} — Impact: ${pp.impact}`}>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-red-400 font-semibold uppercase mb-1">The Problem</p>
                <p className="text-[#888] text-sm">{pp.desc}</p>
              </div>
              <div>
                <p className="text-xs text-green-400 font-semibold uppercase mb-1">How CleanBid Solves It</p>
                <p className="text-[#888] text-sm">{pp.solution}</p>
              </div>
            </div>
          </AccordionSection>
        ))}
      </div>

      {/* Decision Maker Profile */}
      <SectionHeader number="4" title="Decision Maker Profile" subtitle="Who signs the check? Understanding the buyer makes conversations more effective." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { role: 'Owner', likely: '90%', traits: 'Driven by growth, skeptical of cost, wants proof of ROI, busy and impatient. Respects people who respect their time.', approach: 'Lead with outcomes. Show the revenue impact quickly.' },
          { role: 'Operations Manager', likely: '7%', traits: 'Analytical, process-driven, risk-averse. Wants to understand how it integrates with existing workflow.', approach: 'Show the operational efficiency and ease of transition.' },
          { role: 'Spouse/Partner', likely: '3%', traits: 'Often manages books/admin. Cares about cost, learning curve, and customer communication.', approach: 'Emphasize ease of use and admin time savings.' },
        ].map((dm, i) => (
          <div key={i} className="p-4 rounded-xl border border-[#2a2a2a] bg-[#141414]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-[#f0f0f0] text-sm">{dm.role}</h4>
              <span className="text-xs text-green-400 font-bold">{dm.likely}</span>
            </div>
            <p className="text-xs text-[#888] mb-3">{dm.traits}</p>
            <div className="bg-[#0a0a0a] rounded-lg p-2">
              <p className="text-xs text-green-400 font-semibold mb-1">Your Approach</p>
              <p className="text-xs text-[#666]">{dm.approach}</p>
            </div>
          </div>
        ))}
      </div>

      <CalloutCard type="info" title="The Golden Rule of Customer Profiling">
        Every customer is unique, but their pain is usually the same: they're working too hard in their business and not enough on their business. CleanBid gives them that time back.
      </CalloutCard>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 2 Knowledge Check</h3>
        <QuizBlock
          moduleId={2}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(2, score, total);
            if (score / total >= 0.7) onComplete(2);
          }}
        />
      </div>
    </div>
  );
}
