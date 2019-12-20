import React, { useState } from 'react'
import { Grid, Container, makeStyles } from '@material-ui/core'

import NumberButton from '../components/numberbutton.component'
import OperationButton from '../components/operationbutton.component'
import Display from '../components/display.component'

import CalculatorController from '../controllers/calculator.controller'

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

const controller = new CalculatorController()

export default function MainUI() {
  const classes = createStyles()
  const [displayValue, setDisplay] = useState(0)
  const [clearButtonLabel, setClearButtonLabel] = useState('AC')
  controller.init(setDisplay, setClearButtonLabel)
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
                controller.onDigitClick('7')
              }}
            >
              7
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                controller.onDigitClick('8')
              }}
            >
              8
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                controller.onDigitClick('9')
              }}
            >
              9
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                controller.onOperatorClick('/')
              }}
            >
              /
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                controller.onClearClick()
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
                controller.onDigitClick('4')
              }}
            >
              4
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                controller.onDigitClick('5')
              }}
            >
              5
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                controller.onDigitClick('6')
              }}
            >
              6
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                controller.onOperatorClick('*')
              }}
            >
              x
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                controller.onChangeSignClick()
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
                controller.onDigitClick('1')
              }}
            >
              1
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                controller.onDigitClick('2')
              }}
            >
              2
            </NumberButton>
          </Grid>
          <Grid item xs>
            <NumberButton
              onClick={() => {
                controller.onDigitClick('3')
              }}
            >
              3
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                controller.onOperatorClick('-')
              }}
            >
              -
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                controller.onPercentClick()
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
                controller.onDigitClick('0')
              }}
            >
              0
            </NumberButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                controller.onDecimalClick()
              }}
            >
              .
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              onClick={() => {
                controller.onOperatorClick('+')
              }}
            >
              +
            </OperationButton>
          </Grid>
          <Grid item xs>
            <OperationButton
              className={classes.equalsButton}
              onClick={() => {
                controller.onEqualsClick()
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