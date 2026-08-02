import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("ProductsInCart")) || [],
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

    incItem: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity++;
      }
      localStorage.setItem("ProductsInCart", JSON.stringify(state.items));
    },
    decItem: (state , action) => {
      const product = state.items.find((item)=> item.id === action.payload)
      if(!product) return
      if(product.quantity > 1){
        product.quantity--;
      }else{
        state.items = state.items.filter((item)=> item.id !== action.payload)
      }
      localStorage.setItem("ProductsInCart", JSON.stringify(state.items))
    },
  },
});

export const { addToCart, removeCart, incItem, decItem } = cartSlice.actions;
export default cartSlice.reducer;
