const createUniqueKey = require('./helpers/createUniqueKey')

function Tr({ id, jsxCells, children, ...restProps }) {
  return (
    <tr {...restProps}>
      {jsxCells}
      {children}
    </tr>
  )
}

export default Tr
