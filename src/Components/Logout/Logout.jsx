import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/AuthSlice";

function LogoutButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(logout())}>Logout</button>;
}

export default LogoutButton;
