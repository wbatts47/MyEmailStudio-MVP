import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/demo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/92 backdrop-blur-2xl border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2 no-underline">
          <div className="w-7 h-7 rounded-lg bg-[#4CAF50] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 4h10M2 7h7M2 10h5" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-[#f0f0f0] text-lg tracking-tight">
            Email Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g,"-")}`}
              className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors duration-200 no-underline font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/demo"
            data-testid="nav-demo-btn"
            className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors no-underline font-medium"
          >
            See Demo
          </Link>
          <a
            href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00"
            data-testid="nav-cta-btn"
            className="btn-primary text-sm"
            style={{ padding: "10px 22px" }}
          >
            Get Started for $29/month
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-[#888] hover:text-[#f0f0f0] transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-b border-[#2a2a2a] px-6 pb-6 pt-2"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block py-3 text-[#888] hover:text-[#f0f0f0] border-b border-[#1a1a1a] no-underline font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00"
              className="btn-primary mt-4 w-full justify-center text-sm"
              style={{ padding: "12px 22px" }}
            >
              Get Started for $29/month
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
