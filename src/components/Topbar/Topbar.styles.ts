import styled, { css } from "styled-components"

export const Container = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 0.1rem solid ${theme.palette.grey[200]};
    padding: ${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(2)} ${theme.spacing(4)};
  `}
`
