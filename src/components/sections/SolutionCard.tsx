import styles from './SolutionCard.module.css';

export interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  cta?: {
    label: string;
    href: string;
  };
}

export default function SolutionCard({
  icon,
  title,
  description,
  features,
  stats,
  cta
}: SolutionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon} dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {stats && stats.length > 0 && (
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      
      {cta && (
        <a href={cta.href} className={styles.cta}>
          {cta.label}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  );
}
