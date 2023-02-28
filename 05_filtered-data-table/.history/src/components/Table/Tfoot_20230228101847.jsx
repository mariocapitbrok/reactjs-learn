const createUniqueId = require('./createUniqueKey')

function Tfoot({ jsxRows, classes }) {
  const className = classes ? classes : 'capitbrok'

  return (
    <tfoot key={createUniqueId()} className={className}>
      {jsxRows}
    </tfoot>
  )
}

export default Tfoot
