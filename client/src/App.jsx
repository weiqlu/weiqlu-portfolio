import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Links from "./components/Links";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
    primary: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
      tertiary: "#666666",
    },
  },
  typography: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    h1: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#ffffff",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.2rem",
      fontWeight: 600,
      marginBottom: "1rem",
      marginTop: "2rem",
      color: "#ffffff",
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "0.9rem",
      color: "#aaaaaa",
      lineHeight: 1.4,
    },
    body2: {
      fontSize: "0.8rem",
      color: "#666666",
      lineHeight: 1.4,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 20,
          fontFamily: "'Inter', sans-serif",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          lineHeight: 1.4,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Box
          sx={{
            maxWidth: "515px",
            mx: "auto",
            px: 3,
            pt: 18,
            pb: 8,
            textAlign: "left",
          }}
        >
          <Profile />
          <Experience />
          <Projects />
          <Links />
        </Box>
      </Box>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
