const createUniqueKey = require('./helpers/createUniqueKey')

function Tr({ jsxCells, children, ...restProps }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <tr key={createUniqueKey()} className={className}>
      {jsxCells}
    </tr>
  )
}

export default Tr
