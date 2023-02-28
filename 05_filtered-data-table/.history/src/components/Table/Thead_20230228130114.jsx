import PropTypes from 'prop-types'
const createUniqueKey = require('./helpers/createUniqueKey')

function THead({ jsxHeaderRows, ...restProps }) {
  const { id } = restProps
  return (
    <thead key={id || createUniqueKey()} {...restProps}>
      {jsxHeaderRows}
    </thead>
  )
}

export default THead

/* THead.propTypes = {
  key: PropTypes.string,
  jsxHeaderRows: PropTypes.array,
  ...PropTypes.objectOf(PropTypes.any),
}

THead.defaultProps = {
  className: 'capitbrok',
} */
