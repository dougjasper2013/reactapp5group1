import Image from "next/image";
import styles from "./RecipeCard.module.css";
import type { Recipe } from "../data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

// UI-only component — favourite toggle logic to be wired up by the frontend developer
export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className={styles.card}>
      {/* Image area with heart icon overlaid */}
      <div className={styles.imageWrapper}>
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          unoptimized
          className={styles.image}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        {/* Heart icon — interactive behaviour to be added by frontend developer */}
        <span className={styles.heart} aria-label="Add to favourites">♡</span>
      </div>

      {/* Card body */}
      <div className={styles.body}>
        <span className={styles.category}>{recipe.category}</span>
        <h3 className={styles.name}>{recipe.name}</h3>
        <p className={styles.description}>{recipe.description}</p>
        <button className={styles.viewButton}>View Recipe</button>
      </div>
    </div>
  );
}
