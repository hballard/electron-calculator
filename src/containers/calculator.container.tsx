import React from 'react'

interface IWrappedComponentProps {
  displayValue: string;
  clearButtonLabel: string;
  setClearButtonLabel: (arg: string) => void;
  setDisplayValue: (arg: string) => void;
  onDigitClick: (digit: string) => void;
  onDecimalClick: () => void;
  onPercentClick: () => void;
  onChangeSignClick: () => void;
  onClearClick: () => void;
  onOperatorClick: (operator: string) => void;
  onEqualsClick: () => void;
}

interface IwithCalculatorContainerState {
  displayValue: string;
  clearButtonLabel: string;
}

export default function withCalculatorContainer(
  WrappedComponent: React.FunctionComponent<IWrappedComponentProps>
) {
  return class Container extends React.Component<
    {},
    IwithCalculatorContainerState
  > {
    currentValue: string | undefined
    currentExpression: string[] = []
    clearFlag = false

    constructor(props: {}) {
      super(props)
      this.state = {
        displayValue: '0',
        clearButtonLabel: 'AC'
      }

      this.onDigitClick = this.onDigitClick.bind(this)
      this.onDecimalClick = this.onDecimalClick.bind(this)
      this.onPercentClick = this.onPercentClick.bind(this)
      this.onChangeSignClick = this.onChangeSignClick.bind(this)
      this.onClearClick = this.onClearClick.bind(this)
      this.onOperatorClick = this.onOperatorClick.bind(this)
      this.onEqualsClick = this.onEqualsClick.bind(this)
    }

    setClearButtonLabel(arg: string) {
      this.setState({ clearButtonLabel: arg })
    }

    setDisplayValue(arg: string) {
      this.setState({ displayValue: arg })
    }

    onDigitClick(digit: string) {
      if (this.currentValue) {
        this.currentValue = this.currentValue + digit
      } else {
        this.currentValue = digit
        this.setClearButtonLabel('C')
      }
      this.setDisplayValue(this.currentValue)
    }

    onDecimalClick() {
      if (this.currentValue) {
        if (!this.currentValue.includes('.')) {
          this.currentValue = this.currentValue + '.'
        }
      } else {
        this.currentValue = '.'
      }
      this.setDisplayValue(this.currentValue)
    }

    onPercentClick() {
      if (this.currentValue) {
        const num = Number(this.currentValue)
        this.currentValue = String(num / 100)
        this.setDisplayValue(this.currentValue)
      }
    }

    onChangeSignClick() {
      if (this.currentValue) {
        const num = Number(this.currentValue)
        this.currentValue = String(-num)
        this.setDisplayValue(this.currentValue)
      }
    }

    onClearClick() {
      if (this.currentValue) {
        this.currentValue = undefined
        this.clearFlag = true
        this.setClearButtonLabel('AC')
      } else if (this.clearFlag) {
        this.currentExpression = []
        this.currentValue = undefined
        this.clearFlag = false
        this.setClearButtonLabel('AC')
      } else {
        this.clearFlag = false
        this.setClearButtonLabel('AC')
      }
      this.setDisplayValue('0')
    }

    onOperatorClick(operator: string) {
      if (
        this.currentValue === undefined &&
        this.currentExpression.length !== 0
      ) {
        this.currentExpression.pop()
        this.currentExpression.push(operator)
      } else if (this.currentValue && this.currentExpression.length === 0) {
        this.currentExpression.push(this.currentValue)
        this.currentExpression.push(operator)
        this.currentValue = undefined
      } else if (this.currentValue && this.currentExpression.length !== 0) {
        this.currentExpression.push(this.currentValue)
        if (
          ['*', '/'].includes(operator) &&
          ['+', '-'].includes(this.currentExpression[-2])
        ) {
        } else {
          this.currentValue = eval(this.currentExpression.join(''))
          this.setDisplayValue(String(this.currentValue))
        }
        this.currentExpression.push(operator)
        this.currentValue = undefined
      }
    }

    onEqualsClick() {
      if (this.currentValue) {
        this.currentExpression.push(this.currentValue)
      } else if (this.currentExpression.length !== 0) {
        this.currentExpression.push(this.currentExpression[0])
      } else {
        return
      }
      this.currentValue = eval(this.currentExpression.join(''))
      this.currentExpression = []
      this.setDisplayValue(String(this.currentValue))
    }

    render() {
      return (
        <WrappedComponent
          displayValue={this.state.displayValue}
          clearButtonLabel={this.state.clearButtonLabel}
          {...this}
        />
      )
    }
  }
}
