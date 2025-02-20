import { createGlobalStyle } from "styled-components"
import { font } from "./typography"

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  padding: 0;
  height: 100%;
}

body {
  font: 400 1rem ${font.base};
  -webkit-font-smoothing: antialiased;
}

ol, ul {
  list-style: none;
}

img {
  display:'block';
  max-width: 100%;
  height: auto;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`
