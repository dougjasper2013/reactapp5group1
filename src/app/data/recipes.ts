export interface Recipe {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Creamy Pasta",
    category: "Dinner",
    description: "A quick and tasty pasta dish perfect for busy nights.",
    image: "https://placehold.co/400x250/ff6b35/ffffff?text=Creamy+Pasta",
  },
  {
    id: "2",
    name: "Avocado Toast",
    category: "Breakfast",
    description: "Simple, nutritious, and delicious morning toast with fresh avocado.",
    image: "https://placehold.co/400x250/4caf50/ffffff?text=Avocado+Toast",
  },
  {
    id: "3",
    name: "Greek Salad",
    category: "Lunch",
    description: "Fresh veggies, olives, and feta cheese in a light olive oil dressing.",
    image: "https://placehold.co/400x250/2196f3/ffffff?text=Greek+Salad",
  },
  {
    id: "4",
    name: "Chocolate Lava Cake",
    category: "Dessert",
    description: "Warm, gooey chocolate cake with a melted center. A true treat.",
    image: "https://placehold.co/400x250/795548/ffffff?text=Lava+Cake",
  },
  {
    id: "5",
    name: "Veggie Stir Fry",
    category: "Vegetarian",
    description: "Colorful vegetables tossed in a savory soy-ginger sauce.",
    image: "https://placehold.co/400x250/8bc34a/ffffff?text=Stir+Fry",
  },
  {
    id: "6",
    name: "Egg Fried Rice",
    category: "Quick Meals",
    description: "A 15-minute weeknight saviour. Simple ingredients, big flavour.",
    image: "https://placehold.co/400x250/ffc107/ffffff?text=Egg+Fried+Rice",
  },
];
