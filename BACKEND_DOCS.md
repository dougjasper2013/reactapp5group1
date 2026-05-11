
# Backend API Documentation

## Overview

The backend uses Next.js API Routes and TheMealDB API
to provide recipe data to the frontend.

---

# Available Endpoints

## 1. Search Recipes

### Endpoint

/api/recipes?search=chicken

### Description

Returns a list of recipes based on a search keyword.

### Example

/api/recipes?search=pasta

---

## 2. Get Recipe Details

### Endpoint

/api/recipe/[id]

### Description

Returns full details for a specific recipe.

### Example

/api/recipe/52772

---

## 3. Get Categories

### Endpoint

/api/categories

### Description

Returns all recipe categories.

### Example Categories

- Beef
- Chicken
- Dessert
- Seafood

---

## 4. Get Random Recipe

### Endpoint

/api/random

### Description

Returns one random recipe.

Useful for:
- Surprise Me button
- Featured recipe section

---

# Notes For Frontend Team

Frontend can use fetch() to consume endpoints.

Example:

fetch("/api/random")

or

fetch("/api/recipes?search=beef")

---

# Backend Structure

src/
 ├── app/api/
 ├── services/
 ├── types/

---

# Features Completed

- Recipe search
- Recipe details
- Categories
- Random recipe
- Error handling
- TypeScript support