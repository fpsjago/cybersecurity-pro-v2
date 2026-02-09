import Container from '../common/Container';
import styles from './Footer.module.css';

const BASE_URL = import.meta.env.BASE_URL || '';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🛡️</span>
              <span className={styles.logoText}>CyberSec Pro</span>
            </div>
            <p className={styles.tagline}>
              Enterprise-grade cybersecurity powered by AI
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="LinkedIn">in</a>
              <a href="#" className={styles.social} aria-label="Twitter">𝕏</a>
              <a href="#" className={styles.social} aria-label="GitHub">gh</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Solutions</h4>
            <ul className={styles.links}>
              <li><a href={`${BASE_URL}/solutions/#endpoint`}>Endpoint Security</a></li>
              <li><a href={`${BASE_URL}/solutions/#cloud`}>Cloud Security</a></li>
              <li><a href={`${BASE_URL}/solutions/#identity`}>Identity Access</a></li>
              <li><a href={`${BASE_URL}/solutions/#threat`}>Threat Intelligence</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.links}>
              <li><a href={`${BASE_URL}/about/`}>About Us</a></li>
              <li><a href={`${BASE_URL}/team/`}>Team</a></li>
              <li><a href={`${BASE_URL}/portfolio/`}>Case Studies</a></li>
              <li><a href={`${BASE_URL}/contact/`}>Contact</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Resources</h4>
            <ul className={styles.links}>
              <li><a href={`${BASE_URL}/resources/`}>Blog</a></li>
              <li><a href={`${BASE_URL}/docs/`}>Documentation</a></li>
              <li><a href={`${BASE_URL}/resources/#whitepapers`}>Whitepapers</a></li>
              <li><a href={`${BASE_URL}/resources/#webinars`}>Webinars</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              © {year} CyberSec Pro. All rights reserved.
            </p>
            <p className={styles.credit}>
              Template by <a href="https://jagofps.dev" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>jagoFps</a>
            </p>
          </div>
          <div className={styles.legal}>
            <a href={`${BASE_URL}/contact/`}>Privacy Policy</a>
            <a href={`${BASE_URL}/contact/`}>Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
