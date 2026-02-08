import styles from './FeatureComparisonTable.module.css';

export interface FeatureComparisonTableProps {
  tiers: string[];
  categories: {
    name: string;
    features: {
      name: string;
      values: (boolean | string)[];
      tooltip?: string;
    }[];
  }[];
}

export default function FeatureComparisonTable({ tiers, categories }: FeatureComparisonTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Feature</th>
            {tiers.map((tier, i) => (
              <th key={i} className={styles.headerCell}>{tier}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map((category, catIndex) => (
            <>
              <tr key={`cat-${catIndex}`} className={styles.categoryRow}>
                <td colSpan={tiers.length + 1} className={styles.category}>
                  {category.name}
                </td>
              </tr>
              {category.features.map((feature, featureIndex) => (
                <tr key={`${catIndex}-${featureIndex}`}>
                  <td className={styles.featureName}>{feature.name}</td>
                  {feature.values.map((value, valueIndex) => (
                    <td key={valueIndex} className={styles.cell}>
                      {typeof value === 'boolean' ? (
                        value ? (
                          <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                        ) : (
                          <span className={styles.dash}>—</span>
                        )
                      ) : (
                        <span className={styles.value}>{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
