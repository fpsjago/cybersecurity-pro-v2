import styles from './ClientTestimonialCard.module.css';

interface ClientTestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export default function ClientTestimonialCard({
  quote,
  author,
  role,
  company,
  avatar
}: ClientTestimonialCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {'★★★★★'}
      </div>
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.author}>
        {avatar && (
          <div className={styles.avatar}>
            <img src={avatar} alt={author} />
          </div>
        )}
        <div className={styles.info}>
          <div className={styles.name}>{author}</div>
          <div className={styles.role}>{role}</div>
          <div className={styles.company}>{company}</div>
        </div>
      </div>
    </div>
  );
}
