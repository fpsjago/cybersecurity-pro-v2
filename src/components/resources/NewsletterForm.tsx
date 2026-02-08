import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './NewsletterForm.module.css';

interface NewsletterFormProps {
  title?: string;
  subtitle?: string;
  benefits?: string[];
}

export function NewsletterForm({
  title = 'Stay Updated',
  subtitle = 'Get the latest security insights delivered to your inbox',
  benefits = [
    'Weekly threat intelligence reports',
    'Security best practices & guides',
    'Product updates & new features',
    'Exclusive webinar invitations'
  ]
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        
        <ul className={styles.benefits}>
          {benefits.map((benefit, i) => (
            <li key={i} className={styles.benefit}>
              <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading' || status === 'success'}
            className={styles.input}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={styles.submit}
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
          </button>
        </div>
        
        {status === 'success' && (
          <p className={styles.success}>✓ Successfully subscribed! Check your inbox.</p>
        )}
        
        <p className={styles.disclaimer}>
          By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
