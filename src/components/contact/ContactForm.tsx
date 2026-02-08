import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  department: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    department: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a department';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        department: '',
        message: ''
      });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Name <span className={styles.required}>*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="John Doe"
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email <span className={styles.required}>*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="john@company.com"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>
            Company <span className={styles.required}>*</span>
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
            placeholder="Acme Corp"
          />
          {errors.company && <p className={styles.error}>{errors.company}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={styles.input}
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="department" className={styles.label}>
          Department <span className={styles.required}>*</span>
        </label>
        <select
          id="department"
          value={formData.department}
          onChange={(e) => handleChange('department', e.target.value)}
          className={`${styles.select} ${errors.department ? styles.inputError : ''}`}
        >
          <option value="">Select a department</option>
          <option value="sales">Sales</option>
          <option value="support">Technical Support</option>
          <option value="security">Security Inquiry</option>
          <option value="partnership">Partnerships</option>
          <option value="other">Other</option>
        </select>
        {errors.department && <p className={styles.error}>{errors.department}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Tell us about your security needs..."
          rows={6}
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={styles.submit}
      >
        {status === 'loading' && (
          <span className={styles.spinner} />
        )}
        {status === 'idle' && 'Send Message'}
        {status === 'loading' && 'Sending...'}
        {status === 'success' && (
          <>
            <svg className={styles.checkmark} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Message Sent!
          </>
        )}
      </button>

      {status === 'success' && (
        <p className={styles.successMessage}>
          Thank you! We'll get back to you within 24 hours.
        </p>
      )}
    </form>
  );
}
