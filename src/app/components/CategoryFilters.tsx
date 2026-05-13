'use client';

interface CategoryFiltersProps {
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

export default function CategoryFilters({ 
  activeCategory, 
  onCategorySelect 
}: CategoryFiltersProps) {

  const categories = [
    "All", "Breakfast", "Lunch", "Dinner", "Dessert", "Vegetarian", "Quick Meals"
  ];

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
