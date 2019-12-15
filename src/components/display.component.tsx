import React from 'react'
import { makeStyles, Typography, TypographyProps } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    color: 'white',
    backgroundColor: 'grey',
    padding: '12px'
  }
})

export default function Display(props: TypographyProps) {
  const classes = useStyles()
  return (
    <Typography className={classes.root} variant="h4" align="right" {...props}>
      {props.children}
    </Typography>
  )
}
