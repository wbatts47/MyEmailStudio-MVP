import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { ModuleHero, SectionHeader, CalloutCard, VideoPlaceholder, TimelineStep, QuizBlock } from '../UniversityComponents';

const lifecycle = [
  {
    step: 1, title: 'Lead', label: 'CAPTURE',
    description: 'A potential customer first makes contact — through the website, a phone call, a referral, or a form submission.',
    detail: 'Who uses it: Owner / CSR | Why it matters: 70% of leads that don\'t get a rapid response go to a competitor. CleanBid captures every lead and triggers immediate follow-up.',
    revenue: 'Revenue Impact: Every missed lead = $200–$2,000 in lost potential revenue.',
    color: 'blue',
  },
  {
    step: 2, title: 'Estimate', label: 'QUOTE',
    description: 'A technician or owner visits the property (or reviews photos) and builds a professional estimate in CleanBid.',
    detail: 'Who uses it: Owner / Sales Rep / Estimator | Why it matters: Professional estimates with photos, line items, and digital signature capability convert 40% higher than handwritten quotes.',
    revenue: 'Revenue Impact: Faster estimates = more jobs won before competitors quote.',
    color: 'purple',
  },
  {
    step: 3, title: 'Approval', label: 'CONVERT',
    description: 'The customer reviews and digitally approves the estimate via email or text link — no back-and-forth required.',
    detail: 'Who uses it: Customer | Why it matters: Frictionless approval removes the biggest conversion bottleneck. Customers can approve from their phone in 30 seconds.',
    revenue: 'Revenue Impact: Reduces approval time from days to hours.',
    color: 'cyan',
  },
  {
    step: 4, title: 'Scheduling', label: 'BOOK',
    description: 'The approved job is added to the schedule. CleanBid shows availability, prevents conflicts, and sends confirmation.',
    detail: 'Who uses it: Owner / Admin / Customer | Why it matters: Automated booking confirmations reduce no-shows by up to 35% and eliminate double-booking.',
    revenue: 'Revenue Impact: More booked jobs per week without adding admin headcount.',
    color: 'green',
  },
  {
    step: 5, title: 'Dispatch', label: 'ASSIGN',
    description: 'Technicians receive their jobs for the day via the mobile app — with full job details, customer notes, and navigation.',
    detail: 'Who uses it: Dispatcher / Technician | Why it matters: Efficient dispatch means more jobs per truck per day. No phone calls needed to assign jobs.',
    revenue: 'Revenue Impact: 1 extra job per truck per day = thousands per month in additional revenue.',
    color: 'yellow',
  },
  {
    step: 6, title: 'Job Completion', label: 'EXECUTE',
    description: 'The technician completes the job, marks it done in the app, and uploads before/after photos.',
    detail: 'Who uses it: Technician | Why it matters: Real-time status updates keep the office and customer informed. Photo documentation protects against disputes.',
    revenue: 'Revenue Impact: Faster job closure means faster invoicing and payment.',
    color: 'orange',
  },
  {
    step: 7, title: 'Billing', label: 'COLLECT',
    description: 'CleanBid automatically generates and sends an invoice upon job completion. Online payment is one click.',
    detail: 'Who uses it: Owner / Customer | Why it matters: Automated invoicing eliminates the month-end billing crunch and dramatically reduces days-to-payment.',
    revenue: 'Revenue Impact: Average payment time drops from 14 days to 3 days.',
    color: 'red',
  },
  {
    step: 8, title: 'Recurring Service', label: 'RETAIN',
    description: 'CleanBid automatically schedules the next service and reminds customers, creating recurring revenue without effort.',
    detail: 'Who uses it: Owner / Customer | Why it matters: Recurring revenue is the most valuable revenue. A customer on a monthly plan is worth 10x a one-time customer.',
    revenue: 'Revenue Impact: Converting 20% of customers to recurring plans can double annual revenue.',
    color: 'emerald',
  },
  {
    step: 9, title: 'Retention', label: 'NURTURE',
    description: 'Between jobs, CleanBid keeps customers engaged with check-ins, seasonal promotions, and review requests.',
    detail: 'Who uses it: Owner / Marketing | Why it matters: It costs 5x more to acquire a new customer than retain an existing one. Happy customers refer friends.',
    revenue: 'Revenue Impact: 5% increase in retention = 25–95% increase in profit.',
    color: 'pink',
  },
  {
    step: 10, title: 'Growth', label: 'EXPAND',
    description: 'Satisfied customers become advocates. CleanBid tracks referrals and upsell opportunities across the customer base.',
    detail: 'Who uses it: Owner / Sales | Why it matters: Word-of-mouth referrals from happy customers are the cheapest, highest-converting leads available.',
    revenue: 'Revenue Impact: The entire flywheel accelerates. Growth compounds.',
    color: 'green',
  },
];

const quiz = [
  {
    question: 'At which stage do customers digitally approve their estimate?',
    options: ['Lead', 'Scheduling', 'Approval', 'Dispatch'],
    correct: 2,
  },
  {
    question: 'What is the revenue impact of automating recurring service scheduling?',
    options: ['Minimal — customers will call anyway', 'Converting 20% to recurring plans can double annual revenue', 'It only helps administrative efficiency', 'Reduces technician workload by 5%'],
    correct: 1,
  },
  {
    question: 'Why does CleanBid focus on recurring service as a lifecycle stage?',
    options: ['It\'s required by law', 'Recurring revenue is the most valuable revenue type', 'Customers prefer it over one-time services', 'It makes scheduling easier'],
    correct: 1,
  },
  {
    question: 'Automated invoicing typically reduces days-to-payment from:',
    options: ['30 days to 20 days', '14 days to 3 days', '7 days to 5 days', '60 days to 45 days'],
    correct: 1,
  },
];

const colorMap = {
  blue: 'bg-blue-500', purple: 'bg-purple-500', cyan: 'bg-cyan-500',
  green: 'bg-green-500', yellow: 'bg-yellow-500', orange: 'bg-orange-500',
  red: 'bg-red-500', emerald: 'bg-emerald-500', pink: 'bg-pink-500',
};

export default function M03_CustomerLifecycle({ onComplete, saveQuizScore }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="03"
        title="Customer Lifecycle"
        description="Every CleanBid customer moves through a predictable journey. Understanding each stage — and CleanBid's role in it — is essential for anyone on the team."
        icon={RefreshCw}
        tag="Process"
      />

      <VideoPlaceholder title="The CleanBid Customer Journey" duration="12 min" />

      <SectionHeader number="1" title="The 10-Stage Lifecycle" subtitle="This is how revenue flows through a home service business using CleanBid. Each stage is an opportunity to add value — or lose it." />

      {/* Visual flow bar */}
      <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
        {lifecycle.map((s, i) => (
          <div key={i} className="flex items-center gap-1 flex-shrink-0">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full ${colorMap[s.color]} flex items-center justify-center text-xs font-bold text-black`}>{s.step}</div>
              <span className="text-[9px] text-[#555] text-center leading-none">{s.label}</span>
            </div>
            {i < lifecycle.length - 1 && <div className="w-4 h-0.5 bg-[#2a2a2a] flex-shrink-0" />}
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mb-10">
        {lifecycle.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <TimelineStep
              step={stage.step}
              title={stage.title}
              description={stage.description}
              detail={`${stage.detail} — ${stage.revenue}`}
              active={true}
              last={i === lifecycle.length - 1}
            />
          </motion.div>
        ))}
      </div>

      <CalloutCard type="tip" title="The Flywheel Effect">
        When the CleanBid lifecycle is working properly, each stage feeds the next. Happy customers at the Growth stage generate new Leads. The business grows without proportionally increasing marketing spend.
      </CalloutCard>

      <SectionHeader number="2" title="Where Businesses Lose Revenue Without CleanBid" />
      <div className="space-y-2 mb-8">
        {[
          ['Lead → Estimate', 'No system to track leads. Owner forgets to follow up. Lead goes cold.'],
          ['Estimate → Approval', 'Paper estimate sits in a truck. Customer never gets it. Job goes to competitor.'],
          ['Scheduling → Dispatch', 'Job gets booked but technician isn\'t told. Customer waits. Trust is lost.'],
          ['Job Completion → Billing', 'Owner forgets to invoice for 2 weeks. Cash flow suffers.'],
          ['Billing → Recurring', 'Job done. Invoice paid. Customer never heard from again until they reach out.'],
          ['Recurring → Retention', 'Customer cancels because they never felt valued between appointments.'],
        ].map(([stage, desc], i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-red-500/20 bg-red-500/5">
            <span className="text-red-400 text-xs font-bold mt-0.5 flex-shrink-0">✕</span>
            <div>
              <span className="text-xs font-semibold text-red-400">{stage}</span>
              <p className="text-xs text-[#888] mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <CalloutCard type="success" title="With CleanBid, Every Gap is Closed">
        Automated follow-ups, digital estimates, instant invoicing, recurring scheduling, and retention tools close every one of these gaps. That's the ROI conversation.
      </CalloutCard>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 3 Knowledge Check</h3>
        <QuizBlock
          moduleId={3}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(3, score, total);
            if (score / total >= 0.7) onComplete(3);
          }}
        />
      </div>
    </div>
  );
}
