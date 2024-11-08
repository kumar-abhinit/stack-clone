import { ThemeProvider } from '@mui/material'
import './App.css'
import Layout from './components/Layout'
import { MuiCustomTheme } from './theme/MuiCustomTheme'
function App() {
  return (
    <>
      <ThemeProvider theme={MuiCustomTheme}>
      <Layout/>
      </ThemeProvider>
    </>
  )
}

export default App
