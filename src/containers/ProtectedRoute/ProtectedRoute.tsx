import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import { Layout, Navbar } from "@app/components"

const ProtectedRoute: FC = () => {
  return (
    <Layout variant='session'>
      <Navbar />
      <Outlet />
    </Layout>
  )
}

export default ProtectedRoute
