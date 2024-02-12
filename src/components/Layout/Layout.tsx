import React from "react"
import styled from "styled-components"
import type { LayoutComponent } from "./types"

const SessionLayout = styled.main`
  display: grid;
  grid-template-columns: 6.4rem 1fr;
`

export const LoadingLayout = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.grey[100]};
`

const Layout: LayoutComponent = ({ variant = "session", children }) => {
  if (variant === "session") {
    return <SessionLayout>{children}</SessionLayout>
  }

  return <LoadingLayout>{children}</LoadingLayout>
}

export default Layout
