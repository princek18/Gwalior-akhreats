import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeCart: (state, action) => {},
  },
});

export const { addItem, clearCart, removeCart } = CartSlice.actions;

export default CartSlice.reducer;
