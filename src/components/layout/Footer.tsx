import Container from '../common/Container';
import styles from './Footer.module.css';

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
              <li><a href="/solutions#endpoint">Endpoint Security</a></li>
              <li><a href="/solutions#cloud">Cloud Security</a></li>
              <li><a href="/solutions#identity">Identity Access</a></li>
              <li><a href="/solutions#threat">Threat Intelligence</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.links}>
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/portfolio">Case Studies</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Resources</h4>
            <ul className={styles.links}>
              <li><a href="/resources">Blog</a></li>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/resources#whitepapers">Whitepapers</a></li>
              <li><a href="/resources#webinars">Webinars</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} CyberSec Pro. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
