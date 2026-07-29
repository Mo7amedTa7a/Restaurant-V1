import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const {data} = await axios.get("/MyApi.json")
        // console.log(data)
        return data
    }
)

