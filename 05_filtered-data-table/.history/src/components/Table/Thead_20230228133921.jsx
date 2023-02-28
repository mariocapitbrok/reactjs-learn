import PropTypes from 'prop-types'
const createUniqueKey = require('./helpers/createUniqueKey')

function THead({ children, jsxRows, ...restProps }) {
  return (
    <thead key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </thead>
  )
}

export default THead

THead.propTypes = {
  jsxRows: PropTypes.arrayOf(),
  ...PropTypes.objectOf(PropTypes.any),
}
