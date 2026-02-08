import { useState } from 'react';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  categories: string[];
  onFilter: (category: string) => void;
}

export default function FilterBar({ categories, onFilter }: FilterBarProps) {
  const [active, setActive] = useState('All');

  const handleFilter = (category: string) => {
    setActive(category);
    onFilter(category);
  };

  return (
    <div className={styles.filterBar}>
      <button
        className={`${styles.filterButton} ${active === 'All' ? styles.active : ''}`}
        onClick={() => handleFilter('All')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.filterButton} ${active === category ? styles.active : ''}`}
          onClick={() => handleFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
