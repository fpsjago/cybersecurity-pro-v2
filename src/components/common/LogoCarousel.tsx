import styles from './LogoCarousel.module.css';

interface Logo {
  name: string;
  src: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: 'slow' | 'medium' | 'fast';
}

export default function LogoCarousel({ logos, speed = 'medium' }: LogoCarouselProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={styles.carousel}>
      <div className={`${styles.track} ${styles[speed]}`}>
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.name}-${index}`} className={styles.logoWrapper}>
            <img src={logo.src} alt={logo.name} className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
}
