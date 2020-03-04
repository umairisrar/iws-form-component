import React from 'react'
import Field from './../Field/Field'
import Label from './../Label/Label'

import formatPlaceholder from './../utilities/formatPlaceholder'
import handleOnChange from './../utilities/handleOnChange/handleOnChange'

const Radio = ({
  className = '',
  id,
  label = true,
  onChange,
  options = [],
  required = false,
  value = ''
}) => (
  <Field
    className={[
      'field',
      'field--radio',
      label ? 'field--has-label' : '',
      required ? 'field--is-required' : '',
      className
    ].filter(str => str).join(' ')}
    data-value={ value }>
    <Label
      id={ id }
      label={ label } />
    <fieldset>
      { options.map((option, i) => (
        <Option
          key={ i }
          label={ option.label || option }
          name={ id }
          onChange={ onChange }
          required={ required }
          selected={ value }
          value={ option.value || option } />
      )) }
    </fieldset>
  </Field>
)

Radio.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  onChange: React.PropTypes.func,
  options: React.PropTypes.arrayOf(
    React.PropTypes.oneOfType([
      React.PropTypes.shape({
        label: React.PropTypes.string,
        value: React.PropTypes.string
      }),
      React.PropTypes.string
    ])
  ),
  required: React.PropTypes.bool,
  value: React.PropTypes.string
}

Radio.defaultProps = {
  className: '',
  label: true,
  options: [],
  required: false,
  type: 'text',
  value: ''
}

const Option = ({
  label,
  name,
  onChange,
  required,
  selected,
  value
}) => (
  <div
    className={ `field--radio__option` }
    data-value={ selected === value }>
    <Label
      id={ value }
      label={ label } />
    <input
      checked={ selected === value }
      id={ value }
      name={ name }
      onChange={ handleOnChange({ onChange, required }) }
      type="radio"
      value={ value } />
  </div>
)

Option.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  required: React.PropTypes.bool,
  selected: React.PropTypes.string,
  value: React.PropTypes.string
}

export default Radio
