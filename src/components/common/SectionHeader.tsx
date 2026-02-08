import type { ReactNode } from 'react';
import Badge from './Badge';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  size = 'md',
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${styles[align]} ${styles[size]} ${className}`}>
      {badge && <Badge variant="default">{badge}</Badge>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
