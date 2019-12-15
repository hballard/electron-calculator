import * as React from 'react'
import { Button, makeStyles, ButtonProps } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    borderRadius: '0px',
    borderColor: 'rgb(128, 128, 128)',
    minHeight: '71.5px'
  },
  label: {
    fontSize: '30px',
    color: 'white'
  }
})

export default function InputButton(props: ButtonProps) {
  const { children, ...newProps } = props
  const classes = useStyles()
  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      disableFocusRipple
      fullWidth
      variant="outlined"
      {...newProps}
    >
      {children}
    </Button>
  )
}
