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
    lightWhite: "#404040",
    offWhite: "#ddd",
    lightBlack: "#1a1a1a",
    warning: {
      main: "#f7dc6f",
    },
  },
});

export default theme;
