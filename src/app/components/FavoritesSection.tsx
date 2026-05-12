import styles from "./FavoritesSection.module.css";

// UI-only component — favourites list to be populated by the frontend developer
export default function FavoritesSection() {
  return (
    <section id="favorites" className={styles.section}>
      <h2 className={styles.title}>Your Favourite Recipes</h2>
      <p className={styles.empty}>
        No favourites yet. Click the heart icon to save recipes you love.
      </p>
    </section>
  );
}
