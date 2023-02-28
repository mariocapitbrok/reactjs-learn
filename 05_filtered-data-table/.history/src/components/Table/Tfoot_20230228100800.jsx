const createUniqueId = require('./createUniqueKey')

function Tfoot({ jsxRows }) {
  return <tfoot key={createUniqueId()}>{jsxRows}</tfoot>
}

export default Tfoot
