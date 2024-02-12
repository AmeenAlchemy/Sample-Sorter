import React from "react"
import { Typography, Grid, Stack } from "@mui/material"
import { Container } from "./Topbar.styles"

const Topbar = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} alignItems='center'>
          <Stack direction='row' alignItems='center' justifyContent='flex-end'>
            <Typography>Ameen Darwan</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Topbar
