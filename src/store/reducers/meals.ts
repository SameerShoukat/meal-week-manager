import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interfaces for MealState and Meal object
export interface Meal {
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
  selectedWeek: string;
  mealType: string[];
}

export interface MealState {
  meals: Meal[];
}

// Initial state
const initialState: MealState = {
  meals: [],
};

// Create the Redux slice
export const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    // Action to replace the entire meals array with a new one
    setMeals: (state, action: PayloadAction<Meal[]>) => {
      state.meals = action.payload; // Set the meals array to the new array
    },
    removeMeals: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index !== -1) {
        state.meals.splice(index, 1);
      }
    },
    // Action to add a new meal
    addMeal: (state, action: PayloadAction<Meal>) => {
      state.meals.push(action.payload); // Add the new meal to the array
    },
  
    // Action to clear all meals
    clearMeals: () => {
      return initialState; // Reset state to initial
    },
  },
});

// Export the actions
export const { setMeals, addMeal, clearMeals, removeMeals } = mealSlice.actions;

// Export the reducer as the default export
export default mealSlice.reducer;
