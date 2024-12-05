import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import categoryReducer from './categorySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    category: categoryReducer

  },
});
