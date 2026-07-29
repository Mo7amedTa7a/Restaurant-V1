import { createBrowserRouter } from "react-router";
import LayOut from "../LayOut/LayOut";
import About from "../Pages/About/About";
import ContactUs from "../Pages/Contact/ContactUs";
import NotFound from "../Pages/NotFound/NotFound";
import Menu from "../Pages/Menu/Menu";
import SecLayOut from "../LayOut/SecLayOut";
import ProductDetail from "../Pages/ProductDetails/ProductDetail";
import authMiddleware from "../Middleware/authMiddleware";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";

const Route = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        Component: LayOut,
        children: [
          {
            index: true,
            Component: Home,
           
          },
          {
            path:"menu",
            Component: Menu,
           
          },
          {
            path: "productDetails/:id",
            Component: ProductDetail,
             middleware:[authMiddleware],

            loader: async ()=>{
              // for(var i = 0 ; i < 1000 ; i++){
              //   console.log(i)
              // }
                console.log("Loader product Details")
                return { message : "Loading......"};
              }
          },
          {
            path: "about",
            Component: About,
          },
          {
            path: "contact",
            Component: ContactUs,
          },
          {
            path: "cart",
            Component: Cart,
          }
        ],
      },
      {
        Component: SecLayOut,
        children: [
          {
            path:"login",
            Component: Login
          },
          {
            path:"register",
            Component:Register,
            action: async ({request})=>{
              const formData1 = await request.formData()
              const data = Object.fromEntries(formData1.entries())
              console.log("from router data" , data)
              return data
            }
          },
          {
            path: "*",
            Component: NotFound,
          },
        ],
      },
    ],
  },
]);

export default Route;
