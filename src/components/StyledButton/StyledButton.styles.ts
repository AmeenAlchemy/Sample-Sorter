import styled, { css } from "styled-components"
import { Button } from "@mui/material"

export const StyledButton = styled(Button)`
  ${({ theme, variant }) => css`
    font-weight: 400;
    font-size: 1.2rem;
    border-color: ${theme.palette.primary.main} !important;
    background-color: ${variant === "outlined" ? theme.palette.common.white : theme.palette.primary.main} !important;
    color: ${variant === "outlined" ? theme.palette.primary.main : theme.palette.common.white} !important;
    cursor: pointer !important;
    width: max-content;
    text-transform: capitalize !important;
    white-space: no-wrap;
  `}
`
