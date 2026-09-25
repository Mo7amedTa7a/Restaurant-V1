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
            width: { xs: "80%", sm: "80%", md: "25%" },
            height: "100vh",
            backgroundColor: "#fff",
            position: "fixed",
            zIndex: 1200,
            left: 0,
            top: 0,
            bottom: 0,
            boxShadow: "2px 0 5px #f5972360",
            transform: showSide ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.4s ease",
            overflowY: "auto",
            p: 1,
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

        {/* Backdrop overlay on mobile when sidebar is open */}
        {showSide && (
          <Box
            onClick={() => setShowSide(false)}
            sx={{
              display: { xs: "block", md: "none" },
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 1100,
            }}
          />
        )}

        {/* Content Menu */}
        <main
          style={{
            marginLeft: showSide ? "clamp(0px, 25%, 25%)" : "0",
            width: "100%",
            transition: "margin-left .4s ease",
          }}
        >
          <Outlet />
        </main>
      </Box>
      <Footer />
    </>
  );
};

export default LayOut;
