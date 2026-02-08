# BUILD-ROADMAP.md - 5-Agent Parallel Build Plan

## Overview

**Total Build Time:** 10-11 hours  
**Agents:** 5 Sonnet sub-agents working in parallel  
**Quality Target:** 9/10 (Vorix/PlayHost level)  
**Coordination:** Each agent receives complete specs, minimal dependencies

---

## Build Phases

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           PHASE 1: FOUNDATION                          │
│                            (Agent 1 - 2.5 hrs)                         │
├─────────────────────────────────────────────────────────────────────────┤
│ Project Setup → Design System → Base Components → Homepage             │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                     ┌──────────────┼──────────────┐
                     ▼              ▼              ▼
┌────────────────────────┐ ┌────────────────────────┐ ┌──────────────────┐
│     PHASE 2A           │ │     PHASE 2B           │ │    PHASE 2C      │
│   (Agent 2 - 2 hrs)    │ │   (Agent 3 - 2.5 hrs)  │ │  (Agent 4 - 2hrs)│
├────────────────────────┤ ├────────────────────────┤ ├──────────────────┤
│ Solutions Page         │ │ About Page             │ │ Resources Page   │
│ Products Page          │ │ Team Page              │ │ Contact Page     │
│ Pricing Page           │ │ Portfolio Page         │ │ Docs Page        │
└────────────────────────┘ └────────────────────────┘ └──────────────────┘
                     │              │              │
                     └──────────────┼──────────────┘
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      PHASE 3: POLISH & QA                              │
│                       (Agent 5 - 2 hrs)                                │
├─────────────────────────────────────────────────────────────────────────┤
│ Dark Mode Polish → Animation Refinement → Performance → Package        │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## AGENT 1: Foundation (2.5 hours)

**Dependencies:** None (starts first)  
**Outputs:** Base project that other agents clone and extend

### Hour 1: Project Setup + Design System

**Tasks:**
1. **Initialize Astro Project (15 min)**
   ```bash
   npm create astro@latest cybersecurity-pro-v2 -- --template minimal
   cd cybersecurity-pro-v2
   npx astro add react
   npm install
   ```

2. **Configure Project (10 min)**
   - Update `astro.config.mjs`
   - Configure `tsconfig.json` with path aliases
   - Set up folder structure per ARCHITECTURE.md

3. **Implement Design System (35 min)**
   - Create `src/assets/styles/variables.css` (all CSS custom properties)
   - Create `src/assets/styles/global.css` (reset, base styles)
   - Create `src/assets/styles/animations.css` (keyframes)
   - Create `src/assets/styles/utilities.css` (utility classes)

### Hour 2: Base Components

**Tasks:**
1. **Common Components (30 min)**
   - Container
   - Button (all variants)
   - SectionHeader
   - Badge
   - Card (all variants)
   - Icon (with 28 icons)

2. **Navigation Components (30 min)**
   - Header (with scroll behavior, theme toggle)
   - MobileMenu
   - DropdownMenu
   - BackToTop

### Hour 2.5: Homepage

**Tasks:**
1. **Layout + Footer (15 min)**
   - Layout.astro
   - PageLayout.astro
   - Footer component

2. **Homepage Sections (45 min)**
   - HeroMain (with ParticleNetwork)
   - LogoCarousel
   - FeatureGrid (6 features)
   - StatsCounter
   - FeatureAlternating (3 blocks)
   - TestimonialCarousel
   - BentoGrid
   - PricingTable (preview, 3 tiers)
   - AwardsSection
   - CTABanner

### Deliverables Checklist
- [ ] Project builds with `npm run build`
- [ ] Design system complete with 5 color themes
- [ ] All 6 common components working
- [ ] All 5 navigation components working
- [ ] Homepage with 10 sections
- [ ] Dark mode toggle functional
- [ ] Animations smooth (test scroll triggers)
- [ ] Mobile responsive

### Handoff
Once complete, push to shared location. Agents 2-4 will clone and work in parallel.

---

## AGENT 2: Solutions + Products + Pricing (2 hours)

**Dependencies:** Agent 1 foundation complete  
**Clone from:** Agent 1's output

### Hour 1: Solutions Page

**Tasks:**
1. **Solutions Page Structure (15 min)**
   - HeroPage component
   - Page layout with sections

2. **Solution Showcase Section (25 min)**
   - 6 detailed solution cards (Endpoint, Cloud, Identity, Threat Intel, Network, Email)
   - Each with: icon, title, description, features list, CTA

3. **Integration Grid (10 min)**
   - 24+ integration logos
   - Filter by category

4. **Supporting Sections (10 min)**
   - How Solutions Work Together (FeatureAlternating)
   - Industry logos
   - CTABanner

### Hour 1.5: Products Page

**Tasks:**
1. **Products Page Structure (10 min)**
   - HeroSplit with product screenshot

2. **Product Features (20 min)**
   - FeatureCards (8 major features with images)
   - BentoGrid (capabilities)

3. **Technical Sections (20 min)**
   - Tech specs table
   - Integration grid (API focus)
   - Screenshot gallery

### Hour 2: Pricing Page

**Tasks:**
1. **Pricing Page Structure (10 min)**
   - HeroCentered

2. **PricingTable Full (25 min)**
   - 4 tiers (Starter, Business, Pro, Enterprise)
   - Monthly/Annual toggle with pricing
   - Popular badge on Business tier
   - Full feature lists

3. **PricingComparison (15 min)**
   - Complete comparison table
   - All features, all tiers

4. **FAQ Section (10 min)**
   - 8 pricing FAQs
   - Expandable accordion

### Deliverables Checklist
- [ ] Solutions page with 6 solutions
- [ ] Products page with 8 features
- [ ] Pricing page with 4 tiers
- [ ] All pages build without errors
- [ ] Navigation links work
- [ ] Dark mode works on all pages
- [ ] Mobile responsive

---

## AGENT 3: About + Team + Portfolio (2.5 hours)

**Dependencies:** Agent 1 foundation complete  
**Clone from:** Agent 1's output

### Hour 1: About Page

**Tasks:**
1. **About Page Structure (10 min)**
   - HeroSplit with team photo

2. **Story Timeline (20 min)**
   - 4-6 milestones (founding to present)
   - Visual timeline with dates

3. **Mission & Values (15 min)**
   - Mission statement
   - 4 core values cards

4. **Supporting Sections (15 min)**
   - StatsCounter (company metrics)
   - Awards/recognition
   - Culture section (Life at CyberSec)
   - CTABanner (Join Our Team)

### Hour 1.5: Team Page

**Tasks:**
1. **Team Page Structure (10 min)**
   - HeroPage

2. **TeamGrid - Leadership (20 min)**
   - 6-8 leadership members
   - TeamCard with hover effects
   - Social links

3. **OrgChart (15 min)**
   - Visual hierarchy
   - Connecting lines

4. **Supporting Sections (15 min)**
   - Team stats (employees, countries)
   - CareersSection with sample positions
   - CTABanner (Join Us)

### Hour 2.5: Portfolio Page

**Tasks:**
1. **Portfolio Page Structure (10 min)**
   - HeroPage

2. **MetricsShowcase (10 min)**
   - Aggregate results (90% threat reduction, $50M saved, etc.)

3. **CaseStudyGrid (30 min)**
   - 6 case studies
   - Filterable by industry
   - CaseStudyCard with:
     - Client image
     - Industry tag
     - Summary
     - Key metrics
     - Link

4. **Featured Testimonial (10 min)**
   - Large ClientTestimonial
   - With metrics and logo

5. **Supporting Sections (10 min)**
   - Industry logos
   - CTABanner

### Deliverables Checklist
- [ ] About page with timeline, values, culture
- [ ] Team page with 6+ members and org chart
- [ ] Portfolio page with 6 case studies
- [ ] All pages build without errors
- [ ] Navigation links work
- [ ] Dark mode works on all pages
- [ ] Hover effects on cards
- [ ] Mobile responsive

---

## AGENT 4: Resources + Contact + Docs (2 hours)

**Dependencies:** Agent 1 foundation complete  
**Clone from:** Agent 1's output

### Hour 1: Resources Page

**Tasks:**
1. **Resources Page Structure (10 min)**
   - HeroPage with search

2. **Featured Post (15 min)**
   - Large featured blog post card
   - Full-width image

3. **BlogGrid (20 min)**
   - 6-9 blog posts
   - Category filters
   - BlogCard component

4. **ResourceCards (10 min)**
   - 4 downloadable resources (whitepapers, ebooks)
   - Gated download flow

5. **NewsletterSignup (5 min)**
   - Email subscription section

### Hour 1.5: Contact Page

**Tasks:**
1. **Contact Page Structure (5 min)**
   - HeroCentered

2. **ContactForm (25 min)**
   - Full form with fields:
     - Name, Email, Company, Phone
     - Subject dropdown
     - Message textarea
   - Client-side validation
   - Error states
   - Success animation

3. **Contact Info (10 min)**
   - Email, phone, address
   - Office hours
   - Social links

4. **Supporting Sections (10 min)**
   - Office locations (3 offices)
   - FAQ accordion (4-5 questions)
   - Urgent help CTA

### Hour 2: Documentation Page

**Tasks:**
1. **Docs Page Structure (10 min)**
   - HeroCentered (minimal)
   - Search bar

2. **Quick Start Cards (15 min)**
   - 6 category cards (Getting Started, Configuration, API, Integrations, Reporting, FAQ)
   - Icon + title + description

3. **Doc Categories (25 min)**
   - Expandable sections
   - Article lists
   - 4 categories, 4-6 articles each

4. **Support CTA (10 min)**
   - "Still need help?" section
   - Contact support button

### Deliverables Checklist
- [ ] Resources page with 6+ blog posts
- [ ] Contact page with working form validation
- [ ] Docs page with 6 categories
- [ ] All pages build without errors
- [ ] Navigation links work
- [ ] Dark mode works on all pages
- [ ] Forms functional with validation
- [ ] Mobile responsive

---

## AGENT 5: Dark Mode + Polish + QA (2 hours)

**Dependencies:** ALL agents complete (Agents 1-4)  
**Merges:** All agent outputs into final build

### Hour 1: Merge + Dark Mode Polish

**Tasks:**
1. **Merge All Agent Work (20 min)**
   - Combine all pages into single project
   - Resolve any conflicts
   - Verify all 10 pages render

2. **Dark Mode Audit (40 min)**
   - Test every component in both themes
   - Fix any color inconsistencies
   - Ensure proper contrast ratios
   - Verify theme persistence
   - Test theme toggle animation

### Hour 1.5: Animation Refinement

**Tasks:**
1. **Scroll Animation Audit (20 min)**
   - Verify all scroll triggers work
   - Check stagger timing
   - Ensure 60fps

2. **Hover Effect Polish (15 min)**
   - Card hovers
   - Button hovers
   - Link underlines

3. **Interactive Polish (15 min)**
   - Form focus states
   - Carousel transitions
   - Theme toggle animation

### Hour 2: Performance + Package

**Tasks:**
1. **Performance Optimization (25 min)**
   - Run Lighthouse audit
   - Optimize images (WebP)
   - Fix any performance issues
   - Target: 80+ score

2. **Cross-Browser Testing (15 min)**
   - Chrome, Firefox, Safari
   - Fix any issues

3. **Mobile Testing (10 min)**
   - 375px (iPhone SE)
   - 768px (iPad)
   - 1024px (iPad Pro)
   - 1440px (Desktop)

4. **Final Cleanup + Package (10 min)**
   - Remove all dev/planning files
   - Update README
   - Create customer documentation
   - Build production bundle

### Deliverables Checklist
- [ ] All 10 pages merged and working
- [ ] Dark mode perfect on all pages
- [ ] Light mode perfect on all pages
- [ ] Animations smooth (60fps)
- [ ] Lighthouse Performance 80+
- [ ] Lighthouse Accessibility 90+
- [ ] Mobile responsive (all breakpoints)
- [ ] No console errors
- [ ] All links valid
- [ ] Forms work correctly
- [ ] Production build succeeds

---

## Agent Communication Protocol

### Before Starting
Each agent reads:
1. `ARCHITECTURE.md` - Project structure
2. `COMPONENT-LIBRARY.md` - Component specs
3. `PAGE-SPECS.md` - Page details for their pages
4. `DESIGN-SYSTEM-V2.md` - Design tokens
5. `ANIMATION-SPEC.md` - Animation details

### During Work
- Follow specs exactly
- Use consistent naming
- Comment any deviations

### After Completion
Report with:
- Pages completed
- Components built
- Any issues/blockers
- Build verification

---

## Timeline Summary

| Agent | Focus | Hours | Start After |
|-------|-------|-------|-------------|
| Agent 1 | Foundation + Homepage | 2.5h | Immediately |
| Agent 2 | Solutions + Products + Pricing | 2h | Agent 1 done |
| Agent 3 | About + Team + Portfolio | 2.5h | Agent 1 done |
| Agent 4 | Resources + Contact + Docs | 2h | Agent 1 done |
| Agent 5 | Polish + QA | 2h | Agents 2-4 done |

**Total with Parallelization: ~6.5-7 hours**
**Buffer: 10-11 hours (safe estimate)**

---

## Risk Mitigation

### If Agent Falls Behind
- Other agents can help
- Reduce scope on lower-priority sections
- Prioritize core functionality over nice-to-haves

### If Merge Conflicts
- Agent 5 has dedicated merge time
- Each agent works on separate pages (minimal conflicts)
- Common components locked after Agent 1

### Quality Gates
- Each agent runs build verification
- No broken builds passed to next phase
- Agent 5 does final QA

---

*Build Roadmap v1.0 - Ready for execution*
