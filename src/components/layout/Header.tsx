import { useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import ThemeToggle from '../common/ThemeToggle';
import styles from './Header.module.css';

const BASE_URL = import.meta.env.BASE_URL || '';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a href={`${BASE_URL}/`} className={styles.logo}>
            <span className={styles.logoIcon}>🛡️</span>
            <span className={styles.logoText}>CyberSec Pro</span>
          </a>

          <div className={styles.navLinks}>
            <a href={`${BASE_URL}/solutions/`} className={styles.navLink}>Solutions</a>
            <a href={`${BASE_URL}/products/`} className={styles.navLink}>Products</a>
            <a href={`${BASE_URL}/pricing/`} className={styles.navLink}>Pricing</a>
            <a href={`${BASE_URL}/resources/`} className={styles.navLink}>Resources</a>
            <a href={`${BASE_URL}/about/`} className={styles.navLink}>About</a>
          </div>

          <div className={styles.navActions}>
            <ThemeToggle />
            <Button variant="ghost" size="sm" href={`${BASE_URL}/contact/`}>
              Contact
            </Button>
            <Button variant="primary" size="sm" href={`${BASE_URL}/contact/`}>
              Get Started
            </Button>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
          </button>
        </nav>
      </Container>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Container>
            <div className={styles.mobileLinks}>
              <a href={`${BASE_URL}/solutions/`} className={styles.mobileLink}>Solutions</a>
              <a href={`${BASE_URL}/products/`} className={styles.mobileLink}>Products</a>
              <a href={`${BASE_URL}/pricing/`} className={styles.mobileLink}>Pricing</a>
              <a href={`${BASE_URL}/resources/`} className={styles.mobileLink}>Resources</a>
              <a href={`${BASE_URL}/about/`} className={styles.mobileLink}>About</a>
              <a href={`${BASE_URL}/contact/`} className={styles.mobileLink}>Contact</a>
            </div>
            <Button variant="primary" size="md" href={`${BASE_URL}/contact/`} fullWidth>
              Get Started
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
