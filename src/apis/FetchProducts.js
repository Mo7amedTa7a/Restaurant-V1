import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/getProducts",
    async (_,thunkAPI) => {
        console.log("🚀 Request Started");
        const {data} = await axios.get("/MyApi.json",{
            signal:thunkAPI.signal,
        });
        console.log("✅ Request Finished");
        // console.log(data)
        return data
    }
)

