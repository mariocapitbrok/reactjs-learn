const createUniqueId = require('./createUniqueKey')

function Tfoot() {
  return <tfoot key={createUniqueId()}>{jsxRows}</tfoot>
}

export default Tfoot
