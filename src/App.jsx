import Header from './components/Header'
import Hero from './components/Hero'
import Form from './components/Form'
import Statistics from './components/Statistics'

import { ThemeProvider } from 'styled-components'

import theme from './themes/main'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Form />
      <Statistics />
    </ThemeProvider>
  )
}
