import styles from "./CategoryFilters.module.css";

// All possible category options including "All"
const CATEGORIES = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Vegetarian",
  "Quick Meals",
];

// UI-only component — active state and selection logic to be wired up by the frontend developer
export default function CategoryFilters() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Browse by Category</h2>
      <div className={styles.filters}>
        {CATEGORIES.map((cat, index) => (
          <button
            key={cat}
            // First button shown as active for visual reference only
            className={`${styles.button} ${index === 0 ? styles.active : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
