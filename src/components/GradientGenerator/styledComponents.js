// Style your elements here
import Styled from 'styled-components'

export const MainContainer = Styled.div`
margin-top:-24px;
height: 100vh;



background-image: linear-gradient(to ${props =>
  props.formObject.direction}, ${props =>
  props.formObject.firstColor}, ${props => props.formObject.secondColor});



display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

color: white;
font-family: "Roboto";


`
export const ButtonsList = Styled.ul`
list-style-type: none;

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

width: 600px;

`
export const Para = Styled.p`

font-size: 22px;
font-family: "Roboto";




`

export const InputsContainer = Styled.div`

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

width: 300px;

`

export const Input = Styled.input`
border: 0px none transparent;

background-color: transparent;

outline: none;

min-height: 40px;
width: 90px;



`

export const LabelAndInputContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 70px;
`

export const GenerateButton = Styled.button`

color: white;
padding: 15px;
border-radius: 8px;

margin-top: 60px;
background-color: #00c9b7;
border: 0px none transparent;

`
export const Form = Styled.form`

   display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
