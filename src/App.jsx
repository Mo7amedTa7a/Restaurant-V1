import { RouterProvider } from "react-router";
import UserProvider from "./Contexts/Cart/UserProvider";
import Route from "./Routes/Route";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={Route} />;
    </UserProvider>
  );
}

export default App;
