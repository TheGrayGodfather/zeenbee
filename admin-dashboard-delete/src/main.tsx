import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme.ts'
import { ThemeProvider } from '@mui/material'

// override palette
declare module '@mui/material/styles' {
  interface Palette {
    greyBg: {
      default: string;
    };
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    greyBg?: {
      default?: string;
    };
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
  </ThemeProvider>,
)
