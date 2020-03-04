import React from 'react'
import Text from './../Text/Text'

import { optionalRegex, requiredRegex } from './email.regex.js'

const Email = ({ required, ...props }) => (
  <Text
    { ...props }
    type="email"
    required={ required }
    validate={ required ?  requiredRegex : optionalRegex } />
)

Email.propTypes = { required: React.PropTypes.bool }

export default Email
