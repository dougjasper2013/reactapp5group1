'use client';

interface Recipe {
  id: number;
  title: string;
  name: string;
  category: string;
  description: string;
  color?: string;
}

interface RecipesGridProps {
  recipes: Recipe[];
  loading?: boolean;
  searchTerm?: string;
  activeCategory?: string;
  favorites?: number[];
  onToggleFavorite?: (id: number) => void;
}

export default function RecipesGrid({ 
  recipes,
  loading = false,
  searchTerm = "", 
  activeCategory = "All",
  favorites = [],
  onToggleFavorite 
}: RecipesGridProps) {

  const filteredRecipes = recipes.filter((recipe) => {
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
        
        {loading ? (
          <p className="recipes-loading">Loading recipes...</p>
        ) : (
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
              <p className="no-results">
                No recipes found. Try a different search or category.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
