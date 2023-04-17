import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    orderValue: 0,
  },
  reducers: {
    addItem: (state, action) => {
      let data = action.payload;
      data["quantity"] = 1;
      state.items.push(data);
    },
    clearCart: (state) => {
      state.items = [];
      state.orderValue = 0;
    },
    increaseQunatity: (state, action) => {
      let data = JSON.parse(JSON.stringify(state.items));
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === action.payload) {
          data[i].quantity += 1;
        }
      }
      state.items = data;
    },
    decreaseQuantity: (state, action) => {
      // console.log(action.payload);

      let data = JSON.parse(JSON.stringify(state.items));
      let dataId = null;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === action.payload) {
          data[i].quantity -= 1;
        }
        if (data[i].quantity === 0) {
          dataId = data[i].id;
        }
      }
      if (dataId !== null) {
        data = data.filter((item) => item.id !== dataId);
      }
      state.items = data;
    },
    updateOrderValue: (state) => {
      let data = JSON.parse(JSON.stringify(state.items));
      let value = 0;
      for (let i = 0; i < data.length; i++) {
        let price = data[i]?.price;
        let defaultPrice = data[i]?.defaultPrice;
        let finalPrice = defaultPrice ? defaultPrice / 100 : price / 100;
        value += data[i].quantity * finalPrice;
      }
      state.orderValue = value;
    },
  },
});

export const {
  addItem,
  clearCart,
  increaseQunatity,
  decreaseQuantity,
  updateOrderValue,
} = CartSlice.actions;

export default CartSlice.reducer;
