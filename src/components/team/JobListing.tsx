import styles from './JobListing.module.css';

interface JobListingProps {
  title: string;
  department: string;
  location: string;
  type: string;
  applyUrl?: string;
}

export default function JobListing({ title, department, location, type, applyUrl = '#' }: JobListingProps) {
  return (
    <div className={styles.listing}>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.meta}>
          <span className={styles.badge}>{department}</span>
          <span className={styles.location}>📍 {location}</span>
          <span className={styles.type}>{type}</span>
        </div>
      </div>
      <a href={applyUrl} className={styles.button}>
        Apply
        <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}
