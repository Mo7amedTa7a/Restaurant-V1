import UserContext from "./UserContext";

function UserProvider({ children }) {
  // const [showItemCart, setShowItemCart] = useState(() => {
  //   return JSON.parse(localStorage.getItem("ProductsInCart")) || [];
  // });
  // const [incrementCart, setIncrementCart] = useState(() => {
  //   return Number(localStorage.getItem("counterCart")) || 0;
  // });

  // useEffect(() => {
  //   localStorage.setItem("counterCart", incrementCart);
  //   localStorage.setItem("ProductsInCart", JSON.stringify(showItemCart));
  // }, [incrementCart]);
  return (
    <UserContext
      value={{}}
    >
      {children}
    </UserContext>
  );
}

export default UserProvider;
