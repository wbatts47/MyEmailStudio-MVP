import { Link } from "react-router-dom";

const PRODUCT_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/demo" },
  { label: "Use Cases", href: "/use-cases" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="border-t border-[#2a2a2a] bg-[#0a0a0a] pt-16 pb-10 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2a2a2a]">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 no-underline mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#4CAF50] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 4h10M2 7h7M2 10h5" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-[#f0f0f0] text-lg">
                Email Studio
              </span>
            </Link>
            <p className="text-[#888] text-sm leading-relaxed max-w-[200px]">
              AI-powered email creation for businesses that move fast.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg border border-[#2a2a2a] flex items-center justify-center text-[#888] hover:text-[#4CAF50] hover:border-[#4CAF50] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg border border-[#2a2a2a] flex items-center justify-center text-[#888] hover:text-[#4CAF50] hover:border-[#4CAF50] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="section-label mb-4">Product</p>
            {PRODUCT_LINKS.map((l) => (
              <Link key={l.label} to={l.href} className="block text-sm text-[#888] hover:text-[#f0f0f0] no-underline mb-2.5 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <p className="section-label mb-4">Company</p>
            {COMPANY_LINKS.map((l) => (
              <Link key={l.label} to={l.href} className="block text-sm text-[#888] hover:text-[#f0f0f0] no-underline mb-2.5 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div>
            <p className="section-label mb-4">Get Started</p>
            <a href="https://buy.stripe.com/test_eVq14f68Uekf8n38NYcbC00" className="btn-primary text-sm" style={{ padding: "11px 24px" }}>
              Get Started for $29/month
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-[#555] text-xs">
            © {new Date().getFullYear()} Email Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-[#555] text-xs hover:text-[#888] transition-colors no-underline">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
