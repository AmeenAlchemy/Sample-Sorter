import styled, { css } from "styled-components"

export const ReturnHandling = styled.span`
  ${() => css`
    text-transform: capitalize;
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${theme.palette.grey[50]};
    height: max-content;
  `}
`
