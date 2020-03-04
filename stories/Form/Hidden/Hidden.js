import React from 'react'

const Hidden = ({
  className = '',
  id,
  value
}) => (
  <input
    className={[
      'field',
      'field--hidden',
      className
    ].filter(str => str).join(' ')}
    id={ id }
    type="hidden"
    value={ value } />
)

Hidden.propTypes = {
  className: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
    React.PropTypes.string
  ]).isRequired
}

Hidden.defaultProps = { className: '' }

export default Hidden
