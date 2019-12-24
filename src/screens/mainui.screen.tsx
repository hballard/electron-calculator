import React from 'react'
import { Grid, Container, makeStyles } from '@material-ui/core'

import NumberButton from '../components/numberbutton.component'
import OperationButton from '../components/operationbutton.component'
import Display from '../components/display.component'

import withCalculatorContainer from '../containers/calculator.container'

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

export default withCalculatorContainer(function MainUI(props) {
  const { displayValue, clearButtonLabel, ...container } = props
  const classes = createStyles()
  return (
    <Container className={classes.container}>
      <Grid>
        <Grid>
          <Display>{displayValue}</Display>
        </Grid>
        <Grid container>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                container.onDigitClick('7')
              }}
            >
              7
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                container.onDigitClick('8')
              }}
            >
              8
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                container.onDigitClick('9')
              }}
            >
              9
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                container.onOperatorClick('/')
              }}
            >
              /
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                container.onClearClick()
              }}
            >
              {clearButtonLabel}
            </OperationButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                container.onDigitClick('4')
              }}
            >
              4
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                container.onDigitClick('5')
              }}
            >
              5
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                container.onDigitClick('6')
              }}
            >
              6
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                container.onOperatorClick('*')
              }}
            >
              x
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                container.onChangeSignClick()
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
                container.onDigitClick('1')
              }}
            >
              1
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                container.onDigitClick('2')
              }}
            >
              2
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                container.onDigitClick('3')
              }}
            >
              3
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                container.onOperatorClick('-')
              }}
            >
              -
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                container.onPercentClick()
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
                container.onDigitClick('0')
              }}
            >
              0
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                container.onDecimalClick()
              }}
            >
              .
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                container.onOperatorClick('+')
              }}
            >
              +
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              className={classes.equalsButton}
              onClick={() => {
                container.onEqualsClick()
              }}
            >
              =
            </OperationButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
})
