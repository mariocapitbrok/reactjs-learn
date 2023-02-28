import PropTypes from 'prop-types'
const createUniqueKey = require('./helpers/createUniqueKey')

function THead({ children, jsxHeaderRows, ...restProps }) {
  return (
    <thead key={createUniqueKey()} {...restProps}>
      {jsxHeaderRows}
      {children}
    </thead>
  )
}

export default THead

THead.propTypes = {
  jsxHeaderRows: PropTypes.array,
  ...PropTypes.objectOf(PropTypes.any),
}

/* THead.defaultProps = {
  className: 'capitbrok',
} */
