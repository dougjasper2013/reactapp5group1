import { NextResponse } from "next/server";

// Base URL for TheMealDB API
const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

// Handle GET request for recipe details
export async function GET(
  _request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {

  try {

    // Get recipe ID from route params
    const { id } = context.params;

    // Fetch recipe details by ID
    const response = await fetch(
      `${BASE_URL}/lookup.php?i=${id}`
    );

    // Convert response to JSON
    const data =
      await response.json();

    // Return single recipe object
    return NextResponse.json(
      data.meals[0]
    );

  } catch {

    // Return error response
    return NextResponse.json(
      {
        message:
          "Recipe not found",
      },
      { status: 404 }
    );
  }
}