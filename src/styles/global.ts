import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  
  #root {
    display: flex;
    height: 100%;
  }
`

export { GlobalStyles }
