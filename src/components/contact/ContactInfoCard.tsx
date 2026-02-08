import styles from './ContactInfoCard.module.css';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

export function ContactInfoCard({ icon, label, value, link }: ContactInfoCardProps) {
  const content = (
    <>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <div className={styles.content}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <a href={link} className={`${styles.card} ${styles.clickable}`}>
        {content}
      </a>
    );
  }

  return <div className={styles.card}>{content}</div>;
}
