import { Box, CssBaseline } from '@mui/material'
import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { useEffect, useState } from 'react'
import { localStorageDetector } from 'typesafe-i18n/detectors'
import Header from './Components/Header'
import Weather from './Components/Weather'
import TypesafeI18n from './i18n/i18n-react'
import { detectLocale } from './i18n/i18n-util'
import { loadLocaleAsync } from './i18n/i18n-util.async'
import './App.css'

const detectedLocale = detectLocale(localStorageDetector)
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00acc1',
    },
    secondary: {
      main: '#8bc34a',
    },
  },
})

function App() {
  const [wasLoaded, setWasLoaded] = useState(false)

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true))
  }, [])

  if (!wasLoaded)
    return null

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TypesafeI18n locale={detectedLocale}>
        <Box
          sx={{
            'backgroundImage':
              'url(https://images.unsplash.com/photo-1553117595-ce350239bde9)',
            'backgroundSize': 'cover',
            'backgroundPosition': 'center',
            '::backdrop': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            'height': '100vh',
            'display': 'flex',
            'flexDirection': 'column',
          }}
        >
          <Header />
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
            }}
          >
            <Weather />
          </Box>
        </Box>
      </TypesafeI18n>
    </ThemeProvider>
  )
}

export default App
