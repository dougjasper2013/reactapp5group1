import { NextResponse } from "next/server";

import {
  searchRecipes,
} from "@/services/recipeService";

// Handle GET requests for recipe search
export async function GET(
  request: Request
) {

  // Get query parameter from URL
  const { searchParams } =
    new URL(request.url);

  const query =
    searchParams.get("search") || "";

  try {

    // Fetch recipes using service function
    const recipes =
      await searchRecipes(query);

    // Return recipes as JSON response
    return NextResponse.json(recipes);

  } catch {

    // Return error response if request fails
    return NextResponse.json(
      {
        message:
          "Error fetching recipes",
      },
      { status: 500 }
    );
  }
}