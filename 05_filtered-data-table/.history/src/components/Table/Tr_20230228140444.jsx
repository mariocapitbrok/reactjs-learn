const createUniqueKey = require('./helpers/createUniqueKey')

function Tr({ jsxCells, children, ...restProps }) {
  return (
    <tr key={createUniqueKey()} {...restProps}>
      {jsxCells}
      {children}
    </tr>
  )
}

export default Tr
