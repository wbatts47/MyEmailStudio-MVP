import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, XCircle, Star, Download, Share2 } from 'lucide-react';
import { ModuleHero, SectionHeader, CalloutCard } from '../UniversityComponents';

const finalExam = [
  { question: 'What is the primary mission of CleanBid?', options: ['Replace all CRMs in the market', 'Give every home service business enterprise-level operational power in one tool', 'Compete with QuickBooks', 'Build the best mobile app for technicians'], correct: 1 },
  { question: 'Which industry is NOT typically served by CleanBid?', options: ['Pressure washing', 'Window cleaning', 'Commercial restaurant franchises', 'Roof cleaning'], correct: 2 },
  { question: 'What is the #1 reason home service businesses lose revenue?', options: ['High material costs', 'Forgotten follow-ups and cold leads', 'Technician turnover', 'Overpriced insurance'], correct: 1 },
  { question: 'A customer\'s estimate was sent 3 days ago with no response. What does CleanBid do automatically?', options: ['Archives the estimate', 'Triggers a follow-up sequence to re-engage the prospect', 'Cancels the estimate', 'Notifies the technician'], correct: 1 },
  { question: 'What percentage of unanswered leads convert if not followed up within 24 hours?', options: ['About 80% still convert', '20% significantly fewer conversions — they often go cold', 'It has no impact on conversion', '50% convert eventually'], correct: 1 },
  { question: 'In the customer lifecycle, what happens immediately after job completion?', options: ['The job is re-scheduled', 'An invoice is generated and sent automatically', 'The lead is closed', 'A dispatch note is created'], correct: 1 },
  { question: 'What does the Dispatch Board replace in a typical home service business?', options: ['The customer portal', 'Daily phone calls and text messages to assign technicians', 'The estimate builder', 'Weekly team meetings'], correct: 1 },
  { question: 'What is CleanBid\'s approach to competitive positioning?', options: ['Aggressively criticize competitor products', 'Explain a different philosophy without attacking competitors by name', 'Avoid all mention of competitors', 'Compete solely on price'], correct: 1 },
  { question: 'Converting 20% of customers to recurring service plans can impact revenue by:', options: ['5–10% increase', 'No significant impact', 'Potentially doubling annual revenue', 'Reducing revenue due to lower per-job pricing'], correct: 2 },
  { question: 'What is the best response to "We are too small for this"?', options: ['Agree and suggest a smaller tool', 'Offer a free trial indefinitely', 'Explain that building proper systems before you need them is why fast-growing businesses grow fast', 'Ask them to call back when they\'re bigger'], correct: 2 },
  { question: 'During onboarding, who should you train FIRST?', options: ['Technicians — they use the app most', 'Everyone at once in a group session', 'The owner on the dashboard and pipeline', 'Customer service reps'], correct: 2 },
  { question: 'What is the #1 metric to watch in the first 30 days of a new customer?', options: ['The number of social media reviews', 'Feature adoption — how many platform capabilities they\'re actively using', 'How often they call support', 'Their total revenue before CleanBid'], correct: 1 },
  { question: 'What does "operator-first design" mean in CleanBid\'s context?', options: ['The platform was designed by investors', 'Software built by someone who ran a home service business and understands the workflow from the inside', 'The UI was tested with 1,000 users', 'The API was built first'], correct: 1 },
  { question: 'In the discovery call, what is the ideal talk-to-listen ratio for the sales rep?', options: ['50/50', '80% talk, 20% listen', '20% talk, 80% listen', '70% talk, 30% listen'], correct: 2 },
  { question: 'What is the correct response structure for handling objections?', options: ['Deny, deflect, close', 'Acknowledge, reframe, ask forward', 'Explain features, compare prices, close', 'Ask for budget, offer discount, follow up'], correct: 1 },
  { question: 'When should automated invoicing trigger?', options: ['At the end of the month', 'Immediately when a technician marks a job complete', 'When the customer requests it', 'After a 48-hour review period'], correct: 1 },
  { question: 'Which of the following best describes the CleanBid Business Dashboard?', options: ['A social media management tool', 'A real-time command center showing pipeline, revenue, and team performance', 'A customer-facing portal', 'An invoice management screen'], correct: 1 },
  { question: 'What is the primary goal of the first week of onboarding?', options: ['Import all historical data', 'Complete the first real cycle: estimate → job → invoice through CleanBid', 'Train all technicians', 'Set up all integrations'], correct: 1 },
  { question: 'When a CleanBid prospect says "We already use Jobber," the correct response is:', options: ['Say Jobber is terrible and list its flaws', 'Acknowledge Jobber\'s strengths, then ask what gaps they\'re currently experiencing', 'Offer a larger discount', 'End the call politely'], correct: 1 },
  { question: 'What is the best measure of a successful onboarding engagement?', options: ['The customer liked the onboarding call', 'The number of modules they purchased', 'Feature adoption and the customer independently running their business on CleanBid within 30 days', 'The customer paid their first invoice on time'], correct: 2 },
];

function CertificateDisplay({ name = 'CleanBid Team Member', date }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="relative overflow-hidden rounded-2xl border-2 border-yellow-500/60 bg-gradient-to-br from-[#141414] via-[#111] to-[#0a0a0a] p-8 text-center"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute top-4 left-4 w-16 h-16 border border-yellow-500/20 rounded-full" />
      <div className="absolute bottom-4 right-4 w-24 h-24 border border-yellow-500/10 rounded-full" />

      <div className="relative">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mx-0.5" />
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-2">Certificate of Completion</p>
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-1" style={{ fontFamily: '"DM Serif Display", serif' }}>
          Certified CleanBid
        </h2>
        <h2 className="text-3xl font-bold text-yellow-400 mb-6" style={{ fontFamily: '"DM Serif Display", serif' }}>
          Professional
        </h2>

        <p className="text-[#888] text-sm mb-2">This certifies that</p>
        <p className="text-xl font-bold text-[#f0f0f0] mb-4">{name}</p>
        <p className="text-[#888] text-sm mb-6">has successfully completed all modules of CleanBid University and demonstrated mastery of the CleanBid platform, its business philosophy, and its application in serving home service businesses.</p>

        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="w-16 h-0.5 bg-yellow-500/30" />
          <div className="w-12 h-12 rounded-full bg-yellow-500/20 border-2 border-yellow-500/60 flex items-center justify-center">
            <Award className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="w-16 h-0.5 bg-yellow-500/30" />
        </div>

        <p className="text-xs text-[#555]">Issued {date} · CleanBid University · Internal Certification Program</p>

        <div className="flex justify-center gap-3 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-xs text-yellow-400 hover:bg-yellow-500/20 transition-colors">
            <Download className="w-3 h-3" /> Download PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#2a2a2a] rounded-lg text-xs text-[#888] hover:bg-[#1a1a1a] transition-colors">
            <Share2 className="w-3 h-3" /> Share
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function M10_Certification({ onComplete, saveQuizScore, progress }) {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const allModulesComplete = progress.progress.completedModules.length >= 9;

  const handleSubmit = () => {
    const s = finalExam.filter((q, i) => answers[i] === q.correct).length;
    setScore(s);
    setSubmitted(true);
    saveQuizScore('final', s, finalExam.length);
    if (s / finalExam.length >= 0.7) {
      onComplete(10);
      progress.issueCertificate();
    }
  };

  const passed = submitted && score / finalExam.length >= 0.7;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-16">
      <ModuleHero
        number="10"
        title="Certification"
        description="Complete the final exam to earn your Certified CleanBid Professional credential. This validates your mastery of the platform, business philosophy, and customer journey."
        icon={Award}
        tag="Certification"
      />

      {!allModulesComplete && (
        <CalloutCard type="warning" title="Complete All Modules First">
          You should complete Modules 1–9 before taking the certification exam. The final exam covers content from all modules. You have completed {progress.progress.completedModules.length} of 9 prerequisite modules.
        </CalloutCard>
      )}

      {/* Certificate display if already certified */}
      {progress.progress.certified && (
        <div className="mb-8">
          <CertificateDisplay
            date={new Date(progress.progress.certifiedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          />
        </div>
      )}

      <SectionHeader number="1" title="What You'll Be Tested On" />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
        {[
          'Why CleanBid Exists',
          'Ideal Customer Profile',
          'Customer Lifecycle',
          'Feature Bible',
          'Platform Knowledge',
          'Sales Methodology',
          'Objection Handling',
          'Competitive Positioning',
          'Onboarding Process',
          'Business Outcomes',
        ].map((topic, i) => (
          <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#141414] border border-[#2a2a2a]">
            <div className="w-4 h-4 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[9px] font-bold text-green-400">{i + 1}</span>
            </div>
            <span className="text-xs text-[#888]">{topic}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="text-center p-4 rounded-xl border border-[#2a2a2a] bg-[#141414]">
          <p className="text-2xl font-bold text-[#f0f0f0]">20</p>
          <p className="text-xs text-[#888]">Questions</p>
        </div>
        <div className="text-center p-4 rounded-xl border border-[#2a2a2a] bg-[#141414]">
          <p className="text-2xl font-bold text-[#f0f0f0]">70%</p>
          <p className="text-xs text-[#888]">To Pass</p>
        </div>
        <div className="text-center p-4 rounded-xl border border-[#2a2a2a] bg-[#141414]">
          <p className="text-2xl font-bold text-[#f0f0f0]">∞</p>
          <p className="text-xs text-[#888]">Attempts</p>
        </div>
      </div>

      {/* The Exam */}
      {!started && !submitted && (
        <div className="border border-[#2a2a2a] rounded-2xl p-8 bg-[#0d0d0d] text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-yellow-500/20 border-2 border-yellow-500/40 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-2">Final Certification Exam</h3>
          <p className="text-[#888] text-sm mb-6">20 questions covering all 10 modules. Score 70% or higher to earn your certification.</p>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors"
          >
            Begin Final Exam
          </button>
        </div>
      )}

      {started && !submitted && (
        <div className="border border-[#2a2a2a] rounded-2xl overflow-hidden mb-8">
          {/* Progress bar */}
          <div className="h-1 bg-[#2a2a2a]">
            <div
              className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-300"
              style={{ width: `${((current + 1) / finalExam.length) * 100}%` }}
            />
          </div>

          <div className="p-5 border-b border-[#2a2a2a] bg-[#141414]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-yellow-400 font-semibold">Question {current + 1} of {finalExam.length}</span>
              <span className="text-xs text-[#555]">{Object.keys(answers).length} answered</span>
            </div>
            <p className="text-[#f0f0f0] font-semibold text-sm">{finalExam[current].question}</p>
          </div>

          <div className="p-4 space-y-2">
            {finalExam[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setAnswers({ ...answers, [current]: i })}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all border ${answers[current] === i ? 'border-yellow-500/60 bg-yellow-500/10 text-yellow-400' : 'border-[#2a2a2a] text-[#888] hover:border-[#3a3a3a] hover:text-[#ccc]'}`}
              >
                <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
              </button>
            ))}
          </div>

          <div className="px-4 pb-4 flex justify-between items-center">
            <button
              disabled={current === 0}
              onClick={() => setCurrent(current - 1)}
              className="px-4 py-2 rounded-lg text-sm border border-[#2a2a2a] text-[#888] disabled:opacity-30 hover:bg-[#1a1a1a] transition-colors"
            >
              Previous
            </button>
            <div className="flex gap-1">
              {finalExam.slice(Math.max(0, current - 3), Math.min(finalExam.length, current + 4)).map((_, idx) => {
                const qi = Math.max(0, current - 3) + idx;
                return (
                  <button
                    key={qi}
                    onClick={() => setCurrent(qi)}
                    className={`w-6 h-6 rounded text-xs font-bold transition-colors ${qi === current ? 'bg-yellow-500 text-black' : answers[qi] !== undefined ? 'bg-yellow-500/30 text-yellow-400' : 'bg-[#2a2a2a] text-[#555]'}`}
                  >
                    {qi + 1}
                  </button>
                );
              })}
            </div>
            {current === finalExam.length - 1 ? (
              <button
                disabled={Object.keys(answers).length < finalExam.length}
                onClick={handleSubmit}
                className="px-5 py-2 bg-yellow-500 text-black font-bold rounded-lg text-sm disabled:opacity-40 hover:bg-yellow-400 transition-colors"
              >
                Submit Exam
              </button>
            ) : (
              <button
                disabled={answers[current] === undefined}
                onClick={() => setCurrent(current + 1)}
                className="px-5 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 font-semibold rounded-lg text-sm disabled:opacity-40 hover:bg-yellow-500/30 transition-colors"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      {submitted && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className={`rounded-2xl border p-6 text-center mb-6 ${passed ? 'border-yellow-500/40 bg-yellow-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? 'bg-yellow-500/20 border-2 border-yellow-500/60' : 'bg-red-500/20 border-2 border-red-500/40'}`}>
              {passed ? <CheckCircle2 className="w-10 h-10 text-yellow-400" /> : <XCircle className="w-10 h-10 text-red-400" />}
            </div>
            <p className="text-3xl font-bold text-[#f0f0f0] mb-1">{Math.round((score / finalExam.length) * 100)}%</p>
            <p className="text-[#888] mb-2">{score} of {finalExam.length} correct</p>
            <p className={`font-bold text-lg ${passed ? 'text-yellow-400' : 'text-red-400'}`}>
              {passed ? '🏆 Certification Earned!' : 'Keep Studying — You\'ve Got This'}
            </p>
            {!passed && (
              <button
                onClick={() => { setStarted(false); setSubmitted(false); setAnswers({}); setCurrent(0); }}
                className="mt-4 px-6 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] text-[#f0f0f0] font-semibold rounded-lg hover:bg-[#2a2a2a] transition-colors text-sm"
              >
                Retry Exam
              </button>
            )}
          </div>

          {/* Review answers */}
          <SectionHeader number="2" title="Answer Review" />
          <div className="space-y-2">
            {finalExam.map((q, i) => {
              const isCorrect = answers[i] === q.correct;
              return (
                <div key={i} className={`p-3 rounded-lg border text-xs ${isCorrect ? 'border-green-500/20 bg-green-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                  <div className="flex items-start gap-2">
                    {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" /> : <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />}
                    <div>
                      <p className="text-[#ccc] font-medium">{i + 1}. {q.question}</p>
                      {!isCorrect && (
                        <p className="text-green-400 mt-1">Correct: {q.options[q.correct]}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Certificate */}
      {(passed || progress.progress.certified) && (
        <div>
          <SectionHeader number="3" title="Your Certification" />
          <CertificateDisplay
            date={
              progress.progress.certifiedAt
                ? new Date(progress.progress.certifiedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            }
          />
        </div>
      )}
    </div>
  );
}
