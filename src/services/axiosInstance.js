import axios from "axios";



const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com/",
    timeout:1000,
    headers:{"X-Custom-Header":"Mhmed"}
})

export default axiosInstance