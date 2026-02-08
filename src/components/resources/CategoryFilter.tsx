import { useState } from 'react';
import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange
}: CategoryFilterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`${styles.filter} ${
              activeCategory === category ? styles.active : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
