import styled from 'styled-components'

export const SText = styled.span`
  ${props => props.isBold && 'font-weight: 600;'}
  ${props => props.color && `color: ${props.color};`}
  ${props => props.isCursor && 'cursor: pointer;'}
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`
