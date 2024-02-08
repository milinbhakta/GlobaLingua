import { localStorageDetector } from "typesafe-i18n/detectors";
import "./App.css";
import { detectLocale } from "./i18n/i18n-util";
import { useEffect, useState } from "react";
import { loadLocaleAsync } from "./i18n/i18n-util.async";
import TypesafeI18n from "./i18n/i18n-react";
import Weather from "./Components/Weather";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { Container, Box, Grid } from "@mui/material";
import Header from "./Components/Header";

const detectedLocale = detectLocale(localStorageDetector);
const theme = createTheme();

function App() {
  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true));
  }, []);

  if (!wasLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <TypesafeI18n locale={detectedLocale}>
        <Header />
        <Container>
          <Box my={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className="App">
                  <Weather />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </TypesafeI18n>
    </ThemeProvider>
  );
}

export default App;
