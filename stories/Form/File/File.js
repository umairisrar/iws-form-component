import React from 'react'
import Field from './../Field/Field'
import Label from './../Label/Label'

import formatPlaceholder from './../utilities/formatPlaceholder'
import handleOnChange from './../utilities/handleOnChange/handleOnChange'

const checkFileSize = ({ maxSize, size }) => maxSize < ((size / 1000) / 1000)

const checkFileType = ({ accepts, name }) => {
  const test = accepts.length ? `(${ accepts.join('|') })` : '(.)*'
  const regex = new RegExp(`\.${ test }`)
  return !!name && !regex.test(name)
}

const validate = ({ accepts, maxSize }) => ({ name, size }) => {
  const invalidFileSize = checkFileSize({ maxSize, size })
  const invalidFileType = checkFileType({ accepts, name })
  return invalidFileSize || invalidFileType
}

const File = ({
  accepts = ['doc', 'docx', 'gif', 'jpg', 'jpeg', 'pdf', 'png'],
  className = '',
  error = false,
  onChange,
  onError,
  id,
  label = true,
  maxSize = 2,
  placeholder = false,
  required = false,
  value = {},
  ...props
}) => (
  <Field
    className={[
      'field',
      'field--file',
      label ? 'field--has-label' : '',
      placeholder ? 'field--has-placeholder' : '',
      validate ? 'field--has-validation' : '',
      error ? 'field--has-error' : '',
      required ? 'field--is-required' : '',
      className
    ].filter(str => str).join(' ')}
    data-value={ value.name ? value.name : ( !!placeholder ? formatPlaceholder({ id, placeholder }) : '' ) }>
    <Label
      id={ id }
      label={ label } />
    <input
      { ...props }
      id={ id }
      onChange={ handleOnChange({
        onChange,
        onError,
        required,
        validate: validate({ accepts, maxSize })
      }) }
      type="file"
      value={ undefined } />
  </Field>
)


File.propTypes = {
  accepts: React.PropTypes.arrayOf(React.PropTypes.string),
  className: React.PropTypes.string,
  error: React.PropTypes.bool,
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  maxSize: React.PropTypes.number,
  onChange: React.PropTypes.func,
  onError: React.PropTypes.func,
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  required: React.PropTypes.bool,
  value: React.PropTypes.object
}

File.defaultProps = {
  accepts: ['doc', 'docx', 'gif', 'jpg', 'jpeg', 'pdf', 'png'],
  className: '',
  error: false,
  label: true,
  maxSize: 2,
  placeholder: false,
  required: false,
  value: {}
}

export default File
