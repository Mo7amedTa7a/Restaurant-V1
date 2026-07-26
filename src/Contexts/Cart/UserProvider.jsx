import { useEffect, useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
  const [showItemCart, setShowItemCart] = useState(() => {
    return JSON.parse(localStorage.getItem("ProductsCart")) || [];
  });
  const [incrementCart, setIncrementCart] = useState(() => {
    return Number(localStorage.getItem("counterCart")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("counterCart", incrementCart);
    localStorage.setItem("ProductsCart", JSON.stringify(showItemCart));
  }, [incrementCart, showItemCart]);
  return (
    <UserContext
      value={{ incrementCart, setIncrementCart, showItemCart, setShowItemCart }}
    >
      {children}
    </UserContext>
  );
}

export default UserProvider;
