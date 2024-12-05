import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/counterSlice';
import categoryReducer from '../Features/categorySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    category: categoryReducer

  },
});
