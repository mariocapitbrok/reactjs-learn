const createUniqueId = require('./createUniqueKey')

function Th() {
  const key = createUniqueId()

  return (
    <th key={key} className={key} title={value}>
      {key}
    </th>
  )
}

export default Th
