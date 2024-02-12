import React, { FC } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { ThemeProvider } from "styled-components"
import { store } from "./store"
import { theme } from "./theme/mui"
import GlobalStyle from "./GlobalStyle"
import Routes from "./routes"
import { ErrorFallback } from "./containers"

const App: FC = _props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
