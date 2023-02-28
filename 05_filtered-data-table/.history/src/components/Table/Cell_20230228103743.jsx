const createUniqueId = require('./createUniqueKey')

function Cella(key, content, classes) {
  const key = caption ? caption : createUniqueId()

  return (
    <td key={row.id ? `${row.id}-${key}` : createUniqueId()} className={key}>
      {value}
    </td>
  )
}

export default Cella
