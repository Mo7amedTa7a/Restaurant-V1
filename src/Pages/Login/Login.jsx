import { NavLink, useNavigate } from "react-router";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/AuthSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) =>
        user.userPhoneNumber === userData.userPhoneNumber &&
        user.userPass === userData.userPass,
    );

    if (!foundUser) {
      alert("You need to create an account first.");

      navigate("/register");

      return;
    }

    dispatch(login(foundUser));

    e.target.reset();

    navigate("/");
  };

  return (
    <section className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="FOMO Logo" />
        </div>

        <div className={styles.heading}>
          <h2>Welcome Back!</h2>
          <p>Sign in to continue your delicious journey.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="user-name">Phone Number</label>
            <input
              type="tel"
              id="user-name"
              name="userPhoneNumber"
              placeholder="Phone Number"
              inputMode="numeric"
              pattern="[0-9]*"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="user-pass">Password</label>
            <input
              type="password"
              id="user-pass"
              name="userPass"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            Sign In
          </button>
        </form>

        <p className={styles.footerText}>
          Hungry for something delicious? <NavLink onClick={()=> navigate('/register')}>Create Acount</NavLink>
        </p>
      </div>
    </section>
  );
}
