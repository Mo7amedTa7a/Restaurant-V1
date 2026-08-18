import styles from "./Register.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/AuthSlice";
import { useNavigate } from "react-router";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Check passwords
    if (data.userPass !== data.passConfirm) {
      alert("Passwords do not match!");
      return;
    }

    // Get all users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if phone number already exists
    const userExists = users.some(
      (user) => user.userPhoneNumber === data.userPhoneNumber,
    );

    if (userExists) {
      alert("This user already exists. Please login.");
      return;
    }

    // Remove confirm password
    delete data.passConfirm;

    // Register user
    dispatch(register(data));

    // Reset form
    e.target.reset();

    // Go to home
    navigate("/");
  };

  return (
    <section className={styles.registerPage}>
      <div className={styles.registerCard}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="FOMO Logo" />
        </div>

        <div className={styles.heading}>
          <h2>Create Account</h2>
          <p>Join us and enjoy your delicious journey.</p>
        </div>

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="user-name">Full Name</label>

            <input
              type="text"
              id="user-name"
              name="userName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="user-phone">Phone Number</label>

            <input
              type="tel"
              id="user-phone"
              name="userPhoneNumber"
              placeholder="Enter your phone number"
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
              placeholder="Create a password"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="user-passConfirm">Confirm Password</label>

            <input
              type="password"
              id="user-passConfirm"
              name="passConfirm"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className={styles.registerButton}>
            Create Account
          </button>
        </form>

        <p className={styles.footerText}>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </section>
  );
}
