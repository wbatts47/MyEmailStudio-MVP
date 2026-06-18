import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Phone, MessageSquare } from 'lucide-react';
import {
  ModuleHero, SectionHeader, CalloutCard, AccordionSection,
  ScriptBlock, VideoPlaceholder, TimelineStep, QuizBlock
} from '../UniversityComponents';

const discoveryQuestions = [
  { q: 'Walk me through a typical week in your business. What does that look like?', why: 'Opens the conversation. Lets the owner describe chaos before you frame the solution.' },
  { q: 'How are you currently managing your estimates and follow-ups?', why: 'Uncovers manual processes and likely chaos. Most say "spreadsheet" or "memory."' },
  { q: 'When a new lead comes in, what happens?', why: 'Reveals lead management (or lack of it). The answer almost always exposes a gap.' },
  { q: 'How do you dispatch your technicians today?', why: 'Identifies communication inefficiency. "We text them" is a common painful answer.' },
  { q: 'How many estimates do you send per month, and how many convert?', why: 'Reveals conversion rate and follow-up effectiveness — both usually bad.' },
  { q: 'What percentage of your customers come back for repeat service?', why: 'Opens the recurring revenue conversation. Most have no idea.' },
  { q: 'If you could fix one thing about your operations tomorrow, what would it be?', why: 'Identifies the #1 pain — build your demo around the answer.' },
  { q: 'What does a perfect week look like for your business?', why: 'Creates the vision CleanBid will deliver. Sets up your close.' },
];

const demoFlow = [
  { step: 1, title: 'Connect the Pain', desc: 'Open the demo by referencing what they told you in discovery. "You mentioned estimates get forgotten — let me show you exactly how CleanBid fixes that."' },
  { step: 2, title: 'Show the Lead Pipeline', desc: 'Start where money begins. Walk through a lead capture → estimate creation. Show how nothing falls through.' },
  { step: 3, title: 'Demo Estimate Builder', desc: 'Build a mock estimate for their actual service type with real pricing. Make it personal. Show digital signature.' },
  { step: 4, title: 'Walk the Schedule', desc: 'Show how an approved estimate becomes a scheduled job in two clicks. Highlight conflict prevention.' },
  { step: 5, title: 'Demo Dispatch Board', desc: 'Show a technician receiving jobs on mobile — full details, photos, navigation. "This replaces your morning texts."' },
  { step: 6, title: 'Show Job Completion', desc: 'Mark a job complete. Show the invoice generate automatically. "They work. You get paid. Same day."' },
  { step: 7, title: 'Reveal the Dashboard', desc: 'Zoom out. Show the business snapshot. "This is what you see every morning instead of chaos."' },
  { step: 8, title: 'Close with ROI', desc: 'Quantify what they told you they\'re losing. "You said you lose 3–4 leads per week. At your average job size of $400, that\'s $6,400 per month leaving your business."' },
];

const closingFrameworks = [
  {
    name: 'The Timeline Close',
    desc: 'Create a compelling reason to act now.',
    script: 'Based on what you\'ve shared — losing about 4 leads per week at $350 average — you\'re leaving roughly $5,600 per month on the table. Every month you wait is another $5,600. We can have you fully set up in two weeks. What would it mean to your business to stop that leak starting next month?',
  },
  {
    name: 'The Vision Close',
    desc: 'Connect to their ideal future.',
    script: 'You told me your goal is to get to 6 trucks without working 70-hour weeks. CleanBid is what makes that possible. Operators using CleanBid at your stage typically add 1–2 trucks within 18 months because they\'re not burning time on admin. Does that sound like the direction you want to go?',
  },
  {
    name: 'The Comparison Close',
    desc: 'Make the cost of inaction vs. action explicit.',
    script: 'You\'re currently spending about 12 hours a week on things CleanBid handles automatically. At your time value, that\'s roughly $900 per week. CleanBid costs $X per month. It pays for itself in the first week. Beyond that, it\'s pure efficiency gain.',
  },
];

const quiz = [
  {
    question: 'What is the best opening question for a discovery call?',
    options: ['"What\'s your budget?"', '"Walk me through a typical week in your business."', '"Have you heard of CleanBid?"', '"How many trucks do you have?"'],
    correct: 1,
  },
  {
    question: 'When should you begin the product demo?',
    options: ['Before the discovery conversation', 'After understanding their specific pain points', 'As soon as they\'re on the call', 'Only after they\'ve asked for a price'],
    correct: 1,
  },
  {
    question: 'What should you reference at the start of a demo?',
    options: ['The company\'s investor list', 'Your product roadmap', 'What the prospect told you in discovery', 'Your competitors\' weaknesses'],
    correct: 2,
  },
  {
    question: 'The Timeline Close works by:',
    options: ['Pressuring the prospect with deadlines', 'Quantifying the cost of waiting and making the ROI of acting now compelling', 'Offering a discount for quick decisions', 'Threatening to remove the offer'],
    correct: 1,
  },
  {
    question: 'What is the fundamental difference between selling CleanBid well vs. poorly?',
    options: ['Showing more features', 'Selling outcomes and relief from pain vs. listing software features', 'Having a better price', 'Being more persistent'],
    correct: 1,
  },
];

export default function M06_SalesAcademy({ onComplete, saveQuizScore }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="06"
        title="Sales Academy"
        description="Great CleanBid sales representatives don't sell software. They diagnose operational pain and prescribe relief. This module teaches you how."
        icon={TrendingUp}
        tag="Sales"
      />

      <VideoPlaceholder title="The CleanBid Sales Philosophy" duration="15 min" />

      <CalloutCard type="info" title="The Core Principle">
        You are not a software salesperson. You are a business consultant who happens to have the best tool in the industry. Lead with curiosity. Listen more than you talk. Present CleanBid as the solution to their specific pain — not a generic product.
      </CalloutCard>

      {/* Discovery */}
      <SectionHeader number="1" title="Pain Discovery Framework" subtitle="Your job in discovery is simple: get the prospect to describe their operational chaos in their own words. Don't guide them to the answer — let them live the problem." />

      <ScriptBlock
        label="Call Opener"
        tag="opener"
        text="Thanks for taking time today. Before I walk you through anything, I'd love to understand your business first — can you walk me through how operations typically work for you in a week?"
      />

      <div className="space-y-3 mb-8">
        {discoveryQuestions.map((item, i) => (
          <AccordionSection key={i} title={`Q${i + 1}: "${item.q}"`}>
            <div>
              <p className="text-xs text-green-400 font-semibold uppercase mb-1">Why This Question Works</p>
              <p className="text-[#888] text-sm">{item.why}</p>
            </div>
          </AccordionSection>
        ))}
      </div>

      <CalloutCard type="tip" title="The Golden Ratio">
        In discovery, talk 20% of the time. Listen 80%. Resist the urge to pitch. The moment you start pitching before understanding, you've lost control of the conversation.
      </CalloutCard>

      {/* Demo Flow */}
      <SectionHeader number="2" title="Demo Flow" subtitle="Your demo should feel like a private consultation, not a sales presentation. Reference their pain at every step." />

      <div className="mb-8">
        {demoFlow.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
            <TimelineStep
              step={step.step}
              title={step.title}
              description={step.desc}
              active={true}
              last={i === demoFlow.length - 1}
            />
          </motion.div>
        ))}
      </div>

      <ScriptBlock
        label="Transition from Discovery to Demo"
        tag="discovery"
        text="Everything you've described — leads getting lost, texting technicians every morning, chasing invoices — I see this constantly with businesses at your stage. Let me show you exactly what that looks like when CleanBid is running it instead."
      />

      {/* ROI Conversation */}
      <SectionHeader number="3" title="The ROI Conversation" subtitle="Before closing, make the cost of inaction visible. Use their own numbers." />

      <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-5 mb-6">
        <p className="text-xs text-green-400 font-semibold uppercase tracking-wide mb-3">ROI Calculator Framework</p>
        <div className="space-y-3 text-sm">
          {[
            ['Leads lost per week', '× Average job value', '= Monthly revenue leak from leads alone'],
            ['Hours on manual admin per week', '× Your hourly rate', '= Monthly cost of time waste'],
            ['% of customers who don\'t return', '× Average LTV', '= Revenue lost to poor retention'],
          ].map(([a, b, c], i) => (
            <div key={i} className="flex flex-wrap items-center gap-2 text-[#888]">
              <span className="bg-[#0a0a0a] border border-[#2a2a2a] rounded px-2 py-1 text-xs">{a}</span>
              <span className="text-[#555]">{b}</span>
              <span className="text-green-400 font-semibold text-xs">{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <SectionHeader number="4" title="Closing Frameworks" />
      <div className="space-y-4 mb-8">
        {closingFrameworks.map((cf, i) => (
          <div key={i} className="border border-[#2a2a2a] rounded-xl p-4 bg-[#141414]">
            <p className="font-semibold text-[#f0f0f0] text-sm mb-1">{cf.name}</p>
            <p className="text-xs text-[#888] mb-3">{cf.desc}</p>
            <ScriptBlock label="Script" tag="close" text={cf.script} />
          </div>
        ))}
      </div>

      {/* Follow-up */}
      <SectionHeader number="5" title="Follow-Up Cadence" />
      <div className="space-y-2 mb-8">
        {[
          ['Same day', 'Send meeting recap, proposal PDF, and a personal note referencing specific pain they shared.'],
          ['Day 2', 'Check-in call or text: "Did you get a chance to review the proposal?"'],
          ['Day 5', 'Send a relevant case study or testimonial from a similar business.'],
          ['Day 10', 'Final professional follow-up: "I want to be respectful of your time — is this still something you\'re considering?"'],
          ['Day 21', 'Breakup email: "I\'ll stop reaching out. If things change and you want to explore this, I\'m here."'],
        ].map(([day, action], i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-[#2a2a2a] bg-[#141414]">
            <span className="text-xs font-bold text-green-400 w-16 flex-shrink-0 mt-0.5">{day}</span>
            <p className="text-xs text-[#888]">{action}</p>
          </div>
        ))}
      </div>

      <CalloutCard type="warning" title="The #1 Follow-Up Mistake">
        Checking in with "just following up" is noise. Every follow-up should deliver value — a testimonial, a relevant insight, an answer to a question they had. Make them glad you reached out.
      </CalloutCard>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 6 Knowledge Check</h3>
        <QuizBlock
          moduleId={6}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(6, score, total);
            if (score / total >= 0.7) onComplete(6);
          }}
        />
      </div>
    </div>
  );
}
