import React from 'react'
import Text from './../Text/Text'

import { optionalRegex, requiredRegex } from './phone.regex.js'

const Phone = ({
  mask = "(999) 999-9999",
  placeholder = "(___) ___-____",
  required,
  ...props
}) => (
  <Text
    { ...props }
    mask={ mask }
    placeholder={ placeholder }
    required={ required }
    type="phone"
    validate={ required ?  requiredRegex : optionalRegex } />
)

Phone.propTypes = {
  mask: React.PropTypes.string,
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  required: React.PropTypes.bool
}

export default Phone
