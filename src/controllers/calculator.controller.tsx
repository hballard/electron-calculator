import React from 'react'

export default class {
  currentValue?: string
  currentExpression: string[] = []
  clearFlag = false
  setDisplayValue?: React.Dispatch<React.SetStateAction<number>>
  setClearButtonLabel?: React.Dispatch<React.SetStateAction<string>>

  init(
    setDisplayValue: React.Dispatch<React.SetStateAction<number>>,
    setClearButtonLabel: React.Dispatch<React.SetStateAction<string>>
  ) {
    this.setDisplayValue = setDisplayValue
    this.setClearButtonLabel = setClearButtonLabel
  }

  onDigitClick(digit: string) {
    if (this.currentValue) {
      this.currentValue = this.currentValue + digit
    } else {
      this.currentValue = digit
      if (this.setClearButtonLabel) {
        this.setClearButtonLabel('C')
      }
    }
    if (this.setDisplayValue) {
      this.setDisplayValue(Number(this.currentValue))
    }
  }

  onDecimalClick() {
    if (this.currentValue) {
      if (this.currentValue.includes('.')) {
        this.currentValue = this.currentValue + '.'
      }
    } else {
      this.currentValue = '.'
    }
    if (this.setDisplayValue) {
      this.setDisplayValue(Number(this.currentValue))
    }
  }

  onPercentClick() {
    if (this.currentValue) {
      const num = Number(this.currentValue)
      this.currentValue = String(num / 100)
    if (this.setDisplayValue) {
      this.setDisplayValue(Number(this.currentValue))
    }
    }
  }

  onChangeSignClick() {
    if (this.currentValue) {
      const num = Number(this.currentValue)
      this.currentValue = String(-num)
    if (this.setDisplayValue) {
      this.setDisplayValue(Number(this.currentValue))
    }
    }
  }

  onClearClick() {
    if (this.currentValue) {
      this.currentValue = undefined
      this.clearFlag = true
      if (this.setClearButtonLabel) {
        this.setClearButtonLabel('AC')
      }
    } else if (this.clearFlag) {
      this.currentExpression = []
      this.currentValue = undefined
      this.clearFlag = false
      if (this.setClearButtonLabel) {
        this.setClearButtonLabel('AC')
      }
    } else {
      this.clearFlag = false
      if (this.setClearButtonLabel) {
        this.setClearButtonLabel('AC')
      }
    }
    if (this.setDisplayValue) {
      this.setDisplayValue(Number(this.currentValue))
    }
  }

  onOperatorClick(operator: string) {
    if (this.currentValue === undefined && this.currentExpression.length !== 0) {
      this.currentExpression.pop()
      this.currentExpression.push(operator)
    } else if (
      this.currentValue &&
      this.currentExpression.length === 0
    ) {
      this.currentExpression.push(this.currentValue)
      this.currentExpression.push(operator)
      this.currentValue = undefined
    } else if (this.currentValue && this.currentExpression.length !== 0) {
      this.currentExpression.push(this.currentValue)
      if (["*", "/"].includes(operator) && ["+", "-"].includes(this.currentExpression[-2])) {
        
      } else {
        this.currentValue = eval(this.currentExpression.join(""))  
        if (this.setDisplayValue) {
          this.setDisplayValue(Number(this.currentValue))
        }
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
    this.currentValue = eval(this.currentExpression.join(""))
    this.currentExpression = []
    if (this.setDisplayValue) {
      this.setDisplayValue(Number(this.currentValue))
    }
  }
}