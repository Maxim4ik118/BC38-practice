import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import { productsReducer } from './productsSlice';
import { postReducer } from './postSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    posts: postReducer,
  },
});
