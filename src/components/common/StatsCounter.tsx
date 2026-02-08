import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import styles from './StatsCounter.module.css';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

interface StatsCounterProps {
  stats: Stat[];
  variant?: 'inline' | 'cards' | 'boxed';
}

export default function StatsCounter({ stats, variant = 'inline' }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.stats} ${styles[variant]}`}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.stat}>
          <div className={styles.value}>
            {stat.prefix && <span>{stat.prefix}</span>}
            {isVisible && (
              <CountUp
                end={stat.value}
                duration={2}
                decimals={stat.decimals || 0}
                separator=","
              />
            )}
            {stat.suffix && <span>{stat.suffix}</span>}
          </div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
