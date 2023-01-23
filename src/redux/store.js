import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { contactsReducer } from "./contactsSlice";
import { productsReducer } from "./productsSlice";
import { authReducer } from "./user.slice";


export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        auth: authReducer,
        contacts: contactsReducer,
    }
})