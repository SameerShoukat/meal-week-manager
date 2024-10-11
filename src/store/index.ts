'use client';

import { configureStore } from '@reduxjs/toolkit';
// Import your reducers
import { recipeSlice } from './reducers/recipes';
import { mealSlice } from './reducers/meals';

export const store = configureStore({
  reducer: {
    recipeList : recipeSlice.reducer,
    mealList : mealSlice.reducer
  },
});

// Optional: Export types for use with TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
