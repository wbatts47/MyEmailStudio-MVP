import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Layers, Users, RefreshCw, TrendingUp, Shield, Monitor, BarChart3, Rocket, Award, Zap } from 'lucide-react';

const searchIndex = [
  { title: 'Why CleanBid Exists', path: '/university/module/1', module: 1, icon: Zap, tags: ['mission', 'problem', 'founder', 'fragmentation', 'home service'] },
  { title: 'Industry Fragmentation Problem', path: '/university/module/1', module: 1, icon: Zap, tags: ['siloed systems', 'visibility', 'revenue leaks'] },
  { title: 'Ideal Customer Profile', path: '/university/module/2', module: 2, icon: Users, tags: ['pressure washing', 'window cleaning', 'owner operator', 'ICP'] },
  { title: 'Pain Points Overview', path: '/university/module/2', module: 2, icon: Users, tags: ['missed estimates', 'manual scheduling', 'lost leads'] },
  { title: 'Customer Lifecycle Timeline', path: '/university/module/3', module: 3, icon: RefreshCw, tags: ['lead', 'estimate', 'approval', 'dispatch', 'billing', 'recurring'] },
  { title: 'Lead to Estimate Flow', path: '/university/module/3', module: 3, icon: RefreshCw, tags: ['pipeline', 'conversion', 'funnel'] },
  { title: 'Feature Bible', path: '/university/module/4', module: 4, icon: Layers, tags: ['dispatch', 'scheduling', 'invoice', 'estimate', 'CRM'] },
  { title: 'Dispatch Board', path: '/university/module/4', module: 4, icon: Layers, tags: ['routing', 'technicians', 'jobs'] },
  { title: 'Estimate Builder', path: '/university/module/4', module: 4, icon: Layers, tags: ['quotes', 'proposals', 'pricing'] },
  { title: 'Platform Walkthrough', path: '/university/module/5', module: 5, icon: Monitor, tags: ['dashboard', 'pages', 'navigation', 'UI'] },
  { title: 'Dashboard Overview', path: '/university/module/5', module: 5, icon: Monitor, tags: ['KPIs', 'metrics', 'snapshot'] },
  { title: 'Sales Academy', path: '/university/module/6', module: 6, icon: TrendingUp, tags: ['discovery', 'demo', 'closing', 'ROI', 'scripts'] },
  { title: 'Discovery Call Framework', path: '/university/module/6', module: 6, icon: TrendingUp, tags: ['questions', 'pain', 'SPIN'] },
  { title: 'Demo Flow Guide', path: '/university/module/6', module: 6, icon: TrendingUp, tags: ['walkthrough', 'presentation', 'outcomes'] },
  { title: 'Objection Library', path: '/university/module/7', module: 7, icon: Shield, tags: ['jobber', 'cost', 'too small', 'busy', 'AI'] },
  { title: '"We Already Use Jobber"', path: '/university/module/7', module: 7, icon: Shield, tags: ['competitor', 'switch', 'migration'] },
  { title: '"It Costs Too Much"', path: '/university/module/7', module: 7, icon: Shield, tags: ['price', 'ROI', 'value'] },
  { title: 'Competitive Positioning', path: '/university/module/8', module: 8, icon: BarChart3, tags: ['differentiation', 'competitors', 'philosophy', 'vs'] },
  { title: 'Onboarding Academy', path: '/university/module/9', module: 9, icon: Rocket, tags: ['discovery', 'import', 'setup', 'training', 'launch'] },
  { title: 'Onboarding Checklist', path: '/university/module/9', module: 9, icon: Rocket, tags: ['week 1', 'first month', 'success metrics'] },
  { title: 'Certification Exam', path: '/university/module/10', module: 10, icon: Award, tags: ['quiz', 'certificate', 'certified professional'] },
];

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery('');
      setResults(searchIndex.slice(0, 6));
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(searchIndex.slice(0, 6));
      return;
    }
    const q = query.toLowerCase();
    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
    );
    setResults(filtered.slice(0, 8));
    setHighlighted(0);
  }, [query]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') setHighlighted((h) => Math.min(h + 1, results.length - 1));
      if (e.key === 'ArrowUp') setHighlighted((h) => Math.max(h - 1, 0));
      if (e.key === 'Enter' && results[highlighted]) {
        navigate(results[highlighted].path);
        onClose();
      }
    };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, results, highlighted, navigate, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl bg-[#141414] border border-[#2a2a2a] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#2a2a2a]">
              <Search className="w-4 h-4 text-[#888] flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search modules, features, topics..."
                className="flex-1 bg-transparent text-[#f0f0f0] text-sm outline-none placeholder:text-[#555]"
              />
              <button onClick={onClose} className="text-[#555] hover:text-[#888] transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {results.length > 0 && (
              <div className="py-1 max-h-80 overflow-y-auto">
                {!query && (
                  <p className="px-4 py-2 text-[10px] font-bold text-[#555] uppercase tracking-widest">Suggested</p>
                )}
                {results.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => { navigate(r.path); onClose(); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors text-left ${i === highlighted ? 'bg-green-500/10' : 'hover:bg-[#1a1a1a]'}`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                      <r.icon className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#f0f0f0] truncate">{r.title}</p>
                      <p className="text-xs text-[#555]">Module {r.module}</p>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 transition-opacity ${i === highlighted ? 'text-green-400 opacity-100' : 'text-[#555] opacity-0'}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="px-4 py-2 border-t border-[#2a2a2a] flex items-center gap-4 text-[10px] text-[#555]">
              <span><kbd className="bg-[#2a2a2a] text-[#888] px-1 py-0.5 rounded text-[10px]">↑↓</kbd> navigate</span>
              <span><kbd className="bg-[#2a2a2a] text-[#888] px-1 py-0.5 rounded text-[10px]">↵</kbd> select</span>
              <span><kbd className="bg-[#2a2a2a] text-[#888] px-1 py-0.5 rounded text-[10px]">esc</kbd> close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
