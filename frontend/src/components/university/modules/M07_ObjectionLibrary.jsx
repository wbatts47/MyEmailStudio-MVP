import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Search } from 'lucide-react';
import { ModuleHero, SectionHeader, CalloutCard, ObjectionCard, QuizBlock } from '../UniversityComponents';

const objections = [
  {
    objection: "We already use Jobber.",
    response: {
      understand: "Jobber is a solid tool and I respect that you've invested in it. A lot of our customers came from Jobber.",
      reframe: "The question isn't whether Jobber works — it's whether it works for where you're going. Jobber is great for basic scheduling. CleanBid was built for growth — automated follow-up, recurring revenue management, dispatch intelligence, and a dashboard that shows your business health in real time.",
      script: "A lot of our current customers started on Jobber. What usually brings them to us is hitting a ceiling — they want automation that runs in the background, recurring revenue tools, and a dispatch system that doesn't require manual work. Are there gaps you're noticing in what Jobber covers for your operation today?",
      followUp: "What's the one thing about your current setup that frustrates you most?",
    },
  },
  {
    objection: "It costs too much.",
    response: {
      understand: "Price is always a fair consideration, and I appreciate your honesty.",
      reframe: "The real question is what you're currently losing without it. Based on what you've shared — about 4 leads not being followed up each week at your average job size — that's roughly $1,600 per week leaving your business. CleanBid costs a fraction of that. The tool doesn't cost money. Not having the right tool does.",
      script: "I hear you. Let me ask: what are you currently spending to get new leads? And how many of those leads turn into jobs? Most businesses we work with discover they're losing far more in missed revenue than the cost of the platform. Would it help to walk through what that actually looks like for your numbers?",
      followUp: "If I could show you that CleanBid pays for itself within the first two weeks, would the investment feel different?",
    },
  },
  {
    objection: "We're too small for this.",
    response: {
      understand: "I hear that a lot from operators at your stage, and I want to be honest with you.",
      reframe: "Most of our most successful customers started exactly where you are. The businesses that grow fastest are the ones that put the right systems in place before they need them — not after. The reason small businesses stay small is often because they never invest in infrastructure. CleanBid gives you the systems of a 10-truck operation when you're at 2 trucks.",
      script: "The best time to build a solid foundation is before you're overwhelmed — not after. Our owner-operators who started small are now the fastest-growing accounts on our platform. CleanBid gives you the systems to grow without hiring three more admin people. What would 30% more revenue with the same team look like for you?",
      followUp: "Where do you want your business to be in 18 months?",
    },
  },
  {
    objection: "We're too busy to switch right now.",
    response: {
      understand: "Being busy is a good problem to have, and I completely understand that implementation feels like another thing to manage.",
      reframe: "The reason you're too busy is usually the same reason you need CleanBid. Manual processes, admin work, dispatching by text, chasing invoices — all of that takes time. Our onboarding takes 2 weeks, and we do the heavy lifting. The question is whether you want to stay busy doing admin work, or get that time back.",
      script: "What you're describing — being too busy — is exactly what CleanBid solves. Our customers typically recover 10–15 hours per week within the first 30 days. We handle onboarding, import your data, and train your team. You keep running your business. Is there a slower period coming up, or would you like to see how we've done it for businesses like yours without disruption?",
      followUp: "What would you do with 10 extra hours per week?",
    },
  },
  {
    objection: "We don't need AI.",
    response: {
      understand: "Fair enough — and I don't want to oversell AI as magic.",
      reframe: "CleanBid's intelligence isn't sci-fi AI. It's automation that learns your patterns and removes repetitive manual work. When a lead doesn't respond, the system follows up automatically. When a job is done, the invoice goes out immediately. When a recurring customer is due for service, they get reminded. That's the intelligence — it's just your business running itself.",
      script: "When I say AI, I just mean your business running on autopilot for the routine stuff. Lead follow-ups happening while you're on a roof. Invoices going out the moment a technician marks a job done. Customers getting reminded before they even call you. None of it requires you to think about it. Does that sound useful?",
      followUp: "What's the most repetitive thing you do every week that you wish you didn't have to?",
    },
  },
  {
    objection: "We're happy with what we have.",
    response: {
      understand: "That's a great position to be in. I want to be respectful of that.",
      reframe: "Most of our best customers said exactly that before they saw CleanBid. The question isn't whether what you have works — it's whether it works as well as it could. Happy is a ceiling. Growth requires systems that scale.",
      script: "That's honestly great to hear — most of our best conversations start with operators who are doing well. Our platform typically helps businesses at your stage grow 20–30% faster without adding overhead. I'm not trying to fix something that isn't broken. I'm just wondering if there's a version of your business that runs more profitably. Would it be worth 20 minutes to find out?",
      followUp: "What's your revenue goal for next year, and what's your current path to get there?",
    },
  },
  {
    objection: "I need to think about it.",
    response: {
      understand: "Of course — this is a real business decision and I respect that.",
      reframe: "I find that 'thinking about it' often means there's an unanswered question I haven't addressed yet. I'd rather help you think through it now than leave you with something unresolved.",
      script: "Absolutely — and I want to make sure you have everything you need to make the right decision. Can I ask: is there a specific concern that's making you hesitate? I'd rather know now and address it than have you wondering. Whether it's cost, timing, or how implementation works — I'm happy to work through any of it.",
      followUp: "What would need to be true for this to be a clear yes?",
    },
  },
  {
    objection: "I need to talk to my partner/spouse.",
    response: {
      understand: "That makes complete sense — big decisions should involve your whole team.",
      reframe: "I'd love to help you both get aligned. Can we schedule a call with your partner this week? I want to make sure they have the same context you do so the conversation is easy.",
      script: "Absolutely — this is a business decision that deserves the right conversation. I'd love to join a call with both of you so I can answer questions directly. It usually takes 20 minutes and makes the decision much cleaner. Is there a time this week that works for both of you?",
      followUp: "What questions do you think your partner will have? I can prepare some materials specifically for them.",
    },
  },
  {
    objection: "We'll consider it next quarter.",
    response: {
      understand: "Planning ahead is smart, and I appreciate the transparency.",
      reframe: "The challenge with next quarter is that the revenue you're leaving on the table keeps compounding. Every week without the right system is more leads lost, more invoices delayed, more customers not returning. I'm not trying to rush you — I just want you to see the actual cost of the delay.",
      script: "I hear you, and I want to be honest: every month you wait typically costs more than the platform itself. You mentioned losing 3–4 leads per week. In one quarter, that's potentially $15,000–$20,000 in missed revenue. I'd hate to see you lose that while you're planning. Is there a way to move the timeline up, even by a few weeks?",
      followUp: "What specifically needs to happen before next quarter for this to become a priority?",
    },
  },
];

const quiz = [
  {
    question: 'When a prospect says "It costs too much," what is the best response strategy?',
    options: ['Offer a discount immediately', 'Quantify what they\'re currently losing without the tool', 'Agree and end the conversation', 'List more features to justify the price'],
    correct: 1,
  },
  {
    question: 'The best follow-up question after handling any objection is:',
    options: ['Can you pay by credit card?', 'A question that uncovers the next real concern or moves toward commitment', 'Do you want to sign up now?', 'How did you hear about us?'],
    correct: 1,
  },
  {
    question: 'When a Jobber customer objects, you should:',
    options: ['Attack Jobber\'s weaknesses aggressively', 'Acknowledge Jobber, then focus on what CleanBid does differently — not better', 'Say Jobber is terrible', 'Agree that Jobber is fine and end the call'],
    correct: 1,
  },
];

export default function M07_ObjectionLibrary({ onComplete, saveQuizScore }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = objections.filter((o) =>
    o.objection.toLowerCase().includes(searchQuery.toLowerCase()) ||
    o.response.script?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="07"
        title="Objection Library"
        description="Every objection is a question in disguise. This module gives you a searchable library of proven, consultative responses to the most common objections."
        icon={Shield}
        tag="Sales"
      />

      <CalloutCard type="warning" title="The Cardinal Rule of Objection Handling">
        Never argue. Never pressure. Every response should feel like you're genuinely trying to help the prospect make the right decision — even if that means not buying right now. Consultative handling builds trust. Aggressive tactics burn it.
      </CalloutCard>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
        <input
          type="text"
          placeholder="Search objections..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl pl-10 pr-4 py-3 text-sm text-[#f0f0f0] placeholder:text-[#555] focus:outline-none focus:border-green-500/40 transition-colors"
        />
      </div>

      <SectionHeader number="1" title={`${filtered.length} Objection${filtered.length !== 1 ? 's' : ''} in Library`} />

      <div className="space-y-2 mb-10">
        {filtered.map((obj, i) => (
          <motion.div key={obj.objection} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
            <ObjectionCard
              objection={obj.objection}
              response={obj.response}
              expanded={expanded === obj.objection}
              onToggle={() => setExpanded(expanded === obj.objection ? null : obj.objection)}
            />
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#888]">
            <Shield className="w-8 h-8 mx-auto mb-3 text-[#444]" />
            <p className="text-sm">No objections match your search.</p>
          </div>
        )}
      </div>

      <SectionHeader number="2" title="The Objection Handling Formula" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {[
          { step: '01', label: 'Acknowledge', desc: 'Validate their concern without agreeing with it. "I hear that."', color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
          { step: '02', label: 'Reframe', desc: 'Shift the perspective from cost/risk to value/opportunity.', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5' },
          { step: '03', label: 'Ask Forward', desc: 'End with a question that moves the conversation forward.', color: 'text-green-400 border-green-500/30 bg-green-500/5' },
        ].map((item) => (
          <div key={item.step} className={`p-4 rounded-xl border ${item.color}`}>
            <span className={`text-xs font-bold ${item.color.split(' ')[0]}`}>{item.step}</span>
            <p className="font-semibold text-[#f0f0f0] text-sm mt-1">{item.label}</p>
            <p className="text-xs text-[#888] mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <CalloutCard type="tip" title="Practice Makes Perfect">
        Role-play these objections with your manager or a peer weekly. The reps who practice objection handling in a safe environment are always more confident on live calls.
      </CalloutCard>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Module 7 Knowledge Check</h3>
        <QuizBlock
          moduleId={7}
          questions={quiz}
          onComplete={(score, total) => {
            saveQuizScore(7, score, total);
            if (score / total >= 0.7) onComplete(7);
          }}
        />
      </div>
    </div>
  );
}
