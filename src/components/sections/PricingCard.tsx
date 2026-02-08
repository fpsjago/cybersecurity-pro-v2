import styles from './PricingCard.module.css';

export interface PricingCardProps {
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: {
    name: string;
    included: boolean;
    tooltip?: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
  popular?: boolean;
  billingCycle: 'monthly' | 'annual';
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  popular,
  billingCycle
}: PricingCardProps) {
  const currentPrice = billingCycle === 'monthly' ? price.monthly : price.annual;
  const savings = billingCycle === 'annual' ? Math.round(((price.monthly * 12 - price.annual * 12) / (price.monthly * 12)) * 100) : 0;

  return (
    <div className={`${styles.card} ${popular ? styles.popular : ''}`}>
      {popular && <div className={styles.badge}>Most Popular</div>}
      
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      
      <div className={styles.pricing}>
        <div className={styles.price}>
          <span className={styles.currency}>$</span>
          <span className={styles.amount}>{currentPrice}</span>
          <span className={styles.period}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
        </div>
        {savings > 0 && <div className={styles.savings}>Save {savings}%</div>}
      </div>
      
      <a href={cta.href} className={`${styles.cta} ${popular ? styles.ctaPopular : ''}`}>
        {cta.label}
      </a>
      
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={`${styles.feature} ${!feature.included ? styles.excluded : ''}`}>
            {feature.included ? (
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ) : (
              <svg className={styles.xIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
