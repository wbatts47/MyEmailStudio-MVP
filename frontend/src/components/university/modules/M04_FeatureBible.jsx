import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Search } from 'lucide-react';
import { ModuleHero, SectionHeader, CalloutCard, FeatureCard, QuizBlock } from '../UniversityComponents';

const features = [
  {
    name: 'Dispatch Board',
    purpose: 'Coordinate technicians and jobs in real time from a single visual interface.',
    problem: 'Dispatching by phone or text causes delays, miscommunication, and inefficiency.',
    user: 'Owner / Dispatcher',
    when: 'Every operational day — before and during field operations.',
    outcome: 'More jobs completed per truck per day. Fewer missed appointments. Happier technicians.',
    scenario: 'A dispatcher opens the board at 7am. All of today\'s jobs are pre-assigned with routes. A cancellation comes in — they drag-and-drop a new job into the gap in 10 seconds. The technician\'s app updates instantly.',
    tips: ['Color-code jobs by status to see the day at a glance.', 'Use notes to flag customer-specific details for technicians.', 'Pre-assign jobs the night before to reduce morning chaos.'],
  },
  {
    name: 'Estimate Builder',
    purpose: 'Create professional, branded estimates with line items, photos, and digital signature.',
    problem: 'Handwritten or verbal estimates are unprofessional, easily lost, and rarely converted.',
    user: 'Owner / Sales Rep / Estimator',
    when: 'After site visit or customer inquiry, before a job is booked.',
    outcome: 'Higher close rates. Faster approvals. Professional brand impression.',
    scenario: 'An estimator visits a property, takes photos with the CleanBid app, builds the quote on-site, and sends it before leaving the driveway. The customer approves from their phone an hour later.',
    tips: ['Include before photos in estimates to set expectations.', 'Add optional upsells (e.g., screen cleaning, gutter flush) as line items.', 'Set estimate expiration dates to create urgency.'],
  },
  {
    name: 'Lead Management',
    purpose: 'Track every inbound lead from first contact through estimate, approval, and job.',
    problem: 'Leads captured by phone, email, or web form get lost in inboxes and never followed up.',
    user: 'Owner / CSR / Sales',
    when: 'Continuously — every new inquiry enters the lead pipeline.',
    outcome: 'Zero leads fall through. Every inquiry gets a follow-up. Conversion rate increases.',
    scenario: 'A website visitor fills out a quote request form at 9pm. CleanBid creates the lead, assigns it to the owner, and sends an automated acknowledgment to the prospect. By 9am, the owner has a call scheduled.',
    tips: ['Respond to leads within 5 minutes during business hours.', 'Use lead source tracking to understand which marketing works.', 'Set automated 24-hour follow-up for uncontacted leads.'],
  },
  {
    name: 'Job Scheduling',
    purpose: 'Visually schedule jobs with conflict detection, drag-and-drop, and customer confirmations.',
    problem: 'Manual scheduling creates double bookings, gaps, and missed appointments.',
    user: 'Owner / Admin',
    when: 'After estimate approval, before dispatch.',
    outcome: 'Fully booked calendar. No conflicts. Customers receive automatic confirmations.',
    scenario: 'Admin approves an estimate. One click adds it to the schedule. The system checks for conflicts, suggests optimal time slots, and sends the customer a confirmation with the technician\'s photo.',
    tips: ['Block buffer time between jobs for travel.', 'Group nearby jobs on the same day to reduce drive time.', 'Send reminders 48h and 2h before appointments.'],
  },
  {
    name: 'Customer Portal',
    purpose: 'Give customers a self-service portal to view estimates, approve jobs, pay invoices, and track history.',
    problem: 'Customers have to call or email for basic information, consuming support time.',
    user: 'Customer',
    when: 'Any time a customer needs to interact with their account.',
    outcome: 'Reduced inbound calls. Higher customer satisfaction. Faster approvals and payments.',
    scenario: 'A customer receives an invoice notification. They log in to their portal, review the before/after photos from their job, and pay with one click. Total time: 90 seconds.',
    tips: ['Encourage portal adoption during onboarding.', 'Keep portal notifications brief and action-oriented.'],
  },
  {
    name: 'Recurring Service Plans',
    purpose: 'Create and manage scheduled recurring service plans with automated billing.',
    problem: 'Repeat business requires manual outreach, often forgotten until the customer calls.',
    user: 'Owner / Customer',
    when: 'When a customer opts into regular service (monthly, quarterly, annually).',
    outcome: 'Predictable recurring revenue. Higher lifetime customer value. Reduced churn.',
    scenario: 'A soft washing customer signs up for quarterly service. CleanBid automatically schedules and confirms all four appointments, sends invoices, and processes payment — without anyone lifting a finger.',
    tips: ['Offer a 10% discount for annual prepaid plans.', 'Present recurring options on every estimate.', 'Review recurring plan revenue in monthly reports.'],
  },
  {
    name: 'Automated Follow-Up',
    purpose: 'Trigger timed follow-up sequences for leads, estimates, and inactive customers.',
    problem: 'Manual follow-up depends on memory and gets skipped under operational pressure.',
    user: 'Owner / Sales',
    when: 'After lead capture, after estimate sent, after job completion.',
    outcome: 'Dramatically higher conversion rates. No leads go cold without at least 3 attempts.',
    scenario: 'An estimate is sent but not approved after 2 days. CleanBid automatically sends a friendly check-in. Day 5: another message with a testimonial attached. Day 8: a personal call reminder to the owner.',
    tips: ['Personalize sequence messages with the customer name and service type.', 'Keep follow-ups brief and helpful, not pushy.', 'Track which follow-up messages have the highest open rates.'],
  },
  {
    name: 'Route Optimization',
    purpose: 'Automatically organize the day\'s jobs into the most efficient driving order.',
    problem: 'Unoptimized routes cost hours per truck per week in unnecessary driving.',
    user: 'Dispatcher / Technician',
    when: 'During daily schedule creation.',
    outcome: 'Less fuel cost. More jobs per day. Happier technicians who aren\'t stuck in traffic.',
    scenario: 'Dispatcher clicks "Optimize Routes." The system reorders 8 jobs for 3 trucks based on location, cutting total drive time from 3 hours to 1.5 hours. The saved time is used to add one more job.',
    tips: ['Optimize routes the night before for a smooth morning start.', 'Account for traffic patterns in dense urban areas.'],
  },
  {
    name: 'Digital Invoicing & Payments',
    purpose: 'Send professional invoices instantly upon job completion with one-click online payment.',
    problem: 'Paper invoices are slow, easy to lose, and result in late or missed payments.',
    user: 'Owner / Customer',
    when: 'Immediately after job completion.',
    outcome: 'Faster payment. Better cash flow. Professional customer experience.',
    scenario: 'Technician marks job complete at 3pm. Customer receives an invoice with photos and a payment link by 3:05pm. Payment is received by 3:20pm.',
    tips: ['Enable auto-invoicing on job completion.', 'Offer credit card, ACH, and payment plan options.', 'Send gentle payment reminders at 3, 7, and 14 days.'],
  },
  {
    name: 'Business Dashboard',
    purpose: 'Real-time snapshot of revenue, pipeline, outstanding invoices, and team performance.',
    problem: 'Owners have no visibility into business health and make decisions on gut feeling.',
    user: 'Owner / Manager',
    when: 'Daily — the first thing opened every morning.',
    outcome: 'Informed decisions. Early warning of problems. Clear view of growth trajectory.',
    scenario: 'Owner opens the dashboard on a Monday morning. They see this week\'s scheduled revenue ($8,400), outstanding invoices ($2,100), three cold leads needing follow-up, and that their top technician completed 23 jobs last week.',
    tips: ['Review dashboard every morning — it takes 2 minutes.', 'Set revenue targets and track weekly progress.', 'Use the pipeline value to forecast next month\'s cash flow.'],
  },
  {
    name: 'Team Management',
    purpose: 'Manage technicians, their availability, performance, and job assignments.',
    problem: 'With multiple technicians, tracking performance and accountability becomes impossible.',
    user: 'Owner / Manager',
    when: 'Ongoing — daily scheduling and weekly performance review.',
    outcome: 'Accountable team. Clear performance visibility. Reward top performers with data.',
    scenario: 'Owner reviews last month\'s performance. Technician A completed 18% more jobs than Technician B with the same schedule. Owner identifies a coaching opportunity and adjusts routes to optimize both.',
    tips: ['Review technician performance weekly, not monthly.', 'Use job completion times to identify efficiency opportunities.'],
  },
  {
    name: 'Customer Review Requests',
    purpose: 'Automatically request 5-star reviews from satisfied customers after job completion.',
    problem: 'Businesses know they should ask for reviews but never remember to do it consistently.',
    user: 'Owner / Customer',
    when: 'After job completion, once payment is received.',
    outcome: 'Consistent stream of positive reviews. Better local search ranking. Social proof.',
    scenario: 'A customer pays their invoice on a Friday afternoon. Saturday morning they receive a personalized review request. By the weekend, a new 5-star Google review is live.',
    tips: ['Time review requests for 24–48 hours after payment — satisfaction is highest.', 'Personalize the message with the service performed.', 'Respond to every review, positive or negative.'],
  },
];

const quiz = [
  {
    question: 'What is the primary business outcome of the Dispatch Board feature?',
    options: ['Cleaner invoices', 'More jobs completed per truck per day', 'Easier hiring', 'Better social media presence'],
    correct: 1,
  },
  {
    question: 'What makes recurring service plans so valuable for CleanBid users?',
    options: ['They require more technicians', 'They create predictable recurring revenue and higher lifetime customer value', 'They are easier to schedule than one-time jobs', 'They reduce material costs'],
    correct: 1,
  },
  {
    question: 'How should features be described in the CleanBid context?',
    options: ['By their technical architecture', 'By the business value and outcomes they deliver', 'By their database structure', 'By their API endpoints'],
    correct: 1,
  },
];

export default function M04_FeatureBible({ onComplete, saveQuizScore }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFeature, setExpandedFeature] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = features.filter(
    (f) =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.problem.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="04"
        title="Feature Bible"
        description="Every feature in CleanBid exists to solve a real business problem. This is your reference guide — described by business value, not technical specification."
        icon={Layers}
        tag="Product"
      />

      <CalloutCard type="info" title="How to Use This Module">
        Search for any feature by name, problem, or use case. Click to expand any feature for full details. This is your go-to reference during customer conversations, demos, and onboarding.
      </CalloutCard>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
        <input
          type="text"
          placeholder="Search features by name, problem, or use case..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl pl-10 pr-4 py-3 text-sm text-[#f0f0f0] placeholder:text-[#555] focus:outline-none focus:border-green-500/40 transition-colors"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-[#f0f0f0]">
            Clear
          </button>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <SectionHeader number="1" title={`${filtered.length} Feature${filtered.length !== 1 ? 's' : ''}`} />
      </div>

      <div className="space-y-2 mb-10">
        {filtered.map((feature, i) => (
          <motion.div key={feature.name} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
            <FeatureCard
              feature={feature}
              expanded={expandedFeature === feature.name}
              onToggle={() => setExpandedFeature(expandedFeature === feature.name ? null : feature.name)}
            />
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#888]">
            <Layers className="w-8 h-8 mx-auto mb-3 text-[#444]" />
            <p className="text-sm">No features match your search.</p>
          </div>
        )}
      </div>

      <CalloutCard type="tip" title="Remember: Sell Outcomes, Not Features">
        Never lead with "CleanBid has a dispatch board." Lead with "CleanBid helps you fit one more job into every truck's day." The feature is the mechanism. The outcome is the sale.
      </CalloutCard>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 4 Knowledge Check</h3>
        <QuizBlock
          moduleId={4}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(4, score, total);
            if (score / total >= 0.7) onComplete(4);
          }}
        />
      </div>
    </div>
  );
}
