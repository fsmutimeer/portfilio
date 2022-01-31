import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 
  html,
body {
    font-family: Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: azure;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

  
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
  
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}