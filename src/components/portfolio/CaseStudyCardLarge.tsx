import styles from './CaseStudyCardLarge.module.css';

interface Metric {
  label: string;
  value: string;
}

interface CaseStudyCardLargeProps {
  company: string;
  industry: string;
  logo?: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: Metric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function CaseStudyCardLarge({
  company,
  industry,
  logo,
  image,
  challenge,
  solution,
  results,
  metrics,
  testimonial
}: CaseStudyCardLargeProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <img src={image} alt={company} className={styles.image} />
        <div className={styles.imageOverlay}>
          {logo && <img src={logo} alt={`${company} logo`} className={styles.logo} />}
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.company}>{company}</h3>
          <span className={styles.industry}>{industry}</span>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Challenge</h4>
          <p className={styles.text}>{challenge}</p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Solution</h4>
          <p className={styles.text}>{solution}</p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Results</h4>
          <p className={styles.text}>{results}</p>
        </div>

        <div className={styles.metrics}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.metric}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>

        {testimonial && (
          <div className={styles.testimonial}>
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <div className={styles.author}>
              <div className={styles.authorName}>{testimonial.author}</div>
              <div className={styles.authorRole}>{testimonial.role}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
