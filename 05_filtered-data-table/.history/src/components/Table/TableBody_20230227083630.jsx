function TableBody({ data }) {
  const tableRows = createRows(data)

  return <tbody>{tableRows}</tbody>
}

export default TableBody

function createRows(data) {
  return data.map(row => {
    const cells = createCells(row)
    return <tr key={row.id || createUniqueId()}>{cells}</tr>
  })
}

function createCells(row) {
  return Object.entries(row).map(([key, value]) => (
    <td key={row.id ? `${row.id}-${key}` : createUniqueId()} className={key}>
      {value}
    </td>
  ))
}

function createUniqueId() {
  const randomStr = Math.random().toString(36).slice(2, 11)
  return `${randomStr}`
}