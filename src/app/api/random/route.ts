
import { NextResponse } from "next/server";

// Base URL for TheMealDB API
const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

// Handle GET request for random recipe
export async function GET() {

  try {

    // Fetch random recipe
    const response = await fetch(
      `${BASE_URL}/random.php`
    );

    // Convert response to JSON
    const data =
      await response.json();

    // Return random recipe
    return NextResponse.json(
      data.meals[0]
    );

  } catch {

    // Return error response
    return NextResponse.json(
      {
        message:
          "Error fetching random recipe",
      },
      { status: 500 }
    );
  }
}