import { useState, useRef, useEffect } from 'react';
import styles from './ResourceCard.module.css';

interface ResourceCardProps {
  title: string;
  excerpt: string;
  category: string;
  thumbnail: string;
  date: string;
  readTime: string;
  link: string;
}

export function ResourceCard({
  title,
  excerpt,
  category,
  thumbnail,
  date,
  readTime,
  link
}: ResourceCardProps) {
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.imageWrapper}>
        <img src={thumbnail} alt={title} className={styles.image} />
        <span className={styles.badge}>{category}</span>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        
        <div className={styles.meta}>
          <span className={styles.date}>{date}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.readTime}>{readTime}</span>
        </div>
        
        <a href={link} className={styles.cta}>
          Read More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14m0 0L8 1m7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
