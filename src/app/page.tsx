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

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('platepal-favorites');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('platepal-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id) 
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
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />

      <FavoritesSection 
        favorites={favorites}
        allRecipes={mockRecipes}  
        onToggleFavorite={toggleFavorite}
      />

      <AboutSection />
      <Footer />
    </>
  );
}

// ==================== MOCK DATA ====================
const mockRecipes = [
  {
    id: 1,
    title: "Creamy Pasta",
    name: "Creamy Pasta",
    category: "DINNER",
    description: "A quick and tasty pasta dish perfect for busy nights.",
    color: "#f97316",
  },
  {
    id: 2,
    title: "Avocado Toast",
    name: "Avocado Toast",
    category: "BREAKFAST",
    description: "Simple, nutritious, and delicious morning toast with fresh avocado.",
    color: "#22c55e",
  },
  {
    id: 3,
    title: "Greek Salad",
    name: "Greek Salad",
    category: "LUNCH",
    description: "Fresh veggies, olives, and feta cheese in a light olive oil dressing.",
    color: "#3b82f6",
  },
  {
    id: 4,
    title: "Lava Cake",
    name: "Chocolate Lava Cake",
    category: "DESSERT",
    description: "Warm, gooey chocolate cake with a melted center. A true treat.",
    color: "#78716c",
  },
  {
    id: 5,
    title: "Stir Fry",
    name: "Veggie Stir Fry",
    category: "VEGETARIAN",
    description: "Colorful vegetables tossed in a savory soy-ginger sauce.",
    color: "#22c55e",
  },
  {
    id: 6,
    title: "Egg Fried Rice",
    name: "Egg Fried Rice",
    category: "QUICK MEALS",
    description: "A 15-minute weeknight saviour. Simple ingredients, big flavour.",
    color: "#eab308",
  },
];