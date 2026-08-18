import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(logout())}>Logout</button>;
}

export default LogoutButton;
