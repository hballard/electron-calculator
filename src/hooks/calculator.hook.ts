import { useState } from 'react'

interface IHandler {
  onDigitClick: (digit: string) => void
  onDecimalClick: () => void
  onPercentClick: () => void
  onChangeSignClick: () => void
  onClearClick: () => void
  onOperatorClick: (operator: string) => void
  onEqualsClick: () => void
}

interface IPartialCalculatorState {
  currentValue?: string
  currentExpression?: string[]
  clearFlag?: boolean
  displayValue?: string
  clearButtonLabel?: string
}

interface ICalculatorState extends IPartialCalculatorState {
  currentExpression: string[]
  clearFlag: boolean
  displayValue: string
  clearButtonLabel: string
}

export default function useCalculatorState(): [ICalculatorState, IHandler] {
  const initialState: ICalculatorState = {
    currentValue: undefined,
    currentExpression: [],
    clearFlag: false,
    displayValue: '0',
    clearButtonLabel: 'AC'
  }

  const [state, setState] = useState(initialState)

  function updateState(newState: IPartialCalculatorState) {
    setState((prevState: ICalculatorState) => {
      return { ...prevState, ...newState }
    })
  }

  const handler = {
    onDigitClick(digit: string) {
      if (state.currentValue) {
        updateState({
          currentValue: state.currentValue + digit,
          displayValue: state.currentValue + digit
        })
      } else {
        updateState({
          currentValue: digit,
          displayValue: digit,
          clearButtonLabel: 'C'
        })
      }
    },

    onDecimalClick() {
      if (state.currentValue) {
        if (!state.currentValue.includes('.')) {
          updateState({
            currentValue: state.currentValue + '.',
            displayValue: state.currentValue + '.'
          })
        }
      } else {
        updateState({ currentValue: '.' })
      }
    },

    onPercentClick() {
      if (state.currentValue) {
        const num = Number(state.currentValue)
        updateState({
          currentValue: String(num / 100),
          displayValue: String(num / 100)
        })
      }
    },

    onChangeSignClick() {
      if (state.currentValue) {
        const num = Number(state.currentValue)
        updateState({ currentValue: String(-num), displayValue: String(-num) })
      }
    },

    onClearClick() {
      if (state.currentValue) {
        updateState({
          currentValue: undefined,
          clearFlag: true,
          clearButtonLabel: 'AC'
        })
      } else if (state.clearFlag) {
        updateState({
          currentValue: undefined,
          clearFlag: false,
          currentExpression: [],
          clearButtonLabel: 'AC'
        })
      } else {
        updateState({
          clearFlag: false,
          clearButtonLabel: 'AC'
        })
      }
      updateState({ displayValue: '0' })
    },

    onOperatorClick(operator: string) {
      if (
        state.currentValue === undefined &&
        state.currentExpression.length !== 0
      ) {
        state.currentExpression.pop()
        state.currentExpression.push(operator)
        updateState({ currentExpression: state.currentExpression })
      } else if (state.currentValue && state.currentExpression.length === 0) {
        state.currentExpression.push(state.currentValue)
        state.currentExpression.push(operator)
        updateState({
          currentValue: undefined,
          currentExpression: state.currentExpression
        })
      } else if (state.currentValue && state.currentExpression.length !== 0) {
        state.currentExpression.push(state.currentValue)
        if (
          ['*', '/'].includes(operator) &&
          ['+', '-'].includes(state.currentExpression[-2])
        ) {
        } else {
          state.currentValue = eval(state.currentExpression.join(''))
          updateState({ displayValue: String(state.currentValue) })
        }
        state.currentExpression.push(operator)
        updateState({
          currentValue: undefined,
          currentExpression: state.currentExpression
        })
      }
    },

    onEqualsClick() {
      if (state.currentValue) {
        state.currentExpression.push(state.currentValue)
        updateState({ currentExpression: state.currentExpression })
      } else if (state.currentExpression.length !== 0) {
        state.currentExpression.push(state.currentExpression[0])
        updateState({ currentExpression: state.currentExpression })
      } else {
        return
      }
      state.currentValue = eval(state.currentExpression.join(''))
      updateState({
        currentValue: state.currentValue,
        currentExpression: [],
        displayValue: String(state.currentValue)
      })
    }
  }

  return [state, handler]
}
