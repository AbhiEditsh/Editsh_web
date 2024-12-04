import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { BlogProvider } from "./Context/BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BlogProvider>
      <App />
      </BlogProvider>
    </ThemeProvider>
  </BrowserRouter>
);


reportWebVitals();
