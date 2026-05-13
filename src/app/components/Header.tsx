import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Image
          src="/logo/PlatePal_logo.png"
          alt="PlatePal logo"
          width={140}
          height={50}
          className={styles.logo}
          priority
        />
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
