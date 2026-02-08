import styles from './CaseStudyCard.module.css';

export interface CaseStudyCardProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image?: string;
  logo?: string;
}

export default function CaseStudyCard({
  company,
  industry,
  challenge,
  solution,
  results,
  metrics,
  image,
  logo
}: CaseStudyCardProps) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={company} className={styles.image} />
          <div className={styles.overlay} />
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.header}>
          {logo && <img src={logo} alt={company} className={styles.logo} />}
          <div className={styles.meta}>
            <h3 className={styles.company}>{company}</h3>
            <span className={styles.industry}>{industry}</span>
          </div>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Challenge</h4>
          <p className={styles.sectionText}>{challenge}</p>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Solution</h4>
          <p className={styles.sectionText}>{solution}</p>
        </div>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Results</h4>
          <p className={styles.sectionText}>{results}</p>
        </div>
        
        <div className={styles.metrics}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.metric}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
