import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, BookOpen, Users, RefreshCw, Layers, Monitor, TrendingUp,
  Shield, Zap, Rocket, Award, Search, X, ChevronRight, GraduationCap,
  Menu, Bookmark, BarChart3
} from 'lucide-react';

const modules = [
  { id: 1, path: '/university/module/1', title: 'Why CleanBid Exists', icon: Zap, tag: 'Foundation' },
  { id: 2, path: '/university/module/2', title: 'Ideal Customer', icon: Users, tag: 'Go-To-Market' },
  { id: 3, path: '/university/module/3', title: 'Customer Lifecycle', icon: RefreshCw, tag: 'Process' },
  { id: 4, path: '/university/module/4', title: 'Feature Bible', icon: Layers, tag: 'Product' },
  { id: 5, path: '/university/module/5', title: 'Platform Walkthrough', icon: Monitor, tag: 'Product' },
  { id: 6, path: '/university/module/6', title: 'Sales Academy', icon: TrendingUp, tag: 'Sales' },
  { id: 7, path: '/university/module/7', title: 'Objection Library', icon: Shield, tag: 'Sales' },
  { id: 8, path: '/university/module/8', title: 'Competitive Positioning', icon: BarChart3, tag: 'Strategy' },
  { id: 9, path: '/university/module/9', title: 'Onboarding Academy', icon: Rocket, tag: 'Success' },
  { id: 10, path: '/university/module/10', title: 'Certification', icon: Award, tag: 'Cert' },
];

const tagColors = {
  Foundation: 'text-blue-400',
  'Go-To-Market': 'text-purple-400',
  Process: 'text-cyan-400',
  Product: 'text-green-400',
  Sales: 'text-yellow-400',
  Strategy: 'text-orange-400',
  Success: 'text-emerald-400',
  Cert: 'text-pink-400',
};

export default function UniversitySidebar({ progress, isBookmarked, onSearch }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-[#2a2a2a]">
        <Link to="/university" className="flex items-center gap-2.5 group" onClick={() => setMobileOpen(false)}>
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-4 h-4 text-black" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-bold text-[#f0f0f0] leading-none">CleanBid</p>
              <p className="text-xs text-green-400 font-semibold leading-none mt-0.5">University</p>
            </div>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex w-6 h-6 items-center justify-center text-[#888] hover:text-[#f0f0f0] transition-colors"
        >
          <ChevronRight className={`w-4 h-4 transition-transform ${collapsed ? '' : 'rotate-180'}`} />
        </button>
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden w-6 h-6 flex items-center justify-center text-[#888]"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Overview */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#888]">Overall Progress</span>
            <span className="text-xs font-bold text-green-400">{progress.completionPercentage}%</span>
          </div>
          <div className="h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress.completionPercentage}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
            />
          </div>
          <div className="flex justify-between mt-1.5 text-xs text-[#666]">
            <span>{progress.progress.completedModules.length} of 10 modules</span>
            {progress.progress.certified && <span className="text-yellow-400">✦ Certified</span>}
          </div>
        </div>
      )}

      {/* Search */}
      {!collapsed && (
        <div className="px-3 py-2 border-b border-[#2a2a2a]">
          <button
            onClick={onSearch}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141414] border border-[#2a2a2a] text-[#888] text-xs hover:border-green-500/40 transition-colors text-left"
          >
            <Search className="w-3 h-3 flex-shrink-0" />
            <span>Search modules...</span>
            <kbd className="ml-auto text-[10px] bg-[#2a2a2a] px-1.5 py-0.5 rounded">⌘K</kbd>
          </button>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 px-2">
        {/* Home */}
        <NavItem
          to="/university"
          icon={Home}
          label="Home"
          collapsed={collapsed}
          active={location.pathname === '/university'}
          onClick={() => setMobileOpen(false)}
        />

        {!collapsed && (
          <p className="px-2 py-2 text-[10px] font-bold text-[#555] uppercase tracking-widest">Learning Modules</p>
        )}

        {modules.map((mod) => {
          const isActive = location.pathname === mod.path;
          const isComplete = progress.isModuleComplete(mod.id);
          return (
            <Link
              key={mod.id}
              to={mod.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 transition-all group ${
                isActive
                  ? 'bg-green-500/15 border border-green-500/30'
                  : 'hover:bg-[#1a1a1a] border border-transparent'
              }`}
            >
              <div className={`relative flex-shrink-0 w-6 h-6 rounded flex items-center justify-center ${isActive ? 'text-green-400' : isComplete ? 'text-green-600' : 'text-[#666]'}`}>
                <mod.icon className="w-4 h-4" />
                {isComplete && (
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-[#0a0a0a]" />
                )}
              </div>
              {!collapsed && (
                <>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-bold ${tagColors[mod.tag] || 'text-[#888]'}`}>{mod.id.toString().padStart(2, '0')}</span>
                      <span className={`text-xs font-medium truncate ${isActive ? 'text-green-400' : 'text-[#ccc] group-hover:text-[#f0f0f0]'}`}>
                        {mod.title}
                      </span>
                    </div>
                  </div>
                  {isComplete && <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />}
                </>
              )}
            </Link>
          );
        })}

        {/* Bookmarks */}
        {!collapsed && progress.progress.bookmarks.length > 0 && (
          <>
            <p className="px-2 py-2 mt-2 text-[10px] font-bold text-[#555] uppercase tracking-widest">Bookmarks</p>
            {progress.progress.bookmarks.map((bm, i) => (
              <Link
                key={i}
                to={bm}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-[#888] hover:text-[#f0f0f0] hover:bg-[#1a1a1a] transition-colors"
              >
                <Bookmark className="w-3 h-3 text-yellow-500" />
                <span className="truncate">{bm.replace('/university/', '').replace('/module/', 'Module ')}</span>
              </Link>
            ))}
          </>
        )}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-[#2a2a2a]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-green-400">CB</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#f0f0f0] truncate">CleanBid Team</p>
              <p className="text-[10px] text-[#555]">Internal Training Portal</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-[#141414] border border-[#2a2a2a] rounded-xl flex items-center justify-center text-[#888] hover:text-[#f0f0f0] transition-colors shadow-xl"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-[#0a0a0a] border-r border-[#2a2a2a] z-50 overflow-hidden"
          >
            <SidebarContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <motion.div
        animate={{ width: collapsed ? 64 : 260 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="hidden lg:block h-screen sticky top-0 bg-[#0a0a0a] border-r border-[#2a2a2a] overflow-hidden flex-shrink-0"
      >
        <SidebarContent />
      </motion.div>
    </>
  );
}

function NavItem({ to, icon: Icon, label, collapsed, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 transition-all ${active ? 'bg-[#1a1a1a] text-[#f0f0f0]' : 'text-[#888] hover:bg-[#141414] hover:text-[#f0f0f0]'}`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      {!collapsed && <span className="text-xs font-medium">{label}</span>}
    </Link>
  );
}
