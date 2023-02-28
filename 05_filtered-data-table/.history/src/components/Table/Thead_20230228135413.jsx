const createUniqueKey = require('./helpers/createUniqueKey')

function THead({ children, jsxRows, ...restProps }) {
  return (
    <thead key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </thead>
  )
}
