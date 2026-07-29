import { RouterProvider } from "react-router";
import UserProvider from "./Contexts/Cart/UserProvider";
import Route from "./Routes/Route";
import { Provider } from "react-redux";
import store from "./Stores/store";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={Route} />;
      </UserProvider>
    </Provider>
  );
}

export default App;
