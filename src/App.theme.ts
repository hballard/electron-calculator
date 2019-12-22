import { createMuiTheme } from '@material-ui/core'
import { grey, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[500]
    },
    secondary: orange,
    text: {
      primary: grey[50]
    },
    background: {
      default: grey[600]
    }
  }
})

export default theme
