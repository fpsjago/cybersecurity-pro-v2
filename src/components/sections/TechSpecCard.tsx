import styles from './TechSpecCard.module.css';

export interface TechSpecCardProps {
  title: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export default function TechSpecCard({ title, specs }: TechSpecCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <dl className={styles.specs}>
        {specs.map((spec, index) => (
          <div key={index} className={styles.spec}>
            <dt className={styles.label}>{spec.label}</dt>
            <dd className={styles.value}>{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
