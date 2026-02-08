import { useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🛡️</span>
            <span className={styles.logoText}>CyberSec Pro</span>
          </a>

          <div className={styles.navLinks}>
            <a href="/solutions" className={styles.navLink}>Solutions</a>
            <a href="/products" className={styles.navLink}>Products</a>
            <a href="/pricing" className={styles.navLink}>Pricing</a>
            <a href="/resources" className={styles.navLink}>Resources</a>
            <a href="/about" className={styles.navLink}>About</a>
          </div>

          <div className={styles.navActions}>
            <Button variant="ghost" size="sm" href="/contact">
              Contact
            </Button>
            <Button variant="primary" size="sm" href="/demo">
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
              <a href="/solutions" className={styles.mobileLink}>Solutions</a>
              <a href="/products" className={styles.mobileLink}>Products</a>
              <a href="/pricing" className={styles.mobileLink}>Pricing</a>
              <a href="/resources" className={styles.mobileLink}>Resources</a>
              <a href="/about" className={styles.mobileLink}>About</a>
              <a href="/contact" className={styles.mobileLink}>Contact</a>
            </div>
            <Button variant="primary" size="md" href="/demo" fullWidth>
              Get Started
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
