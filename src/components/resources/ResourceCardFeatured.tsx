import { useState, useRef, useEffect } from 'react';
import styles from './ResourceCardFeatured.module.css';

interface ResourceCardFeaturedProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

export function ResourceCardFeatured({
  title,
  excerpt,
  category,
  image,
  date,
  readTime,
  link
}: ResourceCardFeaturedProps) {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.imageFade} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.badge}>{category}</span>
          <span className={styles.date}>{date}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.readTime}>{readTime}</span>
        </div>
        
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        
        <a href={link} className={styles.cta}>
          Read Full Article
          <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14m0 0L8 1m7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
