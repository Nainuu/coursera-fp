import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], totalCost: 0 }, // Added totalCost to state
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalCost += action.payload.price;
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(item => item.id !== id);
        }
        state.totalCost = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      }
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload);
      if (item) {
        state.totalCost -= item.price * item.quantity;
        state.cart = state.cart.filter(i => i.id !== action.payload);
      }
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
