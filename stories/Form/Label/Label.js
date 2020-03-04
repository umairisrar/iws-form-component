import React from 'react'

import formatLabel from './../utilities/formatLabel'
import styled from 'styled-components'

const FieldLabel = styled.label`
  &.label {
    display: block;

    .field--is-required & {
      &::after { content: '*'; }
    }
  }
`

const Label = ({
  id,
  label
}) => !!label && (
  <FieldLabel
    className="label"
    dangerouslySetInnerHTML={ formatLabel({ id, label }) }
    htmlFor={ id } />
)

export default Label
