'use client';

import { useState, useEffect } from 'react';

interface CategoryFiltersProps {
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

interface MealDBCategory {
  strCategory: string;
}

export default function CategoryFilters({ 
  activeCategory, 
  onCategorySelect 
}: CategoryFiltersProps) {

  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        const data: MealDBCategory[] = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setCategories(["All", ...data.map(c => c.strCategory)]);
        }
      } catch {
        // Keep default "All" if fetch fails
      }
    }
    fetchCategories();
  }, []);

  return (
    <section className="category-section">
      <h3 className="category-title">Browse by Category</h3>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onCategorySelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
