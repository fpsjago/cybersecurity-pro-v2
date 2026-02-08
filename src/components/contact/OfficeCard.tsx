import styles from './OfficeCard.module.css';

interface OfficeCardProps {
  city: string;
  address: string;
  phone: string;
  mapImage: string;
}

export function OfficeCard({ city, address, phone, mapImage }: OfficeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.mapWrapper}>
        <img src={mapImage} alt={`${city} office location`} className={styles.map} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.city}>{city}</h3>
        <p className={styles.address}>{address}</p>
        <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.phone}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14.667 11.28v2a1.333 1.333 0 01-1.454 1.333 13.2 13.2 0 01-5.76-2.046 13 13 0 01-4-4A13.2 13.2 0 011.333 2.787 1.333 1.333 0 012.66 1.333h2a1.333 1.333 0 011.333 1.147c.084.64.24 1.267.466 1.873a1.333 1.333 0 01-.3 1.407l-.846.846a10.667 10.667 0 004 4l.846-.846a1.333 1.333 0 011.407-.3c.606.227 1.233.382 1.873.466a1.333 1.333 0 011.147 1.354z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {phone}
        </a>
      </div>
    </div>
  );
}
