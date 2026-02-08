import styles from './PricingToggle.module.css';

export interface PricingToggleProps {
  value: 'monthly' | 'annual';
  onChange: (value: 'monthly' | 'annual') => void;
  discount?: number;
}

export default function PricingToggle({ value, onChange, discount = 20 }: PricingToggleProps) {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.option} ${value === 'monthly' ? styles.active : ''}`}
        onClick={() => onChange('monthly')}
      >
        Monthly
      </button>
      <button
        className={`${styles.option} ${value === 'annual' ? styles.active : ''}`}
        onClick={() => onChange('annual')}
      >
        Annual
        {discount > 0 && <span className={styles.badge}>Save {discount}%</span>}
      </button>
    </div>
  );
}
