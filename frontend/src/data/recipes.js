import cookieImg from '../assest/cookie.jpg'; // adjust path as needed
import chickenImg from '../assest/chiken.webp';
import saladImg from '../assest/salad.jpg';

export const recipeData = [
    {
    id: 1,
    title: "Classic Chocolate Chip Cookies",
    description: "Soft, chewy cookies with melted chocolate chips in every bite. Perfect for any occasion!",
    image: cookieImg, // use the imported variable
    cookTime: "25 mins",
    servings: 24,
    difficulty: "Easy",
    rating: 4.8,
    reviews: 156,
    category: "Dessert",
    ingredients: [
    "2¼ cups all-purpose flour",
    "1 tsp baking soda",
    "1 tsp salt",
    "1 cup butter, softened",
    "¾ cup granulated sugar",
    "¾ cup brown sugar",
    "2 large eggs",
    "2 tsp vanilla extract",
    "2 cups chocolate chips"
    ],
    instructions: [
    "Preheat oven to 375°F (190°C).",
    "Mix flour, baking soda, and salt in a bowl.",
    "Cream butter and sugars until fluffy.",
    "Beat in eggs and vanilla.",
    "Gradually mix in flour mixture.",
    "Stir in chocolate chips.",
    "Drop rounded tablespoons onto ungreased baking sheets.",
    "Bake 9-11 minutes until golden brown.",
    "Cool on baking sheet for 2 minutes before removing."
    ],
    isFavorite: false
},

  {
    id: 2,
    title: "Creamy Chicken Alfredo",
    description: "Rich and creamy pasta dish with tender chicken and a velvety alfredo sauce that coats every strand of fettuccine.",
    image: chickenImg,
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    rating: 4.6,
    reviews: 89,
    category: "Main Course",
    ingredients: [
    "1 lb fettuccine pasta",
    "2 chicken breasts, sliced",
    "4 tbsp butter",
    "4 cloves garlic, minced",
    "2 cups heavy cream",
    "1 cup parmesan cheese, grated",
    "Salt and pepper to taste",
    "Fresh parsley for garnish"
    ],
    instructions: [
    "Cook pasta according to package directions.",
    "Season and cook chicken until golden.",
    "Melt butter, sauté garlic.",
    "Add cream, simmer until thickened.",
    "Stir in parmesan cheese.",
    "Toss with pasta and chicken.",
    "Garnish with parsley and serve."
    ],
    isFavorite: true
  },

  {
    id: 3,
      title: "Fresh Garden Salad",
      description: "A vibrant mix of fresh greens, crisp vegetables, and a light vinaigrette that's perfect for any meal.",
      image: saladImg,
      cookTime: "10 mins",
      servings: 2,
      difficulty: "Easy",
      rating: 4.3,
      reviews: 42,
      category: "Salad",
      ingredients: [
        "4 cups mixed greens",
        "1 cucumber, sliced",
        "2 tomatoes, chopped",
        "1/4 red onion, sliced",
        "1/4 cup olive oil",
        "2 tbsp balsamic vinegar",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Wash and dry all vegetables.",
        "Combine greens in a large bowl.",
        "Add cucumber, tomatoes, and onion.",
        "Whisk olive oil and vinegar.",
        "Drizzle dressing over salad.",
        "Toss gently and serve immediately."
      ],
      isFavorite: false
  }
];