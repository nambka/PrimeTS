import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.bodyBkg};
    color: ${({ theme }) => theme.bodyTextColor};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  footer {
    background: ${({ theme }) => theme.footerBkg};
    color: ${({ theme }) => theme.footerTextColor};
  }

  form {
    background-color: ${({ theme }) => theme.formBkg};
    border: ${({ theme }) => theme.formBorder};
    box-shadow: ${({ theme }) => theme.formBoxShadow};
    transition: ${({ theme }) => theme.formTransition};
  }

  form:hover {
    background-color: ${({ theme }) => theme.formBkgHover};
    border: ${({ theme }) => theme.formBorder};
    box-shadow: ${({ theme }) => theme.formBoxShadowHover};
    transition: ${({ theme }) => theme.formTransitionHover};
  }

  form .nambk-header-desc {
    color: ${({ theme }) => theme.formHeaderDescColor};
  }

  input[type=number] {
    color: ${({ theme }) => theme.bodyTextColor};
    background-color: ${({ theme }) => theme.inputBkg};
    border: ${({ theme }) => theme.inputBorder};
  }

  input[type=number]:focus {
    border-color: ${({ theme }) => theme.inputBorderHover};
  }

  #result {
    box-shadow: ${({ theme }) => theme.resultBoxShadow};
  }
`
export default GlobalStyle;