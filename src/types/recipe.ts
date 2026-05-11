
// Interface that defines the structure of a recipe object
export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;

  // Optional recipe category
  strCategory?: string;

  // Optional recipe origin area
  strArea?: string;
}