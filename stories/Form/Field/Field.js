import React from 'react'
import styled from 'styled-components'

const Field = styled.div`
  &.field {
    &--credit-card,
    &--email,
    &--file,
    &--number,
    &--phone,
    &--text,
    &--textarea {

      input,
      textarea { display: block; }

      input,
      textarea {
        border: 1px solid #DDD;
        transition: border-color 300ms ease;

        &:focus { outline: none; }
      }

      &.field--has-error {
        input,
        textarea { border: 1px solid #FF0000; }
      }
    }
  }
`

export default Field
