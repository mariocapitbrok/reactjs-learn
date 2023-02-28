const createUniqueKey = require('./helpers/createUniqueKey')

function TFoot({ children, jsxRows, ...restProps }) {
  return (
    <tfoot key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </tfoot>
  )
}

export default TFoot
