'use client';

import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import CategoryFilters from "./components/CategoryFilters";
import RecipesGrid from "./components/RecipesGrid";
import FavoritesSection from "./components/FavoritesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

interface Recipe {
  id: number;
  title: string;
  name: string;
  category: string;
  description: string;
  color?: string;
}

interface MealDBRecipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
}

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] =
  useState<Recipe[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('platepal-favorites');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {

  async function fetchRecipe() {
    try {
      const response =
        await fetch("/api/recipes?search=chicken");
      const data =
        await response.json();

      const formattedRecipes =
  data.map(
    (
  meal: MealDBRecipe,
  index: number
)=> {

      const colors = [
        "#f97316",
        "#22c55e",
        "#3b82f6",
        "#eab308",
        "#78716c",
        "#ef4444",
      ];

      return {
        id: Number(
          meal.idMeal
        ),

        title:
          meal.strMeal,

        name:
          meal.strMeal,

        category:
          meal.strCategory
            ?.toUpperCase() ||
          "RECIPE",

        description:
          meal.strInstructions
            ?.slice(0, 120) +
          "...",

        color:
          colors[
            index %
              colors.length
          ],
      };
    }
  );

setRecipes(
  formattedRecipes
);

    } catch (error) {

      console.error(
        "Error fetching recipe:",
        error
      );
    }
  }

  fetchRecipe();

}, []);
const toggleFavorite = (
  id: number
) => {

  setFavorites((prev) =>

    prev.includes(id)
      ? prev.filter(
          (favId) =>
            favId !== id
        )
      : [...prev, id]
  );
};

  return (
    <>
      <Navbar />
      <HeroSection />

      <SearchSection 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <CategoryFilters 
        activeCategory={activeCategory}
        onCategorySelect={setActiveCategory}
      />

      <RecipesGrid 
        recipes={recipes}
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />

      <FavoritesSection 
        favorites={favorites}
        allRecipes={recipes}
        onToggleFavorite={toggleFavorite}
      />

      <AboutSection />
      <Footer />
    </>
  );
}
