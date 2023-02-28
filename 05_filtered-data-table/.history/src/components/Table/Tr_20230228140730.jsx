const createUniqueKey = require('./helpers/createUniqueKey')

function Tr({ id, jsxCells, children, ...restProps }) {
  return (
    <tr key={createUniqueKey()} {...restProps}>
      {jsxCells}
      {children}
    </tr>
  )
}

export default Tr
