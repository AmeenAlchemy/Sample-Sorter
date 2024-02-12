/* eslint-disable import/no-extraneous-dependencies */
import React, { PropsWithChildren, ReactElement } from "react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { render, RenderOptions } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import type { PreloadedState } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { AppStore, RootState, setupStore } from "@app/store"
import { theme } from "../theme/mui"

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
  path?: string
}

function renderWithProviders(
  ui: ReactElement,
  { preloadedState = {}, path = "", store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    const Router = path ? MemoryRouter : BrowserRouter
    return (
      <Provider store={store}>
        <Router initialEntries={path ? [path] : undefined}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Router>
      </Provider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from "@testing-library/react"

export { renderWithProviders as render }
