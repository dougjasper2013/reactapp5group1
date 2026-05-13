'use client';

interface Recipe {
  id: number;
  title: string;
  name: string;
  category: string;
  description: string;
  color?: string;
}

interface FavoritesSectionProps {
  favorites: number[];
  allRecipes: Recipe[];
  onToggleFavorite: (id: number) => void;
}

export default function FavoritesSection({ 
  favorites, 
  allRecipes, 
  onToggleFavorite 
}: FavoritesSectionProps) {

  const favoriteRecipes = allRecipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <section id="favorites" className="favorites-section">
      <h2 className="favorites-title">Your Favourite Recipes</h2>

      {favoriteRecipes.length === 0 ? (
        <div className="no-favorites-box">
          No favourites yet. Click the heart icon to save recipes you love.
        </div>
      ) : (
        <div className="favorites-list">
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className="favorite-card">
              {/* Orange Banner */}
              <div 
                className="favorite-banner"
                style={{ backgroundColor: recipe.color || '#f97316' }}
              >
                <h3>{recipe.title}</h3>
                <button 
                  className="favorite-heart"
                  onClick={() => onToggleFavorite(recipe.id)}
                >
                  ❤️
                </button>
              </div>

              {/* Content */}
              <div className="favorite-content">
                <span className="recipe-category">{recipe.category}</span>
                <h4 className="recipe-name">{recipe.name}</h4>
                <p className="recipe-description">{recipe.description}</p>
                
                <button className="view-recipe-btn">View Recipe</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
