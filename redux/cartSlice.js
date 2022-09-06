import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    
    name: "cart",
    initialState: {
        products: [],
        cartQuantity:0,
        total:0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            state.cartQuantity += parseInt(action.payload.quantity);
        },
        reset: (state) => {
            state.products = [],
            state.total=0
        },

    }
});

export const { addProduct, reset } = cartSlice.actions

export default cartSlice.reducer;