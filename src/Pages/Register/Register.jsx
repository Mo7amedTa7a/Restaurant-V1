import { useState } from "react";
import { Form, useActionData } from "react-router";

const initData = {
  userName: "",
  userEmail: "",
  userPass: "",
  passConfirm: "",
};
export default function Register() {
  // const navigation = useNavigate();
  const [userData, setUserData] = useState(initData);

  const data = useActionData()
  console.log("form page data", data )

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userData);
  //   setUserData(initData);
  //   navigation("/");
  // };
  const handleInputChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setUserData((pre) => ({ ...pre, [name]: value }));
  };
  return (
    // <form
    //   onSubmit={handleSubmit}
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     gap: "20px",
    //   }}
    // >
    <Form method="post" style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}>
      <h2>register</h2>
      <div>
        <label htmlFor="user-name">Name:</label>
        <input
          type="text"
          id="user-name"
          name="userName"
          value={userData.userName}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="user-email">Email:</label>
        <input
          type="email"
          id="user-email"
          name="userEmail"
          value={userData.userEmail}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="user-pass">password:</label>
        <input
          type="text"
          id="user-pass"
          name="userPass"
          value={userData.userPass}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="user-passConfirm">password Confirm:</label>
        <input
          type="text"
          id="user-passConfirm"
          name="passConfirm"
          value={userData.passConfirm}
          onChange={handleInputChange}
        />
      </div>

      <input type="submit" />
    </Form>
    // </form>
  );
}
