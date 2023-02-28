const createUniqueKey = require('./helpers/createUniqueKey')

function THead({ jsxRows, children, ...restProps }) {
  return (
    <thead key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </thead>
  )
}

export default THead
