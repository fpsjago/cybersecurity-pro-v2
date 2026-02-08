import styles from './ComparisonTable.module.css';

export interface ComparisonColumn {
  name: string;
  features: {[key: string]: boolean | string};
}

export interface ComparisonTableProps {
  columns: ComparisonColumn[];
  rows: {
    category?: string;
    features: {
      name: string;
      key: string;
    }[];
  }[];
}

export default function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Features</th>
            {columns.map((col, i) => (
              <th key={i} className={styles.headerCell}>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <>
              {row.category && (
                <tr key={`cat-${rowIndex}`} className={styles.categoryRow}>
                  <td colSpan={columns.length + 1} className={styles.category}>
                    {row.category}
                  </td>
                </tr>
              )}
              {row.features.map((feature, featureIndex) => (
                <tr key={`${rowIndex}-${featureIndex}`}>
                  <td className={styles.featureName}>{feature.name}</td>
                  {columns.map((col, colIndex) => {
                    const value = col.features[feature.key];
                    return (
                      <td key={colIndex} className={styles.cell}>
                        {typeof value === 'boolean' ? (
                          value ? (
                            <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                          ) : (
                            <svg className={styles.xIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          )
                        ) : (
                          <span className={styles.value}>{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
