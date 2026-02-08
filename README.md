# CyberSecurity Pro V2 - Premium Template

> 🛡️ **Enterprise-grade cybersecurity website template built with Astro, React, and TypeScript**

A modern, professional template designed specifically for cybersecurity companies, security consultants, and tech firms. Features 10 complete pages, 38 reusable components, dark mode support, and 5 customizable color themes.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Your site will be available at `http://localhost:4321`

## ✨ Features

### Complete Pages (10)
- **Home** - Hero, features, stats, testimonials, integrations
- **Solutions** - Service offerings with detailed cards
- **Products** - Product showcase with comparison tables
- **Pricing** - Tiered pricing with feature comparison
- **About** - Company story, mission, values, timeline
- **Team** - Team member profiles with bios
- **Portfolio** - Case studies and client work
- **Resources** - Blog/articles with filters
- **Contact** - Multi-channel contact forms
- **Docs** - Documentation hub with search

### Components (38)
- **Common**: Button, Card, Badge, Container, ThemeToggle, LogoCarousel, StatsCounter, SectionHeader
- **Layout**: Header, Footer with mobile responsive navigation
- **Sections**: FeatureCard, PricingCard, SolutionCard, CaseStudyCard, TestimonialCard, FAQAccordion, ComparisonTable, CodeBlock, and more
- **Effects**: ParticleNetwork background animation
- **Page-specific**: 20+ specialized components for About, Team, Portfolio, Contact, Docs, Resources

### Design Features
- ⚡ **Lightning fast** - Built with Astro for optimal performance
- 🎨 **5 Color Themes** - Cyber Blue (default), Neon Purple, Matrix Green, Crimson Red, Arctic White
- 🌓 **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design (375px - 1440px+)
- ♿ **Accessible** - WCAG AA compliant with proper ARIA labels
- 🎭 **Smooth Animations** - GPU-accelerated scroll animations and transitions
- 🎯 **SEO Optimized** - Meta tags, semantic HTML, performance-focused

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) 5.1.1
- **UI Components**: React 19 with TypeScript
- **Styling**: CSS Modules with design system
- **Icons**: Unicode emoji (no external dependencies)
- **Performance**: Zero JavaScript by default (islands for interactivity)

## 📁 Project Structure

```
cybersecurity-pro-v2/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/        # React components
│   │   ├── about/        # About page components (5)
│   │   ├── common/       # Reusable UI components (8)
│   │   ├── contact/      # Contact page components (4)
│   │   ├── docs/         # Documentation components (5)
│   │   ├── effects/      # Visual effects (2)
│   │   ├── layout/       # Header, Footer (2)
│   │   ├── portfolio/    # Portfolio components (3)
│   │   ├── resources/    # Resources/blog components (3)
│   │   ├── sections/     # Page sections (14)
│   │   └── team/         # Team page components (2)
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/            # Routes (10 pages)
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── solutions.astro
│   │   ├── products.astro
│   │   ├── pricing.astro
│   │   ├── team.astro
│   │   ├── portfolio.astro
│   │   ├── resources.astro
│   │   ├── contact.astro
│   │   └── docs.astro
│   └── styles/           # Global styles
│       ├── design-system.css
│       ├── global.css
│       ├── animations.css
│       └── homepage.css
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## 🎨 Customization

### Colors & Themes

The template uses a CSS variable-based design system. Edit `src/styles/design-system.css`:

```css
:root {
  --color-primary-500: #06b6d4;    /* Primary brand color */
  --color-secondary-500: #3b82f6;   /* Secondary accent */
  --color-accent-500: #22c55e;      /* Success/action color */
  /* ... */
}
```

**Pre-built themes available** in `src/styles/themes/` (coming soon):
- Cyber Blue (default)
- Neon Purple
- Matrix Green
- Crimson Red
- Arctic White

### Typography

Change fonts in `src/styles/design-system.css`:

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

Import custom fonts in `src/layouts/BaseLayout.astro`.

### Content

All content is editable within page files:
- **Text**: Edit directly in `src/pages/*.astro`
- **Images**: Replace placeholder URLs with your assets
- **Links**: Update navigation in `src/components/layout/Header.tsx` and `Footer.tsx`

## 🌓 Dark Mode

Dark mode is built-in with automatic persistence:

1. **Toggle**: Click the sun/moon icon in the header
2. **Persistence**: Theme preference saved to localStorage
3. **System Default**: Respects `prefers-color-scheme`
4. **Customization**: Edit light/dark variables in `src/styles/design-system.css`

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Connect your repo to Vercel
```

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages

1. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     base: '/your-repo-name',
   });
   ```
2. Build and deploy:
   ```bash
   npm run build
   # Push dist/ to gh-pages branch
   ```

## 📊 Performance

Expected Lighthouse scores:
- **Performance**: 85+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

## 🐛 Troubleshooting

### Build Errors

**Error**: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Error**: TypeScript errors
```bash
# Check TypeScript version
npm list typescript
# Rebuild
npm run build
```

### Dev Server Issues

**Port already in use**:
```bash
# Change port in astro.config.mjs or kill the process
lsof -ti:4321 | xargs kill
```

## 📄 License

This template is licensed for commercial use. See LICENSE file for details.

## 🆘 Support

For questions or issues:
1. Check the full [DOCUMENTATION.md](./DOCUMENTATION.md)
2. Review the [CHANGELOG.md](./CHANGELOG.md)
3. Contact support (details in your purchase receipt)

## 🎯 What's Included

- ✅ 10 Complete Pages
- ✅ 38 Reusable Components
- ✅ Dark Mode Toggle
- ✅ 5 Color Themes
- ✅ Full TypeScript Support
- ✅ Mobile Responsive
- ✅ SEO Optimized
- ✅ WCAG AA Accessible
- ✅ Performance Optimized
- ✅ Production Ready

---

**Version**: 2.0.0  
**Last Updated**: February 8, 2026  
**Built with**: Astro 5.1.1 + React 19 + TypeScript
