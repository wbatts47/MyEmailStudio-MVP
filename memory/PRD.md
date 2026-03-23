# Email Studio — Marketing Website PRD

## Product Overview
Premium conversion-focused marketing website for **Email Studio**, an AI-powered email creation platform for small businesses, franchise operators, and service-based marketing teams.

**Date Created:** February 2026  
**Status:** MVP Complete

---

## Architecture

### Tech Stack
- **Frontend:** React 19 + React Router v7
- **Styling:** Tailwind CSS with custom brand tokens (`es-*` color namespace)
- **Animation:** Framer Motion v12 (scroll reveals, page transitions, waveform)
- **Typography:** Google Fonts — DM Serif Display (headlines) + DM Sans (body)
- **Icons:** lucide-react

### File Structure
```
/app/frontend/src/
├── App.js                          # Router + Layout wrapper
├── index.css                       # Google Fonts import + CSS vars + base styles
├── tailwind.config.js              # Brand colors, custom keyframes
├── components/
│   ├── Navbar.jsx                  # Sticky nav with blur + mobile menu
│   ├── Footer.jsx                  # Dark 4-col footer
│   ├── NoiseOverlay.jsx            # Fixed grain texture overlay
│   ├── FadeUp.jsx                  # Framer Motion scroll-reveal wrapper
│   └── home/
│       ├── HeroSection.jsx         # Split hero with voice animation loop
│       ├── ProblemSection.jsx      # 4 pain point cards
│       ├── SolutionSection.jsx     # 3-step solution
│       ├── FeaturesSection.jsx     # Bento grid 7 features
│       ├── DemoSection.jsx         # Homepage interactive demo
│       ├── SocialProofSection.jsx  # Testimonials + stats
│       ├── PricingSection.jsx      # 3 tiers, Pro elevated
│       └── CTASection.jsx          # Final conversion section
└── pages/
    ├── HomePage.jsx
    ├── PricingPage.jsx
    ├── HowItWorksPage.jsx
    ├── UseCasesPage.jsx
    ├── DemoPage.jsx
    ├── FAQPage.jsx
    └── AboutPage.jsx
```

---

## Brand System

### Colors
| Token         | Value     | Usage                              |
|---------------|-----------|------------------------------------|
| `#0a0a0a`     | Background | Page background (always dark)     |
| `#141414`     | Surface   | Cards, panels                      |
| `#2a2a2a`     | Border    | All borders                        |
| `#4CAF50`     | Green     | Primary CTAs, accents, checkmarks  |
| `#F5D000`     | Gold      | Premium badges, highlights         |
| `#f0f0f0`     | Text      | Headings, primary text             |
| `#888888`     | Muted     | Body copy, secondary text          |

### Typography
- **Headlines:** `DM Serif Display` — editorial, confident
- **Body:** `DM Sans` — clean and modern
- **Labels:** Uppercase, 0.2em letter-spacing, small size

---

## Core Requirements (Static)

- [x] Dark theme throughout (#0a0a0a background, no exceptions)
- [x] Green (#4CAF50) and Gold (#F5D000) ONLY as accent colors
- [x] DM Serif Display for all headings (loaded from Google Fonts)
- [x] DM Sans for all body text
- [x] Framer Motion scroll-triggered fade-up animations on all sections
- [x] Grain/noise texture overlay (CSS SVG filter)
- [x] Start Free Trial links to `#` (placeholder for live app URL)
- [x] No stock photos of people on laptops
- [x] Mobile responsive with hamburger navigation
- [x] Green glow on primary CTA buttons

---

## What's Been Implemented

### February 2026 — MVP Launch

#### Pages (7 total)
1. **Homepage** — Hero, Problem, Solution (3-step), Features (bento grid), Demo, Social Proof, Pricing, Final CTA
2. **Pricing** — Monthly/annual toggle, 3 tier cards, per-plan FAQ, ROI calculator
3. **How It Works** — 4-step visual walkthrough with code/UI examples
4. **Use Cases** — Tabbed content for Franchise, Small Business, Agency
5. **Demo** — Full interactive split-screen mock demo
6. **FAQ** — 5 category tabs, expandable accordion (20 total questions)
7. **About** — Mission, team cards, stats, investors

#### Key Features
- **Hero voice animation loop** — 13-second cycle: idle mic → recording waveform → generating spinner → email preview → repeat
- **Mock demo** — Textarea input + 3 brief presets, 2.5s loading state, reveals pre-built GreenLeaf Landscaping HTML email
- **Animated waveform** — 20 CSS bars with varying heights and staggered animations
- **Pricing Pro tier** — Green border glow, gold "Most Popular" badge, elevated treatment
- **Floating badges** — "Generated in 1.8 seconds" + "Outlook-ready" on hero mockup

---

## Prioritized Backlog

### P0 — Required for Go-Live
- [ ] Connect Start Free Trial CTA to actual app URL (user will provide)
- [ ] Add actual app URL to all placeholder `#` links

### P1 — High Value
- [ ] Real AI email generation on Demo page (OpenAI/Claude integration)
- [ ] Email capture / waitlist form (before auth is ready)
- [ ] Blog section for SEO content marketing
- [ ] Video testimonials section

### P2 — Nice to Have
- [ ] SEO meta tags + Open Graph for each page
- [ ] Google Analytics integration
- [ ] Cookie consent banner (GDPR)
- [ ] Chat widget (Intercom/Crisp)
- [ ] Animated email client compatibility matrix

---

## Next Tasks

1. **Provide the live app URL** → replace all `href="#"` on CTA buttons
2. **Add email capture** → waitlist form before trial signups are live
3. **SEO metadata** → add title/description meta tags to each page
4. **Real demo** → connect to AI backend when ready
5. **Analytics** → add GA4 or Plausible tracking
