import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ee8915",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#f5f5f5",
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",

    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 500,
      color: "#fff",
    },
    a: {
      textDecoration: "none",
      display: "inline",
      margin: "0 15px",
      fontSize: "18px",
      fontWeight: "500",
      color: "#ee8915",
      "&:hover": {
        color: "#ff9c238a",
      },
    },
    li:{
      display: "inline",
      margin: "0 15px",
      listStyle: "none",
      alignItems: "center",
    }
  },
});

export default theme;
