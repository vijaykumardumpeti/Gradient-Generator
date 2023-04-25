import {Component} from 'react'
import {
  MainContainer,
  ButtonsList,
  Para,
  InputsContainer,
  Input,
  LabelAndInputContainer,
  GenerateButton,
  Form,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

console.log(gradientDirectionsList)

const intialState = {
  direction: gradientDirectionsList[0].value,
  firstColor: '#8ae323',
  secondColor: '#014f7b',
}

export default class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',

    formObject: intialState,
  }

  onChangeDirection = value => {
    this.setState({
      direction: value,
    })
  }

  changeFirstValue = event => {
    this.setState({
      firstColor: event.target.value,
    })
  }

  changeSecondValue = event => {
    this.setState({
      secondColor: event.target.value,
    })
  }

  generateFunc = event => {
    event.preventDefault()
    const {direction, firstColor, secondColor} = this.state

    const object = {
      direction,
      firstColor,
      secondColor,
    }
    this.setState({
      formObject: object,
    })
  }

  render() {
    const {direction, firstColor, secondColor, formObject} = this.state

    console.log(direction)
    console.log(firstColor)
    console.log(secondColor)
    return (
      <MainContainer data-testid="gradientGenerator" formObject={formObject}>
        <Form onSubmit={this.generateFunc}>
          <h1>Generate a CSS Color Gradient</h1>
          <Para>Choose Direction</Para>
          <ButtonsList>
            {gradientDirectionsList.map(object => (
              <GradientDirectionItem
                onChangeDirection={this.onChangeDirection}
                direction={direction}
                key={object.directionId}
                object={object}
              />
            ))}
          </ButtonsList>
          <Para>Pick the Colors</Para>
          <InputsContainer>
            <LabelAndInputContainer>
              <Para>{firstColor}</Para>
              <Input
                onChange={this.changeFirstValue}
                value={firstColor}
                type="color"
              />
            </LabelAndInputContainer>
            <LabelAndInputContainer>
              <Para>{secondColor}</Para>
              <Input
                onChange={this.changeSecondValue}
                value={secondColor}
                type="color"
              />
            </LabelAndInputContainer>
          </InputsContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </Form>
      </MainContainer>
    )
  }
}
