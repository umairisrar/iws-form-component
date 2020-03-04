import React from 'react'
import Field from './../Field/Field'
import Label from './../Label/Label'

import formatPlaceholder from './../utilities/formatPlaceholder'
import handleOnChange from './../utilities/handleOnChange/handleOnChange'

const Checkbox = ({
  className = '',
  onChange,
  id,
  label = true,
  value = false
}) => (
  <Field
    className={[
      'field',
      'field--checkbox',
      label ? 'field--has-label' : '',
      className
    ].filter(str => str).join(' ')}
    data-value={ value }>
    <Label
      id={ id }
      label={ label } />
    <input
      checked={ value }
      id={ id }
      onChange={ handleOnChange({ onChange }) }
      type="checkbox" />
  </Field>
)

Checkbox.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  onChange: React.PropTypes.func,
  value: React.PropTypes.bool
}

Checkbox.defaultProps = {
  className: '',
  label: true,
  type: 'text',
  value: false
}

export default Checkbox
