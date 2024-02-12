import React from "react"
import { Tooltip } from "@mui/material"
import { useTheme } from "styled-components"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { urls } from "@app/routes/urls"
import { Nav, LogoWrapper } from "./Navbar.styles"

const Navbar = () => {
  const theme: any = useTheme()
  return (
    <div>
      <Nav>
        <LogoWrapper>
          <Link to={urls.home}>
            <Icon icon='fluent-emoji:drop-of-blood' fontSize={40} />
          </Link>
        </LogoWrapper>
        <Tooltip title='Racks' placement='right-start'>
          <Link to={urls.home}>
            <Icon icon='mdi:test-tube' fontSize={24} color={theme.palette.primary.main} />
          </Link>
        </Tooltip>
      </Nav>
    </div>
  )
}

export default Navbar
