import React from 'react'
import PropTypes from 'prop-types'

import { SText } from './style'

const Text = ({ children, isBold, onClick, isCursor, fontSize, color }) => (
  <SText isBold={isBold} onClick={onClick} isCursor={isCursor} fontSize={fontSize} color={color}>{children}</SText>
)

Text.propTypes = {
  children: PropTypes.node,
  isBold: PropTypes.bool,
  onClick: PropTypes.func,
  isCursor: PropTypes.bool,
  fontSize: PropTypes.string,
  color: PropTypes.string
}

Text.defaultProps = {
  children: '',
  isBold: false,
  onClick: null,
  isCursor: false,
  fontSize: '12px',
  color: '#333333'
}

export default Text
