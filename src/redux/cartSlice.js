import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cartFilter: "",
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = { ...action.payload, quantity: 1 };
      if (state.cart.some(el => el.id === product.id)) {
        state.cart = state.cart.map(el => {
          if (el.id === product.id) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });
      } else {
        state.cart = [...state.cart, product];
        // state.cart = [].concat(state.cart, product);
      }

      // state.cart.push(action.payload);
    },
    deletCartProduct: (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
    incrementProductCount: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map(el => {
        if (el.id === productId) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
    },
    decrementProductCount: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map(el => {
        if (el.id === productId) {
          return {
            ...el,
            quantity: el.quantity === 1 ? el.quantity : el.quantity - 1,
          };
        }
        return el;
      });
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  deletCartProduct,
  incrementProductCount,
  decrementProductCount,
} = cartSlice.actions;
