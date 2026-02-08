import styles from './SupportOptionCard.module.css';

interface SupportOptionCardProps {
  iconIndex: number;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const icons = [
  // Live Chat
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M28 22a2.67 2.67 0 01-2.67 2.67H8L4 28V6.67A2.67 2.67 0 016.67 4h18.66A2.67 2.67 0 0128 6.67V22z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Email Support
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M5.33 5.33h21.34c1.47 0 2.66 1.2 2.66 2.67v16c0 1.47-1.19 2.67-2.66 2.67H5.33c-1.47 0-2.66-1.2-2.66-2.67V8c0-1.47 1.19-2.67 2.66-2.67z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m29.33 8-13.33 9.33L2.67 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Community Forum
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M23.33 28c2.95 0 5.34-2.39 5.34-5.33 0-2.95-2.39-5.34-5.34-5.34-2.94 0-5.33 2.39-5.33 5.34 0 2.94 2.39 5.33 5.33 5.33zM8.67 16c2.94 0 5.33-2.39 5.33-5.33C14 7.72 11.61 5.33 8.67 5.33 5.72 5.33 3.33 7.72 3.33 10.67c0 2.94 2.39 5.33 5.34 5.33zM23.33 16c2.95 0 5.34-2.39 5.34-5.33 0-2.95-2.39-5.34-5.34-5.34-2.94 0-5.33 2.39-5.33 5.34 0 2.94 2.39 5.33 5.33 5.33zM8.67 28c2.94 0 5.33-2.39 5.33-5.33 0-2.95-2.39-5.34-5.33-5.34-2.95 0-5.34 2.39-5.34 5.34 0 2.94 2.39 5.33 5.34 5.33z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
];

export function SupportOptionCard({
  iconIndex,
  title,
  description,
  link,
  linkText
}: SupportOptionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icons[iconIndex]}
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
