import styled from 'styled-components'
import { Navbar, Form, FormControl } from 'react-bootstrap'

export const SNavbar = styled(Navbar)`
  background-color: #FFE600;
  display: flex;
`

export const SForm = styled(Form)`
  width: 50%;
  display: flex;
  margin: 0 auto;
`

export const SFormControl = styled(FormControl)`
`

export const Img = styled.img`
  ${props => props.marginRight && `margin-right: ${ props.marginRight};`}
  ${props => props.padding && `padding: ${ props.padding};`}
  cursor: pointer;
`
