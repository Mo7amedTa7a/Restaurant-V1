import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./../features/cartSlice/cartSlice";
import ProductsSlice from "./../features/Products/ProductsSlice";
import SearchSlice from "./../features/SearchSlice/SearchSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: ProductsSlice,
    search: SearchSlice,
  },
});

export default store;
