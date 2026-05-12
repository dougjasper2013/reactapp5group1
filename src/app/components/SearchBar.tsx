import styles from "./SearchBar.module.css";

// UI-only component — interactive filtering to be wired up by the frontend developer
export default function SearchBar() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Search for a Recipe</h2>
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search by recipe name or ingredient..."
          aria-label="Search recipes"
          readOnly
        />
        <button className={styles.button} type="button">
          Search
        </button>
      </div>
    </section>
  );
}
