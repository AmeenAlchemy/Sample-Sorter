import styled from "styled-components"

export const Main = styled.main`
  ${({ theme }) => `
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    background-color: ${theme.palette.grey[100]};

    nav {
      margin-top: ${theme.spacing(1)};
      border-bottom: 0 none;
    }
  `}
`

export const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(4)};
`

export const Content = styled.section`
  max-width: 56rem;
  padding: ${({ theme }) => theme.spacing(5)} ${({ theme }) => theme.spacing(10)};
  border-radius: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0.8rem 4rem rgba(0, 0, 0, 0.04);
`

export const Footer = styled.footer`
  padding-top: ${({ theme }) => theme.spacing(1.5)};
  border-top: 0.1rem solid ${({ theme }) => theme.palette.grey[300]};
  text-align: left;
`
