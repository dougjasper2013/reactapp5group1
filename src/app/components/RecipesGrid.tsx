import styles from "./RecipesGrid.module.css";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

interface RecipesGridProps {
  recipes: Recipe[];
}

// UI-only component — filtered recipe list to be passed in by the frontend developer
export default function RecipesGrid({ recipes }: RecipesGridProps) {
  return (
    <section id="recipes" className={styles.section}>
      <div className={styles.grid}>
        {recipes.length === 0 ? (
          <p className={styles.empty}>
            No recipes found. Try a different search or category.
          </p>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        )}
      </div>
    </section>
  );
}
