const createUniqueId = require('./createUniqueKey')

function Cell(key, content, classes) {
  const key = caption ? caption : createUniqueId()

  return (
    <td key={row.id ? `${row.id}-${key}` : createUniqueId()} className={key}>
      {value}
    </td>
  )
}

export default Cell
