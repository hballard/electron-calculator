import React from 'react'
import { Grid, Container, makeStyles } from '@material-ui/core'

import NumberButton from '../components/numberbutton.component'
import OperationButton from '../components/operationbutton.component'
import Display from '../components/display.component'

import useCalculatorState from '../hooks/calculator.hook'

const createStyles = makeStyles(theme => {
  return {
    container: {
      padding: 0
    },
    zeroButton: {
      width: '225px'
    },
    equalsButton: {
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      },
      color: 'rgb(0,0,0)'
    }
  }
})

export default function MainUI() {
  const [state, handler] = useCalculatorState()
  const classes = createStyles()
  return (
    <Container className={classes.container}>
      <Grid>
        <Grid>
          <Display>{state.displayValue}</Display>
        </Grid>
        <Grid container>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('7')
              }}
            >
              7
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('8')
              }}
            >
              8
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('9')
              }}
            >
              9
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                handler.onOperatorClick('/')
              }}
            >
              /
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                handler.onClearClick()
              }}
            >
              {state.clearButtonLabel}
            </OperationButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('4')
              }}
            >
              4
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('5')
              }}
            >
              5
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('6')
              }}
            >
              6
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                handler.onOperatorClick('*')
              }}
            >
              x
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                handler.onChangeSignClick()
              }}
            >
              +/-
            </OperationButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('1')
              }}
            >
              1
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('2')
              }}
            >
              2
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('3')
              }}
            >
              3
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                handler.onOperatorClick('-')
              }}
            >
              -
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                handler.onPercentClick()
              }}
            >
              %
            </OperationButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item classes={{ root: classes.zeroButton }}>
            <NumberButton
              onClick={() => {
                handler.onDigitClick('0')
              }}
            >
              0
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                handler.onDecimalClick()
              }}
            >
              .
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                handler.onOperatorClick('+')
              }}
            >
              +
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              className={classes.equalsButton}
              onClick={() => {
                handler.onEqualsClick()
              }}
            >
              =
            </OperationButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
