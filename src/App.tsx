import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CssBaseline } from '@material-ui/core'

import MainUI from './screens/mainui.screen'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainUI />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
