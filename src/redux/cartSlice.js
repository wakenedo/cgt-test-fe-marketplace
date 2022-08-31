import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalCartPrice: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
      state.totalCartPrice = state.totalCartPrice + action.payload.product.price;

    },
    removeFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        item.quantity--;
      }
      state.totalCartPrice = state.totalCartPrice - item.product.price
    },
    removeAllItems: (state, action) => {
      state.cart = state.cart.filter((item) => item.id === action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  removeFromCart,
  removeAllItems,
} = cartSlice.actions