'use client';

import { useState, useEffect, useRef } from 'react';
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

const COLORS = ["#f97316", "#22c55e", "#3b82f6", "#eab308", "#78716c", "#ef4444"];

function formatRecipes(meals: MealDBRecipe[]): Recipe[] {
  return meals.map((meal, index) => ({
    id: Number(meal.idMeal),
    title: meal.strMeal,
    name: meal.strMeal,
    category: meal.strCategory?.toUpperCase() || "RECIPE",
    description: (meal.strInstructions?.slice(0, 120) ?? "") + "...",
    color: COLORS[index % COLORS.length],
  }));
}

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('platepal-favorites');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('platepal-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Fetch recipes — on load fetch popular, then debounce user search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const delay = searchTerm.trim() === "" ? 0 : 500;

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        // Use "a" as default to get a broad variety when no search term
        const query = searchTerm.trim() === "" ? "a" : searchTerm.trim();
        const response = await fetch(`/api/recipes?search=${encodeURIComponent(query)}`);
        const data = await response.json();
        setRecipes(Array.isArray(data) && data.length > 0 ? formatRecipes(data) : []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [searchTerm]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
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
        loading={loading}
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
