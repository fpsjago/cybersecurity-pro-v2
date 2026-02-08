import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = ''
}: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`]} ${hover ? styles.hover : ''} ${className}`}>
      {children}
    </div>
  );
}
