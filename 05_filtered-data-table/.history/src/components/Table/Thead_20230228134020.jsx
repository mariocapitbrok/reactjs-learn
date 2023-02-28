import PropTypes from 'prop-types'
const createUniqueKey = require('./helpers/createUniqueKey')

function THead({ children, ...restProps }) {
  const { jsxRows } = restProps
  return (
    <thead key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </thead>
  )
}

export default THead

THead.propTypes = {
  jsxRows: PropTypes.arrayOf(PropTypes.object),
  ...PropTypes.objectOf(PropTypes.any),
}
