// src/redux/cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from './types';


export interface CartState {
  items: CartItem[];
  coupon: string | null;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] as CartItem[], total: 0,  coupon: null as string | null,
 },
  reducers: {
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
    applyCoupon: (state, action) => {
      state.total *= (1 - action.payload.discount);
    },
    addToCart: (state, action) => {
      const item = action.payload;
      state.items.push(item);
    },
  }
});

export const { addToCart, removeFromCart, updateQuantity, applyCoupon } = cartSlice.actions;
export default cartSlice.reducer;

