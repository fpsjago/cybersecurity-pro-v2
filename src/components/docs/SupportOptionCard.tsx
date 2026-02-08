import styles from './SupportOptionCard.module.css';

interface SupportOptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export function SupportOptionCard({
  icon,
  title,
  description,
  link,
  linkText
}: SupportOptionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <a href={link} className={styles.link}>
          {linkText}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8h14m0 0L8 1m7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
