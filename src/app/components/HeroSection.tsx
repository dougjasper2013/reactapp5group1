import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Discover Recipes in a Dash</h1>
        <p className={styles.subtitle}>
          Search, filter, and save delicious recipes all in one simple app.
        </p>
        <a href="#recipes" className={styles.cta}>
          Start Exploring
        </a>
      </div>
    </section>
  );
}
