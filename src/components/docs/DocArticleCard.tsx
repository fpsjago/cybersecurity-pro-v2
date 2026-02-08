import styles from './DocArticleCard.module.css';

interface DocArticleCardProps {
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  link: string;
}

export function DocArticleCard({
  title,
  excerpt,
  tags,
  readTime,
  link
}: DocArticleCardProps) {
  return (
    <a href={link} className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        
        <div className={styles.footer}>
          <div className={styles.tags}>
            {tags.map((tag, i) => (
              <span key={i} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <span className={styles.readTime}>{readTime}</span>
        </div>
      </div>
      
      <svg className={styles.arrow} width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}
