import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../apis/FetchProducts";

const initialState = {
  items: [],
  categories: [],
  status: "idle",
  error: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.products;
      state.categories = action.payload.categories;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      if (action.meta.aborted) {
        state.status = "idle";
        return;
      }
      state.error = action.error.message;
    });
  },
});

export default ProductsSlice.reducer;
