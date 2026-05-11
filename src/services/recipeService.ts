
const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

// Search recipes by keyword
export async function searchRecipes(
  query: string
) {

  // Send request to external API
  const response = await fetch(
    `${BASE_URL}/search.php?s=${query}`
  );

  // Handle failed requests
  if (!response.ok) {
    throw new Error(
      "Failed to fetch recipes"
    );
  }

  // Convert response to JSON
  const data = await response.json();

  // Return recipe list
  return data.meals;
}