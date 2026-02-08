# ANIMATION-SPEC.md - Professional Animation System

## Animation Philosophy

**Core Principles:**
1. **Performance First** - 60fps always, GPU-accelerated properties only
2. **Purpose-Driven** - Every animation serves a UX purpose
3. **Subtle > Flashy** - Premium feels refined, not overwhelming
4. **Accessible** - Respect `prefers-reduced-motion`

**Benchmarks:** PlayHost gaming template (9/10), Vorix (pixel-perfect), CrowdStrike website

---

## 1. EASING CURVES

```css
:root {
  /* Standard Easings */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Custom Easings (Premium Feel) */
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-snappy: cubic-bezier(0.77, 0, 0.175, 1);
  
  /* Spring-like */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 2. DURATION SCALE

```css
:root {
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
  --duration-slowest: 700ms;
  
  /* Special durations */
  --duration-page: 400ms;     /* Page transitions */
  --duration-modal: 300ms;    /* Modal open/close */
  --duration-carousel: 500ms; /* Carousel slides */
  --duration-counter: 2000ms; /* Stat counters */
}
```

---

## 3. SCROLL-TRIGGERED ANIMATIONS

### Implementation Pattern
```typescript
// hooks/useIntersectionObserver.ts
export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only trigger once
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isVisible;
}
```

### Base Animations (Keyframes)
```css
/* animations.css */

/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Down */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Left */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Fade In Right */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Blur In */
@keyframes blurIn {
  from {
    opacity: 0;
    filter: blur(10px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}
```

### Animation Classes
```css
/* Default state (before animation) */
.animate {
  opacity: 0;
}

/* Triggered state */
.animate.visible {
  animation-fill-mode: forwards;
}

/* Variants */
.animate.fadeInUp.visible {
  animation: fadeInUp var(--duration-normal) var(--ease-out) forwards;
}

.animate.fadeInDown.visible {
  animation: fadeInDown var(--duration-normal) var(--ease-out) forwards;
}

.animate.fadeInLeft.visible {
  animation: fadeInLeft var(--duration-slow) var(--ease-out) forwards;
}

.animate.fadeInRight.visible {
  animation: fadeInRight var(--duration-slow) var(--ease-out) forwards;
}

.animate.scaleIn.visible {
  animation: scaleIn var(--duration-normal) var(--ease-spring) forwards;
}
```

### Staggered Grid Animation
```css
/* For grids of cards */
.staggerGrid > * {
  opacity: 0;
}

.staggerGrid.visible > *:nth-child(1) { animation-delay: 0ms; }
.staggerGrid.visible > *:nth-child(2) { animation-delay: 100ms; }
.staggerGrid.visible > *:nth-child(3) { animation-delay: 200ms; }
.staggerGrid.visible > *:nth-child(4) { animation-delay: 300ms; }
.staggerGrid.visible > *:nth-child(5) { animation-delay: 400ms; }
.staggerGrid.visible > *:nth-child(6) { animation-delay: 500ms; }
/* ... up to 12 */

.staggerGrid.visible > * {
  animation: fadeInUp var(--duration-normal) var(--ease-out) forwards;
}
```

---

## 4. HOVER EFFECTS

### Button Hover
```css
.button {
  transition: 
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out),
    filter var(--duration-fast) var(--ease-out);
}

.buttonPrimary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
  filter: brightness(1.1);
}

.buttonPrimary:active {
  transform: translateY(0);
  box-shadow: 0 5px 15px rgba(6, 182, 212, 0.3);
}
```

### Card Hover (Lift Effect)
```css
.card {
  transition: 
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
  border-color: rgba(6, 182, 212, 0.3);
}
```

### Link Underline Animation
```css
.link {
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary-500);
  transition: width var(--duration-normal) var(--ease-out);
}

.link:hover::after {
  width: 100%;
}
```

### Icon Rotation (Arrow)
```css
.arrowLink {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.arrowLink svg {
  transition: transform var(--duration-fast) var(--ease-out);
}

.arrowLink:hover svg {
  transform: translateX(4px);
}
```

### Image Zoom on Card Hover
```css
.cardImage {
  overflow: hidden;
}

.cardImage img {
  transition: transform var(--duration-slow) var(--ease-out);
}

.card:hover .cardImage img {
  transform: scale(1.05);
}
```

---

## 5. LOGO CAROUSEL

### CSS-Only Infinite Scroll
```css
.logoCarousel {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.logoTrack {
  display: flex;
  gap: var(--space-12);
  animation: scroll 30s linear infinite;
  width: max-content;
}

/* Duplicate logos for seamless loop */
.logoTrack::after {
  content: '';
  display: flex;
  gap: var(--space-12);
  /* Clone of logos via JS or CSS content */
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.logoCarousel:hover .logoTrack {
  animation-play-state: paused;
}
```

### Speed Variants
```css
.logoTrack.slow { animation-duration: 40s; }
.logoTrack.medium { animation-duration: 30s; }
.logoTrack.fast { animation-duration: 20s; }
```

### Grayscale to Color
```css
.logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: 
    filter var(--duration-normal) var(--ease-out),
    opacity var(--duration-normal) var(--ease-out);
}

.logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}
```

---

## 6. STATS COUNTER

### Counter Hook
```typescript
// hooks/useCounter.ts
export function useCounter(
  end: number,
  duration: number = 2000,
  delay: number = 0
) {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  
  const start = useCallback(() => {
    if (isStarted) return;
    setIsStarted(true);
    
    setTimeout(() => {
      const startTime = Date.now();
      const step = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quad
        const eased = 1 - (1 - progress) * (1 - progress);
        setCount(Math.floor(end * eased));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, delay);
  }, [end, duration, delay, isStarted]);
  
  return { count, start };
}
```

### Usage
```tsx
function StatsCounter({ stats }) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);
  
  return (
    <div ref={ref} className={styles.stats}>
      {stats.map((stat, i) => (
        <StatItem 
          key={stat.label}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          start={isVisible}
          delay={i * 200}
        />
      ))}
    </div>
  );
}
```

### Visual Animation
```css
.statValue {
  font-size: var(--text-5xl);
  font-weight: var(--font-extrabold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.statLabel {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}
```

---

## 7. TESTIMONIAL CAROUSEL

### Slide Transition
```css
.testimonialSlide {
  opacity: 0;
  transform: translateX(20px);
  transition: 
    opacity var(--duration-carousel) var(--ease-out),
    transform var(--duration-carousel) var(--ease-out);
  position: absolute;
  width: 100%;
}

.testimonialSlide.active {
  opacity: 1;
  transform: translateX(0);
  position: relative;
}

.testimonialSlide.prev {
  opacity: 0;
  transform: translateX(-20px);
}
```

### Dot Indicators
```css
.dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--color-text-muted);
  transition: 
    background var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
  cursor: pointer;
}

.dot.active {
  background: var(--color-primary-500);
  transform: scale(1.25);
}

.dot:hover:not(.active) {
  background: var(--color-text-tertiary);
}
```

### Arrow Buttons
```css
.arrow {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 
    background var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.arrow:hover {
  background: var(--color-bg-card-hover);
  border-color: var(--color-border-hover);
  transform: scale(1.05);
}
```

### Autoplay
```typescript
useEffect(() => {
  if (!autoplay) return;
  
  const timer = setInterval(() => {
    setActiveIndex(i => (i + 1) % testimonials.length);
  }, autoplaySpeed);
  
  return () => clearInterval(timer);
}, [autoplay, autoplaySpeed, testimonials.length]);
```

---

## 8. PAGE TRANSITIONS (View Transitions API)

### Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  // ...
  experimental: {
    viewTransitions: true
  }
});
```

### Layout Implementation
```astro
---
import { ViewTransitions } from 'astro:transitions';
---
<html>
  <head>
    <ViewTransitions />
  </head>
</html>
```

### Custom Transitions
```css
/* Fade */
::view-transition-old(page) {
  animation: fadeOut var(--duration-page) var(--ease-out) forwards;
}

::view-transition-new(page) {
  animation: fadeIn var(--duration-page) var(--ease-out) forwards;
}

@keyframes fadeOut {
  to { opacity: 0; }
}

@keyframes fadeIn {
  from { opacity: 0; }
}

/* Slide */
::view-transition-old(slide) {
  animation: slideOut var(--duration-page) var(--ease-out) forwards;
}

::view-transition-new(slide) {
  animation: slideIn var(--duration-page) var(--ease-out) forwards;
}
```

---

## 9. MICRO-INTERACTIONS

### Form Input Focus
```css
.input {
  transition: 
    border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.input:focus {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.1);
}
```

### Form Validation Shake
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}

.inputError {
  animation: shake 0.4s var(--ease-out);
  border-color: var(--color-error);
}
```

### Success Checkmark
```css
@keyframes checkmark {
  0% {
    stroke-dashoffset: 50;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.successCheck path {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: checkmark 0.5s var(--ease-out) forwards;
}
```

### Theme Toggle Rotation
```css
.themeToggle svg {
  transition: transform var(--duration-normal) var(--ease-spring);
}

.themeToggle:hover svg {
  transform: rotate(15deg);
}

.themeToggle:active svg {
  transform: rotate(360deg);
  transition-duration: 0.5s;
}
```

### Menu Icon Morph
```css
.menuIcon span {
  display: block;
  width: 24px;
  height: 2px;
  background: currentColor;
  transition: 
    transform var(--duration-normal) var(--ease-out),
    opacity var(--duration-normal) var(--ease-out);
}

.menuIcon.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menuIcon.open span:nth-child(2) {
  opacity: 0;
}

.menuIcon.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
```

---

## 10. PARTICLE NETWORK (Canvas)

### Implementation
```typescript
// components/effects/ParticleNetwork/ParticleNetwork.tsx

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function ParticleNetwork({
  particleCount = 80,
  lineDistance = 150,
  particleColor = 'rgba(6, 182, 212, 0.8)',
  lineColor = 'rgba(6, 182, 212, 0.15)',
  speed = 0.5,
  mouseInteract = true
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Resize canvas
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);
    
    // Initialize particles
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      radius: Math.random() * 2 + 1
    }));
    
    // Mouse tracking
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    if (mouseInteract) {
      canvas.addEventListener('mousemove', handleMouse);
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Update and draw particles
      particles.current.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
        
        // Draw lines to nearby particles
        particles.current.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < lineDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor.replace('0.15', 
              String(0.15 * (1 - dist / lineDistance)));
            ctx.stroke();
          }
        });
      });
      
      animationId.current = requestAnimationFrame(animate);
    };
    
    // Respect reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animate();
    }
    
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
      if (animationId.current) cancelAnimationFrame(animationId.current);
    };
  }, [particleCount, lineDistance, particleColor, lineColor, speed, mouseInteract]);
  
  return <canvas ref={canvasRef} className={styles.canvas} />;
}
```

### CSS
```css
.canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
```

---

## 11. PERFORMANCE GUIDELINES

### GPU-Accelerated Properties Only
```css
/* ✅ DO use */
transform: translateX() translateY() scale() rotate();
opacity: 0-1;

/* ❌ DON'T animate */
width, height, top, left, right, bottom;
margin, padding;
background-color (use opacity overlay instead);
```

### Will-Change (Use Sparingly)
```css
/* Only on elements that WILL animate */
.card {
  will-change: transform;
}

/* Remove after animation */
.card.animated {
  will-change: auto;
}
```

### Composite Layers
```css
/* Force GPU layer for heavy animations */
.heavyAnimation {
  transform: translateZ(0);
  /* or */
  backface-visibility: hidden;
}
```

### Animation Throttling
```typescript
// Throttle scroll handlers
const handleScroll = throttle(() => {
  // Check visibility
}, 100);
```

---

## 12. REDUCED MOTION SUPPORT

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .particleNetwork,
  .logoCarousel .logoTrack,
  .gradientBlob {
    animation: none !important;
  }
  
  .animate {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

*Animation Spec v1.0 - 60fps professional animations*
