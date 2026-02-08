import styles from './AwardBadge.module.css';

interface AwardBadgeProps {
  logo?: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export default function AwardBadge({ logo, title, organization, year, description }: AwardBadgeProps) {
  return (
    <div className={styles.badge}>
      {logo && (
        <div className={styles.logoWrapper}>
          <img src={logo} alt={organization} className={styles.logo} />
        </div>
      )}
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.org}>{organization}</p>
        <span className={styles.year}>{year}</span>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}
