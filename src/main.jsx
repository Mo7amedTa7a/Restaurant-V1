import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { ThemeProvider  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Theme/Theme.jsx";



createRoot(document.getElementById("root")).render(
  <ThemeProvider  theme={theme}>
      <CssBaseline />
      <App />
  </ThemeProvider >
);
