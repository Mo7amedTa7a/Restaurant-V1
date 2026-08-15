import { useNavigate } from "react-router";

// UnControlled Component

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    localStorage.setItem("user", JSON.stringify(userData));
    e.target.reset();
    navigate("/about");

    // navigate("/About",{
    //   state: userData,
    // })
  };

  return (
    
    
      <form
        onSubmit={handleSubmit}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2>login</h2>
        <div>
          <label htmlFor="user-name">Name:</label>
          <input type="text" id="user-name" name="userName" />
        </div>

        <div>
          <label htmlFor="user-email">Email:</label>
          <input type="email" id="user-email" name="userEmail" />
        </div>

        <div>
          <label htmlFor="user-pass">password:</label>
          <input type="text" id="user-pass" name="userPass" />
        </div>

        <input type="submit" />
      </form>
    
  );
}
