import * as React from 'react'
import { Button, makeStyles, ButtonProps } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    borderRadius: '0px',
    padding: '6.1px',
    borderColor: 'rgb(128, 128, 128)'
  },
  label: {
    fontSize: '30px',
    color: 'white'
  }
})

export default function InputButton(props: ButtonProps) {
  const classes = useStyles()
  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      disableFocusRipple
      fullWidth
      variant="outlined"
      {...props}
    >
      {props.children}
    </Button>
  )
}
