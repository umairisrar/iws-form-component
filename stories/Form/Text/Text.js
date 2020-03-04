import React from 'react'
import Field from './../Field/Field'
import Label from './../Label/Label'
import Input from 'react-input-mask'

import formatPlaceholder from './../utilities/formatPlaceholder'
import handleOnChange from './../utilities/handleOnChange/handleOnChange'

const Text = ({
  alwaysShowMask = false,
  className = '',
  error = false,
  formatChars = {
    "9": "[0-9]",
    "a": "[A-Za-z]",
    "*": "[A-Za-z0-9]"
  },
  onChange,
  onError,
  id,
  label = true,
  mask,
  maskChar = '_',
  placeholder = false,
  required = false,
  type = 'text',
  validate,
  value = '',
  ...props
}) => (
  <Field
    className={[
      'field',
      `field--${ type }`,
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
    <Input
      { ...props }
      alwaysShowMask={ alwaysShowMask }
      id={ id }
      formatChars={ formatChars }
      mask={ mask }
      maskChar={ maskChar }
      onChange={ handleOnChange({ onChange, onError, required, validate }) }
      placeholder={ formatPlaceholder({ id, placeholder }) }
      type="text"
      value={ value } />
  </Field>
)

Text.propTypes = {
  alwaysShowMask: React.PropTypes.bool,
  className: React.PropTypes.string,
  error: React.PropTypes.bool,
  formatChars: React.PropTypes.object,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  mask: React.PropTypes.string,
  maskChar: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onError: React.PropTypes.func,
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  required: React.PropTypes.bool,
  type: React.PropTypes.string,
  validate: React.PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.object
  ]),
  value: React.PropTypes.string
}

Text.defaultProps = {
  alwaysShowMask: false,
  className: '',
  error: false,
  formatChars: {
    "9": "[0-9]",
    "a": "[A-Za-z]",
    "*": "[A-Za-z0-9]"
  },
  label: true,
  maskChar: '_',
  placeholder: false,
  required: false,
  type: 'text',
  value: ''
}

export default Text
