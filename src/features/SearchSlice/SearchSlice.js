import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    textSearch:"",
}
const SearchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearch:(state , action )=>{
            state.textSearch = action.payload
        }
    },

})

export const {setSearch} = SearchSlice.actions;
export default SearchSlice.reducer;