import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, LayoutDashboard, Users, FileText, Calendar, Truck, Wrench, DollarSign, BarChart2, Settings } from 'lucide-react';
import { ModuleHero, SectionHeader, CalloutCard, AccordionSection, VideoPlaceholder, ChecklistItem, QuizBlock } from '../UniversityComponents';

const pages = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    name: 'Dashboard',
    color: 'text-green-400 bg-green-500/10 border-green-500/20',
    purpose: 'Command center — the owner\'s first view every morning.',
    users: 'Owner, Manager',
    why: 'No successful operation runs on gut feeling. The Dashboard gives owners a real-time snapshot of everything that matters: today\'s revenue, active jobs, outstanding invoices, unread leads.',
    value: 'Replaces a morning of phone calls and inbox-checking with a 60-second visual scan.',
    practices: ['Review pipeline health weekly, not just daily revenue.', 'Set revenue targets and benchmark against prior months.', 'Monitor outstanding invoices to maintain cash flow.'],
    mistakes: ['Ignoring the dashboard for days — it becomes stale.', 'Focusing only on completed revenue, not pipeline.'],
    example: 'A multi-truck owner opens the dashboard Monday morning. She sees $12,400 in scheduled revenue for the week, 3 estimates awaiting approval, and 1 overdue invoice from last week. She addresses all three before 8am.',
  },
  {
    id: 'leads',
    icon: Users,
    name: 'Leads',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    purpose: 'Track every prospect from first contact through estimate and conversion.',
    users: 'Owner, CSR, Sales Rep',
    why: 'Lost leads are lost revenue. The Leads module ensures every inquiry is captured, categorized, and followed up without manual effort.',
    value: 'A structured pipeline prevents leads from dying in inboxes or being forgotten after a busy day.',
    practices: ['Respond to new leads within 1 hour during business hours.', 'Set lead status accurately — it drives follow-up automation.', 'Tag lead sources to understand marketing ROI.'],
    mistakes: ['Leaving leads in "New" status too long.', 'Not logging call notes — team members can\'t see context.'],
    example: 'A Saturday afternoon web inquiry comes in for roof washing. Monday morning, the CSR sees it in Leads, calls the customer, and schedules an estimate. The automated follow-up saved the weekend lead.',
  },
  {
    id: 'estimates',
    icon: FileText,
    name: 'Estimates',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    purpose: 'Build, send, and track professional estimates with digital approval.',
    users: 'Owner, Estimator, Customer',
    why: 'A professional estimate is often the customer\'s first impression of your business. Sloppy estimates lose jobs. CleanBid makes every estimate look like it came from a funded company.',
    value: 'Digital approval, line item detail, photos, and e-signatures close more jobs faster.',
    practices: ['Include photos of the property in every estimate.', 'Add optional upsells as line items.', 'Set expiration dates on estimates to create urgency.'],
    mistakes: ['Sending estimates without service detail — customers get confused.', 'Forgetting to follow up on open estimates after 48 hours.'],
    example: 'An estimator builds a 3-service estimate (soft wash + gutter flush + window cleaning) on-site in 8 minutes. Customer approves two of three services via phone link before the estimator drives away.',
  },
  {
    id: 'schedule',
    icon: Calendar,
    name: 'Schedule',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    purpose: 'Visual calendar for managing all jobs across all technicians.',
    users: 'Owner, Admin, Dispatcher',
    why: 'Scheduling conflicts kill trust. A missed appointment can lose a customer forever. The Schedule page prevents double-booking and makes the week visible at a glance.',
    value: 'One view to see who\'s doing what, when, and where — for the whole team.',
    practices: ['Pre-schedule tomorrow before you leave for the day.', 'Block weather-sensitive slots and communicate proactively.', 'Group nearby jobs to minimize drive time.'],
    mistakes: ['Scheduling without considering drive time.', 'Not confirming appointments 24 hours in advance.'],
    example: 'Thursday afternoon: admin sees Friday has two overlapping jobs for the same technician. One click fixes the conflict and sends both customers updated confirmation times.',
  },
  {
    id: 'dispatch',
    icon: Truck,
    name: 'Dispatch',
    color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    purpose: 'Assign and manage field technicians in real time.',
    users: 'Dispatcher, Technician',
    why: 'Calling or texting technicians their jobs every morning is slow and error-prone. The Dispatch page assigns jobs with full context — notes, photos, addresses — and technicians see it all on their phone.',
    value: 'Fewer missed details. Faster starts. Technicians are more confident and better prepared.',
    practices: ['Assign jobs the night before to reduce morning rush.', 'Include customer notes in every job — "Dog in backyard," "Gate code is 1234."', 'Use status updates to monitor field progress in real time.'],
    mistakes: ['Not updating job status — office can\'t see field progress.', 'Dispatch without route optimization — wasted drive time.'],
    example: 'A technician opens the app at 7am. Their first 5 jobs are pre-loaded with addresses, customer notes, before photos from the estimate, and the optimized drive route. Zero calls needed.',
  },
  {
    id: 'jobs',
    icon: Wrench,
    name: 'Jobs',
    color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    purpose: 'Full lifecycle management of every job from scheduling through completion and invoice.',
    users: 'Technician, Owner, Admin',
    why: 'Jobs is where everything converges. Scheduling, dispatch, completion, documentation, and invoicing all flow through the Jobs page. It\'s the operational heartbeat of the platform.',
    value: 'A fully documented job history protects the business legally and operationally.',
    practices: ['Always log before/after photos.', 'Add detailed job notes — they become the invoice detail.', 'Mark jobs complete immediately to trigger invoicing.'],
    mistakes: ['Leaving jobs "in progress" without completing them.', 'Skipping photo documentation — leads to disputes.'],
    example: 'Technician finishes a roof wash at 2pm. Photos uploaded. Notes added. Job marked complete. Customer receives invoice by 2:05pm. Payment processed by end of day.',
  },
  {
    id: 'billing',
    icon: DollarSign,
    name: 'Billing',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    purpose: 'Send invoices, collect payments, and track accounts receivable.',
    users: 'Owner, Admin, Customer',
    why: 'Cash flow is the oxygen of a small business. The Billing page closes the loop between work done and money received — instantly, automatically, and professionally.',
    value: 'Faster payment. Better cash flow. Fewer uncomfortable follow-up conversations.',
    practices: ['Enable auto-invoice on job completion.', 'Send payment reminders at day 3, 7, and 14.', 'Review AR aging weekly — don\'t let invoices go 30+ days.'],
    mistakes: ['Manually invoicing instead of using automation.', 'Accepting only cash/check — online payments dramatically accelerate collection.'],
    example: 'End of month: owner reviews billing. 47 invoices sent this month. 42 paid. 5 with reminders sent. Total collected: $28,600. Entire review took 10 minutes.',
  },
  {
    id: 'reports',
    icon: BarChart2,
    name: 'Reports',
    color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    purpose: 'Business intelligence for data-driven decision making.',
    users: 'Owner, Manager',
    why: 'Owners who don\'t measure don\'t improve. Reports give CleanBid users the data they need to identify trends, reward performance, and plan strategically.',
    value: 'Move from gut-feeling decisions to data-backed strategy.',
    practices: ['Review revenue trends monthly, not just the current week.', 'Track technician performance to identify coaching opportunities.', 'Monitor customer acquisition cost and LTV to evaluate marketing.'],
    mistakes: ['Running reports and not acting on the insights.', 'Ignoring service mix data — highest-margin services deserve more focus.'],
    example: 'Owner pulls a quarterly report. Gutter cleaning represents 40% of jobs but only 18% of revenue. She adjusts pricing and refocuses marketing on higher-margin services.',
  },
  {
    id: 'settings',
    icon: Settings,
    name: 'Settings',
    color: 'text-gray-400 bg-gray-500/10 border-gray-500/20',
    purpose: 'Configure the platform to fit the business — services, pricing, branding, team, notifications.',
    users: 'Owner, Admin',
    why: 'CleanBid only works as well as it\'s configured. Proper settings setup is the foundation of the entire customer experience.',
    value: 'A properly configured CleanBid feels like the platform was built specifically for that business.',
    practices: ['Complete the settings checklist during onboarding.', 'Add company logo and colors to all customer-facing documents.', 'Review notification settings quarterly to avoid alert fatigue.'],
    mistakes: ['Using default pricing instead of real service prices.', 'Not adding all team members during setup.'],
    example: 'During onboarding, admin spends 45 minutes in Settings: adds logo, 8 services with pricing, 3 technicians with photos, notification preferences, and payment methods. The platform is now personalized.',
  },
];

const quiz = [
  {
    question: 'What is the primary purpose of the Dashboard page?',
    options: ['Building estimates', 'A real-time command center for daily business health', 'Dispatching technicians', 'Processing payments'],
    correct: 1,
  },
  {
    question: 'When should a technician mark a job as "complete" in CleanBid?',
    options: ['At the end of the week', 'Before driving to the job', 'Immediately upon finishing the job — to trigger invoicing', 'When the customer pays'],
    correct: 2,
  },
  {
    question: 'What is a common mistake when using the Leads page?',
    options: ['Responding too quickly', 'Leaving leads in "New" status too long', 'Adding too many tags', 'Calling customers too often'],
    correct: 1,
  },
];

export default function M05_PlatformWalkthrough({ onComplete, saveQuizScore }) {
  const [activePage, setActivePage] = useState(pages[0].id);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const active = pages.find((p) => p.id === activePage);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="05"
        title="Platform Walkthrough"
        description="Understand every major page in CleanBid — its purpose, who uses it, and how it creates business value. This module makes you the expert in the room."
        icon={Monitor}
        tag="Product"
      />

      <VideoPlaceholder title="CleanBid Platform Overview" duration="18 min" />

      <SectionHeader number="1" title="Navigate the Platform" subtitle="Select a page below to explore its purpose, best practices, and real-world examples." />

      {/* Page selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => setActivePage(page.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all border ${activePage === page.id ? `${page.color} border-current` : 'border-[#2a2a2a] text-[#888] hover:border-[#3a3a3a]'}`}
          >
            <page.icon className="w-3.5 h-3.5" />
            {page.name}
          </button>
        ))}
      </div>

      {/* Page detail */}
      {active && (
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-[#2a2a2a] rounded-2xl overflow-hidden mb-8"
        >
          <div className={`p-4 border-b border-[#2a2a2a] flex items-center gap-3 bg-[#141414]`}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${active.color}`}>
              <active.icon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-[#f0f0f0] text-base">{active.name}</h3>
              <p className="text-xs text-[#888]">Used by: {active.users}</p>
            </div>
          </div>
          <div className="p-5 space-y-5">
            <div>
              <p className="text-xs text-green-400 font-semibold uppercase tracking-wide mb-1">Purpose</p>
              <p className="text-sm text-[#ccc]">{active.purpose}</p>
            </div>
            <div>
              <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide mb-1">Why It Exists</p>
              <p className="text-sm text-[#888]">{active.why}</p>
            </div>
            <div>
              <p className="text-xs text-purple-400 font-semibold uppercase tracking-wide mb-1">Business Value</p>
              <p className="text-sm text-[#888]">{active.value}</p>
            </div>
            <div>
              <p className="text-xs text-yellow-400 font-semibold uppercase tracking-wide mb-2">Best Practices</p>
              <div className="space-y-1">
                {active.practices.map((p, i) => (
                  <ChecklistItem key={i} label={p} />
                ))}
              </div>
            </div>
            {active.mistakes && (
              <div>
                <p className="text-xs text-red-400 font-semibold uppercase tracking-wide mb-1">Common Mistakes</p>
                <ul className="space-y-1">
                  {active.mistakes.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#888]">
                      <span className="text-red-400 mt-0.5">✕</span>{m}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {active.example && (
              <div className="bg-[#0a0a0a] rounded-xl p-4 border border-[#2a2a2a]">
                <p className="text-xs text-green-400 font-semibold mb-2">Real-World Example</p>
                <p className="text-sm text-[#888] italic">{active.example}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}

      <CalloutCard type="tip" title="Learn by Doing">
        The best way to internalize each page is to walk through it during a live demo or training session. Ask a customer success manager to walk you through each page in sequence.
      </CalloutCard>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 5 Knowledge Check</h3>
        <QuizBlock
          moduleId={5}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(5, score, total);
            if (score / total >= 0.7) onComplete(5);
          }}
        />
      </div>
    </div>
  );
}
