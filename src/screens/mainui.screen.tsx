import * as React from 'react'
import { Grid, Container, makeStyles } from '@material-ui/core'

import NumberButton from '../components/numberbutton.component'
import OperationButton from '../components/operationbutton.component'
import Display from '../components/display.component'

const createStyles = makeStyles({
  container: {
    padding: 0
  },
  zeroButton: {
    width: '225px'
  },
  equalsButton: {
    backgroundColor: 'rgb(204, 204, 204)'
  }
})

export default function MainUI() {
  const classes = createStyles()
  return (
    <Container className={classes.container}>
      <Grid>
        <Grid>
          <Display>Test</Display>
        </Grid>
        <Grid container>
          <Grid item xs>
            <NumberButton>7</NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton>8</NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton>9</NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton>/</OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton>AC</OperationButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <NumberButton>4</NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton>5</NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton>6</NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton>x</OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton>+/-</OperationButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <NumberButton>1</NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton>2</NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton>3</NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton>-</OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton>%</OperationButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item classes={{ root: classes.zeroButton }}>
            <NumberButton>0</NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton>.</OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton>+</OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton className={classes.equalsButton}>
              =
            </OperationButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
