import axios from "axios";

let baseURL;

if (import.meta.env.DEV) {
  baseURL = import.meta.env.VITE_BASE_URL_DEV;
  // console.log(import.meta.env);
} else {
  baseURL = import.meta.env.VITE_BASE_URL_PRO;
}
const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "X-Custom-Header": "Mhmed",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = "userToken:34523mrenfcsdvccvsdf23rfewfdc";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
  { runWhen: (config) => config.url !== "login" },
);

// Response
axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
     if (error.response?.status === 403) {
      console.log("You don't have permission");
    }

    if (error.response?.status === 404) {
      console.log("Resource not found");
    }

    if (error.response?.status >= 500) {
      console.log("Server error");
    }
  },
);
export default axiosInstance;
