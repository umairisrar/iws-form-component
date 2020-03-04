import titleize from './titleize/titleize'

const formatLabel = ({ id, label }) => {
  const formatted = typeof label === 'boolean'
    ? ( id ? titleize(id) : '' )
    : label
  return { __html: formatted }
}

export default formatLabel
