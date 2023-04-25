// Style your elements here
import Styled from 'styled-components'

export const Button = Styled.button`

color: black;
background-color: ${props => (props.isTrue ? '#ededed' : '#ffffff79')};

opacity: ${props => (props.isTrue ? '1' : '0.5')};

border:0px none transparent;
border-radius: 5px;
padding: 10px;
width: 100px;




`
