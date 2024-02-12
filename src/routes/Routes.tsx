import React from "react"
import { Route, Routes as DOMRoutes } from "react-router-dom"
import { Racks, TestTubes, AccessDenied, ProtectedRoute } from "@app/containers"
import { urls } from "./urls"

const Routes = () => (
  <DOMRoutes>
    {/** Authenticated Routes */}
    <Route element={<ProtectedRoute />}>
      <Route path={urls.home} element={<Racks />} />
      <Route path={urls.racks.root}>
        <Route path=':rackId' element={<TestTubes />} />
      </Route>
    </Route>
    {/** Public Routes */}
    <Route path={urls.accessDenied} element={<AccessDenied />} />
    <Route path='*' element={<div>404</div>} />
  </DOMRoutes>
)

export default Routes
