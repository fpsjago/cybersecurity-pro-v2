import styles from './OrgChart.module.css';

interface OrgNode {
  name: string;
  role: string;
  image?: string;
  children?: OrgNode[];
}

interface OrgChartProps {
  data: OrgNode;
}

function OrgNode({ node, level = 0 }: { node: OrgNode; level?: number }) {
  return (
    <div className={styles.node}>
      <div className={`${styles.nodeCard} ${level === 0 ? styles.ceo : ''}`}>
        {node.image && (
          <div className={styles.avatar}>
            <img src={node.image} alt={node.name} />
          </div>
        )}
        <div className={styles.nodeInfo}>
          <div className={styles.nodeName}>{node.name}</div>
          <div className={styles.nodeRole}>{node.role}</div>
        </div>
      </div>
      {node.children && node.children.length > 0 && (
        <div className={styles.children}>
          {node.children.map((child, index) => (
            <div key={index} className={styles.childWrapper}>
              <div className={styles.connector}></div>
              <OrgNode node={child} level={level + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OrgChart({ data }: OrgChartProps) {
  return (
    <div className={styles.chart}>
      <OrgNode node={data} />
    </div>
  );
}
