import * as React from 'react'
import { makeStyles, ButtonProps } from '@material-ui/core'

import InputButton from './inputbutton.component'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(243, 165, 0)',
    '&:hover': {
      backgroundColor: 'rgb(226, 154, 1, .9)'
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
