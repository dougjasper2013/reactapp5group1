'use client';

import { useState } from 'react';

interface Recipe {
  id: number;
  title: string;
  name: string;
  category: string;
  description: string;
  color?: string;
}

interface RecipesGridProps {
  searchTerm?: string;
  activeCategory?: string;
  favorites?: number[];
  onToggleFavorite?: (id: number) => void;
}

const mockRecipes: Recipe[] = [
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

export default function RecipesGrid({ 
  searchTerm = "", 
  activeCategory = "All",
  favorites = [],
  onToggleFavorite 
}: RecipesGridProps) {

  const filteredRecipes = mockRecipes.filter((recipe) => {
    const matchesSearch = 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      activeCategory === "All" || 
      recipe.category.toUpperCase() === activeCategory.toUpperCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="recipes" className="recipes-section">
      <div className="recipes-container">
        <h2 className="recipes-title">Featured Recipes</h2>
        
        <div className="recipes-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => {
              const isFavorite = favorites.includes(recipe.id);
              
              return (
                <div key={recipe.id} className="recipe-card">
                  <div 
                    className="recipe-banner"
                    style={{ backgroundColor: recipe.color }}
                  >
                    <h3 className="recipe-banner-title">{recipe.title}</h3>
                    
                    <button 
                      className="favorite-btn"
                      onClick={() => onToggleFavorite?.(recipe.id)}
                    >
                      {isFavorite ? '❤️' : '♡'}
                    </button>
                  </div>

                  <div className="recipe-content">
                    <span className="recipe-category">{recipe.category}</span>
                    <h4 className="recipe-name">{recipe.name}</h4>
                    <p className="recipe-description">{recipe.description}</p>
                    
                    <button className="view-recipe-btn">View Recipe</button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-results text-center py-10 text-gray-500">
              No recipes found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
