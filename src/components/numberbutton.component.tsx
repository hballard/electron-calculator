import * as React from 'react'
import { makeStyles, ButtonProps } from '@material-ui/core'

import InputButton from './inputbutton.component'

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
    }
  }
})

export default function NumberButton(props: ButtonProps) {
  const { children, ...newProps } = props
  const classes = useStyles()
  return (
    <InputButton className={classes.root} {...newProps}>
      {children}
    </InputButton>
  )
}
