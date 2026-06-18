import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, Users, RefreshCw, Layers, Monitor, TrendingUp,
  Shield, BarChart3, Rocket, Award, ArrowRight, Clock,
  CheckCircle2, BookOpen, GraduationCap, Sparkles
} from 'lucide-react';

const learningPaths = [
  { id: 1, title: 'Why CleanBid Exists', desc: 'Understand the mission, the problem, and why this platform matters.', icon: Zap, color: 'from-blue-500/20 to-blue-600/5', border: 'border-blue-500/30', text: 'text-blue-400', tag: 'Foundation', duration: '15 min' },
  { id: 2, title: 'Ideal Customer', desc: 'Profile the perfect customer, their pain points, and their world.', icon: Users, color: 'from-purple-500/20 to-purple-600/5', border: 'border-purple-500/30', text: 'text-purple-400', tag: 'Go-To-Market', duration: '20 min' },
  { id: 3, title: 'Customer Lifecycle', desc: 'Trace the journey from first lead to loyal recurring customer.', icon: RefreshCw, color: 'from-cyan-500/20 to-cyan-600/5', border: 'border-cyan-500/30', text: 'text-cyan-400', tag: 'Process', duration: '25 min' },
  { id: 4, title: 'Feature Bible', desc: 'Every feature explained by the business value it delivers.', icon: Layers, color: 'from-green-500/20 to-green-600/5', border: 'border-green-500/30', text: 'text-green-400', tag: 'Product', duration: '40 min' },
  { id: 5, title: 'Platform Walkthrough', desc: 'Understand each page, why it exists, and how to use it effectively.', icon: Monitor, color: 'from-emerald-500/20 to-emerald-600/5', border: 'border-emerald-500/30', text: 'text-emerald-400', tag: 'Product', duration: '35 min' },
  { id: 6, title: 'Sales Academy', desc: 'Scripts, call flows, and techniques to sell outcomes — not software.', icon: TrendingUp, color: 'from-yellow-500/20 to-yellow-600/5', border: 'border-yellow-500/30', text: 'text-yellow-400', tag: 'Sales', duration: '45 min' },
  { id: 7, title: 'Objection Library', desc: 'Master every objection with consultative, confidence-building responses.', icon: Shield, color: 'from-orange-500/20 to-orange-600/5', border: 'border-orange-500/30', text: 'text-orange-400', tag: 'Sales', duration: '30 min' },
  { id: 8, title: 'Competitive Positioning', desc: 'Understand how CleanBid thinks differently from legacy tools.', icon: BarChart3, color: 'from-red-500/20 to-red-600/5', border: 'border-red-500/30', text: 'text-red-400', tag: 'Strategy', duration: '20 min' },
  { id: 9, title: 'Onboarding Academy', desc: 'Lead a customer from signed to successful in their first 30 days.', icon: Rocket, color: 'from-pink-500/20 to-pink-600/5', border: 'border-pink-500/30', text: 'text-pink-400', tag: 'Customer Success', duration: '35 min' },
  { id: 10, title: 'Certification', desc: 'Pass the final exam and earn your Certified CleanBid Professional badge.', icon: Award, color: 'from-yellow-500/20 to-yellow-600/5', border: 'border-yellow-500/30', text: 'text-yellow-300', tag: 'Certification', duration: '45 min' },
];

export default function UniversityHome({ progress }) {
  const completed = progress.progress.completedModules.length;
  const certified = progress.progress.certified;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#141414] via-[#111] to-[#0d0d0d] border border-[#2a2a2a] p-8 md:p-12 mb-10"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/4 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-black" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-green-500/40 to-transparent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-4 leading-tight" style={{ fontFamily: '"DM Serif Display", serif' }}>
            Welcome to CleanBid<br />
            <span className="text-green-400">University</span>
          </h1>
          <p className="text-[#888] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Learn the platform. Understand the business. Master the mission.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-2.5">
              <BookOpen className="w-4 h-4 text-green-400" />
              <span className="text-sm text-[#888]"><strong className="text-[#f0f0f0]">10</strong> Modules</span>
            </div>
            <div className="flex items-center gap-2 bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-2.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-[#888]"><strong className="text-[#f0f0f0]">5+ hours</strong> of content</span>
            </div>
            <div className="flex items-center gap-2 bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-2.5">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-[#888]"><strong className="text-[#f0f0f0]">1</strong> Certification</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progress Banner */}
      {completed > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-8 rounded-xl border p-4 flex items-center gap-4 ${certified ? 'border-yellow-500/30 bg-yellow-500/5' : 'border-green-500/30 bg-green-500/5'}`}
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${certified ? 'bg-yellow-500/20' : 'bg-green-500/20'}`}>
            {certified ? <Sparkles className="w-5 h-5 text-yellow-400" /> : <CheckCircle2 className="w-5 h-5 text-green-400" />}
          </div>
          <div className="flex-1">
            {certified ? (
              <>
                <p className="text-sm font-bold text-yellow-400">Certified CleanBid Professional</p>
                <p className="text-xs text-[#888]">Congratulations! You've completed all modules and earned your certification.</p>
              </>
            ) : (
              <>
                <p className="text-sm font-bold text-green-400">{completed} of 10 modules complete · {progress.completionPercentage}% there</p>
                <p className="text-xs text-[#888]">Keep going — complete all modules to earn your certification.</p>
              </>
            )}
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-2xl font-bold text-[#f0f0f0]">{progress.completionPercentage}%</p>
            <p className="text-xs text-[#555]">complete</p>
          </div>
        </motion.div>
      )}

      {/* Learning Paths Grid */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#f0f0f0]">Learning Paths</h2>
          <span className="text-xs text-[#555]">{completed} / 10 completed</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
          {learningPaths.map((path, i) => {
            const isComplete = progress.isModuleComplete(path.id);
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={`/university/module/${path.id}`}
                  className={`group block relative overflow-hidden rounded-xl border p-4 transition-all hover:scale-[1.01] hover:shadow-lg ${isComplete ? 'border-green-500/30 bg-green-500/5' : `${path.border} bg-gradient-to-br ${path.color}`}`}
                >
                  {isComplete && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isComplete ? 'bg-green-500/20' : 'bg-[#0a0a0a]/60'}`}>
                      <path.icon className={`w-4 h-4 ${isComplete ? 'text-green-400' : path.text}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-[#555]">{path.id.toString().padStart(2, '0')}</span>
                        <span className={`text-[10px] font-semibold ${isComplete ? 'text-green-400' : path.text}`}>{path.tag}</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#f0f0f0] mb-1 group-hover:text-white transition-colors">{path.title}</h3>
                      <p className="text-xs text-[#666] leading-relaxed">{path.desc}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-3 h-3 text-[#555]" />
                        <span className="text-[10px] text-[#555]">{path.duration}</span>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 flex-shrink-0 mt-2 transition-all ${isComplete ? 'text-green-400' : `${path.text} opacity-0 group-hover:opacity-100`} group-hover:translate-x-1`} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Start CTA if not started */}
      {completed === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8"
        >
          <p className="text-[#888] text-sm mb-4">Ready to begin? Start with the foundation.</p>
          <Link
            to="/university/module/1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition-colors"
          >
            Start Learning <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
