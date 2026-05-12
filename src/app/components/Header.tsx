import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logoIcon}>🍽️</span>
        <div>
          <span className={styles.title}>PlatePal</span>
          <span className={styles.tagline}>Find your next favourite recipe.</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#recipes" className={styles.navLink}>Recipes</a>
        <a href="#favorites" className={styles.navLink}>Favourites</a>
        <a href="#about" className={styles.navLink}>About</a>
      </nav>
    </header>
  );
}
