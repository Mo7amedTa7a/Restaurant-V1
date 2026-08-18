import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./../features/cartSlice/cartSlice";
import ProductsSlice from "./../features/Products/ProductsSlice";
import SearchSlice from "./../features/SearchSlice/SearchSlice";
import AuthSlice from "./../features/auth/AuthSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: ProductsSlice,
    search: SearchSlice,
    auth: AuthSlice,
  },
});

export default store;
