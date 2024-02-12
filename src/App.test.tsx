import React from "react"
import { act } from "react-dom/test-utils"
import { createRoot } from "react-dom/client"
import App from "./App"

describe("App", () => {
  it("renders without crashing", () => {
    const container = document.createElement("div")
    document.body.appendChild(container)

    act(() => {
      const root = createRoot(container)
      root.render(<App />)
      root.unmount()
    })
  })
})
