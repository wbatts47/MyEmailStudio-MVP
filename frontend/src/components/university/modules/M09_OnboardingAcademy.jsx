import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, AlertTriangle, CheckCircle2 } from 'lucide-react';
import {
  ModuleHero, SectionHeader, CalloutCard, AccordionSection,
  ChecklistItem, TimelineStep, VideoPlaceholder, QuizBlock
} from '../UniversityComponents';

const onboardingPhases = [
  {
    phase: 'Discovery Call',
    duration: 'Day 0 — Before Account Creation',
    goal: 'Understand the business before configuring anything.',
    steps: [
      'Business type, services offered, and pricing structure',
      'Current tech stack — what they use and what stays',
      'Team size, technician count, service area',
      'Current biggest operational pain (the anchor for onboarding)',
      'Definition of success — what does "working" look like for them?',
    ],
    tip: 'The best onboarding starts here. Configure the platform to their specific business — not a generic setup.',
  },
  {
    phase: 'Account Setup & Configuration',
    duration: 'Days 1–3',
    goal: 'Get the platform personalized and ready before training.',
    steps: [
      'Upload company logo and brand colors',
      'Add all services with correct pricing',
      'Configure service areas',
      'Add all team members with roles',
      'Set notification and communication preferences',
      'Configure payment processing',
      'Set up email/SMS templates',
    ],
    tip: 'Do this with the customer, not for them. They learn the settings page in the process.',
  },
  {
    phase: 'Data Import',
    duration: 'Days 2–4',
    goal: 'Get their history and contacts into CleanBid.',
    steps: [
      'Import existing customer list (CSV from prior CRM)',
      'Import open estimates and pending jobs',
      'Migrate any recurring service agreements',
      'Import key contact notes and history',
      'Verify data accuracy after import',
    ],
    tip: 'Data import anxiety is common. Reassure the customer that data can always be cleaned up after import — getting it in is the priority.',
  },
  {
    phase: 'Team Training',
    duration: 'Days 4–7',
    goal: 'Every person who will use CleanBid must be trained before go-live.',
    steps: [
      'Owner training: dashboard, pipeline, reports',
      'Admin/CSR training: leads, estimates, scheduling',
      'Dispatcher training: dispatch board, job management',
      'Technician training: mobile app, job updates, photos',
      'Q&A session for each role',
    ],
    tip: 'Train by role, not all at once. A technician doesn\'t need to know how to build an estimate. Keep it focused.',
  },
  {
    phase: 'Soft Launch',
    duration: 'Days 7–10',
    goal: 'Run the first real jobs through CleanBid with your support.',
    steps: [
      'Create first real estimate in CleanBid',
      'Book first job through the schedule',
      'Dispatch first technician through the app',
      'Complete first job and send first invoice',
      'Celebrate small wins with the team',
    ],
    tip: 'Be available during the first week. Real-world questions happen in real-world moments — not in training.',
  },
  {
    phase: 'Full Go-Live',
    duration: 'Day 10–14',
    goal: 'Full operation running through CleanBid, old tools retired.',
    steps: [
      'All new leads enter CleanBid only',
      'All scheduling done through CleanBid',
      'All invoices sent through CleanBid',
      'Prior tools decommissioned',
      'Check-in call with customer to address any gaps',
    ],
    tip: 'The transition to full go-live is where most customers need encouragement. Old habits die hard. Be their coach.',
  },
];

const firstMonthChecks = [
  { week: 'Week 1', items: ['First estimate sent and approved', 'First job dispatched through app', 'First invoice sent automatically', 'Team trained and using app', 'Dashboard reviewed daily'] },
  { week: 'Week 2', items: ['Recurring service plans set up', 'Follow-up automations activated', 'Customer portal tested', 'First review request sent', 'Pipeline reviewed with owner'] },
  { week: 'Week 3', items: ['Route optimization running', 'All historical data migrated', 'First monthly report reviewed', 'Pricing adjustments made if needed', 'Customer check-in call completed'] },
  { week: 'Week 4', items: ['30-day success metrics reviewed', 'Revenue comparison: pre vs post CleanBid', 'Referral program introduced', 'Feature adoption checked', 'Second month plan set'] },
];

const warningSignals = [
  { signal: 'Login frequency drops', action: 'Reach out immediately. Low engagement leads to churn. Find out what\'s blocking them.' },
  { signal: 'Estimates not being sent', action: 'Old habits — likely still using old system. Re-train on estimate flow with positive framing.' },
  { signal: 'Dispatch still happening by text', action: 'Common. Show the time savings again. Get the technicians using the mobile app immediately.' },
  { signal: 'Invoices not going out same-day', action: 'Auto-invoicing may not be configured. Fix the setting. Walk through the billing flow again.' },
  { signal: 'No recurring plans set up after week 2', action: 'This is the #1 missed revenue opportunity. Book a session specifically on recurring service configuration.' },
  { signal: 'No reviews requested after month 1', action: 'Review requests drive referrals. Turn it on and set it to automatic.' },
];

const quiz = [
  {
    question: 'What is the most important thing to do before configuring a customer\'s CleanBid account?',
    options: ['Send them a tutorial video', 'Run a discovery call to understand their specific business', 'Set up their payment processing', 'Import their customer list first'],
    correct: 1,
  },
  {
    question: 'When training a team on CleanBid, what is the recommended approach?',
    options: ['Train everyone together in one session', 'Train by role — each person learns what\'s relevant to them', 'Have them watch videos independently', 'Start with the most advanced features'],
    correct: 1,
  },
  {
    question: 'A customer in Week 2 still hasn\'t set up recurring service plans. What should you do?',
    options: ['Wait and see if they figure it out', 'Book a dedicated session specifically on recurring service configuration', 'Send a help article', 'Assume they don\'t need it'],
    correct: 1,
  },
  {
    question: 'What is a key warning signal that a customer may churn?',
    options: ['They ask too many questions', 'Login frequency drops significantly', 'They have fewer technicians', 'They are asking about pricing'],
    correct: 1,
  },
];

export default function M09_OnboardingAcademy({ onComplete, saveQuizScore }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="09"
        title="Onboarding Academy"
        description="A successful CleanBid customer is made in the first 30 days. This module teaches you how to run a world-class onboarding experience from day zero."
        icon={Rocket}
        tag="Customer Success"
      />

      <VideoPlaceholder title="The CleanBid Onboarding Playbook" duration="20 min" />

      <CalloutCard type="info" title="The Onboarding Mindset">
        You are not just setting up software. You are transforming how a business operates. Take it seriously. Be proactive. Anticipate their problems. The first 30 days determine whether this customer stays for a year — or churns in 60 days.
      </CalloutCard>

      <SectionHeader number="1" title="6-Phase Onboarding Process" subtitle="Every customer goes through six phases. Don't skip phases. Don't rush phases. Each one builds the foundation for the next." />

      <div className="mb-10">
        {onboardingPhases.map((phase, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
            <AccordionSection title={`Phase ${i + 1}: ${phase.phase} — ${phase.duration}`} defaultOpen={i === 0}>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-green-400 font-semibold uppercase mb-1">Goal</p>
                  <p className="text-sm text-[#888]">{phase.goal}</p>
                </div>
                <div>
                  <p className="text-xs text-blue-400 font-semibold uppercase mb-2">Steps</p>
                  <div className="space-y-1">
                    {phase.steps.map((step, j) => (
                      <ChecklistItem key={j} label={step} />
                    ))}
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-3 border border-yellow-500/20">
                  <p className="text-xs text-yellow-400 font-semibold mb-1">CSM Tip</p>
                  <p className="text-xs text-[#888]">{phase.tip}</p>
                </div>
              </div>
            </AccordionSection>
          </motion.div>
        ))}
      </div>

      {/* First Month */}
      <SectionHeader number="2" title="First Month: Week-by-Week Milestones" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {firstMonthChecks.map((week, i) => (
          <div key={i} className="border border-[#2a2a2a] rounded-xl p-4 bg-[#141414]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <span className="text-xs font-bold text-green-400">{i + 1}</span>
              </div>
              <span className="text-sm font-bold text-[#f0f0f0]">{week.week}</span>
            </div>
            <div className="space-y-1">
              {week.items.map((item, j) => (
                <ChecklistItem key={j} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Success Metrics */}
      <SectionHeader number="3" title="Success Metrics at 30 Days" />
      <div className="space-y-2 mb-8">
        {[
          { metric: 'All leads entering through CleanBid', target: '100%' },
          { metric: 'Estimates sent digitally with photos', target: '100%' },
          { metric: 'Jobs dispatched through app', target: '100%' },
          { metric: 'Invoices sent same-day as job completion', target: '>90%' },
          { metric: 'Customers with recurring service plans', target: '>15%' },
          { metric: 'Reviews requested post-completion', target: '100%' },
          { metric: 'Dashboard reviewed daily by owner', target: '>5x/week' },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-[#2a2a2a] bg-[#141414]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-sm text-[#ccc]">{item.metric}</span>
            </div>
            <span className="text-xs font-bold text-green-400 flex-shrink-0 ml-3">{item.target}</span>
          </div>
        ))}
      </div>

      {/* Warning Signals */}
      <SectionHeader number="4" title="Warning Signals & Intervention" />
      <div className="space-y-3 mb-8">
        {warningSignals.map((ws, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-400 mb-1">{ws.signal}</p>
              <p className="text-xs text-[#888]">{ws.action}</p>
            </div>
          </div>
        ))}
      </div>

      <CalloutCard type="success" title="The Onboarding Success Formula">
        The best predictor of a successful CleanBid customer is how many features they adopt in the first 30 days. Adoption = retention. Your job is to maximize feature adoption before the 30-day mark.
      </CalloutCard>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 9 Knowledge Check</h3>
        <QuizBlock
          moduleId={9}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(9, score, total);
            if (score / total >= 0.7) onComplete(9);
          }}
        />
      </div>
    </div>
  );
}
