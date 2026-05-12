import styles from "./page.module.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import CategoryFilters from "./components/CategoryFilters";
import RecipesGrid from "./components/RecipesGrid";
import FavoritesSection from "./components/FavoritesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import { recipes } from "./data/recipes";

// UI layout — state and filtering logic to be wired up by the frontend developer
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HeroSection />
      <main className={styles.main}>
        <SearchBar />
        <CategoryFilters />
        <RecipesGrid recipes={recipes} />
        <FavoritesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
