import { createSlice } from "@reduxjs/toolkit"  ;

// const initialState = {
//     cartItems: [],
//     loading: false,
//     error: null,

//     totalPrice: 0,
// }
export const cartData = createSlice({
    name: "cartData",
    initialState: {
        cartItems: [],
        loading: false,
        error: null,
        totalCartItemsPrice: 0,
    },
    reducers: {
        addItemtoCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += existingItem.price;
            } else {
                
                state.cartItems.push({ ...item, quantity: 1, totalPrice: item.price });
            }
        },
        removeItemFromCart: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
        },
        incrementItemQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decrementItemQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                existingItem.quantity = 1;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        incrementTotalPrice: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);
            if (existingItem) {
                existingItem.totalPrice += existingItem.price;
            }
        },
        decrementTotalPrice: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);
            if (existingItem && existingItem.totalPrice > existingItem.price) {
                existingItem.totalPrice -= existingItem.price;
            } else {
                existingItem.totalPrice = existingItem.price;
            }
        },
        calculateTotalPrice: (state) => { 
            state.totalCartItemsPrice = state.cartItems.reduce((total, item) => {
                return total + item.totalPrice;
            }, 0);
         }


    },
    
})

export const { addItemtoCart, removeItemFromCart, incrementItemQuantity, decrementItemQuantity, clearCart, incrementTotalPrice, decrementTotalPrice, calculateTotalPrice } = cartData.actions;

export default cartData.reducer;
