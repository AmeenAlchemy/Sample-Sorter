import React from "react"
import { Icon } from "@iconify/react"
import AccessDeniedSvg from "@app/assets/access-denied.svg?url"
import { Typography, Stack } from "@mui/material"

import { Container, Content, Footer, Main } from "./AccessDenied.styles"

const AccessDenied = () => {
  return (
    <Main>
      <Container>
        <Content>
          <img src={AccessDeniedSvg} alt='Access Denied' />
          <Typography variant='h3' sx={{ mt: 2 }}>
            Access Denied
          </Typography>
          <Typography variant='body1' sx={{ mt: 1 }}>
            Your user account does not have the necessary permissions to use this app.
          </Typography>

          <Footer>
            <Stack>
              <Icon icon='bx:info-square' fontSize={24} />
              <Typography variant='body2'>
                Contact a system administrator if you think you should be able to use this app.
              </Typography>
            </Stack>
          </Footer>
        </Content>
      </Container>
    </Main>
  )
}

export default AccessDenied
