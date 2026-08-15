import { RouterProvider } from "react-router";
import UserProvider from "./Contexts/Cart/UserProvider";
import Route from "./Routes/Route";
import { Provider } from "react-redux";
import store from "./Stores/store";
import { Suspense } from "react";
import Loader from "./Pages/Loader/Loader";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={Route} />
        </Suspense>
      </UserProvider>
    </Provider>
  );
}

export default App;
