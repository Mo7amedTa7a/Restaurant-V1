import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/AuthSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

import styles from "../../Acount/AcountComponent.module.css";

export default function LogoutButton() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#c01b1b",
      cancelButtonColor: "#b9b6b3",
    });
    if (result.isConfirmed) {
      dispatch(logout())
      navigate("/login")
    }
  }

  return <button className={`${styles.menuItem} ${styles.logout}`} onClick={handleLogOut}>Logout</button>;

}
