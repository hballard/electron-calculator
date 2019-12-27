import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

import MainUI from './screens/mainui.screen'
import theme from './App.theme'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainUI />
    </React.Fragment>
  )
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
