// Add support for RTL
import "@testing-library/jest-dom"

// Add support for the Fetch API
import "whatwg-fetch"

// Add support for Mock Service Worker
import AbortController from "abort-controller"
import { fetch, Headers, Request, Response } from "cross-fetch"
import { cleanup } from "@testing-library/react"

global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response
global.AbortController = AbortController as typeof global.AbortController

// Enable Mock Service Worker
import { server } from "./src/mock/api/server"

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" })
})

afterEach(() => {
  server.resetHandlers()
  // Clears any unresolved network requests
  cleanup()
})

afterAll(() => {
  server.close()
})

// Mock unsupported window methods globally
beforeEach(() => {
  window.scrollTo = jest.fn()
})
