import styles from './IntegrationLogo.module.css';

export interface IntegrationLogoProps {
  name: string;
  logo: string;
  category?: string;
}

export default function IntegrationLogo({ name, logo, category }: IntegrationLogoProps) {
  return (
    <div className={styles.wrapper} title={`${name}${category ? ` - ${category}` : ''}`}>
      <div className={styles.logo}>
        <img src={logo} alt={name} loading="lazy" />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
