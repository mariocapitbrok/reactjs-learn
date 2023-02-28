const createUniqueKey = require('./helpers/createUniqueKey')

function TBody({ jsxRows, children, ...restProps }) {
  return (
    <tbody key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </tbody>
  )
}

export default TBody
