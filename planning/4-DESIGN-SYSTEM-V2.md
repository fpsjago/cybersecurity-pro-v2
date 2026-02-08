# DESIGN-SYSTEM-V2.md - Complete Design System

## Overview

**Design Philosophy:** Dark-first, cyberpunk-inspired, enterprise-grade  
**Inspiration:** CrowdStrike, Palo Alto Networks, SentinelOne  
**Tech:** CSS Custom Properties + CSS Modules  
**Themes:** 5 color schemes with full dark/light mode support

---

## 1. TYPOGRAPHY

### Font Stack
```css
:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
}
```

### Type Scale (1.25 ratio - Major Third)
```css
:root {
  /* Base: 16px = 1rem */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  --text-7xl: 4.5rem;      /* 72px */
}
```

### Font Weights
```css
:root {
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

### Line Heights
```css
:root {
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

### Letter Spacing
```css
:root {
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
}
```

### Typography Usage
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 (Hero) | 5xl-7xl | 800 | tight | tighter |
| H2 (Section) | 4xl-5xl | 700 | tight | tight |
| H3 (Card) | 2xl-3xl | 600 | snug | normal |
| H4 (Subsection) | xl-2xl | 600 | snug | normal |
| Body | base-lg | 400 | relaxed | normal |
| Small/Caption | sm-xs | 400 | normal | wide |
| Button | base | 600 | none | wide |
| Badge | xs-sm | 500 | none | wider |

---

## 2. COLOR SYSTEM

### Color Tokens Structure
```
[color]-[shade]-[variant]

Examples:
--color-primary-500
--color-bg-primary
--color-text-secondary
```

### Theme 1: CYBER BLUE (Default)
```css
[data-theme="dark"] {
  /* Primary - Cyan */
  --color-primary-50: #ecfeff;
  --color-primary-100: #cffafe;
  --color-primary-200: #a5f3fc;
  --color-primary-300: #67e8f9;
  --color-primary-400: #22d3ee;
  --color-primary-500: #06b6d4;  /* Primary */
  --color-primary-600: #0891b2;
  --color-primary-700: #0e7490;
  --color-primary-800: #155e75;
  --color-primary-900: #164e63;
  
  /* Secondary - Blue */
  --color-secondary-50: #eff6ff;
  --color-secondary-100: #dbeafe;
  --color-secondary-200: #bfdbfe;
  --color-secondary-300: #93c5fd;
  --color-secondary-400: #60a5fa;
  --color-secondary-500: #3b82f6;  /* Secondary */
  --color-secondary-600: #2563eb;
  --color-secondary-700: #1d4ed8;
  --color-secondary-800: #1e40af;
  --color-secondary-900: #1e3a8a;
  
  /* Accent - Neon Green */
  --color-accent-50: #f0fdf4;
  --color-accent-100: #dcfce7;
  --color-accent-200: #bbf7d0;
  --color-accent-300: #86efac;
  --color-accent-400: #4ade80;
  --color-accent-500: #22c55e;  /* Accent */
  --color-accent-600: #16a34a;
  --color-accent-700: #15803d;
  --color-accent-800: #166534;
  --color-accent-900: #14532d;
  
  /* Backgrounds */
  --color-bg-primary: #0a0e1a;
  --color-bg-secondary: #0f1629;
  --color-bg-tertiary: #151c32;
  --color-bg-elevated: #1a2340;
  --color-bg-card: rgba(15, 22, 41, 0.8);
  --color-bg-card-hover: rgba(21, 28, 50, 0.9);
  
  /* Text */
  --color-text-primary: #f8fafc;
  --color-text-secondary: #94a3b8;
  --color-text-tertiary: #64748b;
  --color-text-muted: #475569;
  --color-text-inverse: #0f172a;
  
  /* Borders */
  --color-border-primary: rgba(148, 163, 184, 0.1);
  --color-border-secondary: rgba(148, 163, 184, 0.2);
  --color-border-hover: rgba(6, 182, 212, 0.3);
  --color-border-focus: rgba(6, 182, 212, 0.5);
  
  /* Status */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  --gradient-accent: linear-gradient(135deg, #22c55e 0%, #06b6d4 100%);
  --gradient-hero: linear-gradient(135deg, #0a0e1a 0%, #1e3a8a 100%);
  --gradient-card: linear-gradient(180deg, rgba(15,22,41,0.9) 0%, rgba(10,14,26,0.95) 100%);
  
  /* Glows */
  --glow-primary: 0 0 40px rgba(6, 182, 212, 0.3);
  --glow-accent: 0 0 40px rgba(34, 197, 94, 0.3);
  --glow-button: 0 4px 20px rgba(6, 182, 212, 0.4);
}

[data-theme="light"] {
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-bg-tertiary: #f1f5f9;
  --color-bg-elevated: #ffffff;
  --color-bg-card: rgba(255, 255, 255, 0.9);
  --color-bg-card-hover: rgba(248, 250, 252, 0.95);
  
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-tertiary: #64748b;
  --color-text-muted: #94a3b8;
  --color-text-inverse: #f8fafc;
  
  --color-border-primary: rgba(15, 23, 42, 0.1);
  --color-border-secondary: rgba(15, 23, 42, 0.15);
  
  --gradient-hero: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}
```

### Theme 2: PURPLE NEON
```css
[data-theme="dark"][data-color="purple"] {
  --color-primary-500: #a855f7;  /* Purple */
  --color-secondary-500: #6366f1;  /* Indigo */
  --color-accent-500: #ec4899;  /* Pink */
  --gradient-primary: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  --glow-primary: 0 0 40px rgba(168, 85, 247, 0.3);
}
```

### Theme 3: EMERALD MATRIX
```css
[data-theme="dark"][data-color="emerald"] {
  --color-primary-500: #10b981;  /* Emerald */
  --color-secondary-500: #14b8a6;  /* Teal */
  --color-accent-500: #84cc16;  /* Lime */
  --gradient-primary: linear-gradient(135deg, #10b981 0%, #84cc16 100%);
  --glow-primary: 0 0 40px rgba(16, 185, 129, 0.3);
}
```

### Theme 4: CRIMSON ALERT
```css
[data-theme="dark"][data-color="crimson"] {
  --color-primary-500: #ef4444;  /* Red */
  --color-secondary-500: #f97316;  /* Orange */
  --color-accent-500: #fbbf24;  /* Amber */
  --gradient-primary: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  --glow-primary: 0 0 40px rgba(239, 68, 68, 0.3);
}
```

### Theme 5: MIDNIGHT PURPLE
```css
[data-theme="dark"][data-color="midnight"] {
  --color-primary-500: #8b5cf6;  /* Violet */
  --color-secondary-500: #3b82f6;  /* Blue */
  --color-accent-500: #06b6d4;  /* Cyan */
  --gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
  --glow-primary: 0 0 40px rgba(139, 92, 246, 0.3);
}
```

---

## 3. SPACING SYSTEM

### Base Unit: 4px
```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  --space-40: 10rem;    /* 160px */
  --space-48: 12rem;    /* 192px */
}
```

### Section Spacing
```css
:root {
  --section-padding-sm: var(--space-12);  /* 48px - mobile */
  --section-padding-md: var(--space-16);  /* 64px - tablet */
  --section-padding-lg: var(--space-24);  /* 96px - desktop */
  --section-gap: var(--space-16);          /* Between sections */
}
```

### Component Spacing
```css
:root {
  --card-padding-sm: var(--space-4);   /* 16px */
  --card-padding-md: var(--space-6);   /* 24px */
  --card-padding-lg: var(--space-8);   /* 32px */
  --card-gap: var(--space-6);          /* 24px */
  --grid-gap-sm: var(--space-4);       /* 16px */
  --grid-gap-md: var(--space-6);       /* 24px */
  --grid-gap-lg: var(--space-8);       /* 32px */
}
```

---

## 4. BREAKPOINTS

### Mobile-First Responsive
```css
:root {
  --breakpoint-sm: 640px;   /* Small devices (phones) */
  --breakpoint-md: 768px;   /* Medium devices (tablets) */
  --breakpoint-lg: 1024px;  /* Large devices (laptops) */
  --breakpoint-xl: 1280px;  /* Extra large devices (desktops) */
  --breakpoint-2xl: 1536px; /* 2X large devices (large desktops) */
}

/* Usage in CSS Modules */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Container Max Widths
```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}
```

---

## 5. BORDER RADIUS

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.375rem;   /* 6px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-3xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;
}
```

### Usage by Component
| Component | Radius |
|-----------|--------|
| Button | lg (8px) |
| Card | xl (12px) |
| Input | lg (8px) |
| Badge | full |
| Avatar | full |
| Modal | 2xl (16px) |

---

## 6. SHADOWS

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  /* Glow shadows */
  --shadow-glow-sm: 0 0 10px var(--color-primary-500);
  --shadow-glow-md: 0 0 20px var(--color-primary-500);
  --shadow-glow-lg: 0 0 40px var(--color-primary-500);
  
  /* Card hover shadows (dark mode) */
  --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 20px 40px -10px rgba(6, 182, 212, 0.2);
}
```

---

## 7. Z-INDEX SCALE

```css
:root {
  --z-0: 0;
  --z-10: 10;       /* Cards, content */
  --z-20: 20;       /* Dropdowns */
  --z-30: 30;       /* Fixed elements */
  --z-40: 40;       /* Sticky header */
  --z-50: 50;       /* Overlays */
  --z-60: 60;       /* Mobile menu */
  --z-70: 70;       /* Modals */
  --z-80: 80;       /* Toasts */
  --z-90: 90;       /* Tooltips */
  --z-100: 100;     /* Maximum */
}
```

---

## 8. COMPONENT DESIGN PATTERNS

### Buttons
```css
.button {
  /* Base */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-wide);
  border-radius: var(--radius-lg);
  transition: all 0.2s ease;
  cursor: pointer;
  
  /* Sizes */
  &.sm { padding: var(--space-2) var(--space-4); font-size: var(--text-sm); }
  &.md { padding: var(--space-3) var(--space-6); font-size: var(--text-base); }
  &.lg { padding: var(--space-4) var(--space-8); font-size: var(--text-lg); }
}

.buttonPrimary {
  background: var(--gradient-primary);
  color: var(--color-text-inverse);
  box-shadow: var(--glow-button);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-primary);
    filter: brightness(1.1);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.buttonSecondary {
  background: var(--color-bg-elevated);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-secondary);
  
  &:hover {
    border-color: var(--color-border-hover);
    background: var(--color-bg-card-hover);
  }
}

.buttonGhost {
  background: transparent;
  color: var(--color-primary-500);
  
  &:hover {
    background: rgba(6, 182, 212, 0.1);
  }
}

.buttonOutline {
  background: transparent;
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);
  
  &:hover {
    background: var(--color-primary-500);
    color: var(--color-text-inverse);
  }
}
```

### Cards
```css
.card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-xl);
  padding: var(--card-padding-md);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.cardHover {
  &:hover {
    transform: translateY(-8px);
    border-color: var(--color-border-hover);
    box-shadow: var(--shadow-card-hover);
  }
}

.cardGlass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Inputs
```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
  font-size: var(--text-base);
  transition: all 0.2s ease;
  
  &::placeholder {
    color: var(--color-text-muted);
  }
  
  &:focus {
    outline: none;
    border-color: var(--color-border-focus);
    box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.inputError {
  border-color: var(--color-error);
  
  &:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
}
```

### Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  border-radius: var(--radius-full);
  
  &.default {
    background: rgba(6, 182, 212, 0.1);
    color: var(--color-primary-400);
    border: 1px solid rgba(6, 182, 212, 0.2);
  }
  
  &.success {
    background: rgba(34, 197, 94, 0.1);
    color: var(--color-success);
  }
  
  &.warning {
    background: rgba(245, 158, 11, 0.1);
    color: var(--color-warning);
  }
  
  &.danger {
    background: rgba(239, 68, 68, 0.1);
    color: var(--color-error);
  }
}
```

---

## 9. ICON SYSTEM

### Icon Sizes
```css
:root {
  --icon-xs: 0.875rem;  /* 14px */
  --icon-sm: 1rem;      /* 16px */
  --icon-md: 1.25rem;   /* 20px */
  --icon-lg: 1.5rem;    /* 24px */
  --icon-xl: 2rem;      /* 32px */
  --icon-2xl: 2.5rem;   /* 40px */
  --icon-3xl: 3rem;     /* 48px */
}
```

### Icon Set (28 core icons)
All icons are inline SVG for performance and color control:

**Security:**
- shield, shield-check, lock, unlock, key, alert-triangle, alert-circle

**Navigation:**
- menu, x, arrow-right, arrow-left, arrow-up, arrow-down, chevron-down, external-link

**Actions:**
- search, download, upload, play, pause, check, plus, minus

**Social:**
- linkedin, twitter, github, mail, phone, map-pin, globe

**Features:**
- cloud, server, network, users, chart, code, settings

---

## 10. DARK MODE IMPLEMENTATION

### CSS Structure
```css
/* Base: light mode */
:root {
  color-scheme: light dark;
  /* light mode colors */
}

/* Dark mode */
[data-theme="dark"] {
  /* dark mode colors */
}

/* System preference fallback */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* dark mode colors */
  }
}
```

### Toggle Implementation
```typescript
// hooks/useDarkMode.ts
export function useDarkMode() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  useEffect(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
      return;
    }
    
    // Then check system preference
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  
  return { theme, setTheme, toggle };
}
```

### Transition Smoothing
```css
:root {
  /* Smooth color transitions on theme change */
  transition: 
    background-color 0.3s ease,
    border-color 0.3s ease;
}

/* Prevent flash on load */
:root:not([data-theme]) {
  visibility: hidden;
}
```

---

## 11. REDUCED MOTION

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .particleNetwork {
    display: none;
  }
}
```

---

## 12. GLOBAL STYLES

### CSS Reset
```css
/* global.css */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  min-height: 100vh;
}

img, video, svg {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
}

input, textarea, select {
  font: inherit;
  color: inherit;
}

/* Focus visible for keyboard nav */
:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Selection color */
::selection {
  background-color: var(--color-primary-500);
  color: var(--color-text-inverse);
}
```

---

*Design System v2.0 - Complete and ready for implementation*
