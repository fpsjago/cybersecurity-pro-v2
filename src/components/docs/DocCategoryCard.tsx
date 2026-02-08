import { useState, useRef, useEffect } from 'react';
import styles from './DocCategoryCard.module.css';

interface DocCategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  articleCount: number;
  link: string;
}

export function DocCategoryCard({
  icon,
  title,
  description,
  articleCount,
  link
}: DocCategoryCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={link}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.meta}>
          <span className={styles.count}>{articleCount} articles</span>
          <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14m0 0L8 1m7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  );
}
