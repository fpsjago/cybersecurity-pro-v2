# ARCHITECTURE.md - CyberSec Pro v2.0

## Project Overview

**Template Name:** CyberSec Pro  
**Version:** 2.0.0  
**Target Quality:** 9/10 (Vorix/PlayHost Level)  
**Tech Stack:** Astro 5 + React 19 + TypeScript + CSS Modules  
**Pages:** 10 complete pages  
**Components:** 38 reusable components  
**Build Time:** 10-11 hours (across 5 sub-agents)

---

## Directory Structure

```
cybersecurity-pro-v2/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md                     # Customer-facing setup guide
├── DOCUMENTATION.md              # 25-30 page comprehensive docs
├── CHANGELOG.md
├── LICENSE
│
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg              # Social preview (1200x630)
│   ├── images/
│   │   ├── heroes/               # Hero backgrounds (WebP)
│   │   ├── team/                 # Team member photos
│   │   ├── clients/              # Client logos (SVG preferred)
│   │   ├── case-studies/         # Portfolio images
│   │   ├── blog/                 # Blog post thumbnails
│   │   └── icons/                # Custom icons if needed
│   └── fonts/                    # Self-hosted fonts (Inter)
│
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── global.css        # CSS reset, base styles
│   │       ├── variables.css     # CSS custom properties (design tokens)
│   │       ├── animations.css    # Keyframe definitions
│   │       └── utilities.css     # Utility classes
│   │
│   ├── components/
│   │   ├── common/               # Shared utilities
│   │   │   ├── Container/
│   │   │   ├── Button/
│   │   │   ├── SectionHeader/
│   │   │   ├── Badge/
│   │   │   ├── Card/
│   │   │   └── Icon/
│   │   │
│   │   ├── navigation/
│   │   │   ├── Header/
│   │   │   ├── MobileMenu/
│   │   │   ├── DropdownMenu/
│   │   │   ├── Breadcrumbs/
│   │   │   └── BackToTop/
│   │   │
│   │   ├── heroes/
│   │   │   ├── HeroMain/          # Homepage hero with particles
│   │   │   ├── HeroPage/          # Standard page hero
│   │   │   ├── HeroSplit/         # 50/50 image+content
│   │   │   └── HeroCentered/      # Centered text hero
│   │   │
│   │   ├── features/
│   │   │   ├── FeatureGrid/
│   │   │   ├── FeatureCards/
│   │   │   ├── FeatureAlternating/
│   │   │   ├── FeatureIcons/
│   │   │   ├── IntegrationGrid/
│   │   │   └── BentoGrid/
│   │   │
│   │   ├── social-proof/
│   │   │   ├── LogoCarousel/
│   │   │   ├── StatsCounter/
│   │   │   ├── TestimonialCarousel/
│   │   │   ├── TestimonialGrid/
│   │   │   └── AwardsSection/
│   │   │
│   │   ├── pricing/
│   │   │   ├── PricingTable/
│   │   │   ├── PricingCard/
│   │   │   ├── PricingToggle/
│   │   │   └── PricingComparison/
│   │   │
│   │   ├── team/
│   │   │   ├── TeamGrid/
│   │   │   ├── TeamCard/
│   │   │   ├── OrgChart/
│   │   │   └── CareersSection/
│   │   │
│   │   ├── portfolio/
│   │   │   ├── CaseStudyGrid/
│   │   │   ├── CaseStudyCard/
│   │   │   ├── MetricsShowcase/
│   │   │   └── ClientTestimonial/
│   │   │
│   │   ├── blog/
│   │   │   ├── BlogGrid/
│   │   │   ├── BlogCard/
│   │   │   ├── ResourceCard/
│   │   │   └── NewsletterSignup/
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm/
│   │   │   ├── DemoRequestForm/
│   │   │   └── SearchInput/
│   │   │
│   │   ├── cta/
│   │   │   ├── CTABanner/
│   │   │   ├── CTACard/
│   │   │   └── CTAInline/
│   │   │
│   │   ├── footer/
│   │   │   ├── Footer/
│   │   │   └── FooterSimple/
│   │   │
│   │   └── effects/
│   │       ├── ParticleNetwork/    # Canvas-based particle animation
│   │       ├── GradientBlob/       # Animated gradient background
│   │       └── ScanLine/           # Cyberpunk scanning effect
│   │
│   ├── layouts/
│   │   ├── Layout.astro           # Main layout (head, body wrapper)
│   │   ├── PageLayout.astro       # Page with header/footer
│   │   └── DocsLayout.astro       # Documentation layout with sidebar
│   │
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── solutions.astro        # Solutions overview
│   │   ├── products.astro         # Product details
│   │   ├── about.astro            # Company/About
│   │   ├── team.astro             # Team page
│   │   ├── portfolio.astro        # Case Studies
│   │   ├── resources.astro        # Blog/Resources
│   │   ├── pricing.astro          # Pricing page
│   │   ├── contact.astro          # Contact page
│   │   └── docs.astro             # Documentation/Help
│   │
│   ├── data/
│   │   ├── navigation.ts          # Nav menu structure
│   │   ├── solutions.ts           # Solutions data
│   │   ├── team.ts                # Team member data
│   │   ├── testimonials.ts        # Testimonial content
│   │   ├── pricing.ts             # Pricing tiers
│   │   ├── caseStudies.ts         # Case study data
│   │   ├── resources.ts           # Blog/resource data
│   │   └── faqs.ts                # FAQ content
│   │
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts  # Scroll animations
│   │   ├── useScrollPosition.ts        # Header shrink
│   │   ├── useMediaQuery.ts            # Responsive hooks
│   │   └── useDarkMode.ts              # Theme toggle
│   │
│   ├── utils/
│   │   ├── cn.ts                  # ClassName helper
│   │   ├── formatters.ts          # Number/date formatters
│   │   └── animations.ts          # Animation utilities
│   │
│   └── types/
│       └── index.ts               # Shared TypeScript types
│
└── planning/                      # (Remove before packaging)
    ├── 1-ARCHITECTURE.md
    ├── 2-COMPONENT-LIBRARY.md
    ├── 3-PAGE-SPECS.md
    ├── 4-DESIGN-SYSTEM-V2.md
    ├── 5-ANIMATION-SPEC.md
    ├── 6-BUILD-ROADMAP.md
    ├── 7-QUALITY-GATES.md
    └── 8-GUMROAD-PACKAGE-SPEC.md
```

---

## Component Hierarchy

### Layer 1: Foundation
```
Layout.astro
├── <html>
├── <head> (meta, fonts, global styles)
└── <body>
    └── <slot /> (page content)
```

### Layer 2: Page Layout
```
PageLayout.astro
├── Header
├── <main>
│   └── <slot /> (page sections)
└── Footer
```

### Layer 3: Page Sections
```
index.astro
├── HeroMain
├── LogoCarousel
├── FeatureGrid
├── StatsCounter
├── FeatureAlternating
├── TestimonialCarousel
├── BentoGrid
├── PricingTable (preview)
├── CTABanner
└── Footer
```

### Layer 4: Components
```
FeatureGrid
├── Container
├── SectionHeader
└── FeatureCard[] (mapped)
    ├── Icon
    ├── Badge (optional)
    └── Button
```

---

## Page Routes

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Main landing page, 10+ sections |
| Solutions | `/solutions` | 6 solution showcases |
| Products | `/products` | Detailed product pages |
| About | `/about` | Company story, mission, timeline |
| Team | `/team` | Leadership, org chart, careers |
| Portfolio | `/portfolio` | Case studies, metrics, testimonials |
| Resources | `/resources` | Blog, whitepapers, webinars |
| Pricing | `/pricing` | 4 tiers, comparison, FAQ |
| Contact | `/contact` | Form, offices, live chat |
| Documentation | `/docs` | Help center, API docs |

---

## State Management Approach

### Theme State (Dark Mode)
```typescript
// src/hooks/useDarkMode.ts
// Uses localStorage + CSS custom properties
// Initial: check localStorage > system preference > default dark

export function useDarkMode() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'dark' | 'light' 
        || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'dark';
  });
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return { theme, setTheme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') };
}
```

### Navigation State
```typescript
// Mobile menu open/close
// Dropdown states
// Active route highlighting
// All handled via React useState in Header component
```

### Form State
```typescript
// Contact/Demo forms use local React state
// Validation: client-side with regex patterns
// Submission: mock success (no backend needed for template)
```

### Animation State
```typescript
// Intersection Observer for scroll triggers
// CSS classes toggled: .visible, .animate-in
// No global animation state needed
```

---

## Animation Strategy

### Performance Principles
1. **GPU-accelerated properties only**: `transform`, `opacity`
2. **`will-change` on animated elements** (sparingly)
3. **`requestAnimationFrame`** for JS animations
4. **CSS animations** preferred over JS when possible
5. **`prefers-reduced-motion`** respected

### Animation Categories

#### 1. Scroll-Triggered (Intersection Observer)
- Fade in + slide up (default entrance)
- Staggered delays for grids
- Counter animations on stats
- Progress bars on metrics

#### 2. Continuous Background
- Particle network (Canvas, 60fps)
- Gradient blobs (CSS keyframes)
- Scan lines (CSS animation)

#### 3. Micro-interactions
- Button hover (scale + glow)
- Card hover (lift + shadow)
- Link underlines (animated width)
- Form focus states (border glow)

#### 4. Transitions
- Page transitions (View Transitions API)
- Mobile menu (slide + fade)
- Dropdowns (fade + slide)
- Theme toggle (smooth color transitions)

---

## Dark Mode Implementation

### CSS Custom Properties Approach
```css
/* src/assets/styles/variables.css */

:root {
  /* Light mode (default fallback) */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  /* ... */
}

[data-theme="dark"] {
  --color-bg-primary: #0a0e1a;
  --color-bg-secondary: #0f1629;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #94a3b8;
  /* ... */
}
```

### Toggle Component
```typescript
// In Header component
<button onClick={toggle} aria-label="Toggle theme">
  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
</button>
```

### Transition Smoothing
```css
:root {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

## Build Configuration

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCase'
      }
    }
  }
});
```

### TypeScript Config
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
```

### Package Dependencies
```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@astrojs/react": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/react": "^19.0.0"
  }
}
```

---

## Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| Lighthouse Performance | 90+ | Image optimization, code splitting |
| First Contentful Paint | < 1.5s | Critical CSS, font preload |
| Largest Contentful Paint | < 2.5s | Optimized hero images |
| Cumulative Layout Shift | < 0.1 | Font-display: swap, sized images |
| Time to Interactive | < 3.0s | Defer non-critical JS |
| Total Bundle Size | < 200KB | Tree shaking, no unnecessary deps |

---

## SEO Structure

### Per-Page Meta
```astro
---
// Each page defines:
const meta = {
  title: "Solutions | CyberSec Pro",
  description: "Enterprise-grade cybersecurity solutions...",
  image: "/og-solutions.jpg"
};
---
<Layout {...meta}>
```

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- `<main>`, `<nav>`, `<article>`, `<section>` tags
- Descriptive link text (no "click here")
- Alt text on all images

### Sitemap & Robots
- Auto-generated sitemap via Astro
- Robots.txt allowing all

---

## Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | 4.5:1 minimum (AA) |
| Focus indicators | Visible :focus-visible styles |
| Keyboard navigation | Tab order, skip links |
| Screen readers | ARIA labels, semantic HTML |
| Reduced motion | @media (prefers-reduced-motion) |
| Form labels | Associated label elements |

---

## Quality Assurance Checkpoints

### Before Each Component
- [ ] TypeScript types defined
- [ ] Props interface documented
- [ ] Dark mode tested
- [ ] Mobile responsive
- [ ] Animations smooth (60fps)

### Before Each Page
- [ ] All sections render
- [ ] Navigation works
- [ ] No console errors
- [ ] Links valid
- [ ] Images optimized

### Before Final Delivery
- [ ] All 10 pages complete
- [ ] Lighthouse 80+
- [ ] Cross-browser tested
- [ ] Documentation complete
- [ ] Gumroad package ready

---

*Architecture v1.0 - Ready for implementation*
