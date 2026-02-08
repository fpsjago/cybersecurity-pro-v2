import styles from './FeatureCardLarge.module.css';

export interface FeatureCardLargeProps {
  icon: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  size?: 'default' | 'large' | 'wide';
}

export default function FeatureCardLarge({
  icon,
  title,
  description,
  image,
  features,
  size = 'default'
}: FeatureCardLargeProps) {
  return (
    <div className={`${styles.card} ${styles[size]}`}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon} dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {features && features.length > 0 && (
          <ul className={styles.features}>
            {features.map((feature, index) => (
              <li key={index} className={styles.feature}>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
