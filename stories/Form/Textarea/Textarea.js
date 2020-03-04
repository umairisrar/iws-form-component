import React from 'react'
import Field from './../Field/Field'
import Label from './../Label/Label'

import formatPlaceholder from './../utilities/formatPlaceholder'
import handleOnChange from './../utilities/handleOnChange/handleOnChange'

const Textarea = ({
  className = '',
  error = false,
  onChange,
  onError,
  id,
  label = true,
  placeholder = false,
  required,
  validate,
  value = '',
  ...props
}) => (
  <Field
    className={[
      'field',
      `field--textarea`,
      label ? 'field--has-label' : '',
      placeholder ? 'field--has-placeholder' : '',
      validate ? 'field--has-validation' : '',
      error ? 'field--has-error' : '',
      required ? 'field--is-required' : '',
      className
    ].filter(str => str).join(' ')}
    data-value={ value }>
    <Label
      id={ id }
      label={ label } />
    <textarea
      { ...props }
      id={ id }
      onChange={ handleOnChange({ onChange, onError, required, validate }) }
      placeholder={ formatPlaceholder({ id, placeholder }) }
      value={ value } />
  </Field>
)

Textarea.propTypes = {
  className: React.PropTypes.string,
  error: React.PropTypes.bool,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  onChange: React.PropTypes.func,
  onError: React.PropTypes.func,
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  required: React.PropTypes.bool,
  validate: React.PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.object
  ]),
  value: React.PropTypes.string
}

Textarea.defaultProps = {
  className: '',
  error: false,
  label: true,
  placeholder: false,
  value: ''
}

export default Textarea
