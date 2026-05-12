import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>About PlatePal</h2>
        <p className={styles.text}>
          PlatePal is a simple recipe finder app built with React. Users can
          search recipes, filter by category, and save their favourite meals for
          later.
        </p>
      </div>
    </section>
  );
}
