import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Outfit", serif',
  },
  palette: {
    black: "#000",
    primary: {
      main: "#f1f1f1",
      shadow: "#f8f8f8",
    },
    secondary: {
      main: "#8c8c8c",
    },
    white: "#fff",
    lightwhite: "#404040",
    offwhite: "#ddd",
    lightBlack:"#1a1a1a"
  },
});

export default theme;
