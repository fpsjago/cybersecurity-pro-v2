# PAGE-SPECS.md - 10 Complete Pages

## Page Overview

| # | Page | Route | Sections | Primary Purpose |
|---|------|-------|----------|-----------------|
| 1 | Homepage | `/` | 10 | Convert visitors, showcase value |
| 2 | Solutions | `/solutions` | 8 | Show 6 security solutions |
| 3 | Products | `/products` | 7 | Detail product features |
| 4 | About | `/about` | 9 | Build trust, tell story |
| 5 | Team | `/team` | 6 | Humanize brand, show expertise |
| 6 | Portfolio | `/portfolio` | 7 | Prove results with case studies |
| 7 | Resources | `/resources` | 6 | Content marketing, lead gen |
| 8 | Pricing | `/pricing` | 6 | Convert to purchase |
| 9 | Contact | `/contact` | 5 | Enable inquiry |
| 10 | Documentation | `/docs` | 5 | Self-service help |

---

## Page 1: HOMEPAGE

**Route:** `/`  
**Purpose:** Primary landing, convert visitors  
**Hero:** HeroMain with particles  
**Estimated Build Time:** 2.5 hours

### Section 1: Hero
**Component:** `HeroMain`
```
┌──────────────────────────────────────────────────────────────┐
│                    [ParticleNetwork Background]              │
│                                                              │
│           [Badge: "AI-Powered Security Platform"]            │
│                                                              │
│        Stop Breaches Before They Start                       │
│        ────────────────────────────                          │
│                                                              │
│   Enterprise-grade cybersecurity powered by AI.              │
│   Protect your organization 24/7 with real-time              │
│   threat detection and automated response.                   │
│                                                              │
│    [Get Started - Free Trial]     [Watch Demo ▶]             │
│                                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐             │
│  │  99.9% │  │  500K+ │  │  24/7  │  │  50+   │             │
│  │ Uptime │  │ Users  │  │ Protect│  │ Awards │             │
│  └────────┘  └────────┘  └────────┘  └────────┘             │
└──────────────────────────────────────────────────────────────┘
```

**Content:**
- Badge: "AI-Powered Security Platform"
- Title: "Stop Breaches Before They Start"
- Subtitle: "Enterprise-grade cybersecurity powered by AI. Protect your organization 24/7 with real-time threat detection and automated response."
- Primary CTA: "Get Started - Free Trial"
- Secondary CTA: "Watch Demo"
- Stats: 99.9% Uptime | 500K+ Users | 24/7 Protection | 50+ Awards

**Animations:**
- Particles: continuous 60fps
- Text: staggered fade in (0.1s delay each)
- Stats: count up on load
- CTAs: subtle pulse

---

### Section 2: Logo Carousel
**Component:** `LogoCarousel`
```
┌──────────────────────────────────────────────────────────────┐
│              Trusted by Industry Leaders                     │
│                                                              │
│   [Logo1] [Logo2] [Logo3] [Logo4] [Logo5] [Logo6] →→→        │
│   ←←← [Logo7] [Logo8] [Logo9] [Logo10] [Logo11] [Logo12]    │
└──────────────────────────────────────────────────────────────┘
```

**Content:** 12 client logos (use placeholders)
**Animation:** Auto-scroll, pause on hover, grayscale → color on hover

---

### Section 3: Feature Grid (Core Capabilities)
**Component:** `FeatureGrid`
```
┌──────────────────────────────────────────────────────────────┐
│        Complete Security Platform                            │
│   Everything you need to protect your organization           │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │   [Icon]    │  │   [Icon]    │  │   [Icon]    │          │
│  │  Endpoint   │  │   Cloud     │  │  Identity   │          │
│  │  Security   │  │  Security   │  │   Access    │          │
│  │  ─────────  │  │  ─────────  │  │  ─────────  │          │
│  │ AI-powered  │  │ CNAPP for   │  │ Zero trust  │          │
│  │ protection  │  │ multi-cloud │  │ framework   │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │   [Icon]    │  │   [Icon]    │  │   [Icon]    │          │
│  │   Threat    │  │  Network    │  │   Email     │          │
│  │   Intel     │  │  Security   │  │  Security   │          │
│  │  ─────────  │  │  ─────────  │  │  ─────────  │          │
│  │ Real-time   │  │ Complete    │  │ Block phish │          │
│  │ analysis    │  │ visibility  │  │ & malware   │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
└──────────────────────────────────────────────────────────────┘
```

**Content:** 6 core capabilities with icons
**Animation:** Staggered fade in on scroll

---

### Section 4: Stats Counter
**Component:** `StatsCounter`
```
┌──────────────────────────────────────────────────────────────┐
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────┐ │
│  │   30.9B    │  │    99.9%   │  │    50+     │  │   24/7 │ │
│  │  Threats   │  │   Uptime   │  │  Industry  │  │  SOC   │ │
│  │  Blocked   │  │    SLA     │  │   Awards   │  │Support │ │
│  └────────────┘  └────────────┘  └────────────┘  └────────┘ │
└──────────────────────────────────────────────────────────────┘
```

**Animation:** Count up from 0 when in viewport

---

### Section 5: Feature Alternating (Key Benefits)
**Component:** `FeatureAlternating`
```
┌──────────────────────────────────────────────────────────────┐
│  [Dashboard Image]     │  AI-Powered Detection               │
│  [with glow effect]    │  ────────────────────               │
│                        │  Our machine learning models        │
│                        │  analyze billions of signals to     │
│                        │  detect threats in real-time.       │
│                        │                                     │
│                        │  ✓ 99.9% detection accuracy         │
│                        │  ✓ <1ms response time               │
│                        │  ✓ Zero false positives             │
│                        │                                     │
│                        │  [Learn More →]                     │
├──────────────────────────────────────────────────────────────┤
│  Unified Platform      │  [Platform Diagram]                 │
│  ─────────────────     │                                     │
│  Manage all security   │                                     │
│  from a single pane    │                                     │
│  of glass...           │                                     │
│                        │                                     │
│  [See Platform →]      │                                     │
├──────────────────────────────────────────────────────────────┤
│  [Network Visual]      │  Real-Time Response                 │
│                        │  ─────────────────                  │
│                        │  Automated playbooks                │
│                        │  respond to threats                 │
│                        │  before damage occurs...            │
│                        │                                     │
│                        │  [View Demo →]                      │
└──────────────────────────────────────────────────────────────┘
```

**Content:** 3 alternating feature blocks  
**Animation:** Slide in from alternate sides

---

### Section 6: Testimonial Carousel
**Component:** `TestimonialCarousel`
```
┌──────────────────────────────────────────────────────────────┐
│                What Our Clients Say                          │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                                                        │ │
│  │   "CyberSec Pro reduced our incident response         │ │
│  │    time by 90%. The AI detection caught threats       │ │
│  │    our previous solution completely missed."          │ │
│  │                                                        │ │
│  │    [Avatar] Sarah Chen                                 │ │
│  │            CISO, Fortune 500 Company                   │ │
│  │            [Company Logo]                              │ │
│  │                                                        │ │
│  │    ★★★★★                                              │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│        [←]    ● ○ ○ ○ ○    [→]                              │
└──────────────────────────────────────────────────────────────┘
```

**Content:** 5 testimonials  
**Animation:** Smooth slide transitions, autoplay 5s

---

### Section 7: Bento Grid (Platform Features)
**Component:** `BentoGrid`
```
┌──────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────┐ ┌──────────┐ ┌──────────┐   │
│  │        [Large]             │ │ [Small]  │ │ [Small]  │   │
│  │   Unified Dashboard        │ │  API     │ │ Webhooks │   │
│  │   [Dashboard Preview]      │ │  First   │ │  Ready   │   │
│  │                            │ └──────────┘ └──────────┘   │
│  └────────────────────────────┘                              │
│  ┌──────────┐ ┌──────────┐ ┌────────────────────────────┐   │
│  │ [Small]  │ │ [Small]  │ │         [Wide]             │   │
│  │  SIEM    │ │  SOAR    │ │   500+ Integrations        │   │
│  │ Integra- │ │  Ready   │ │   [Integration Logos]      │   │
│  │  tion    │ │          │ │                            │   │
│  └──────────┘ └──────────┘ └────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

**Animation:** Staggered reveal, card hover effects

---

### Section 8: Pricing Preview
**Component:** `PricingTable` (3 tiers preview)
```
┌──────────────────────────────────────────────────────────────┐
│               Simple, Transparent Pricing                    │
│        [Monthly] ────○──── [Annual - Save 20%]              │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │    Starter   │  │ ★ Business ★ │  │  Enterprise  │       │
│  │              │  │   (Popular)  │  │              │       │
│  │    $49/mo    │  │    $149/mo   │  │   Custom     │       │
│  │              │  │              │  │              │       │
│  │  ✓ Feature   │  │  ✓ Feature   │  │  ✓ Feature   │       │
│  │  ✓ Feature   │  │  ✓ Feature   │  │  ✓ Feature   │       │
│  │  ✓ Feature   │  │  ✓ Feature   │  │  ✓ Feature   │       │
│  │  ✗ Feature   │  │  ✓ Feature   │  │  ✓ Feature   │       │
│  │              │  │              │  │              │       │
│  │ [Get Started]│  │ [Start Free] │  │[Contact Sales│       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│              [View Full Pricing Comparison →]                │
└──────────────────────────────────────────────────────────────┘
```

---

### Section 9: Awards Section
**Component:** `AwardsSection`
```
┌──────────────────────────────────────────────────────────────┐
│             Industry Recognition                             │
│                                                              │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │Gartner│ │Forres│ │ G2   │ │MITRE │ │ SC   │          │
│  │Leader│ │Leader│ │Leader│ │ ATT&CK│ │Awards│          │
│  │ 2025 │ │ 2025 │ │ 2025 │ │ Top10│ │ 2024 │          │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘          │
└──────────────────────────────────────────────────────────────┘
```

---

### Section 10: CTA Banner
**Component:** `CTABanner`
```
┌──────────────────────────────────────────────────────────────┐
│  [Gradient Background with subtle animation]                 │
│                                                              │
│         Ready to Secure Your Organization?                   │
│   Start your free 14-day trial. No credit card required.    │
│                                                              │
│      [Start Free Trial]      [Talk to Sales]                 │
└──────────────────────────────────────────────────────────────┘
```

### SEO Considerations
- Title: "CyberSec Pro | AI-Powered Cybersecurity Platform"
- Description: "Enterprise-grade cybersecurity powered by AI. Protect your organization with real-time threat detection, automated response, and 24/7 monitoring."
- H1: "Stop Breaches Before They Start"
- Keywords: cybersecurity, AI security, threat detection, endpoint protection

---

## Page 2: SOLUTIONS

**Route:** `/solutions`  
**Purpose:** Showcase 6 security solutions  
**Hero:** HeroPage  
**Estimated Build Time:** 1.5 hours

### Sections:
1. **HeroPage** - "Security Solutions for Every Need"
2. **SolutionShowcase** - 6 detailed solution cards (Endpoint, Cloud, Identity, Threat Intel, Network, Email)
3. **IntegrationGrid** - 24+ integration logos
4. **ComparisonTable** - Solutions vs competitors
5. **FeatureAlternating** - How our solutions work together
6. **ClientLogos** - Industry-specific logos
7. **TestimonialGrid** - Solution-specific testimonials
8. **CTABanner** - "Find Your Solution"

### Solution Data:
```typescript
const solutions = [
  {
    id: 'endpoint',
    name: 'Endpoint Security',
    tagline: 'AI-Powered Endpoint Protection',
    description: 'Protect every endpoint with next-gen antivirus...',
    icon: 'shield',
    features: ['Real-time protection', 'Behavioral analysis', 'Ransomware rollback'],
    stats: { threats: '10M+ blocked daily', accuracy: '99.99%' }
  },
  // ... 5 more solutions
];
```

---

## Page 3: PRODUCTS

**Route:** `/products`  
**Purpose:** Detailed product features  
**Hero:** HeroSplit with product screenshot  
**Estimated Build Time:** 1.5 hours

### Sections:
1. **HeroSplit** - Product hero with dashboard preview
2. **FeatureCards** - 8 major product features with images
3. **BentoGrid** - Product capabilities
4. **TechSpecs** - Technical specifications table
5. **IntegrationGrid** - API & integrations
6. **ScreenshotGallery** - Product UI screenshots
7. **CTABanner** - "See Product Demo"

---

## Page 4: ABOUT (Company)

**Route:** `/about`  
**Purpose:** Build trust, tell company story  
**Hero:** HeroSplit  
**Estimated Build Time:** 1.5 hours

### Section Wireframes:

1. **HeroSplit** - "Our Mission to Secure the Digital World"
2. **StoryTimeline** - Company milestones
```
┌──────────────────────────────────────────────────────────────┐
│                    Our Journey                               │
│                                                              │
│     2018         2020          2022          2024            │
│      ●───────────●─────────────●─────────────●               │
│   Founded     Series A      Series B      500K Users         │
│   in Austin   $10M raised   $50M raised   Global leader      │
└──────────────────────────────────────────────────────────────┘
```

3. **MissionValues** - Core values cards
4. **StatsCounter** - Company metrics
5. **TeamPreview** - Leadership highlight (links to Team page)
6. **OfficesMap** - Global office locations
7. **AwardsSection** - Industry recognition
8. **CultureSection** - "Life at CyberSec"
9. **CTABanner** - "Join Our Team"

---

## Page 5: TEAM

**Route:** `/team`  
**Purpose:** Humanize brand, show expertise  
**Hero:** HeroPage  
**Estimated Build Time:** 1.5 hours

### Sections:
1. **HeroPage** - "Meet the Team Behind the Security"
2. **TeamGrid (Leadership)** - 6-8 executives
```
┌──────────────────────────────────────────────────────────────┐
│                    Leadership Team                           │
│                                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│  │ [Photo] │  │ [Photo] │  │ [Photo] │  │ [Photo] │         │
│  │  Name   │  │  Name   │  │  Name   │  │  Name   │         │
│  │  CEO    │  │  CTO    │  │  CISO   │  │  CFO    │         │
│  │ [Lin][X]│  │ [Lin][X]│  │ [Lin][X]│  │ [Lin][X]│         │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘         │
└──────────────────────────────────────────────────────────────┘
```

3. **OrgChart** - Visual hierarchy
4. **TeamStats** - Team metrics (employees, countries, etc)
5. **CareersSection** - Open positions
6. **CTABanner** - "Join Us"

### Team Data:
```typescript
const team = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Co-Founder',
    bio: '15+ years in cybersecurity. Previously VP at...',
    image: '/team/alex.jpg',
    socials: [
      { platform: 'linkedin', url: '...' },
      { platform: 'twitter', url: '...' }
    ]
  },
  // ... more team members
];
```

---

## Page 6: PORTFOLIO (Case Studies)

**Route:** `/portfolio`  
**Purpose:** Prove results with real examples  
**Hero:** HeroPage  
**Estimated Build Time:** 1.5 hours

### Sections:
1. **HeroPage** - "Client Success Stories"
2. **MetricsShowcase** - Aggregate results
```
┌──────────────────────────────────────────────────────────────┐
│    ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐           │
│    │  90%   │  │ $50M+  │  │  500+  │  │  4.9   │           │
│    │ Threat │  │  Saved │  │ Enter- │  │  Star  │           │
│    │Reduction│ │Annually│  │ prises │  │ Rating │           │
│    └────────┘  └────────┘  └────────┘  └────────┘           │
└──────────────────────────────────────────────────────────────┘
```

3. **CaseStudyGrid** - 6 case studies with filters
```
┌──────────────────────────────────────────────────────────────┐
│  [All] [Finance] [Healthcare] [Tech] [Retail] [Government]  │
│                                                              │
│  ┌─────────────────────┐  ┌─────────────────────┐           │
│  │ [Case Study Image]  │  │ [Case Study Image]  │           │
│  │ ─────────────────── │  │ ─────────────────── │           │
│  │ Fortune 500 Bank    │  │ Healthcare Network  │           │
│  │ Finance             │  │ Healthcare          │           │
│  │                     │  │                     │           │
│  │ 90% ↓ incidents     │  │ $2M saved annually  │           │
│  │ [Read Case Study →] │  │ [Read Case Study →] │           │
│  └─────────────────────┘  └─────────────────────┘           │
│                                                              │
│  ┌─────────────────────┐  ┌─────────────────────┐           │
│  │ ...                 │  │ ...                 │           │
│  └─────────────────────┘  └─────────────────────┘           │
└──────────────────────────────────────────────────────────────┘
```

4. **ClientTestimonial (Featured)** - Large featured testimonial
5. **IndustryLogos** - Logos by industry
6. **MetricsShowcase** - ROI calculator preview
7. **CTABanner** - "See How We Can Help You"

### Case Study Data:
```typescript
const caseStudies = [
  {
    title: 'Global Bank Stops APT Attack',
    client: 'Fortune 500 Financial Services',
    industry: 'finance',
    image: '/case-studies/bank.jpg',
    summary: 'How a global bank prevented a sophisticated APT attack...',
    metrics: [
      { label: 'Threat Reduction', value: '90%' },
      { label: 'Response Time', value: '<1 min' },
      { label: 'Annual Savings', value: '$5M' }
    ],
    testimonial: {
      quote: '...',
      author: 'CISO, Global Bank'
    }
  },
  // ... 5 more case studies
];
```

---

## Page 7: RESOURCES (Blog)

**Route:** `/resources`  
**Purpose:** Content marketing, lead generation  
**Hero:** HeroPage  
**Estimated Build Time:** 1.5 hours

### Sections:
1. **HeroPage** - "Security Resources & Insights"
2. **ResourceNav** - Categories (Blog, Whitepapers, Webinars, Reports)
3. **FeaturedPost** - Large featured blog post
4. **BlogGrid** - 6-9 blog posts
```
┌──────────────────────────────────────────────────────────────┐
│  [All] [Threat Intel] [Best Practices] [News] [Research]    │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [Featured Image]                                       │ │
│  │ ─────────────────────────────────────────────────────  │ │
│  │ The State of Ransomware in 2025                        │ │
│  │ Threat Intel • 8 min read • Jan 15, 2025              │ │
│  │                                                        │ │
│  │ Our latest report reveals the evolving tactics of...   │ │
│  │ [Read Article →]                                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ [Image]      │  │ [Image]      │  │ [Image]      │      │
│  │ Article 2    │  │ Article 3    │  │ Article 4    │      │
│  │ Category     │  │ Category     │  │ Category     │      │
│  │ 5 min read   │  │ 3 min read   │  │ 6 min read   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└──────────────────────────────────────────────────────────────┘
```

5. **ResourceCards** - Downloadable resources (gated)
6. **NewsletterSignup** - Email subscription

### Blog Data:
```typescript
const posts = [
  {
    title: 'The State of Ransomware in 2025',
    excerpt: 'Our latest report reveals...',
    category: 'Threat Intel',
    date: '2025-01-15',
    readTime: '8 min',
    image: '/blog/ransomware-2025.jpg',
    author: { name: 'Security Team', avatar: '/team/security.jpg' }
  },
  // ... more posts
];
```

---

## Page 8: PRICING

**Route:** `/pricing`  
**Purpose:** Convert to purchase  
**Hero:** HeroCentered  
**Estimated Build Time:** 1.5 hours

### Sections:
1. **HeroCentered** - "Simple, Transparent Pricing"
2. **PricingToggle** - Monthly/Annual toggle
3. **PricingTable** - 4 tiers
```
┌──────────────────────────────────────────────────────────────┐
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ Starter  │ │ Business │ │   Pro    │ │Enterprise│        │
│  │          │ │ ★Popular │ │          │ │          │        │
│  │  $49/mo  │ │ $149/mo  │ │ $399/mo  │ │  Custom  │        │
│  │          │ │          │ │          │ │          │        │
│  │ 10 seats │ │ 50 seats │ │ 200 seats│ │Unlimited │        │
│  │          │ │          │ │          │ │          │        │
│  │ ✓ Core   │ │ ✓ Core   │ │ ✓ Core   │ │ ✓ Core   │        │
│  │ ✓ Email  │ │ ✓ Email  │ │ ✓ Email  │ │ ✓ Email  │        │
│  │ ✗ API    │ │ ✓ API    │ │ ✓ API    │ │ ✓ API    │        │
│  │ ✗ SSO    │ │ ✗ SSO    │ │ ✓ SSO    │ │ ✓ SSO    │        │
│  │ ✗ Custom │ │ ✗ Custom │ │ ✗ Custom │ │ ✓ Custom │        │
│  │          │ │          │ │          │ │          │        │
│  │[Start   ]│ │[Start   ]│ │[Start   ]│ │[Contact ]│        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
└──────────────────────────────────────────────────────────────┘
```

4. **PricingComparison** - Full feature comparison table
5. **FAQ** - Pricing FAQ (expandable)
```
┌──────────────────────────────────────────────────────────────┐
│               Frequently Asked Questions                     │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ What's included in each plan?                      [+] │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Can I change plans later?                          [+] │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Do you offer discounts for non-profits?            [+] │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

6. **CTABanner** - "Not Sure? Talk to Sales"

### Pricing Data:
```typescript
const tiers = [
  {
    name: 'Starter',
    price: { monthly: 49, annual: 39 },
    description: 'For small teams getting started',
    seats: '10 seats',
    features: [
      { name: 'Core Protection', included: true },
      { name: 'Email Security', included: true },
      { name: 'API Access', included: false },
      { name: 'SSO', included: false },
      { name: 'Custom Integrations', included: false }
    ],
    cta: { label: 'Start Free Trial', href: '/signup' }
  },
  // ... 3 more tiers
];
```

---

## Page 9: CONTACT

**Route:** `/contact`  
**Purpose:** Enable inquiry  
**Hero:** HeroCentered  
**Estimated Build Time:** 1 hour

### Sections:
1. **HeroCentered** - "Get in Touch"
2. **ContactGrid** - Form + contact info
```
┌──────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────┐ ┌────────────────────────┐  │
│  │        Contact Form        │ │     Contact Info       │  │
│  │                            │ │                        │  │
│  │  Name: [____________]      │ │  📧 sales@cybersec.com│  │
│  │  Email: [____________]     │ │  📞 1-800-SECURE      │  │
│  │  Company: [__________]     │ │  📍 Austin, TX        │  │
│  │  Message:                  │ │                        │  │
│  │  [                   ]     │ │  ─────────────────    │  │
│  │  [                   ]     │ │  Office Hours:        │  │
│  │  [                   ]     │ │  Mon-Fri 9am-6pm CST  │  │
│  │                            │ │                        │  │
│  │  [    Submit    ]          │ │  [LinkedIn] [Twitter] │  │
│  └────────────────────────────┘ └────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

3. **OfficeLocations** - Global offices
4. **FAQ** - Contact-related FAQ
5. **CTACard** - "Need Urgent Help? Call Now"

---

## Page 10: DOCUMENTATION

**Route:** `/docs`  
**Purpose:** Self-service help  
**Layout:** DocsLayout (with sidebar)  
**Hero:** HeroCentered (minimal)  
**Estimated Build Time:** 1.5 hours

### Sections:
1. **HeroCentered** - "Documentation & Help Center"
2. **SearchInput** - Doc search
3. **QuickLinks** - 4-6 quick start cards
```
┌──────────────────────────────────────────────────────────────┐
│                   How can we help?                           │
│                                                              │
│         [🔍 Search documentation...              ]           │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   📖         │  │   ⚙️         │  │   🔌         │       │
│  │ Getting      │  │ Configuration│  │    API       │       │
│  │ Started      │  │ Guide        │  │ Reference    │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   🔧         │  │   📊         │  │   ❓         │       │
│  │ Integrations │  │  Reporting   │  │    FAQ       │       │
│  │              │  │              │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└──────────────────────────────────────────────────────────────┘
```

4. **DocCategories** - Documentation sections with articles
5. **ContactSupport** - "Still need help?" CTA

### Documentation Structure:
```typescript
const docs = [
  {
    category: 'Getting Started',
    icon: 'book',
    articles: [
      'Quick Start Guide',
      'Installation',
      'First Configuration',
      'Dashboard Overview'
    ]
  },
  {
    category: 'API Reference',
    icon: 'code',
    articles: [
      'Authentication',
      'Endpoints',
      'Webhooks',
      'Rate Limits'
    ]
  },
  // ... more categories
];
```

---

## Build Time Summary

| Page | Sections | Build Time |
|------|----------|------------|
| Homepage | 10 | 2.5h |
| Solutions | 8 | 1.5h |
| Products | 7 | 1.5h |
| About | 9 | 1.5h |
| Team | 6 | 1.5h |
| Portfolio | 7 | 1.5h |
| Resources | 6 | 1.5h |
| Pricing | 6 | 1.5h |
| Contact | 5 | 1h |
| Documentation | 5 | 1.5h |

**Total: 15.5 hours raw time**
**With parallelization: ~4-5 hours**

---

*Page Specs v1.0 - 10 pages fully specified*
