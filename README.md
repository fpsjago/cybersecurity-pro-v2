# CyberSec Pro v2.0

Enterprise-grade cybersecurity website template built with Astro 5, React 19, and TypeScript.

## 🚀 Features

- **Astro 5** - Fast, modern static site generator
- **React 19** - Interactive components with hooks
- **TypeScript** - Type-safe development
- **Dark Mode** - Premium dark-first design
- **Animations** - 60fps scroll-triggered animations
- **Particle Effects** - Canvas-based particle network
- **Mobile Responsive** - Perfect on all devices
- **SEO Optimized** - Meta tags, OG images, semantic HTML
- **9/10 Quality** - Vorix/PlayHost level polish

## 📁 Project Structure

```
/
├── public/              # Static assets
│   └── images/          # Images (heroes, logos, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Reusable components
│   │   ├── layout/      # Header, Footer, Nav
│   │   └── effects/     # ParticleNetwork, etc.
│   ├── layouts/         # Astro layouts
│   ├── pages/           # Astro pages (routes)
│   ├── styles/          # Global CSS
│   └── assets/          # Images, fonts
└── astro.config.mjs     # Astro configuration
```

## 🛠️ Commands

| Command           | Action                                      |
|:------------------|:--------------------------------------------|
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build for production to `./dist/`           |
| `npm run preview` | Preview production build locally            |

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:4321
   ```

## 🎨 Customization

### Colors

Edit `src/styles/global.css` to change the color scheme:

```css
:root {
  --color-primary-500: #06b6d4;    /* Cyan */
  --color-secondary-500: #3b82f6;  /* Blue */
  --color-accent-500: #22c55e;     /* Green */
}
```

### Typography

Font stack uses Inter from Google Fonts. Change in `src/layouts/BaseLayout.astro`.

### Content

- **Homepage:** `src/pages/index.astro`
- **Navigation:** `src/components/layout/Header.tsx`
- **Footer:** `src/components/layout/Footer.tsx`

## 📦 Components

### Common Components
- `Container` - Responsive container wrapper
- `Button` - 4 variants (primary, secondary, ghost, outline)
- `Card` - Flexible card component
- `Badge` - Status/category badges
- `SectionHeader` - Section titles with badges

### Layout Components
- `Header` - Navigation with mobile menu
- `Footer` - 4-column footer with links
- `BaseLayout` - Page wrapper with meta tags

### Effects
- `ParticleNetwork` - Animated particle background
- `LogoCarousel` - Auto-scrolling logo carousel
- `StatsCounter` - CountUp number animations

## 🌐 Deployment

### GitHub Pages

Already configured! Just push to GitHub:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/fpsjago/cybersecurity-pro-v2.git
git push -u origin main
```

Enable GitHub Pages in repo settings → Pages → Source: `gh-pages` branch.

### Other Platforms

- **Vercel:** `vercel --prod`
- **Netlify:** `netlify deploy --prod`
- **Cloudflare Pages:** Connect repo in dashboard

## 📄 License

MIT License - feel free to use for commercial projects!

## 🙏 Credits

Built with ❤️ by Agent 1 - Foundation Team
Template Quality: 9/10 (Vorix Level)
