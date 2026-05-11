
import { NextResponse } from "next/server";

// Base URL for TheMealDB API
const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

// Handle GET request for recipe categories
export async function GET() {

  try {

    // Fetch recipe categories
    const response = await fetch(
      `${BASE_URL}/categories.php`
    );

    // Convert response to JSON
    const data =
      await response.json();

    // Return category list
    return NextResponse.json(
      data.categories
    );

  } catch {

    // Return error response
    return NextResponse.json(
      {
        message:
          "Error fetching categories",
      },
      { status: 500 }
    );
  }
}