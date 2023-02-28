const createUniqueId = require('./createUniqueKey')

function Thead({ rows }) {
  return <thead key={createUniqueId()}>{rows}</thead>
}

export default Thead
