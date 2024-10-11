import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interfaces for RecipeState and Recipe object
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface RecipeState {
  recipes: Recipe[];
}

// Initial state
const initialState: RecipeState = {
  recipes: [],
};

// Create the Redux slice
export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // Action to replace the entire recipes array with a new one
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload; // Set the recipes array to the new array
    },

    // Action to add a new meal
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.recipes.push(action.payload); // Add the new meal to the array
    },

    // Action to clear all recipes
    clearRecipes: () => {
      return initialState; // Reset state to initial
    },
  },
});

// Export the actions
export const { setRecipes, addRecipe, clearRecipes } = recipeSlice.actions;

// Export the reducer as the default export
export default recipeSlice.reducer;
