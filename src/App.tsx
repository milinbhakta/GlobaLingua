import { localStorageDetector } from "typesafe-i18n/detectors";
import "./App.css";
import { detectLocale } from "./i18n/i18n-util";
import { useEffect, useState } from "react";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import TypesafeI18n from "./i18n/i18n-react";
import Weather from "./Components/Weather";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import {
  Container,
  Box,
  Grid,
  useMediaQuery,
  CssBaseline,
} from "@mui/material";
import Header from "./Components/Header";

const detectedLocale = detectLocale(localStorageDetector);
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00acc1",
    },
    secondary: {
      main: "#8bc34a",
    },
  },
});

function App() {
  const [wasLoaded, setWasLoaded] = useState(false);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true));
  }, []);

  if (!wasLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TypesafeI18n locale={detectedLocale}>
        <Box
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1553117595-ce350239bde9)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "::backdrop": {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Header />
          <Container>
            <Box my={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div
                    className="App"
                    style={{ height: isSmallScreen ? "50vh" : "100vh" }}
                  >
                    <Weather />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </TypesafeI18n>
    </ThemeProvider>
  );
}

export default App;
