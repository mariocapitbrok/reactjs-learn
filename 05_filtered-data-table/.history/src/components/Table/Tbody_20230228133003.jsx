import PropTypes from 'prop-types'
const createUniqueKey = require('./helpers/createUniqueKey')

function TBody({ children, jsxRows, ...restProps }) {
  return (
    <tbody key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </tbody>
  )
}

export default TBody

TBody.propTypes = {
  jsxRows: PropTypes.array,
  ...PropTypes.objectOf(PropTypes.any),
}
