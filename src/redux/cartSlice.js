import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    // cartFilter: "",
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            /* action - {
                type: 'cart/addToCart',
                payload: {
                    id: 1,
                    img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
                    price: 10.99,
                    title: 'Taco XXL',
                    discount: {
                        value: 17,
                    },
                }
            } */
            state.cart = [...state.cart, action.payload];
            // state.cart.push(action.payload);
        },
        deletCartProduct: (state, action) => {
            /* action - {
                    type: 'cart/deletCartProduct',
                    payload: 4,
                }
            } */
            state.cart = state.cart.filter(product => product.id !== action.payload);
        } 
    }
})

export const cartReducer = cartSlice.reducer
export const {addToCart, deletCartProduct} = cartSlice.actions
