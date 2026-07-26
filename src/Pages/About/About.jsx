function About() {
  // const local = useLocation()
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <h1>About</h1>
    {!user &&<h1> user Not Login</h1>}
    {user && <div
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <h4>Welcome ,{user.userName}</h4>
        <h4>Email: {user.userEmail}</h4>

        {/* <h3>{local.state.userName}</h3> */}
      </div>}
      
    </div>
  );
}

export default About;
