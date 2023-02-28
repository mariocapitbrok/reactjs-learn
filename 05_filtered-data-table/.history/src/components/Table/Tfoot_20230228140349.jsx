const createUniqueKey = require('./helpers/createUniqueKey')

function TFoot({ jsxRows, children, ...restProps }) {
  return (
    <tfoot key={createUniqueKey()} {...restProps}>
      {jsxRows}
      {children}
    </tfoot>
  )
}

export default TFoot
