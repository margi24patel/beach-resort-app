import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(51, 201, 220, 1)",
      main: "rgba(0, 188, 212, 1)",
      dark: "rgba(0, 131, 148, 1)",
      // contrastText: "#fff",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    fontFamily: '"Heebo", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    button: {
      textTransform: "none",
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1.33rem",
      lineHeight: "1.7",
    },
    h1: {
      fontWeight: 500,
      fontSize: "5rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      [breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: "3rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      [breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "2.75rem",
      color: "#37517A",
      fontWeight: "400",
      [breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1.75rem",
      color: "#37517A",
      fontWeight: "400",
    },
    h5: {
      fontSize: "1.5rem",
      color: "#37517A",
      fontWeight: "400",
    },
    h6: {
      fontSize: "1.2rem",
      color: "#37517A",
      fontWeight: "400",
    },
    subtitle1: {
      fontSize: "1.15rem",
      fontWeight: "600",
    },
  },
});

export default theme;
