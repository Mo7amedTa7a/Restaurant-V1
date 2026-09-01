function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{width:"150px" }} src="/logo.png" alt="logo" />

      <h5 style={{paddingTop:"20px",color:"#ee8915"}}>Loading.....</h5>
    </div>
  );
}

export default Loader;
