import React from "react"
import type { FallbackProps } from "react-error-boundary"
import type { FCC } from "@app/types/fc"
import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Layout } from "./ErrorFallback.styles"

const ErrorFallback: FCC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate()

  const refresh = () => {
    resetErrorBoundary()
    navigate("/")
  }

  return (
    <Layout role='alert'>
      <section>
        <div>
          <Typography variant='h1' sx={{ mb: 2 }}>
            Oops...
          </Typography>
          <Typography variant='h4' sx={{ mb: 2 }}>
            An unexpected error occured.
          </Typography>
          <Typography variant='body1' sx={{ mb: 7 }}>
            We’re sorry for any inconveinience caused. If you keep experiencing this issue then please let us know.
          </Typography>
          <Button variant='contained' onClick={refresh}>
            Return to the homepage
          </Button>
        </div>
      </section>
      <footer>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}>
          Error message
        </Typography>
        <pre>
          <code>
            {error.name}: {error.message}
          </code>
        </pre>
        {error.stack && (
          <>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}>
              Stack trace
            </Typography>
            <pre>
              <code>{JSON.stringify(error.stack)}</code>
            </pre>
          </>
        )}
      </footer>
    </Layout>
  )
}

export default ErrorFallback
