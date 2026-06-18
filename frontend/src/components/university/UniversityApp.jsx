import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, ChevronRight, Home } from 'lucide-react';

import { useUniversityProgress } from '../../hooks/useUniversityProgress';
import UniversitySidebar from './UniversitySidebar';
import SearchModal from './SearchModal';
import UniversityHome from './UniversityHome';
import M01_WhyCleanBid from './modules/M01_WhyCleanBid';
import M02_IdealCustomer from './modules/M02_IdealCustomer';
import M03_CustomerLifecycle from './modules/M03_CustomerLifecycle';
import M04_FeatureBible from './modules/M04_FeatureBible';
import M05_PlatformWalkthrough from './modules/M05_PlatformWalkthrough';
import M06_SalesAcademy from './modules/M06_SalesAcademy';
import M07_ObjectionLibrary from './modules/M07_ObjectionLibrary';
import M08_CompetitivePositioning from './modules/M08_CompetitivePositioning';
import M09_OnboardingAcademy from './modules/M09_OnboardingAcademy';
import M10_Certification from './modules/M10_Certification';

const moduleComponents = {
  1: M01_WhyCleanBid,
  2: M02_IdealCustomer,
  3: M03_CustomerLifecycle,
  4: M04_FeatureBible,
  5: M05_PlatformWalkthrough,
  6: M06_SalesAcademy,
  7: M07_ObjectionLibrary,
  8: M08_CompetitivePositioning,
  9: M09_OnboardingAcademy,
  10: M10_Certification,
};

const moduleNames = {
  1: 'Why CleanBid Exists',
  2: 'Ideal Customer',
  3: 'Customer Lifecycle',
  4: 'Feature Bible',
  5: 'Platform Walkthrough',
  6: 'Sales Academy',
  7: 'Objection Library',
  8: 'Competitive Positioning',
  9: 'Onboarding Academy',
  10: 'Certification',
};

function ModuleWrapper({ progress }) {
  const { id } = useParams();
  const moduleId = parseInt(id);
  const navigate = useNavigate();
  const location = useLocation();

  const ModuleComponent = moduleComponents[moduleId];

  const handleComplete = useCallback((mid) => {
    progress.markModuleComplete(mid);
  }, [progress]);

  useEffect(() => {
    progress.setLastVisited(location.pathname);
  }, [location.pathname, progress]);

  if (!ModuleComponent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 text-center p-8">
        <p className="text-[#888] text-lg">Module not found.</p>
        <Link to="/university" className="mt-4 text-green-400 text-sm hover:underline">Return home</Link>
      </div>
    );
  }

  const isComplete = progress.isModuleComplete(moduleId);
  const isBookmarked = progress.isBookmarked(location.pathname);

  return (
    <div>
      {/* Module header bar */}
      <div className="sticky top-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#2a2a2a] px-4 sm:px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-[#555] min-w-0">
            <Link to="/university" className="hover:text-green-400 transition-colors flex-shrink-0">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span className="text-[#888] truncate">Module {moduleId}: {moduleNames[moduleId]}</span>
            {isComplete && (
              <span className="ml-1 text-green-400 text-[10px] font-bold bg-green-500/10 px-1.5 py-0.5 rounded-full flex-shrink-0">✓ Done</span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => progress.toggleBookmark(location.pathname)}
              className={`p-1.5 rounded-lg transition-colors ${isBookmarked ? 'text-yellow-400 bg-yellow-500/10' : 'text-[#555] hover:text-[#888]'}`}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark this module'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
            {!isComplete && (
              <button
                onClick={() => progress.markModuleComplete(moduleId)}
                className="text-xs px-3 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
              >
                Mark Complete
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Module content */}
      <motion.div
        key={moduleId}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ModuleComponent
          onComplete={handleComplete}
          saveQuizScore={progress.saveQuizScore}
          progress={progress}
        />
      </motion.div>

      {/* Prev/Next nav */}
      <div className="border-t border-[#2a2a2a] bg-[#0a0a0a] px-4 sm:px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          {moduleId > 1 ? (
            <button
              onClick={() => navigate(`/university/module/${moduleId - 1}`)}
              className="flex items-center gap-2 px-4 py-2.5 border border-[#2a2a2a] rounded-xl text-sm text-[#888] hover:text-[#f0f0f0] hover:border-[#3a3a3a] transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:block">Module {moduleId - 1}: {moduleNames[moduleId - 1]}</span>
              <span className="sm:hidden">Previous</span>
            </button>
          ) : (
            <Link
              to="/university"
              className="flex items-center gap-2 px-4 py-2.5 border border-[#2a2a2a] rounded-xl text-sm text-[#888] hover:text-[#f0f0f0] hover:border-[#3a3a3a] transition-all group"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
          )}

          {moduleId < 10 ? (
            <button
              onClick={() => {
                progress.markModuleComplete(moduleId);
                navigate(`/university/module/${moduleId + 1}`);
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-green-500 text-black font-semibold rounded-xl text-sm hover:bg-green-400 transition-all group"
            >
              <span className="hidden sm:block">Next: {moduleNames[moduleId + 1]}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <Link
              to="/university"
              className="flex items-center gap-2 px-4 py-2.5 bg-yellow-500 text-black font-semibold rounded-xl text-sm hover:bg-yellow-400 transition-all"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function UniversityApp() {
  const [searchOpen, setSearchOpen] = useState(false);
  const progress = useUniversityProgress();
  const location = useLocation();

  // Global keyboard shortcut for search
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="flex h-screen bg-[#0a0a0a] overflow-hidden">
      <UniversitySidebar
        progress={progress}
        isBookmarked={progress.isBookmarked}
        onSearch={() => setSearchOpen(true)}
      />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<UniversityHome progress={progress} />} />
          <Route path="/module/:id" element={<ModuleWrapper progress={progress} />} />
        </Routes>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
