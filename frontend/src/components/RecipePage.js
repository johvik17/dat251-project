import { useState } from 'react';
import '../App.css';

const mockRecipes = [
  {
    id: 1,
    title: 'Creamy Tomato Rigatoni',
    description: 'A comforting pasta dish with tomato sauce, garlic, and parmesan.',
    time: 25,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    tags: ['Vegetarian', 'Quick'],
  },
  {
    id: 2,
    title: 'Lemon Salmon Bowl',
    description: 'Fresh salmon with rice, cucumber, avocado, and lemon dressing.',
    time: 30,
    difficulty: 'Medium',
    diet: 'Pescetarian',
    tags: ['High Protein', 'Fresh'],
  },
  {
    id: 3,
    title: 'Spicy Chickpea Curry',
    description: 'A warming chickpea curry with coconut milk and spinach.',
    time: 35,
    difficulty: 'Easy',
    diet: 'Vegan',
    tags: ['Vegan', 'Comfort'],
  },
  {
    id: 4,
    title: 'Chicken Teriyaki Noodles',
    description: 'Savory noodles with chicken, vegetables, and teriyaki sauce.',
    time: 20,
    difficulty: 'Easy',
    diet: 'Omnivore',
    tags: ['Quick', 'Popular'],
  },
  {
    id: 5,
    title: 'Mushroom Risotto',
    description: 'Creamy risotto with mushrooms, onion, and parmesan.',
    time: 40,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    tags: ['Vegetarian', 'Cozy'],
  },
  {
    id: 6,
    title: 'Tofu Stir Fry',
    description: 'Crispy tofu with vegetables and soy-ginger sauce.',
    time: 20,
    difficulty: 'Easy',
    diet: 'Vegan',
    tags: ['Vegan', 'Quick'],
  },
];


function RecipePage() {
  const [diet, setDiet] = useState('All');
  
  
  
  
  return (
    <main>
      <h1>Your dinner suggestions</h1>
      <p>Choose preferences and get recipe recommendations </p>
    </main>
  );
}

export default RecipePage;