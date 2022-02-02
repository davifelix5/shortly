import Header from './components/Header'

import { ThemeProvider } from 'styled-components'

import theme from './themes/main'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}
