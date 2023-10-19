import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles>
            <AuthProvider>
                  <Routes/>
            </AuthProvider>
        </GlobalStyles>  
    </ThemeProvider> 
    
  </React.StrictMode>,
)
