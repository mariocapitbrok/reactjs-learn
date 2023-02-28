const createUniqueKey = require('./helpers/createUniqueKey')

function TFoot({ children, jsxRows, ...restProps }) {
  return (
    <tbody key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </tbody>
  )
}

export default TFoot
