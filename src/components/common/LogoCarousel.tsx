import styles from './LogoCarousel.module.css';

interface Logo {
  name: string;
  src?: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: 'slow' | 'medium' | 'fast';
}

// Generate a simple SVG logo with company name
function generateLogoSvg(name: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40">
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="system-ui, sans-serif" font-size="14" font-weight="600">${name}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default function LogoCarousel({ logos, speed = 'medium' }: LogoCarouselProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={styles.carousel}>
      <div className={`${styles.track} ${styles[speed]}`}>
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.name}-${index}`} className={styles.logoWrapper}>
            <img 
              src={logo.src?.startsWith('http') && !logo.src.includes('placeholder') ? logo.src : generateLogoSvg(logo.name)} 
              alt={logo.name} 
              className={styles.logo} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
