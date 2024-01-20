import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FCA311",
      light: "#FFBB55",
      dark: "#D18B00",
    },
    secondary: {
      main: "#14213D",
      light: "#40587F",
      dark: "#0E172B",
    },
    greyBg: {
      default: "#F2F2F2"
    }
  },
});

export default theme;
