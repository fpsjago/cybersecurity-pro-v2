import styles from './CodeBlock.module.css';

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = 'javascript', title }: CodeBlockProps) {
  return (
    <div className={styles.wrapper}>
      {title && (
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <span className={styles.language}>{language}</span>
        </div>
      )}
      <div className={styles.codeWrapper}>
        <pre className={styles.pre}>
          <code className={styles.code}>{code}</code>
        </pre>
        <button className={styles.copy} title="Copy code">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="7" y="7" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M4 13V3a2 2 0 0 1 2-2h8" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
