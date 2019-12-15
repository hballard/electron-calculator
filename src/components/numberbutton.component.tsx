import * as React from 'react'
import { makeStyles, ButtonProps } from '@material-ui/core'

import InputButton from './inputbutton.component'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(179, 179, 179)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    }
  }
})

export default function NumberButton(props: ButtonProps) {
  const classes = useStyles()
  return (
    <InputButton className={classes.root} {...props}>
      {props.children}
    </InputButton>
  )
}
