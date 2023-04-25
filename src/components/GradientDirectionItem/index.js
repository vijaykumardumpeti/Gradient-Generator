// Write your code here

import {Component} from 'react'

import {Button} from './styledComponents'

export default class GradientDirectionItem extends Component {
  render() {
    const {keyz, object, direction, onChangeDirection} = this.props

    const backgroundColor = direction === object.value ? '#ededed' : '#ffffff79'

    this.buttonClicked = () => {
      onChangeDirection(object.value)
    }

    return (
      <li key={keyz}>
        <Button
          isTrue={direction === object.value}
          type="button"
          onClick={this.buttonClicked}
          backgroundColor={backgroundColor}
        >
          {object.displayText}
        </Button>
      </li>
    )
  }
}
