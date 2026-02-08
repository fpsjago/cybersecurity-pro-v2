import { useState, useRef, useEffect } from 'react';
import styles from './DocCategoryCard.module.css';

interface DocCategoryCardProps {
  iconIndex: number;
  title: string;
  description: string;
  articleCount: number;
  link: string;
}

const icons = [
  // Getting Started
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M4 8h24M4 16h24M4 24h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
  // API Reference
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M10 6h12l8 8-14 14-8-8v-14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 6l-4 4v12l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Integration Guides
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="12" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M15.2 14.4l5.6-2.8M15.2 17.6l5.6 2.8" stroke="currentColor" strokeWidth="2"/>
  </svg>,
  // Security Best Practices
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 12v8M16 24h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
  // Troubleshooting
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 4v24M4 16h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2"/>
  </svg>,
  // Release Notes
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M8 4h16M8 28h16M24 8v16M8 8v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
];

export function DocCategoryCard({
  iconIndex,
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
        {icons[iconIndex]}
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
