import React from 'react'
import Text from './../Text/Text'

import { optionalRegex, requiredRegex } from './number.regex.js'

const Number = ({ required, ...props }) => (
  <Text
    { ...props }
    type="number"
    required={ required }
    validate={ required ?  requiredRegex : optionalRegex } />
)

Number.propTypes = { required: React.PropTypes.bool }

export default Number
