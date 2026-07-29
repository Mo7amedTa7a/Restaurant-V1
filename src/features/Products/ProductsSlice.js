import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts } from "../../apis/FetchProducts"


const initialState = {
    items:[],
    categories: [],
    loading: false,
    error:null
}
 
const ProductsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(
            fetchProducts.pending,
            (state)=>{
                state.loading = true
            }
        )
        builder.addCase(
            fetchProducts.fulfilled,
            (state, action)=>{
                state.loading = false;
                state.items = action.payload.products
                 state.categories = action.payload.categories
            }
        )
        builder.addCase(
            fetchProducts.rejected,
            (state, action)=>{
                state.loading = false
                state.error = action.error.message
            }
        )
    }
})

export default ProductsSlice.reducer;