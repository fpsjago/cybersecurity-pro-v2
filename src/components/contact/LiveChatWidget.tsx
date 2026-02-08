import { useState } from 'react';
import styles from './LiveChatWidget.module.css';

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.trigger}
        aria-label="Open live chat"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className={styles.widget}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <h3 className={styles.title}>Live Chat</h3>
              <p className={styles.subtitle}>We typically reply in minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.close}
              aria-label="Close chat"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className={styles.messages}>
            <div className={styles.message}>
              <div className={styles.avatar}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 11a4 4 0 100-8 4 4 0 000 8zM3 18a7 7 0 0114 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.bubble}>
                <p className={styles.author}>Support Team</p>
                <p className={styles.text}>
                  Hi! 👋 How can we help you today?
                </p>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <input
              type="text"
              placeholder="Type your message..."
              className={styles.input}
              disabled
            />
            <button className={styles.send} disabled>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18.333 1.667L9.167 10.833m9.166-9.166L12.5 18.333l-3.333-7.5-7.5-3.333 16.666-6.666z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className={styles.demo}>This is a demo widget</p>
          </div>
        </div>
      )}
    </>
  );
}
