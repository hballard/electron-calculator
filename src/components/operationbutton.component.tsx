import React from 'react'
import { makeStyles, ButtonProps } from '@material-ui/core'

import InputButton from './inputbutton.component'

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light
      }
    }
  }
})

export default function OperationButton(props: ButtonProps) {
  const { children, ...newProps } = props
  const classes = useStyles()
  return (
    <InputButton className={classes.root} {...newProps}>
      {children}
    </InputButton>
  )
}
