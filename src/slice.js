import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cartItems: [],
   cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload });
      }
      localStorage.setItem('cart',JSON.stringify(state.cartItems))
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      localStorage.setItem('cart',JSON.stringify(state.cartItems))
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cart')
    },
  },
},

);


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
