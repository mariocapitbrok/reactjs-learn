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
