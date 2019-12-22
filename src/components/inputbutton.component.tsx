import * as React from 'react'
import { Button, makeStyles, ButtonProps } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    borderRadius: '0px',
    minHeight: '71.2px'
  },
  label: {
    fontSize: '30px'
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
