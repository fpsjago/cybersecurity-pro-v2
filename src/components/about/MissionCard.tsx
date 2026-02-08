import styles from './MissionCard.module.css';

interface MissionCardProps {
  type: 'mission' | 'vision';
  title: string;
  description: string;
  icon: string;
}

export default function MissionCard({ type, title, description, icon }: MissionCardProps) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
