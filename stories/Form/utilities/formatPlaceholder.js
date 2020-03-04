import titleize from './titleize/titleize'

const formatPlaceholder = ({ id, placeholder }) => {
  const formatted = typeof placeholder === 'boolean'
    ? ( id ? titleize(id) : '' )
    : placeholder
  return placeholder ? formatted : undefined
}

export default formatPlaceholder
