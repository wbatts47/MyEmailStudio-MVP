import { useState } from 'react';
import { ChevronDown, ChevronRight, AlertCircle, Lightbulb, Info, CheckCircle2, Play, BookOpen, Target, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CalloutCard({ type = 'info', title, children }) {
  const styles = {
    info: { border: 'border-blue-500/30', bg: 'bg-blue-500/5', icon: <Info className="w-4 h-4 text-blue-400" />, title: 'text-blue-400' },
    tip: { border: 'border-green-500/30', bg: 'bg-green-500/5', icon: <Lightbulb className="w-4 h-4 text-green-400" />, title: 'text-green-400' },
    warning: { border: 'border-yellow-500/30', bg: 'bg-yellow-500/5', icon: <AlertCircle className="w-4 h-4 text-yellow-400" />, title: 'text-yellow-400' },
    success: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />, title: 'text-emerald-400' },
  };
  const s = styles[type];
  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} p-4 my-4`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex-shrink-0">{s.icon}</div>
        <div>
          {title && <p className={`font-semibold text-sm mb-1 ${s.title}`}>{title}</p>}
          <div className="text-[#888] text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function AccordionSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-[#2a2a2a] rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#1a1a1a] transition-colors"
      >
        <span className="font-semibold text-[#f0f0f0] text-sm">{title}</span>
        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronRight className="w-4 h-4 text-[#888]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 pt-1 border-t border-[#2a2a2a] text-[#888] text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function VideoPlaceholder({ title, duration = '12 min' }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-[#2a2a2a] aspect-video flex items-center justify-center my-6 group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
      <div className="text-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mx-auto mb-3"
        >
          <Play className="w-6 h-6 text-green-400 ml-1" />
        </motion.div>
        <p className="text-[#f0f0f0] font-semibold text-sm">{title}</p>
        <p className="text-[#888] text-xs mt-1">{duration} • Coming Soon</p>
      </div>
    </div>
  );
}

export function StatCard({ icon: Icon, value, label, color = 'green' }) {
  const colors = {
    green: 'text-green-400 bg-green-500/10 border-green-500/20',
    blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    yellow: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  };
  return (
    <div className={`rounded-xl border p-4 flex items-center gap-3 ${colors[color]}`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#f0f0f0]">{value}</p>
        <p className="text-xs text-[#888]">{label}</p>
      </div>
    </div>
  );
}

export function TimelineStep({ step, title, description, detail, active, last }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 ${active ? 'bg-green-500 text-black' : 'bg-[#1a1a1a] border-2 border-[#2a2a2a] text-[#888]'}`}
        >
          {step}
        </motion.div>
        {!last && <div className={`w-0.5 flex-1 my-2 ${active ? 'bg-green-500/40' : 'bg-[#2a2a2a]'}`} />}
      </div>
      <div className={`pb-8 flex-1 ${last ? 'pb-0' : ''}`}>
        <h4 className="font-semibold text-[#f0f0f0] mb-1">{title}</h4>
        <p className="text-sm text-[#888] mb-2">{description}</p>
        {detail && (
          <div className="bg-[#141414] rounded-lg p-3 border border-[#2a2a2a]">
            <p className="text-xs text-[#666]">{detail}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function FeatureCard({ feature, expanded, onToggle }) {
  return (
    <motion.div
      layout
      className="border border-[#2a2a2a] rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-start gap-4 text-left hover:bg-[#141414] transition-colors"
      >
        <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <BookOpen className="w-4 h-4 text-green-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-semibold text-[#f0f0f0] text-sm">{feature.name}</h4>
            <motion.div animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronRight className="w-4 h-4 text-[#888] flex-shrink-0" />
            </motion.div>
          </div>
          <p className="text-xs text-[#888] mt-1">{feature.purpose}</p>
        </div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#2a2a2a] p-4 bg-[#141414]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <InfoRow label="Business Problem" value={feature.problem} />
                <InfoRow label="Primary User" value={feature.user} />
                <InfoRow label="When Used" value={feature.when} />
                <InfoRow label="Business Outcome" value={feature.outcome} />
              </div>
              {feature.scenario && (
                <div className="mt-4 bg-[#0a0a0a] rounded-lg p-3 border border-[#2a2a2a]">
                  <p className="text-xs text-green-400 font-semibold mb-1">Example Scenario</p>
                  <p className="text-xs text-[#888]">{feature.scenario}</p>
                </div>
              )}
              {feature.tips && (
                <div className="mt-3">
                  <p className="text-xs text-yellow-400 font-semibold mb-2">Pro Tips</p>
                  <ul className="space-y-1">
                    {feature.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#888]">
                        <span className="text-yellow-500 mt-0.5">•</span>{tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div>
      <p className="text-xs text-[#888] font-semibold uppercase tracking-wide mb-1">{label}</p>
      <p className="text-[#ccc]">{value}</p>
    </div>
  );
}

export function ObjectionCard({ objection, response, expanded, onToggle }) {
  return (
    <motion.div layout className="border border-[#2a2a2a] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-[#141414] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
            <span className="text-red-400 text-xs font-bold">"</span>
          </div>
          <span className="text-[#f0f0f0] text-sm font-medium italic">"{objection}"</span>
        </div>
        <motion.div animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronRight className="w-4 h-4 text-[#888] flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#2a2a2a] p-4 bg-[#141414] space-y-3">
              {response.understand && (
                <div>
                  <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide mb-1">Acknowledge</p>
                  <p className="text-sm text-[#888]">{response.understand}</p>
                </div>
              )}
              {response.reframe && (
                <div>
                  <p className="text-xs text-yellow-400 font-semibold uppercase tracking-wide mb-1">Reframe</p>
                  <p className="text-sm text-[#888]">{response.reframe}</p>
                </div>
              )}
              {response.script && (
                <div className="bg-[#0a0a0a] rounded-lg p-3 border border-green-500/20">
                  <p className="text-xs text-green-400 font-semibold mb-2">Suggested Response</p>
                  <p className="text-sm text-[#ccc] italic">"{response.script}"</p>
                </div>
              )}
              {response.followUp && (
                <div>
                  <p className="text-xs text-purple-400 font-semibold uppercase tracking-wide mb-1">Follow-Up Question</p>
                  <p className="text-sm text-[#888] italic">"{response.followUp}"</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ScriptBlock({ label, text, tag }) {
  const tagColors = {
    opener: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    discovery: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    close: 'bg-green-500/10 text-green-400 border-green-500/20',
    followup: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  };
  return (
    <div className="bg-[#0a0a0a] rounded-xl border border-[#2a2a2a] p-4 my-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-[#888] font-semibold uppercase tracking-wide">{label}</p>
        {tag && <span className={`text-xs px-2 py-0.5 rounded-full border ${tagColors[tag] || 'bg-green-500/10 text-green-400 border-green-500/20'}`}>{tag}</span>}
      </div>
      <p className="text-sm text-[#ccc] italic leading-relaxed">"{text}"</p>
    </div>
  );
}

export function ChecklistItem({ label, description }) {
  const [checked, setChecked] = useState(false);
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-[#141414] transition-colors text-left group"
    >
      <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border-2 transition-colors ${checked ? 'bg-green-500 border-green-500' : 'border-[#2a2a2a] group-hover:border-green-500/50'}`}>
        {checked && <CheckCircle2 className="w-3 h-3 text-black" />}
      </div>
      <div>
        <p className={`text-sm font-medium transition-colors ${checked ? 'text-[#888] line-through' : 'text-[#f0f0f0]'}`}>{label}</p>
        {description && <p className="text-xs text-[#666] mt-0.5">{description}</p>}
      </div>
    </button>
  );
}

export function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="mb-8">
      {number && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-green-400 uppercase tracking-widest">Section {number}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-green-500/20 to-transparent" />
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-[#f0f0f0] leading-tight" style={{ fontFamily: '"DM Serif Display", serif' }}>
        {title}
      </h2>
      {subtitle && <p className="text-[#888] mt-2 text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function ModuleHero({ number, title, description, icon: Icon, tag }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#141414] to-[#0f0f0f] border border-[#2a2a2a] p-8 mb-8"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            {Icon ? <Icon className="w-5 h-5 text-green-400" /> : <Target className="w-5 h-5 text-green-400" />}
          </div>
          <div>
            <span className="text-xs text-green-400 font-semibold uppercase tracking-widest">Module {number}</span>
            {tag && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#2a2a2a] text-[#888]">{tag}</span>}
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-3" style={{ fontFamily: '"DM Serif Display", serif' }}>
          {title}
        </h1>
        <p className="text-[#888] text-base leading-relaxed max-w-2xl">{description}</p>
      </div>
    </motion.div>
  );
}

export function QuizBlock({ moduleId, questions, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="border border-[#2a2a2a] rounded-2xl p-6 bg-[#0d0d0d] text-center">
        <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mx-auto mb-4">
          <Target className="w-6 h-6 text-yellow-400" />
        </div>
        <h3 className="text-xl font-bold text-[#f0f0f0] mb-2">Module Knowledge Check</h3>
        <p className="text-[#888] text-sm mb-6">{questions.length} questions · Score 70% to pass · No time limit</p>
        <button
          onClick={() => setStarted(true)}
          className="px-6 py-2.5 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors text-sm"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (submitted) {
    const score = questions.filter((q, i) => answers[i] === q.correct).length;
    const passed = score / questions.length >= 0.7;
    if (onComplete) onComplete(score, questions.length);
    return (
      <div className="border border-[#2a2a2a] rounded-2xl p-6 bg-[#0d0d0d] text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? 'bg-green-500/20 border-2 border-green-500/40' : 'bg-red-500/20 border-2 border-red-500/40'}`}>
          <span className="text-2xl font-bold text-[#f0f0f0]">{Math.round((score / questions.length) * 100)}%</span>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${passed ? 'text-green-400' : 'text-red-400'}`}>
          {passed ? 'Quiz Passed!' : 'Keep Studying'}
        </h3>
        <p className="text-[#888] text-sm mb-4">{score}/{questions.length} correct answers</p>
        {!passed && (
          <button
            onClick={() => { setSubmitted(false); setAnswers({}); setCurrent(0); }}
            className="px-6 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-[#f0f0f0] font-semibold rounded-lg hover:bg-[#2a2a2a] transition-colors text-sm"
          >
            Retry Quiz
          </button>
        )}
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="border border-[#2a2a2a] rounded-2xl overflow-hidden bg-[#0d0d0d]">
      <div className="px-6 pt-5 pb-4 border-b border-[#2a2a2a]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-green-400 font-semibold">Question {current + 1} of {questions.length}</span>
          <div className="flex gap-1">
            {questions.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all ${i === current ? 'w-6 bg-green-400' : i < current ? 'w-2 bg-green-700' : 'w-2 bg-[#2a2a2a]'}`} />
            ))}
          </div>
        </div>
        <p className="text-[#f0f0f0] font-semibold">{q.question}</p>
      </div>
      <div className="p-4 space-y-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setAnswers({ ...answers, [current]: i })}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all border ${answers[current] === i ? 'border-green-500/60 bg-green-500/10 text-green-400' : 'border-[#2a2a2a] text-[#888] hover:border-[#3a3a3a] hover:text-[#ccc]'}`}
          >
            <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
          </button>
        ))}
      </div>
      <div className="px-4 pb-4 flex justify-between">
        <button
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
          className="px-4 py-2 rounded-lg text-sm border border-[#2a2a2a] text-[#888] disabled:opacity-30 hover:bg-[#1a1a1a] transition-colors"
        >
          Previous
        </button>
        {current === questions.length - 1 ? (
          <button
            disabled={answers[current] === undefined}
            onClick={() => setSubmitted(true)}
            className="px-5 py-2 bg-green-500 text-black font-semibold rounded-lg text-sm disabled:opacity-40 hover:bg-green-400 transition-colors"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            disabled={answers[current] === undefined}
            onClick={() => setCurrent(current + 1)}
            className="px-5 py-2 bg-green-500 text-black font-semibold rounded-lg text-sm disabled:opacity-40 hover:bg-green-400 transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
