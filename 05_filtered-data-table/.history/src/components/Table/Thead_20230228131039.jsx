import PropTypes from 'prop-types'
const createUniqueKey = require('./helpers/createUniqueKey')

function THead({ children, jsxHeaderRows, ...restProps }) {
  const { className } = restProps
  return (
    <thead key={createUniqueKey()} className="" {...restProps}>
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

THead.defaultProps = {
  className: 'capitbrok',
}
