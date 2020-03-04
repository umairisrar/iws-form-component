const handleOnChange = ({
  onChange,
  onError,
  required,
  validate
}) => ({ target }) => {
  const value = target.type === 'checkbox'
    ? target.checked
    : target.type === 'file'
      ? ( target.files.length ? target.files[0] : undefined )
      : target.value
  const error = !!validate ? (
    typeof validate === 'function'
      ? validate(value)
      : !validate.test(value)
  ) : ( !!required && !value )
  error && onError && onError({ error, value })
  onChange && onChange({ error, value })
}

export default handleOnChange
