import { createBrowserRouter } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFillBack } from "../Components/MenuErrorBundary/MenuErrorBundary";
import { lazy } from "react";

import LayOut from "../LayOut/LayOut";
import SecLayOut from "../LayOut/SecLayOut";
import authMiddleware from "../Middleware/authMiddleware";

const About = lazy(() => import("../Pages/About/About"));
const ContactUs = lazy(() => import("../Pages/Contact/ContactUs"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));

const ProductDetail = lazy(
  () => import("../Pages/ProductDetails/ProductDetail"),
);
const Login = lazy(() => import("../Pages/Login/Login"));

const Cart = lazy(() => import("../Pages/Cart/Cart"));
const Menu = lazy(() => import("../Pages/Menu/Menu"));
const Register = lazy(() => import("../Pages/Register/Register"));
const Home = lazy(() => import("../Pages/Home/Home"));
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
            path: "menu",
            element: (
              <ErrorBoundary FallbackComponent={ErrorFillBack}>
                <Menu />
              </ErrorBoundary>
            ),
          },
          {
            path: "productDetails/:id",
            Component: ProductDetail,
            middleware: [authMiddleware],

            loader: async () => {
              console.log("Loader product Details");
              return { message: "Loading......" };
            },
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
            middleware: [authMiddleware],
          },
        ],
      },
      {
        Component: SecLayOut,
        children: [
          {
            path: "login",
            Component: Login,
          },
          {
            path: "register",
            Component: Register,
            // action: async ({ request }) => {
            //   const formData1 = await request.formData();
            //   const data = Object.fromEntries(formData1.entries());
            //   console.log("from router data", data);
            //   return data;
            // },
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
