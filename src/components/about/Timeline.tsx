import styles from './Timeline.module.css';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.dot}>
            <div className={styles.pulse}></div>
          </div>
          <div className={styles.content}>
            <div className={styles.year}>{item.year}</div>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
