import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("ProductsInCart"))||[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
    //   console.log("Add To Cart", state, " : ", action);

      const exist = state.items.find((item) => item.id == action.payload.id);
      if (!exist) {
        state.items.push(action.payload);
        localStorage.setItem("ProductsInCart", JSON.stringify(state.items));
      }
    },

    removeCart: (state, action) => {
    //   console.log("remove Cart", state, " : ", action);
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        localStorage.setItem("ProductsInCart", JSON.stringify(state.items));
    },

    incItem: () => {
      console.log("incItem");
    },
    decItem: () => {
      console.log("decItem");
    },
  },
});

export const { addToCart, removeCart, incItem, decItem } = cartSlice.actions;
export default cartSlice.reducer;
