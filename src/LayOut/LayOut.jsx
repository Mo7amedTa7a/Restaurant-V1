import Box from "@mui/material/Box";
import SidBar from "./SidBar/SidBar.jsx";
import Header from "./Header/Header.jsx";
import { Outlet } from "react-router";
import { useState } from "react";
import Footer from "./TheFooter/Footer.jsx";
const LayOut = () => {
  const [showSide, setShowSide] = useState(!true);

  return (
    <>
      <Header setShowSide={setShowSide} />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar */}
       
          <Box
            sx={{
              width: "25%",
              height: "100vh ",
              backgroundColor: "#fff",
              position: "fixed",
              zIndex: 1000,
              left: 0,
              bottom: 0,
              boxShadow: "2px 0 5px #f5972360",
              transform: showSide ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.5s ease",
              overflowY: "auto",
              p: 1,
              // Scrollbar styling
              "&::-webkit-scrollbar": {
                width: "2px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f5f5f5",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#f59723",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#d97f00",
              },
            }}
          >
            <SidBar />
          </Box>
        

        {/* Content Menu*/}
        <main style={{ marginLeft: showSide ? "25%" : "0", width: "100%" ,transition: "margin-left .5s ease",}}>
          <Outlet />
        </main>
      </Box>
      <Footer />
    </>
  );
};

export default LayOut;
