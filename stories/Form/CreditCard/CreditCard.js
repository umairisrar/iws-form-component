import React from 'react'
import Text from './../Text/Text'

import { optionalRegex, requiredRegex } from './creditcard.regex.js'

const CreditCard = ({ required, ...props }) => (
  <Text
    { ...props }
    type="credit-card"
    required={ required }
    validate={ required ?  requiredRegex : optionalRegex } />
)

CreditCard.propTypes = { required: React.PropTypes.bool }

export default CreditCard
