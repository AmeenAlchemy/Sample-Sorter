import React from "react"
import { render, screen } from "@app/test/test-utils"
import TestTubes from "./TestTubes"

describe("TestTubes Component", () => {
  test("should render <TestTubes />", () => {
    const { container } = render(<TestTubes />)
    expect(container).toBeInTheDocument()
  })

  test("should render correct page title", () => {
    render(<TestTubes />)
    expect(screen.getByText("TestTubes", { exact: false })).toBeInTheDocument()
  })

  test("should render TestTubes table", () => {
    render(<TestTubes />)
    expect(screen.getByTestId("TestTubes-table")).toBeInTheDocument()
  })
})
