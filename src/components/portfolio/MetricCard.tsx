import styles from './MetricCard.module.css';

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export default function MetricCard({ value, label, description, trend }: MetricCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.valueWrapper}>
        <div className={styles.value}>{value}</div>
        {trend && (
          <div className={`${styles.trend} ${trend.positive ? styles.positive : styles.negative}`}>
            <span className={styles.arrow}>{trend.positive ? '↑' : '↓'}</span>
            {trend.value}
          </div>
        )}
      </div>
      <div className={styles.label}>{label}</div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
