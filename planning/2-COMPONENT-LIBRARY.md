# COMPONENT-LIBRARY.md - 38 Reusable Components

## Overview

**Total Components:** 38  
**Categories:** 11  
**Design System:** CSS Modules + CSS Custom Properties  
**Framework:** React 19 + TypeScript  
**Animation Library:** Native CSS + Intersection Observer

---

## Component Categories Summary

| Category | Count | Components |
|----------|-------|------------|
| Common | 6 | Container, Button, SectionHeader, Badge, Card, Icon |
| Navigation | 5 | Header, MobileMenu, DropdownMenu, Breadcrumbs, BackToTop |
| Heroes | 4 | HeroMain, HeroPage, HeroSplit, HeroCentered |
| Features | 6 | FeatureGrid, FeatureCards, FeatureAlternating, FeatureIcons, IntegrationGrid, BentoGrid |
| Social Proof | 5 | LogoCarousel, StatsCounter, TestimonialCarousel, TestimonialGrid, AwardsSection |
| Pricing | 4 | PricingTable, PricingCard, PricingToggle, PricingComparison |
| Team | 4 | TeamGrid, TeamCard, OrgChart, CareersSection |
| Portfolio | 4 | CaseStudyGrid, CaseStudyCard, MetricsShowcase, ClientTestimonial |
| Blog | 4 | BlogGrid, BlogCard, ResourceCard, NewsletterSignup |
| Forms | 3 | ContactForm, DemoRequestForm, SearchInput |
| CTA | 3 | CTABanner, CTACard, CTAInline |
| Footer | 2 | Footer, FooterSimple |
| Effects | 3 | ParticleNetwork, GradientBlob, ScanLine |

**Total: 38 components**

---

## 1. COMMON COMPONENTS (6)

### 1.1 Container
**Purpose:** Consistent max-width wrapper with responsive padding  
**Used In:** Every page section  
**Build Time:** 10 min

```typescript
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}
```

**CSS Details:**
- `sm`: max-width 640px
- `md`: max-width 768px
- `lg`: max-width 1024px (default)
- `xl`: max-width 1280px
- `full`: max-width 1536px
- Padding: 16px mobile, 24px tablet, 32px desktop

**Dark Mode:** N/A (wrapper only)  
**Animation:** None

---

### 1.2 Button
**Purpose:** Primary and secondary action buttons with variants  
**Used In:** CTAs, forms, cards  
**Build Time:** 20 min

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}
```

**Variants:**
- `primary`: Gradient background (cyan→blue), white text, glow shadow
- `secondary`: Solid dark bg, white text, subtle border
- `ghost`: Transparent, text color, no border
- `outline`: Transparent, colored border, colored text

**Sizes:**
- `sm`: padding 8px 16px, font 14px
- `md`: padding 12px 24px, font 16px (default)
- `lg`: padding 16px 32px, font 18px

**Animation:**
- Hover: scale(1.02), brightness(1.1), glow increase
- Active: scale(0.98)
- Focus: visible ring

**Dark Mode:** Adjust glow colors

---

### 1.3 SectionHeader
**Purpose:** Consistent section titles with optional subtitle/badge  
**Used In:** All page sections  
**Build Time:** 15 min

```typescript
interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

**Animation:** Fade in + slide up on scroll  
**Dark Mode:** Text color swap

---

### 1.4 Badge
**Purpose:** Small labels for categories, status, features  
**Used In:** Cards, headers, pricing  
**Build Time:** 10 min

```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}
```

**Animation:** Subtle pulse on "new" or "popular" badges  
**Dark Mode:** Background opacity adjustment

---

### 1.5 Card
**Purpose:** Reusable card wrapper with hover effects  
**Used In:** Features, testimonials, team, blog  
**Build Time:** 15 min

```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}
```

**Variants:**
- `default`: Subtle background, no border
- `elevated`: Shadow, lift on hover
- `bordered`: 1px border, glow on hover
- `glass`: Glassmorphism (blur, semi-transparent)

**Animation:**
- Hover: translateY(-8px), shadow increase, border glow
- Transition: 0.3s ease

**Dark Mode:** Background/border color swap

---

### 1.6 Icon
**Purpose:** SVG icon wrapper with size/color props  
**Used In:** Everywhere  
**Build Time:** 15 min

```typescript
interface IconProps {
  name: IconName; // Union of all icon names
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | string;
  className?: string;
}

type IconName = 
  | 'shield' | 'lock' | 'cloud' | 'network' | 'alert'
  | 'check' | 'x' | 'arrow-right' | 'arrow-left'
  | 'menu' | 'close' | 'sun' | 'moon' | 'search'
  | 'mail' | 'phone' | 'map-pin' | 'linkedin' | 'twitter'
  | 'github' | 'play' | 'download' | 'external-link'
  | 'chart' | 'users' | 'server' | 'globe' | 'code';
```

**Icon Set:** Custom SVG inline (no external dependencies)

---

## 2. NAVIGATION COMPONENTS (5)

### 2.1 Header
**Purpose:** Main site header with logo, nav, theme toggle, CTA  
**Used In:** All pages (via PageLayout)  
**Build Time:** 45 min

```typescript
interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}
```

**Features:**
- Logo (left)
- Main nav with dropdowns (center)
- Theme toggle + CTA button (right)
- Shrinks on scroll (reduces padding)
- Mobile: hamburger trigger

**Animation:**
- Scroll: height reduction, background solidify
- Dropdown: fade in + slide down
- Theme toggle: icon rotate

**Dark Mode:** Background/border swap

---

### 2.2 MobileMenu
**Purpose:** Fullscreen mobile navigation  
**Used In:** Header (mobile only)  
**Build Time:** 30 min

```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}
```

**Animation:**
- Open: slide in from right + backdrop fade
- Close: reverse
- Links: staggered fade in

---

### 2.3 DropdownMenu
**Purpose:** Mega menu for nav items with subitems  
**Used In:** Header (desktop)  
**Build Time:** 25 min

```typescript
interface DropdownMenuProps {
  trigger: string;
  items: DropdownItem[];
  featured?: FeaturedItem;
}
```

**Animation:** Fade + slide down, 0.2s  
**Dark Mode:** Background swap

---

### 2.4 Breadcrumbs
**Purpose:** Page hierarchy navigation  
**Used In:** Interior pages  
**Build Time:** 10 min

```typescript
interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}
```

---

### 2.5 BackToTop
**Purpose:** Floating scroll-to-top button  
**Used In:** All pages (via Layout)  
**Build Time:** 15 min

```typescript
interface BackToTopProps {
  showAfter?: number; // pixels scrolled
}
```

**Animation:** Fade in when visible, smooth scroll up  
**Dark Mode:** Button background swap

---

## 3. HERO COMPONENTS (4)

### 3.1 HeroMain
**Purpose:** Homepage hero with particle animation, stats, CTAs  
**Used In:** Homepage only  
**Build Time:** 60 min

```typescript
interface HeroMainProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  stats?: { value: string; label: string }[];
  showParticles?: boolean;
}
```

**Layout:** Full viewport height, centered content  
**Background:** ParticleNetwork + gradient  
**Animation:**
- Text: fade in + slide up, staggered
- Stats: count up animation
- Particles: continuous 60fps

**Dark Mode:** Gradient color adjustment

---

### 3.2 HeroPage
**Purpose:** Standard page header with title/breadcrumbs  
**Used In:** All interior pages  
**Build Time:** 25 min

```typescript
interface HeroPageProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundVariant?: 'default' | 'gradient' | 'pattern';
}
```

**Animation:** Fade in + slide up  
**Dark Mode:** Background swap

---

### 3.3 HeroSplit
**Purpose:** 50/50 content + image layout  
**Used In:** About, Products  
**Build Time:** 30 min

```typescript
interface HeroSplitProps {
  title: string;
  subtitle: string;
  content: string;
  image: { src: string; alt: string };
  imageSide?: 'left' | 'right';
  cta?: { label: string; href: string };
}
```

**Animation:** Content slides in from opposite side of image  
**Dark Mode:** Background swap

---

### 3.4 HeroCentered
**Purpose:** Simple centered hero for focused pages  
**Used In:** Contact, Pricing  
**Build Time:** 20 min

```typescript
interface HeroCenteredProps {
  title: string;
  subtitle?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
}
```

---

## 4. FEATURE COMPONENTS (6)

### 4.1 FeatureGrid
**Purpose:** 3-4 column feature cards  
**Used In:** Homepage, Solutions  
**Build Time:** 30 min

```typescript
interface FeatureGridProps {
  header?: SectionHeaderProps;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

interface Feature {
  icon: IconName;
  title: string;
  description: string;
  link?: { label: string; href: string };
}
```

**Animation:** Cards stagger fade in on scroll  
**Dark Mode:** Card background swap

---

### 4.2 FeatureCards
**Purpose:** Large feature cards with images  
**Used In:** Products page  
**Build Time:** 25 min

```typescript
interface FeatureCardsProps {
  features: FeatureWithImage[];
}

interface FeatureWithImage extends Feature {
  image: { src: string; alt: string };
}
```

---

### 4.3 FeatureAlternating
**Purpose:** Alternating left/right image+text sections  
**Used In:** Homepage, Solutions  
**Build Time:** 35 min

```typescript
interface FeatureAlternatingProps {
  features: AlternatingFeature[];
}

interface AlternatingFeature {
  badge?: string;
  title: string;
  description: string;
  bullets?: string[];
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
}
```

**Animation:** Slide in from alternate sides on scroll  
**Dark Mode:** Background swap

---

### 4.4 FeatureIcons
**Purpose:** Simple icon + label grid  
**Used In:** Benefits sections  
**Build Time:** 15 min

```typescript
interface FeatureIconsProps {
  features: { icon: IconName; label: string }[];
  columns?: 3 | 4 | 6;
}
```

---

### 4.5 IntegrationGrid
**Purpose:** Logo grid of integrations/partners  
**Used In:** Solutions, Products  
**Build Time:** 20 min

```typescript
interface IntegrationGridProps {
  header?: SectionHeaderProps;
  integrations: { name: string; logo: string; category?: string }[];
  filterable?: boolean;
}
```

**Animation:** Logos fade in staggered  
**Dark Mode:** Logo filter for visibility

---

### 4.6 BentoGrid
**Purpose:** Asymmetric grid layout (like Apple)  
**Used In:** Homepage, Products  
**Build Time:** 45 min

```typescript
interface BentoGridProps {
  items: BentoItem[];
}

interface BentoItem {
  size: 'sm' | 'md' | 'lg' | 'wide' | 'tall';
  title: string;
  description?: string;
  image?: string;
  icon?: IconName;
  gradient?: string;
}
```

**Layout:** CSS Grid with span variations  
**Animation:** Staggered reveal on scroll  
**Dark Mode:** Gradient adjustments

---

## 5. SOCIAL PROOF COMPONENTS (5)

### 5.1 LogoCarousel
**Purpose:** Auto-scrolling client logos  
**Used In:** Homepage, About  
**Build Time:** 35 min

```typescript
interface LogoCarouselProps {
  logos: { name: string; src: string }[];
  speed?: 'slow' | 'medium' | 'fast';
  pauseOnHover?: boolean;
  grayscale?: boolean;
}
```

**Animation:**
- Continuous scroll (CSS animation)
- Pause on hover
- Optional grayscale → color on hover

**Dark Mode:** Logo filter adjustment

---

### 5.2 StatsCounter
**Purpose:** Animated stat numbers  
**Used In:** Homepage, About, Portfolio  
**Build Time:** 40 min

```typescript
interface StatsCounterProps {
  stats: Stat[];
  variant?: 'inline' | 'cards' | 'boxed';
}

interface Stat {
  value: number;
  suffix?: string; // %, +, K, M
  prefix?: string; // $
  label: string;
  icon?: IconName;
}
```

**Animation:**
- Count up from 0 when in view
- Duration: 2s, easeOut
- Trigger: Intersection Observer

**Dark Mode:** Text/icon color swap

---

### 5.3 TestimonialCarousel
**Purpose:** Rotating testimonials with controls  
**Used In:** Homepage  
**Build Time:** 45 min

```typescript
interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  companyLogo?: string;
  rating?: number;
}
```

**Animation:**
- Slide/fade transitions between items
- Arrow hover effects
- Dot active state

**Dark Mode:** Quote box background swap

---

### 5.4 TestimonialGrid
**Purpose:** Static grid of testimonials  
**Used In:** Portfolio, About  
**Build Time:** 25 min

```typescript
interface TestimonialGridProps {
  testimonials: Testimonial[];
  columns?: 2 | 3;
}
```

---

### 5.5 AwardsSection
**Purpose:** Industry awards and recognition  
**Used In:** About, Homepage  
**Build Time:** 20 min

```typescript
interface AwardsSectionProps {
  header?: SectionHeaderProps;
  awards: Award[];
}

interface Award {
  name: string;
  organization: string;
  year: string;
  logo?: string;
}
```

---

## 6. PRICING COMPONENTS (4)

### 6.1 PricingTable
**Purpose:** Full pricing section with toggle and tiers  
**Used In:** Pricing page, Homepage (preview)  
**Build Time:** 50 min

```typescript
interface PricingTableProps {
  header?: SectionHeaderProps;
  tiers: PricingTier[];
  showToggle?: boolean;
  annualDiscount?: number;
}

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: { name: string; included: boolean; tooltip?: string }[];
  cta: { label: string; href: string };
  popular?: boolean;
  badge?: string;
}
```

**Animation:**
- Toggle: smooth price transition
- Cards: staggered fade in
- Popular tier: subtle glow

**Dark Mode:** Card backgrounds, badges

---

### 6.2 PricingCard
**Purpose:** Individual pricing tier card  
**Used In:** PricingTable  
**Build Time:** 20 min

---

### 6.3 PricingToggle
**Purpose:** Monthly/Annual billing toggle  
**Used In:** PricingTable  
**Build Time:** 15 min

```typescript
interface PricingToggleProps {
  value: 'monthly' | 'annual';
  onChange: (value: 'monthly' | 'annual') => void;
  discount?: number;
}
```

**Animation:** Smooth slider transition

---

### 6.4 PricingComparison
**Purpose:** Full feature comparison table  
**Used In:** Pricing page  
**Build Time:** 35 min

```typescript
interface PricingComparisonProps {
  tiers: string[];
  categories: ComparisonCategory[];
}

interface ComparisonCategory {
  name: string;
  features: {
    name: string;
    values: (boolean | string)[];
    tooltip?: string;
  }[];
}
```

**Animation:** Scroll-triggered reveal  
**Dark Mode:** Table styling swap

---

## 7. TEAM COMPONENTS (4)

### 7.1 TeamGrid
**Purpose:** Team member grid with cards  
**Used In:** Team page, About  
**Build Time:** 30 min

```typescript
interface TeamGridProps {
  header?: SectionHeaderProps;
  members: TeamMember[];
  variant?: 'grid' | 'featured' | 'compact';
}

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
  socials?: { platform: string; url: string }[];
}
```

**Animation:** Cards stagger on scroll, hover flip/reveal  
**Dark Mode:** Card background swap

---

### 7.2 TeamCard
**Purpose:** Individual team member card  
**Used In:** TeamGrid  
**Build Time:** 20 min

**Animation:**
- Image: subtle zoom on hover
- Socials: slide up from bottom
- Border glow on hover

---

### 7.3 OrgChart
**Purpose:** Visual organization hierarchy  
**Used In:** Team page  
**Build Time:** 40 min

```typescript
interface OrgChartProps {
  data: OrgNode;
  variant?: 'horizontal' | 'vertical';
}

interface OrgNode {
  member: TeamMember;
  reports?: OrgNode[];
}
```

**Animation:** Connectors draw in on scroll  
**Dark Mode:** Line/node color swap

---

### 7.4 CareersSection
**Purpose:** Open positions/hiring CTA  
**Used In:** Team page  
**Build Time:** 25 min

```typescript
interface CareersSectionProps {
  header?: SectionHeaderProps;
  positions?: Position[];
  noPositionsMessage?: string;
  cta?: { label: string; href: string };
}
```

---

## 8. PORTFOLIO COMPONENTS (4)

### 8.1 CaseStudyGrid
**Purpose:** Case study card grid  
**Used In:** Portfolio page  
**Build Time:** 30 min

```typescript
interface CaseStudyGridProps {
  header?: SectionHeaderProps;
  caseStudies: CaseStudy[];
  filterable?: boolean;
  categories?: string[];
}

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  image: string;
  summary: string;
  metrics?: Metric[];
  link?: string;
}
```

**Animation:** Filter transitions, card hover effects  
**Dark Mode:** Card styling swap

---

### 8.2 CaseStudyCard
**Purpose:** Individual case study card  
**Used In:** CaseStudyGrid  
**Build Time:** 20 min

**Animation:**
- Image: zoom on hover
- Overlay: gradient reveal
- Metrics: slide up

---

### 8.3 MetricsShowcase
**Purpose:** Key metrics/results display  
**Used In:** Portfolio, About  
**Build Time:** 25 min

```typescript
interface MetricsShowcaseProps {
  metrics: Metric[];
  variant?: 'cards' | 'inline' | 'large';
}

interface Metric {
  value: string;
  label: string;
  change?: { value: string; positive: boolean };
}
```

**Animation:** Count up, percentage bars fill  
**Dark Mode:** Color adjustments

---

### 8.4 ClientTestimonial
**Purpose:** Featured client quote with metrics  
**Used In:** Portfolio  
**Build Time:** 20 min

```typescript
interface ClientTestimonialProps {
  testimonial: Testimonial;
  metrics?: Metric[];
  caseLogo?: string;
}
```

---

## 9. BLOG COMPONENTS (4)

### 9.1 BlogGrid
**Purpose:** Blog post card grid  
**Used In:** Resources page  
**Build Time:** 25 min

```typescript
interface BlogGridProps {
  header?: SectionHeaderProps;
  posts: BlogPost[];
  featured?: BlogPost;
  showFilters?: boolean;
}

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author?: { name: string; avatar: string };
  link: string;
}
```

**Animation:** Card hover lift  
**Dark Mode:** Card styling swap

---

### 9.2 BlogCard
**Purpose:** Individual blog post card  
**Used In:** BlogGrid  
**Build Time:** 15 min

---

### 9.3 ResourceCard
**Purpose:** Downloadable resource card (whitepaper, etc)  
**Used In:** Resources page  
**Build Time:** 20 min

```typescript
interface ResourceCardProps {
  title: string;
  description: string;
  type: 'whitepaper' | 'ebook' | 'webinar' | 'report';
  image?: string;
  downloadUrl: string;
  gated?: boolean;
}
```

---

### 9.4 NewsletterSignup
**Purpose:** Email subscription form  
**Used In:** Resources, Footer  
**Build Time:** 20 min

```typescript
interface NewsletterSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'inline' | 'stacked' | 'card';
}
```

**Animation:** Success checkmark animation  
**Dark Mode:** Input styling swap

---

## 10. FORM COMPONENTS (3)

### 10.1 ContactForm
**Purpose:** Full contact form with validation  
**Used In:** Contact page  
**Build Time:** 40 min

```typescript
interface ContactFormProps {
  fields?: FormField[];
  submitText?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'phone' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[]; // for select
  validation?: RegExp;
  errorMessage?: string;
}
```

**Features:**
- Client-side validation
- Error states
- Success animation
- Accessible labels

**Animation:** Input focus glow, error shake, success fade  
**Dark Mode:** Input styling swap

---

### 10.2 DemoRequestForm
**Purpose:** Shorter demo/trial request form  
**Used In:** CTAs, modals  
**Build Time:** 25 min

```typescript
interface DemoRequestFormProps {
  title?: string;
  compact?: boolean;
}
```

---

### 10.3 SearchInput
**Purpose:** Search bar with icon  
**Used In:** Resources, Docs  
**Build Time:** 15 min

```typescript
interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  suggestions?: string[];
}
```

---

## 11. CTA COMPONENTS (3)

### 11.1 CTABanner
**Purpose:** Full-width call-to-action section  
**Used In:** Page bottoms  
**Build Time:** 25 min

```typescript
interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  backgroundVariant?: 'gradient' | 'solid' | 'pattern';
}
```

**Animation:** Subtle background movement  
**Dark Mode:** Gradient adjustment

---

### 11.2 CTACard
**Purpose:** Card-style CTA for mid-page  
**Used In:** Within sections  
**Build Time:** 15 min

```typescript
interface CTACardProps {
  title: string;
  description?: string;
  cta: { label: string; href: string };
  icon?: IconName;
}
```

---

### 11.3 CTAInline
**Purpose:** Inline text CTA with arrow  
**Used In:** End of content sections  
**Build Time:** 10 min

```typescript
interface CTAInlineProps {
  text: string;
  href: string;
  icon?: IconName;
}
```

**Animation:** Arrow slides right on hover

---

## 12. FOOTER COMPONENTS (2)

### 12.1 Footer
**Purpose:** Full footer with links, newsletter, socials  
**Used In:** All pages  
**Build Time:** 35 min

```typescript
interface FooterProps {
  columns: FooterColumn[];
  newsletter?: boolean;
  socials?: Social[];
  copyright?: string;
  bottomLinks?: { label: string; href: string }[];
}

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
```

**Dark Mode:** Background/text swap

---

### 12.2 FooterSimple
**Purpose:** Minimal footer for docs/focused pages  
**Used In:** Documentation  
**Build Time:** 15 min

```typescript
interface FooterSimpleProps {
  copyright?: string;
  links?: { label: string; href: string }[];
}
```

---

## 13. EFFECTS COMPONENTS (3)

### 13.1 ParticleNetwork
**Purpose:** Canvas-based animated particle network  
**Used In:** HeroMain  
**Build Time:** 60 min

```typescript
interface ParticleNetworkProps {
  particleCount?: number;
  lineDistance?: number;
  particleColor?: string;
  lineColor?: string;
  speed?: number;
  mouseInteract?: boolean;
}
```

**Implementation:**
- Canvas element, 60fps target
- Particles with random positions, velocities
- Lines drawn when particles within distance
- Optional mouse attraction/repulsion
- Respects `prefers-reduced-motion`

---

### 13.2 GradientBlob
**Purpose:** Animated gradient background  
**Used In:** Heroes, CTAs  
**Build Time:** 25 min

```typescript
interface GradientBlobProps {
  colors?: string[];
  speed?: 'slow' | 'medium' | 'fast';
  blur?: number;
}
```

**Implementation:** CSS keyframes, transform/opacity only

---

### 13.3 ScanLine
**Purpose:** Cyberpunk scanning line effect  
**Used In:** Optional hero enhancement  
**Build Time:** 15 min

```typescript
interface ScanLineProps {
  speed?: number;
  opacity?: number;
}
```

**Implementation:** CSS animation, repeating linear gradient

---

## Build Time Summary

| Category | Components | Total Time |
|----------|------------|------------|
| Common | 6 | 1h 25min |
| Navigation | 5 | 2h 5min |
| Heroes | 4 | 2h 15min |
| Features | 6 | 2h 50min |
| Social Proof | 5 | 2h 45min |
| Pricing | 4 | 2h |
| Team | 4 | 1h 55min |
| Portfolio | 4 | 1h 35min |
| Blog | 4 | 1h 20min |
| Forms | 3 | 1h 20min |
| CTA | 3 | 50min |
| Footer | 2 | 50min |
| Effects | 3 | 1h 40min |

**Estimated Total: ~22-24 hours raw build time**
**With parallelization (5 agents): ~5-6 hours**

---

*Component Library v1.0 - 38 components specified*
