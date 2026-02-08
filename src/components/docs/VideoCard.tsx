import styles from './VideoCard.module.css';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  link: string;
}

export function VideoCard({ thumbnail, title, duration, link }: VideoCardProps) {
  return (
    <a href={link} className={styles.card}>
      <div className={styles.thumbnailWrapper}>
        <img src={thumbnail} alt={title} className={styles.thumbnail} />
        <div className={styles.overlay}>
          <div className={styles.playButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <span className={styles.duration}>{duration}</span>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </a>
  );
}
