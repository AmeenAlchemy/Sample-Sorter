import React from "react"
import { render, screen, fireEvent } from "@app/test/test-utils"
import Racks from "./Racks"

describe("Racks Component", () => {
  test("should render <Racks />", () => {
    const { container } = render(<Racks />)
    expect(container).toBeInTheDocument()
  })

  test("should render correct page title", () => {
    render(<Racks />)
    expect(screen.getByText("Racks")).toBeInTheDocument()
  })

  test("should render add testtube button", () => {
    render(<Racks />)
    expect(screen.getByTestId("add-testtube")).toBeInTheDocument()
  })

  test("should render racks table", () => {
    render(<Racks />)
    expect(screen.getByTestId("racks-table")).toBeInTheDocument()
  })

  test("should display add testtube modal when add button is clicked", () => {
    render(<Racks />)
    const exportButton = screen.getByTestId("add-testtube")
    fireEvent.click(exportButton)
    const exportMenu = screen.getByTestId("modal-add-testtube")
    expect(exportMenu).toBeInTheDocument()
  })
})
